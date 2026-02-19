const fr = {
  /* ── UI ── */
  tagline: "Développeur Fullstack .NET + JS",
  trackCareer: "Parcours",
  trackEducation: "Formation",
  trackProjects: "Projets Divers",
  viewOnGithub: "Voir sur GitHub",
  liveDemo: "Démo Live",
  viewBenchmark: "Dashboard Benchmark",
  keyFeatures: "Fonctionnalités Clés",
  addImage: "Ajouter une image à",
  footer: (year) => `© ${year} Victor Grabowski — Construit avec React & Framer Motion`,

  /* ── Parcours ── */
  betclic: {
    role: "Développeur Fullstack .NET + JS",
    description:
      "Arrivé en 2024 au sein de Betclic (850+ collaborateurs), j'ai rejoint la squad SQIPI (Identity & Payment Integrity) pour œuvrer sur Juno, le cœur de la lutte anti-fraude (AML - Anti-Money Laundering). Au sein de l'équipe Expérience, ma mission était de développer de nouvelles règles métier asynchrones et d'enrichir le back-office pour faciliter le travail des agents. En collaboration étroite avec les PO/PM, j'ai contribué à l'optimisation des processus et à la visualisation de données critiques pour le pilotage de la performance.",
    highlights: [
      "Agilité & Architecture Micro-services : Évolution au sein d'une organisation agile d'envergure, favorisant la scalabilité et la qualité logicielle via les micro-services .NET.",
      "Architecture Réactive & Cloud : Développement de règles de fraude asynchrones s'appuyant sur AWS (SNS, SQS) pour analyser les comportements à risque en temps-réel.",
      "Back-Office Juno : Enrichissement de l'interface d'investigation avec de nouveaux endpoints et visualisations de données pour accélérer le workflow des agents.",
      "Projet Fraud-PEP (Publicly Exposed Person) : Intégration des listes Dow Jones pour automatiser la vérification d'identité et protéger l'onboarding dès la création de compte.",
      "Automatisation par IA : Participation à un projet expérimental d'agents IA pour les reviews de profils, basé sur des seuils de scoring (IA Threshold).",
    ],
    cvDescription: "Micro-services .NET & AWS. Optimisation du back-office Juno et des règles anti-fraude AML.",
    cvHighlights: [
      "Développement de règles asynchrones (SNS/SQS) et endpoints de monitoring",
      "Projet Fraud-PEP (Publicly Exposed Person) : Automatisation de la vérification d'identité",
      "Projet IA : Automatisation de reviews de profils via agents intelligents",
    ],
  },
  delfox: {
    role: "Développeur Full-Stack (Alternance - React / Python / gRPC)",
    description: "Startup spécialisée dans l'IA (Apprentissage par renforcement profond - Deep RL). Durant cette alternance de 2 ans, j'ai développé 'Realmind', un POC (Proof of Concept) permettant de piloter des entraînements d'agents autonomes. Mon rôle consistait à créer une interface capable de lancer des scripts d'entraînement complexes, de monitorer les performances et de visualiser les simulations en 3D.",
    highlights: [
      "Développement de POC : Conception intégrale de l'interface de monitoring en ReactJS et du backend en Python.",
      "Visualisation 3D temps-réel : Intégration de moteurs de jeu (Unity, Unreal Engine, WebGL) pour le rendu des simulations d'essaims de drones et véhicules autonomes.",
      "Architecture gRPC (Google Remote Procedure Call) : Mise en œuvre de flux de données haute fréquence entre le frontend et les backends d'IA.",
      "Collaboration inter-équipes : Travail étroit avec les ingénieurs Machine Learning pour interfacer l'interface avec leurs librairies d'entraînement.",
    ],
    cvDescription: "Alternance de 2 ans. Développement de Realmind, plateforme de pilotage et visualisation 3D pour agents IA autonomes.",
    cvHighlights: [
      "Communication temps-réel via gRPC entre React et Python",
      "Visualisation complexe de simulations via Unity & Unreal Engine",
    ],
  },
  tild: {
    role: "Développeur Full-Stack (VueJS / Python)",
    description: "Conception et maintenance d'Alma Mater, une solution CRM/ERP (Customer Relationship Management / Enterprise Resource Planning) monolithique. Dans un contexte 100% télétravail, j'ai assuré la liaison technique entre deux équipes aux pratiques distinctes, nécessitant une forte autonomie et une adaptation rapide aux standards de développement.",
    highlights: [
      "Architecture Monolithique : Maintenance et évolution d'une API Python et d'un frontend VueJS communiquant via HTTP.",
      "Interopérabilité des équipes : Intégration et réconciliation des bonnes pratiques de développement de deux pôles distincts.",
      "Documentation API : Utilisation de Swagger pour assurer la clarté et l'auditabilité des endpoints.",
      "Module Agenda : développement d'un moteur de génération d'emplois du temps dynamique avec gestion des conflits de salles et de formateurs.",
    ],
    cvDescription: "Développement du CRM/ERP Alma Mater (VueJS/Python). Réconciliation des pratiques inter-équipes en 100% remote.",
    cvHighlights: ["Optimisation du module agenda et documentation API via Swagger"],
  },
  cosderma: {
    role: "Développeur (Stage / Prestation)",
    description: "Mission de restructuration de données cliniques. En l'absence de documentation sur une base de données complexe, j'ai réalisé un reverse-engineering complet de 30+ tables (environ 600 propriétés) pour rétablir un modèle relationnel cohérent et implémenter une solution d'archivage performante.",
    highlights: [
      "Reverse-engineering SQL : Analyse approfondie et modélisation (Merise) de schémas non documentés sur papier puis en SQL.",
      "Archivage à haute intégrité : Développement d'un système de transfert de données historiques garantissant le respect des contraintes d'intégrité référentielle.",
      "Optimisation de Production : Réduction massive de la taille de la base de données active, accélérant les temps de réponse du back-office.",
      "Conformité RGPD : Structuration des processus d'archivage pour répondre aux exigences de conservation des données sensibles.",
    ],
    cvDescription: "Reverse-engineering SQL et archivage de données critiques (30+ tables). Optimisation de la performance.",
    cvHighlights: ["Modélisation relationnelle complète et réduction de l'empreinte DB"],
  },
  supdevinci: {
    title: "Sup de Vinci",
    role: "Master Ingénierie Logicielle & Cloud",
    description:
      "Formation axée sur le management de projet technique et l'architecture Cloud. Découverte de nombreuses technos, langages et outils via des workshops intensifs.",
    highlights: [
      "Master Ingénierie Logicielle & Cloud",
      "Management de projet Agile & Pilotage technique",
      "Veille active et découverte de stacks variées",
    ],
  },
  epitech: {
    title: "Epitech Technology",
    role: "Expert en Technologies de l'Information",
    description: "Cycle Expertise (2021-2022). Perfectionnement C# et TypeScript en mode projet.",
    highlights: ["Diplôme RNCP (Répertoire National des Certifications Professionnelles) Niveau 7"],
  },
  keyce: {
    title: "Keyce Informatique (OpenIt)",
    role: "Bachelor Développeur Informatique",
    description: "Formation généraliste à Montpellier axée sur le développement Web et logiciel. Apprentissage des fondamentaux du code et réalisation de projets fullstack en autonomie.",
    highlights: ["Bachelor Développeur Fullstack", "Spécialisation Web & Mobile"],
  },
  btssio: {
    title: "Lycée Gustave Eiffel (Bordeaux)",
    role: "BTS SIO (Services Informatiques aux Organisations)",
    description: "Apprentissage des bases fondamentales de l'informatique : Développement Orienté Objet (OOP), algorithmie et gestion de bases de données. Programme fullstack avec Java, C# et Python sur 2 ans.",
    highlights: ["Bases de l'Algorithmie & POO", "Gestion de Bases de Données SQL", "Développement Java, C# & Python"],
  },
  bacpro: {
    title: "Bac Pro SEN (Systèmes Électroniques Numériques)",
    role: "Bases de l'Électronique & Électricité",
    description: "Première immersion dans les systèmes numériques. Apprentissage de la recherche de pannes, utilisation d'outils de mesure (ampèremètre) et développement d'un raisonnement systémique. Stage en installation de cuisines professionnelles.",
    highlights: ["Maintenance & Recherche de pannes", "Électronique & Électricité", "Approche Systémique"],
  },

  /* ── Technical Skills ── */
  technicalSkills: {
    languages: {
      title: "Spécialisations",
      content: "TypeScript, .NET C#, Python (sans framework), SQL",
    },
    technologies: {
      title: "Technologies",
      content: "ReactJS, .NET, Node.js, MongoDB, DynamoDB, gRPC",
    },
    tools: {
      title: "Outils & Cloud",
      content: "AWS (S3, SNS, SQS), Docker, Terraform, Jenkins, Jira, Confluence, GitHub, CursorAI",
    },
    methods: {
      title: "Architecture & Méthodes",
      content: "Agile, TDD (Test-Driven Development), Spec-driven development, Event-driven, Micro-services, Sécurité & Optimisation",
    },
    ai_productivity: {
      title: "IA & Productivité",
      content: "Catalyseur d'apprentissage & productivité (fondations pré-IA), Code responsable (zéro push non-maîtrisé)",
    },
  },

  /* ── Projets ── */
  tamagotchi: {
    role: "AutoBattler 2D",
    description:
      "Un jeu d'auto-combat délirant construit avec ElectronJS. Créez et collectionnez des guerriers patates, choisissez stratégiquement leurs montées en niveau et lancez-les dans des tournois automatiques contre des adversaires générés procéduralement.",
    highlights: [
      "Système Auto-Battler : Combats gérés par l'IA, focus sur la gestion stratégique des stats.",
      "Customisation & Progression : PC de stockage, traits uniques, équipements et arbres d'améliorations.",
      "Mode Tournoi : Enchaînement de duels pour tester la viabilité des builds de patates.",
      "Humour & Second degré : Un projet fun explorant les mécaniques de RPG avec un ton léger.",
    ],
  },
  aicontentremover: {
    role: "Extension Camouflage & Vibe Coding",
    description:
      "Né d'un ras-le-bol face à la prolifération des contenus générés par IA et des bots sur les réseaux (Twitter/X), AIContentRemover est un projet testant le concept de 'Vibe Coding'. Il permet à la communauté de voter pour masquer les publications suspectes, améliorant ainsi la qualité du feed pour tous.",
    highlights: [
      "Vibe Coding : Projet exploratoire sur le développement ultra-rapide et collaboratif.",
      "Nettoyage du DOM : Suppression directe des éléments HTML des comptes signalés pour couper toute visibilité/reach.",
      "Consensus Social : Système de vote pour valider collectivement la nature IA d'un post.",
      "Motivation Éthique : Protection des artistes originaux face au vol de travail par l'IA générative.",
    ],
  },
  // Loutaupia removed
  imapunsub: {
    role: "Newsletter Killer (Green IT)",
    description:
      "Un outil de désinscription automatique né d'une volonté de réduire la pollution numérique (Green IT). Une boîte mail saturée de newsletters non lues consomme une énergie considérable ; ce script automatise le processus fastidieux de désabonnement en un clic.",
    highlights: [
      "Automatisation IMAP : Scan et parsing ultra-rapide des newsletters via Python.",
      "One-click Unsubscribe : Repérage et suivi automatique des liens de désinscription conformes à la loi.",
      "Écologie Numérique : Réduction drastique de l'empreinte carbone liée au stockage de données e-mail inutiles.",
      "Audit de Sécurité : Analyse des risques liés aux faux liens de désabonnement (phishing/malwares).",
    ],
  },
  // Bonobot removed
  knightjumper: {
    role: "Platformer2D",
    description: "Un jeu de plateforme dynamique créé avec Godot 4. Exploration des mécaniques de saut et de la gestion des sprites 2D.",
    highlights: [
      "Moteur Godot 4 avec GDScript",
      "Level design basé sur des tiles",
      "Physique du personnage & animations",
      "Backgrounds en parallax scrolling",
    ],
  },
  "money-maker": {
    role: "Realtime Earnings",
    description: "Une application cozy conçue pour visualiser ses gains financiers en temps réel tout en restant productif. Basée sur le salaire net et les heures travaillées, elle affiche l'argent s'accumulant dans un bocal interactif lors des sessions de travail.",
    highlights: [
      "Mode Bocal Interactif : Visualisation dynamique de l'argent tombant en temps réel avec moteur physique (secouez le bocal !).",
      "Pomodoro Gourmand : Système de timer basé sur des recettes de pâtisseries (sucrées/salées) pour rythmer le travail.",
      "Dashboard Productivité : Calcul automatique basé sur le check-in matinal et les paramètres de salaire.",
      "Ambiance Chill : Radio intégrée avec plusieurs stations et animations visuelles (pluie/neige) sur le widget en fonction de la météo réelle.",
    ],
  },
  "pachinko": {
    role: "Pachinko (High Risk / High Reward)",
    description: "Initié lors d'un atelier chez Betclic pour tester l'IA (Copilot / Coding Agents) dans un contexte de 'Vibe Coding' en équipe. J'ai ensuite poussé le concept en solo pour créer un jeu d'arcade addictif mêlant chance et stratégie.",
    highlights: [
      "Développement assisté par IA : POC développé à 4 mains en 3 heures, puis itéré de façon agile.",
      "Mécaniques de Casino : Ajout de fonctionnalités 'High Risk / High Reward' et de multiplicateurs de gains.",
      "Génération Procédurale : Niveaux générés aléatoirement avec des malus augmentant les récompenses.",
      "Leaderboard Mondial : Système de score en temps réel hébergé sur Supabase.",
    ],
  },
  "aoc-2024": {
    role: "Advent of Code 2024 (C#)",
    description: "Série de défis algorithmiques quotidiens pour monter en compétence sur la syntaxe C# et les structures de données complexes lors de mon arrivée chez Betclic.",
    highlights: [
      "Résolution de puzzles algorithmiques de complexité croissante.",
      "Pratique intensive du .NET et de l'algorithmie pure.",
      "Apprentissage par la pratique (Learning by doing).",
    ],
  },
};

export default fr;
