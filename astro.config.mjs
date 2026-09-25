// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import node from '@astrojs/node';

const google = fontProviders.google();
const latin = ['latin'];

export default defineConfig({
  site: 'https://lootopia.site',

  // Tout est pré-rendu en HTML au build : les pages restent servies même si une route
  // serveur tombe. Seuls les endpoints marqués `prerender = false` (le formulaire, la
  // sonde de santé) passent par le serveur Node.
  output: 'static',
  adapter: node({ mode: 'standalone' }),

  // Astro 7 retire par défaut les espaces entre balises voisines (mode « jsx »). Les pages
  // enchaînent beaucoup de texte et de liens en ligne : on garde le comportement HTML.
  compressHTML: true,

  security: {
    // Derrière Caddy, l'origine calculée par Astro est en http:// alors que le navigateur
    // envoie https:// : la vérification intégrée rejetterait chaque envoi du formulaire.
    // L'endpoint de contact fait sa propre vérification (src/lib/contact.js).
    checkOrigin: false,
  },

  // Polices téléchargées au build et servies par le site lui-même : aucune requête vers
  // Google depuis le navigateur des visiteurs. Chaque page ne déclare que les siennes.
  fonts: [
    { name: 'Fraunces', cssVariable: '--font-fraunces', provider: google, weights: [400, 600, 700], styles: ['normal', 'italic'], subsets: latin, fallbacks: ['Georgia', 'serif'] },
    { name: 'JetBrains Mono', cssVariable: '--font-mono', provider: google, weights: [400, 500, 700], styles: ['normal'], subsets: latin, fallbacks: ['ui-monospace', 'monospace'] },
    { name: 'Cinzel', cssVariable: '--font-cinzel', provider: google, weights: [700], styles: ['normal'], subsets: latin, fallbacks: ['Times New Roman', 'serif'] },
    { name: 'Alegreya Sans', cssVariable: '--font-alegreya', provider: google, weights: [400, 500, 700], styles: ['normal', 'italic'], subsets: latin, fallbacks: ['Trebuchet MS', 'sans-serif'] },
    { name: 'Bangers', cssVariable: '--font-bangers', provider: google, weights: [400], styles: ['normal'], subsets: latin, fallbacks: ['Impact', 'sans-serif'] },
    { name: 'Space Grotesk', cssVariable: '--font-grotesk', provider: google, weights: [500, 700], styles: ['normal'], subsets: latin, fallbacks: ['Segoe UI', 'sans-serif'] },
    { name: 'IBM Plex Sans', cssVariable: '--font-plex', provider: google, weights: [400, 500, 600], styles: ['normal'], subsets: latin, fallbacks: ['Segoe UI', 'sans-serif'] },
    { name: 'Figtree', cssVariable: '--font-figtree', provider: google, weights: [400, 500, 600, 700], styles: ['normal'], subsets: latin, fallbacks: ['Segoe UI', 'sans-serif'] },
    { name: 'Caveat', cssVariable: '--font-caveat', provider: google, weights: [700], styles: ['normal'], subsets: latin, fallbacks: ['cursive'] },
  ],
});
