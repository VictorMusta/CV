/**
 * Export PDF au build : les deux lectures du CV (/cv/dev et /cv/jeu).
 *
 * Sert les pages pré-rendues de dist/client, les ouvre dans un Chrome headless et les
 * imprime dans public/pdf (repris par le build suivant, celui du VPS) et dans
 * dist/client/pdf (pour un `npm start` local juste après). Les liens du site pointent
 * vers ces fichiers statiques : pas de window.print(), donc pas d'en-tête ni de pied
 * injectés par le navigateur dans le document téléchargé.
 *
 * Puppeteer n'est volontairement pas dans package.json : la CI l'installe à la volée
 * (`npm install --no-save puppeteer`). Sur un poste dont le registre npm ne fournit pas
 * Chrome, pointer PUPPETEER_EXECUTABLE_PATH vers un Chrome installé.
 */
import http from 'node:http';
import { readFile, mkdir, copyFile } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import puppeteer from 'puppeteer';
import { profils } from '../src/data/cv.js';

/*
 * Un CV qui déborde de deux pages n'est pas lu au-delà : le débordement fait échouer le
 * build au lieu de partir en silence.
 *
 * L'exemption passe par le MESSAGE DE COMMIT, exprès : une variable d'environnement ou un
 * drapeau de workflow ferait taire la vérification pour tous les commits suivants. Un
 * marqueur dans un message excuse exactement ce commit-là.
 */
const MAX_PAGES = 2;
const EXEMPTION = '[pdf-pages-ok]';

const racine = fileURLToPath(new URL('..', import.meta.url));
const client = path.join(racine, 'dist', 'client');
const sorties = [path.join(racine, 'public', 'pdf'), path.join(client, 'pdf')];

if (!existsSync(path.join(client, 'cv', 'dev', 'index.html'))) {
  console.error('dist/client/cv/dev/index.html introuvable : lancer `npm run build` avant.');
  process.exit(1);
}

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf',
};

/* Serveur statique minimal : /cv/dev -> dist/client/cv/dev/index.html. */
const serveur = http.createServer(async (req, res) => {
  const chemin = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  let fichier = path.normalize(path.join(client, chemin));
  if (!fichier.startsWith(path.normalize(client))) return res.writeHead(403).end();
  if (existsSync(fichier) && statSync(fichier).isDirectory()) fichier = path.join(fichier, 'index.html');
  if (!existsSync(fichier)) return res.writeHead(404).end();
  res.writeHead(200, { 'content-type': MIME[path.extname(fichier)] ?? 'application/octet-stream' });
  res.end(await readFile(fichier));
});
await new Promise((ok) => serveur.listen(0, '127.0.0.1', ok));
const { port } = serveur.address();

const navigateur = await puppeteer.launch({
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
  args: ['--no-sandbox', '--font-render-hinting=none'],
});

let echec = false;
try {
  for (const d of sorties) await mkdir(d, { recursive: true });

  for (const [cle, lecture] of Object.entries(profils)) {
    const page = await navigateur.newPage();
    await page.goto(`http://127.0.0.1:${port}/cv/${cle}`, { waitUntil: 'networkidle0', timeout: 60_000 });
    // Les polices doivent être là avant la mise en page, sinon le texte se mesure mal.
    await page.evaluate(() => document.fonts.ready);

    const cible = path.join(sorties[0], lecture.fichier);
    // Le <title> de la page devient le titre du PDF, que les ATS et les lecteurs affichent.
    await page.pdf({ path: cible, format: 'A4', printBackground: true, displayHeaderFooter: false, preferCSSPageSize: true });
    await copyFile(cible, path.join(sorties[1], lecture.fichier));
    await page.close();

    const pdf = await readFile(cible);
    const pages = compterPages(pdf);
    console.log(`${lecture.fichier} : ${(pdf.length / 1024).toFixed(0)} ko, ${pages ?? '?'} page(s)`);
    if (pages != null && pages > MAX_PAGES) {
      if (exemptionAccordee()) {
        console.warn(`ATTENTION : ${lecture.fichier} fait ${pages} pages ; ce commit porte ${EXEMPTION}, on laisse passer.`);
      } else {
        console.error(`${lecture.fichier} devrait tenir sur ${MAX_PAGES} pages, il en fait ${pages}.`);
        console.error(`Si c'est voulu, mettre ${EXEMPTION} dans le message de commit : il n'excuse que ce commit.`);
        echec = true;
      }
    }
  }
} finally {
  await navigateur.close();
  serveur.close();
}
if (echec) process.exit(1);

function exemptionAccordee() {
  try {
    // -1 suffit, et fonctionne sur le clone superficiel laissé par actions/checkout.
    return execFileSync('git', ['log', '-1', '--pretty=%B'], { encoding: 'utf8' }).includes(EXEMPTION);
  } catch {
    return false;
  }
}

/* Chrome écrit un arbre de pages non compressé : le /Count de l'objet /Pages se lit à plat. */
function compterPages(buf) {
  const texte = buf.toString('latin1');
  const comptes = [...texte.matchAll(/\/Type\s*\/Pages[^>]*?\/Count\s+(\d+)/g)].map((m) => Number(m[1]));
  if (comptes.length) return Math.max(...comptes);
  const pages = texte.match(/\/Type\s*\/Page[^s]/g);
  return pages ? pages.length : null;
}
