// Sonde de santé : interrogée par le healthcheck Docker et par la fin du déploiement.
export const prerender = false;

export function GET() {
  return new Response('ok', { headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' } });
}
