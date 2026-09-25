/*
 * Envoi par l'API HTTP de Resend : un fetch, pas de SDK (même approche que Turf-Horses).
 *
 * Sans clé : en développement, la demande s'affiche dans la console ; en production,
 * l'envoi échoue avec EnvoiIndisponible et le formulaire propose l'e-mail direct.
 */

export class EnvoiIndisponible extends Error {}

export async function envoyer({ sujet, texte, repondreA }, env = process.env) {
  if (!env.RESEND_API_KEY) {
    if (env.NODE_ENV !== 'production') {
      console.info(`[contact] (développement : e-mail non envoyé)\n${sujet}\n${texte}`);
      return;
    }
    throw new EnvoiIndisponible('RESEND_API_KEY absente');
  }
  if (!env.CONTACT_TO || !env.CONTACT_FROM) throw new EnvoiIndisponible('CONTACT_TO ou CONTACT_FROM absent');

  const reponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({ from: env.CONTACT_FROM, to: [env.CONTACT_TO], reply_to: repondreA, subject: sujet, text: texte }),
  });
  if (!reponse.ok) throw new Error(`Resend a répondu ${reponse.status} : ${await reponse.text()}`);
}
