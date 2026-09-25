import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lireChamps, validerDemande, creerLimiteur, origineAutorisee, adresseClient, composerMessage, LIMITES } from '../src/lib/contact.js';

const valide = { nom: 'Camille', email: 'camille@exemple.fr', activite: 'Fleuriste', projet: 'Une boutique en ligne pour mes bouquets.', piege: '' };

test('une demande complète est acceptée', () => {
  assert.deepEqual(validerDemande(valide), { ok: true, erreurs: {}, robot: false });
});

test('le nom, l’e-mail et le projet sont obligatoires ; l’activité ne l’est pas', () => {
  const r = validerDemande({ nom: '', email: '', activite: '', projet: '', piege: '' });
  assert.equal(r.ok, false);
  assert.deepEqual(Object.keys(r.erreurs).sort(), ['email', 'nom', 'projet']);
});

test('une adresse sans domaine est refusée', () => {
  assert.ok(validerDemande({ ...valide, email: 'camille@exemple' }).erreurs.email);
  assert.ok(validerDemande({ ...valide, email: 'camille exemple.fr' }).erreurs.email);
});

test('un projet trop court ou trop long est refusé', () => {
  assert.ok(validerDemande({ ...valide, projet: 'Un site' }).erreurs.projet);
  assert.ok(validerDemande({ ...valide, projet: 'x'.repeat(LIMITES.projet + 1) }).erreurs.projet);
});

test('les champs au-delà de leur limite sont refusés', () => {
  const r = validerDemande({ ...valide, nom: 'n'.repeat(LIMITES.nom + 1), activite: 'a'.repeat(LIMITES.activite + 1) });
  assert.ok(r.erreurs.nom);
  assert.ok(r.erreurs.activite);
});

test('le champ piège signale un robot sans rendre la demande invalide', () => {
  const r = validerDemande({ ...valide, piege: 'https://spam.example' });
  assert.equal(r.robot, true);
  assert.equal(r.ok, true);
});

test('lireChamps lit un FormData et retire les espaces autour', () => {
  const donnees = new FormData();
  donnees.set('nom', '  Camille ');
  donnees.set('email', 'camille@exemple.fr ');
  donnees.set('projet', ' Un site vitrine pour ma boutique. ');
  assert.deepEqual(lireChamps(donnees), { nom: 'Camille', email: 'camille@exemple.fr', activite: '', projet: 'Un site vitrine pour ma boutique.', piege: '' });
});

test('le limiteur bloque au-delà du maximum, puis rouvre quand la fenêtre est passée', () => {
  let t = 0;
  const autoriser = creerLimiteur({ max: 2, fenetreMs: 1000, maintenant: () => t });
  assert.equal(autoriser('a'), true);
  assert.equal(autoriser('a'), true);
  assert.equal(autoriser('a'), false);
  t = 1001;
  assert.equal(autoriser('a'), true);
});

test('le limiteur compte chaque adresse séparément', () => {
  const autoriser = creerLimiteur({ max: 1, fenetreMs: 1000, maintenant: () => 0 });
  assert.equal(autoriser('a'), true);
  assert.equal(autoriser('b'), true);
  assert.equal(autoriser('a'), false);
});

test('origineAutorisee accepte le site derrière Caddy et refuse un autre site', () => {
  const derriereCaddy = (origin) => new Headers({ origin, host: '127.0.0.1:8081', 'x-forwarded-host': 'lootopia.site' });
  assert.equal(origineAutorisee(derriereCaddy('https://lootopia.site')), true);
  assert.equal(origineAutorisee(derriereCaddy('https://ailleurs.example')), false);
  assert.equal(origineAutorisee(derriereCaddy('pas une url')), false);
  assert.equal(origineAutorisee(new Headers({ host: 'lootopia.site' })), true);
});

test('adresseClient prend la première adresse de X-Forwarded-For', () => {
  assert.equal(adresseClient(new Headers({ 'x-forwarded-for': '203.0.113.7, 10.0.0.2' })), '203.0.113.7');
  assert.equal(adresseClient(new Headers(), '127.0.0.1'), '127.0.0.1');
});

test('le message reçu commence par les coordonnées', () => {
  const { sujet, texte } = composerMessage({ ...valide, activite: '' });
  assert.equal(sujet, 'Nouveau projet de site — Camille');
  assert.match(texte, /^Nom : Camille\nE-mail : camille@exemple\.fr\nActivité : —\n\nUne boutique/);
});
