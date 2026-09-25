# Portfolio — Victor Grabowski

Un feu de camp, trois chemins : **game design**, **développement web**, **création de sites**.
Chaque chemin a son propre univers visuel ; la flamme est la seule couleur que les trois
partagent. En ligne sur [lootopia.site](https://lootopia.site).

Astro 7 : les pages sont pré-rendues en HTML, un petit serveur Node ne sert que le formulaire
de contact et la sonde de santé. Aucune ressource tierce : les polices sont téléchargées au
build et servies par le site.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:4321
npm test           # tests du formulaire (node:test, sans dépendance)
npm run build      # site pré-rendu + serveur dans dist/
npm start          # le serveur de production, en local
```

Les PDF et les cartes d'aperçu passent par Puppeteer, installé à la volée (volontairement
absent de `package.json`) :

```bash
npm install --no-save puppeteer
npm run build && npm run pdf   # public/pdf : CV dev et CV game design, deux pages au plus
npm run og                     # public/og, avec `npm run dev` lancé à côté
```

## Où sont les choses

| Quoi | Où |
|---|---|
| Le feu de camp (accueil) | `src/pages/index.astro` |
| Les trois chemins | `src/pages/jeu.astro`, `dev.astro`, `sites.astro` |
| Les thèmes, la flamme, la transition entre chemins | `src/styles/global.css` |
| Signature, sélecteur de chemin, feu en pixel art, icônes | `src/components/` |
| Contenu du CV et ses deux lectures (dev, jeu) | `src/data/cv.js` → `src/pages/cv/[profil].astro` |
| Formulaire : validation, limite, vérification d'origine, envoi | `src/lib/`, `src/pages/api/contact.js` |
| Cartes d'aperçu LinkedIn | `src/pages/carte-og/[carte].astro` → `public/og` |
| Déploiement, Caddy, Resend, bascule depuis Lootopia | [`docs/deploiement.md`](docs/deploiement.md) |

## À compléter avant la mise en ligne

- **Tarifs** (`src/pages/sites.astro`) : l'accord des deux clients pour afficher leur budget,
  et le prix de départ d'une vitrine simple.
- **Mentions légales** (`src/pages/mentions-legales.astro`) : statut, SIRET, hébergeur.
- **Jeux jouables** : publier les builds des jams sur itch.io, puis ajouter les liens « Jouer ».
- **Traductions** : les versions EN, JA et KO du contenu existent sur `master`
  (`src/i18n/`), à porter dans le nouveau site.

L'ancienne version React/Vite, publiée sur GitHub Pages, reste intacte sur `master`.
