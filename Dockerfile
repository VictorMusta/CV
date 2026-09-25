# ── Build ───────────────────────────────────────────────────────────────────
FROM node:24-alpine AS build
WORKDIR /app

COPY package.json package-lock.json .npmrc ./
RUN npm ci

COPY . .
# Les polices sont téléchargées ici, au build (API Fonts d'Astro), puis servies par le
# site lui-même. Les PDF de public/pdf ont été générés par la CI avant la synchronisation.
RUN npm run build && npm prune --omit=dev

# ── Exécution ───────────────────────────────────────────────────────────────
FROM node:24-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321

COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/dist ./dist
COPY --from=build --chown=node:node /app/package.json ./package.json

USER node
EXPOSE 4321

HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://127.0.0.1:4321/api/sante || exit 1

CMD ["node", "dist/server/entry.mjs"]
