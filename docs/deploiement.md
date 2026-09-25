# Déploiement sur le VPS

Même modèle que jvcritiqué : un dossier par projet dans `/opt`, un projet Compose nommé,
un port sur la boucle locale, Caddy devant. Le site répond sur **lootopia.site**.

Le conteneur écoute sur `127.0.0.1:8081`, l'ancien port du client Lootopia : le bloc Caddy
de `lootopia.site` y envoyait déjà ses requêtes, il sert donc ce site sans modification,
HTTPS compris.

## Principes

- **L'automatisation ne touche jamais l'infrastructure partagée.** Le `Caddyfile` se
  modifie à la main ; la pipeline ne fait que synchroniser et redémarrer ce projet.
- **Le nettoyage d'images est borné au projet** par étiquette Compose.
- **Le `.env` vit sur le serveur**, jamais dans le dépôt ni dans la synchronisation.

## Ce que fait la pipeline

`master` → `ci.yml` (tests, build, PDF de deux pages au plus) → **si vert** → `deploy.yml` :

1. Build et impression des deux PDF sur le runner GitHub (Chrome n'a rien à faire sur le VPS).
2. `rsync` vers `/opt/portfolio/`, sans `.git`, `node_modules`, `dist` ni `.env`.
3. `docker compose up -d --build` avec le nom de projet `portfolio`.
4. Vérification que `http://127.0.0.1:8081/api/sante` répond.

Le workflow se lance aussi à la main, sur n'importe quelle branche :
`gh workflow run deploy.yml --repo VictorMusta/CV --ref <branche>`.

## Préparation du serveur — une seule fois

### 1. Le dossier

Le déploiement se fait en root : rsync crée `/opt/portfolio` tout seul. Avec un utilisateur
dédié, il faudrait le créer et le lui donner (`sudo mkdir -p` puis `sudo chown`).

### 2. Le fichier d'environnement

Voir `.env.example`. Toutes les variables sont facultatives : sans elles, le site tourne et
le formulaire propose l'e-mail direct.

```bash
cat > /opt/portfolio/.env <<'ENV'
RESEND_API_KEY=re_xxx
CONTACT_TO=victorgrabowski33@gmail.com
CONTACT_FROM="Portfolio <contact@lootopia.site>"
ENV
chmod 600 /opt/portfolio/.env
```

### 3. Les secrets GitHub du dépôt CV

`SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY`, `SSH_KNOWN_HOSTS`. `SSH_KNOWN_HOSTS` est
l'empreinte de l'hôte, vérifiée une fois à la main : on ne la redécouvre jamais par
`ssh-keyscan` pendant un déploiement.

### 4. Le DNS

`A lootopia.site` → IP du VPS, idem pour `www`. Un enregistrement `AAAA` ne doit exister
que s'il pointe vers l'IPv6 du VPS lui-même ; sinon, les visiteurs en IPv6 arrivent ailleurs.

### 5. Resend, pour le formulaire

1. Ajouter le domaine `lootopia.site` dans Resend et créer les enregistrements DNS demandés (SPF, DKIM).
2. Créer une clé limitée à l'envoi, pour ce domaine.
3. La mettre dans `/opt/portfolio/.env`, puis `docker compose -p portfolio up -d` pour relire l'environnement.

## Bascule depuis Lootopia

Le port 8081 ne peut pas être tenu par deux services : Lootopia s'arrête d'abord, le
portfolio se déploie ensuite. Entre les deux, `lootopia.site` répond une erreur 502
pendant quelques minutes.

1. **Vérifier que Caddy envoie bien `lootopia.site` vers 8081** :
   ```bash
   grep -n "8081" /etc/caddy/Caddyfile
   ```
2. **Sauvegarder la base de Lootopia** :
   ```bash
   mkdir -p /opt/backups
   docker exec lootopia-db pg_dump -U lootopia lootopia | gzip > /opt/backups/lootopia-$(date +%F).sql.gz
   ```
3. **Arrêter Lootopia** — les conteneurs sont supprimés, le volume est gardé :
   ```bash
   cd /opt/lootopia && docker compose down
   ```
   Effet de bord bienvenu : sa base était publiée sur le port 5432 de l'hôte, avec un mot
   de passe écrit dans son `docker-compose.yml`. Elle n'est plus joignable.
4. **Déployer le portfolio** : fusionner dans `master`, ou relancer le workflow à la main.
   Dès que la vérification de santé passe, `lootopia.site` affiche le nouveau site.
5. **Plus tard**, quand la sauvegarde suffit : `docker volume ls | grep lootopia`, puis
   `docker volume rm <nom>` et `rm -rf /opt/lootopia`.

Le déploiement automatique de Lootopia est déjà désactivé sur GitHub : un push sur son
dépôt ne le relancera pas.

## Pour aller plus loin : un bloc Caddy dédié

Le bloc actuel suffit. Un bloc dédié ajoute la compression et des en-têtes de sécurité ; il
remplacerait celui de `lootopia.site` dans le `Caddyfile`, partagé, donc édité à la main :

```
lootopia.site {
    encode zstd gzip
    header {
        Strict-Transport-Security "max-age=31536000"
        X-Content-Type-Options "nosniff"
        Referrer-Policy "strict-origin-when-cross-origin"
        Permissions-Policy "camera=(), microphone=(), geolocation=()"
        -Server
    }
    reverse_proxy 127.0.0.1:8081
}

www.lootopia.site {
    redir https://lootopia.site{uri} permanent
}
```

Valider **avant** de recharger : une erreur de syntaxe ferait tomber tous les sites de la machine.

```bash
caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

Caddy transmet l'hôte d'origine et `X-Forwarded-For` : le formulaire s'en sert pour
vérifier l'origine des envois et limiter les demandes par visiteur.

## L'ancien site GitHub Pages

Le workflow Pages disparaît avec la refonte : `victormusta.github.io/CV/` reste figé sur sa
dernière version. Une fois `lootopia.site` en ligne, désactiver Pages dans les réglages du
dépôt, ou y publier une page qui redirige vers le nouveau site.
