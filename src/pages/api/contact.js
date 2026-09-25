import { lireChamps, validerDemande, creerLimiteur, origineAutorisee, adresseClient, composerMessage } from '../../lib/contact.js';
import { envoyer, EnvoiIndisponible } from '../../lib/mailer.js';

export const prerender = false;

// Cinq demandes par heure et par adresse : largement assez pour un humain.
const autoriser = creerLimiteur({ max: 5, fenetreMs: 60 * 60 * 1000 });

const REPLI = 'Écrivez-moi directement : victorgrabowski33@gmail.com';

/*
 * Deux clients : le script de la page (Accept: application/json) reçoit du JSON ; un
 * navigateur sans JavaScript reçoit une redirection vers /merci ou /oups.
 */
export async function POST({ request, clientAddress, redirect }) {
  const enJson = (request.headers.get('accept') ?? '').includes('application/json');
  const repondre = (statut, corps, page) =>
    enJson
      ? new Response(JSON.stringify(corps), { status: statut, headers: { 'content-type': 'application/json; charset=utf-8' } })
      : redirect(page, 303);

  if (!origineAutorisee(request.headers)) return repondre(403, { ok: false, message: 'Requête refusée.' }, '/oups');

  let champs;
  try {
    champs = lireChamps(await request.formData());
  } catch {
    return repondre(400, { ok: false, message: `Formulaire illisible. ${REPLI}` }, '/oups');
  }

  const { ok, erreurs, robot } = validerDemande(champs);
  if (robot) return repondre(200, { ok: true }, '/merci');
  if (!ok) return repondre(400, { ok: false, message: Object.values(erreurs).join(' '), erreurs }, '/oups');

  if (!autoriser(adresseClient(request.headers, clientAddress))) {
    return repondre(429, { ok: false, message: `Trop de demandes d’un coup. ${REPLI}` }, '/oups');
  }

  try {
    await envoyer({ ...composerMessage(champs), repondreA: champs.email });
  } catch (erreur) {
    console.error('[contact] envoi impossible :', erreur instanceof Error ? erreur.message : erreur);
    const message = erreur instanceof EnvoiIndisponible ? `Le formulaire n’est pas encore branché. ${REPLI}` : `L’envoi n’a pas abouti. ${REPLI}`;
    return repondre(503, { ok: false, message }, '/oups');
  }

  return repondre(200, { ok: true }, '/merci');
}
