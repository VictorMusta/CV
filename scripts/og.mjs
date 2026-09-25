/**
 * Capture les cartes d'aperçu (src/pages/carte-og) en PNG 1200 × 630 dans public/og.
 * À relancer quand une carte change, serveur de dev démarré :
 *   npm run dev   puis, ailleurs :   npm run og
 * Puppeteer s'installe à la volée : npm install --no-save puppeteer
 */
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const base = process.argv[2] ?? 'http://localhost:4321';
const dossier = fileURLToPath(new URL('../public/og/', import.meta.url));
await mkdir(dossier, { recursive: true });

const navigateur = await puppeteer.launch({ args: ['--no-sandbox'] });
try {
  const page = await navigateur.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  // Le feu de camp s'immobilise sur sa première image : une capture nette, sans entre-deux.
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  for (const carte of ['accueil', 'jeu', 'dev', 'sites']) {
    await page.goto(`${base}/carte-og/${carte}`, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts.ready);
    // La barre d'outils du serveur de dev ne doit pas finir sur la carte.
    await page.evaluate(() => document.querySelector('astro-dev-toolbar')?.remove());
    const element = await page.$('.carte');
    await element.screenshot({ path: `${dossier}${carte}.png` });
    console.log(`public/og/${carte}.png`);
  }
} finally {
  await navigateur.close();
}
