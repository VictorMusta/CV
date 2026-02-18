const fr = {
  /* ── UI ── */
  tagline: "Développeur Back-End",
  trackCareer: "Parcours",
  trackProjects: "Projets",
  viewOnGithub: "Voir sur GitHub",
  addImage: "Ajouter une image dans",
  footer: (year) => `© ${year} Victor Grabowski — Créé avec React & Framer Motion`,

  /* ── Parcours ── */
  betclic: {
    role: "Développeur Back-End",
    description:
      "Conception de micro-services haute performance pour l'une des principales plateformes européennes de paris sportifs en ligne.",
    highlights: [
      "Développement de micro-services de conformité & AML en Go et Java",
      "Conception d'architectures événementielles avec Kafka",
      "Mise en place de pipelines de détection de fraude traitant des millions de transactions quotidiennes",
      "Collaboration inter-équipes sur les intégrations réglementaires multi-juridictions",
    ],
  },
  delfox: {
    role: "Développeur Back-End",
    description:
      "Startup IA utilisant l'apprentissage par renforcement pour créer des systèmes autonomes plus intelligents.",
    highlights: [
      "Construction d'APIs REST & gRPC pour l'inférence IA en temps réel",
      "Gestion de pipelines de données d'entraînement en Python et Go",
      "Déploiement de modèles ML via CI/CD sur AWS ECS",
      "Optimisation des chemins critiques en latence sous 50ms",
    ],
  },
  tild: {
    role: "Développeur Full-Stack",
    description:
      "Agence digitale délivrant des applications web sur mesure pour des clients grands comptes.",
    highlights: [
      "Développement de plateformes CMS personnalisées avec React & Node.js",
      "Intégration d'APIs tierces (paiement, livraison, CRM)",
      "Pilotage des choix d'architecture front-end pour les projets clients",
      "Mentorat de développeurs juniors sur les bonnes pratiques",
    ],
  },
  cosderma: {
    role: "Développeur Full-Stack (Stage)",
    description:
      "Plateforme e-commerce de cosmétiques — première expérience professionnelle full-stack.",
    highlights: [
      "Construction d'un front-end e-commerce complet avec React",
      "Conception d'APIs RESTful avec Node.js & Express",
      "Implémentation de fonctionnalités de recherche et filtrage du catalogue produits",
      "Gestion du déploiement sur infrastructure cloud",
    ],
  },
  education: {
    title: "Formation",
    role: "Epitech · Sup de Vinci",
    description:
      "Double cursus en informatique alliant méthodologie projet et fondations académiques.",
    highlights: [
      "Epitech — Cursus par projets favorisant l'autonomie et le C/C++ bas niveau",
      "Sup de Vinci — Master en Ingénierie Logicielle & Cloud Computing",
      "Projets de fin d'études en systèmes distribués et DevOps",
      "Participation active aux hackathons et compétitions de code",
    ],
  },

  /* ── Projets ── */
  tamagotchi: {
    role: "Jeu Vidéo de Bureau",
    description:
      "Un jeu vidéo de bureau inspiré du Tamagotchi, développé avec ElectronJS. Collectionnez des créatures patates, faites-les combattre en tour par tour, montez-les en niveau et regardez-les rebondir dans un bocal à physique réaliste — le tout en overlay sur votre bureau.",
    highlights: [
      "Système de combat tour par tour avec stats, armes & capacités",
      "Mode « Bocal » sandbox basé sur la physique",
      "Collection de créatures avec niveaux & évolution",
      "Système de sauvegarde persistant multi-mobs",
    ],
  },
  discordkiller: {
    role: "Messagerie P2P",
    description:
      "Une application de messagerie pair-à-pair entièrement décentralisée écrite en Rust — sans serveur, sans intermédiaire.",
    highlights: [
      "Découverte de pairs via mDNS et connexion manuelle",
      "Communication chiffrée de bout en bout",
      "Support de canal audio en temps réel",
      "Client desktop multi-plateforme",
    ],
  },
  aicontentremover: {
    role: "API Extension Navigateur",
    description:
      "Une API communautaire + extension navigateur qui signale les tweets générés par IA via un vote participatif. Rate limiting, vérification par lot et documentation Swagger.",
    highlights: [
      "API REST avec système de vote communautaire",
      "Intégration extension navigateur (Chrome, Firefox)",
      "SQLite en dev / PostgreSQL en prod avec EF Core",
      "Seuil de détection IA basé sur le consensus",
    ],
  },
  loutaupia: {
    role: "Backend Géocaching",
    description:
      "Une API backend .NET pour Loutaupia V2 — une application collaborative de géocaching avec des chasses au trésor sur carte.",
    highlights: [
      "API RESTful en .NET / C#",
      "Mécaniques de jeu basées sur la géolocalisation",
      "Authentification utilisateur & suivi de progression",
      "Conçu pour un frontend mobile-first",
    ],
  },
  imapunsub: {
    role: "Automatisation Email",
    description:
      "Un script Python qui scanne votre boîte mail via IMAP, trouve les liens de désinscription dans les newsletters et les suit automatiquement — réduisant l'encombrement email et l'empreinte carbone.",
    highlights: [
      "Intégration IMAP avec mots de passe d'application Gmail",
      "Parsing HTML avec BeautifulSoup",
      "Suivi automatique des liens via requests",
      "Sensibilisation à l'impact environnemental",
    ],
  },
  bonobot: {
    role: "Bot Discord",
    description:
      "Un bot Discord multi-usage pour le fun et l'utilitaire — construit en Python et géré via Jira pour un développement structuré.",
    highlights: [
      "Architecture de commandes modulaire",
      "Workflow de développement suivi sur Jira",
      "Intégration événementielle Discord.py",
      "Système de plugins extensible",
    ],
  },
  knightjumper: {
    role: "Jeu de Plateforme",
    description:
      "Un jeu de plateforme 2D construit avec le moteur Godot, mettant en scène un chevalier avec des mécaniques de saut et une progression par niveaux.",
    highlights: [
      "Moteur Godot 4 avec GDScript",
      "Level design basé sur des tuiles",
      "Physique & animation du personnage",
      "Arrière-plans en parallaxe défilante",
    ],
  },
};

export default fr;
