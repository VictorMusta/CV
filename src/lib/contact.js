/*
 * LE FORMULAIRE DE CONTACT, côté serveur : validation, limitation, vérification d'origine.
 *
 * Des fonctions pures et sans dépendance, écrites en JavaScript plutôt qu'en TypeScript
 * pour que `node --test` les exécute tel quel (tests/contact.test.js), sans étape de build.
 */

export const LIMITES = { nom: 100, email: 200, activite: 150, projet: 5000 };
export const PROJET_MIN = 10;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Lit les champs d'un FormData (ou d'un simple objet) en chaînes nettoyées. */
export function lireChamps(source) {
  const lire = (cle) => {
    const valeur = typeof source.get === 'function' ? source.get(cle) : source[cle];
    return typeof valeur === 'string' ? valeur.trim() : '';
  };
  return {
    nom: lire('nom'),
    email: lire('email'),
    activite: lire('activite'),
    projet: lire('projet'),
    // Champ caché, invisible pour un humain : s'il est rempli, c'est un robot.
    piege: lire('site'),
  };
}

/**
 * Valide une demande. Un robot (champ piège rempli) n'est pas « refusé » : l'appelant lui
 * répond comme à un humain, pour ne rien lui apprendre, mais n'envoie rien.
 */
export function validerDemande(champs) {
  const erreurs = {};
  if (!champs.nom) erreurs.nom = 'Indiquez votre nom.';
  else if (champs.nom.length > LIMITES.nom) erreurs.nom = `Le nom dépasse ${LIMITES.nom} caractères.`;

  if (champs.email.length > LIMITES.email || !EMAIL.test(champs.email)) erreurs.email = 'Indiquez une adresse e-mail valide.';

  if (champs.activite.length > LIMITES.activite) erreurs.activite = `L’activité dépasse ${LIMITES.activite} caractères.`;

  if (champs.projet.length < PROJET_MIN) erreurs.projet = `Décrivez votre projet en quelques mots (${PROJET_MIN} caractères au moins).`;
  else if (champs.projet.length > LIMITES.projet) erreurs.projet = `Le message dépasse ${LIMITES.projet} caractères.`;

  return { ok: Object.keys(erreurs).length === 0, erreurs, robot: champs.piege !== '' };
}

/**
 * Limiteur à fenêtre glissante, en mémoire. Le site tourne dans un seul processus Node :
 * un stockage partagé serait de trop. `maintenant` est injectable pour les tests.
 */
export function creerLimiteur({ max, fenetreMs, maintenant = () => Date.now() }) {
  const passages = new Map();
  return function autoriser(cle) {
    const t = maintenant();
    const recents = (passages.get(cle) ?? []).filter((p) => p > t - fenetreMs);
    if (recents.length >= max) {
      passages.set(cle, recents);
      return false;
    }
    recents.push(t);
    passages.set(cle, recents);
    if (passages.size > 5000) {
      for (const [k, v] of passages) if (!v.some((p) => p > t - fenetreMs)) passages.delete(k);
    }
    return true;
  };
}

/**
 * Un envoi doit venir du site lui-même. Quand le navigateur envoie l'en-tête Origin, son
 * hôte doit être celui de la requête — Host ou X-Forwarded-Host, que Caddy transmet.
 * Sans Origin (vieux navigateurs, curl), on laisse passer : le limiteur prend le relais.
 */
export function origineAutorisee(entetes) {
  const origine = entetes.get('origin');
  if (!origine) return true;
  let hote;
  try {
    hote = new URL(origine).host;
  } catch {
    return false;
  }
  return [entetes.get('x-forwarded-host'), entetes.get('host')].filter(Boolean).includes(hote);
}

/** L'adresse du visiteur : Caddy la place en tête de X-Forwarded-For. */
export function adresseClient(entetes, repli = 'inconnue') {
  return entetes.get('x-forwarded-for')?.split(',')[0].trim() || repli;
}

/** Le message reçu par Victor : les coordonnées d'abord, le projet ensuite. */
export function composerMessage(champs) {
  return {
    sujet: `Nouveau projet de site — ${champs.nom}`,
    texte: [`Nom : ${champs.nom}`, `E-mail : ${champs.email}`, `Activité : ${champs.activite || '—'}`, '', champs.projet].join('\n'),
  };
}
