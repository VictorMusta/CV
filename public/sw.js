/*
 * INTERRUPTEUR DU SERVICE WORKER DE LOOTOPIA.
 *
 * Lootopia était une PWA (vite-plugin-pwa) : son service worker, enregistré sur /sw.js,
 * reste installé chez ceux qui l'ont visitée et ressert l'ancienne application depuis son
 * cache. Supprimer le fichier ne suffit pas : une mise à jour qui échoue laisse l'ancien
 * service worker en place.
 *
 * Ce fichier le remplace à la prochaine vérification du navigateur : il vide les caches,
 * se désinscrit, puis recharge les onglets ouverts, qui obtiennent enfin ce site-ci.
 * Il ne sert qu'à ça ; le site n'enregistre lui-même aucun service worker.
 */
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (evenement) => {
  evenement.waitUntil(
    (async () => {
      const cles = await caches.keys();
      await Promise.all(cles.map((cle) => caches.delete(cle)));
      await self.registration.unregister();
      const onglets = await self.clients.matchAll({ type: 'window' });
      for (const onglet of onglets) onglet.navigate(onglet.url);
    })(),
  );
});
