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
    role: "Développeur Full-Stack (React / Python / gRPC - Google Remote Procedure Call)",
    description: "Startup spécialisée dans l'apprentissage par renforcement profond (Deep RL - Deep Reinforcement Learning) pour l'aérospatiale et la défense. J'étais responsable du développement de 'Realmind', la suite logicielle permettant de monitorer et d'interagir avec des agents IA en cours d'entraînement.",
    highlights: [
      "Architecture de communication temps-réel : intégration 100% gRPC pour les échanges bidirectionnels entre le frontend React et les backends d'entraînement Python.",
      "Visualisation complexe : création de dashboards de monitoring pour des simulations massives (essaims de drones, véhicules sous-marins autonomes).",
      "Intégration moteur de jeu : collaboration sur les interfaces entre les agents IA et les environnements de simulation Unity et Unreal Engine.",
      "Design System : conception intégrale de la charte graphique et des composants UI (User Interface) de la plateforme.",
    ],
    cvDescription: "Startup aérospatiale. Développement de Realmind, plateforme de monitoring d'agents IA autonomes.",
    cvHighlights: [
      "Communication 100% gRPC entre React et Python",
      "Conception de la charte graphique et dashboards de monitoring",
    ],
  },
  tild: {
    role: "Développeur Full-Stack (VueJS / Python)",
    description: "Conception et maintenance d'Alma Mater, une solution CRM/ERP (Customer Relationship Management / Enterprise Resource Planning) modulaire destinée aux écoles du groupe Collège de Paris. Le projet impliquait la gestion de flux de données complexes entre étudiants, professeurs et administration.",
    highlights: [
      "Module Agenda : développement d'un moteur de génération d'emplois du temps dynamique avec gestion des conflits de salles et de formateurs.",
      "Backend Data : refactorisation de services Python pour optimiser le traitement des inscriptions et la génération automatisée de documents administratifs.",
      "Interface Utilisateur : modernisation du frontend en VueJS pour améliorer l'expérience utilisateur et la réactivité.",
    ],
    cvDescription: "Développement d'Alma Mater (CRM modulaire) pour le Collège de Paris.",
    cvHighlights: ["Implémentation du module agenda et gestion d'emploi du temps complexe"],
  },
  cosderma: {
    role: "Développeur (Stage / Prestation)",
    description: "Laboratoire de tests cliniques. Ma mission principale était d'assurer la survie technique d'un système de données vieillissant et sa mise en conformité avec les nouvelles régulations européennes.",
    highlights: [
      "Migration de base de données : reverse-engineering architectural et migration d'un système SQL (Structured Query Language) critique de 15 ans sans documentation préalable.",
      "Compliance RGPD (Règlement Général sur la Protection des Données) : mise en œuvre technique de l'anonymisation des données patients et des politiques de rétention automatiques.",
      "Auditabilité : création d'outils internes pour assurer l'archivage sécurisé et l'extraction de rapports pour les audits cliniques.",
    ],
    cvDescription: "Migration d'une base de données critique sans documentation et mise aux normes RGPD.",
    cvHighlights: ["Mise en place d'un système d'archivage et anonymisation RGPD"],
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
      "Un jeu d'auto-combat de bureau inspiré du Tamagotchi, développé avec ElectronJS. Collectionnez des créatures patates, faites-les combattre en tour par tour, montez-les en niveau et regardez-les rebondir dans un bocal à physique réaliste — le tout en overlay sur votre bureau.",
    highlights: [
      "Système de combat tour par tour avec stats, armes & capacités",
      "Mode « Bocal » sandbox basé sur la physique",
      "Collection de créatures avec niveaux & évolution",
      "Système de sauvegarde persistant multi-mobs",
    ],
  },
  aicontentremover: {
    role: "API (Application Programming Interface) de Signalement & Extension Camouflage",
    description:
      "Une API communautaire et une extension de navigateur permettant de signaler et masquer les contenus générés par IA sur les réseaux sociaux. S'appuie sur un système de consensus collaboratif et de vote.",
    highlights: [
      "API REST (Representational State Transfer) avec système de votes communautaires",
      "Intégration extension navigateur (Chrome, Firefox)",
      "SQLite dev / PostgreSQL prod avec EF Core",
      "Seuil de détection IA basé sur le consensus",
    ],
  },
  loutaupia: {
    role: "Backend Géocaching",
    description:
      "Un backend API .NET pour Loutaupia V2 — une application collaborative de géocaching avec des chasses au trésor sur carte.",
    highlights: [
      "API RESTful en .NET / C#",
      "Mécaniques de jeu basées sur la géolocalisation",
      "Authentification utilisateur & suivi de progression",
      "Conçu pour un frontend mobile-first",
    ],
  },
  imapunsub: {
    role: "Newsletter Killer",
    description:
      "Un script Python qui scanne votre boîte mail via IMAP (Internet Message Access Protocol), trouve les liens de désinscription dans les newsletters et les suit automatiquement — réduisant le désordre e-mail et l'empreinte carbone.",
    highlights: [
      "Intégration IMAP avec mots de passe d'application Gmail",
      "Parsing HTML (HyperText Markup Language) avec BeautifulSoup",
      "Suivi automatisé des liens via requests",
      "Sensibilisation à l'impact environnemental",
    ],
  },
  bonobot: {
    role: "Bot Discord",
    description:
      "Un bot Discord multi-usage pour le fun et l'utilitaire — construit en Python et géré via Jira pour un développement structuré.",
    highlights: [
      "Architecture de commandes modulaire",
      "Développement tracké via Jira",
      "Intégration événementielle Discord.py",
      "Système de plugins extensible",
    ],
  },
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
    role: "PomodoroHub",
    description: "Plateforme de gestion de productivité basée sur la méthode Pomodoro, intégrée à un système de visualisation de gains en temps réel.",
  },
  "pachinko": {
    role: "Game Jam / Conférence",
    description: "Jeu développé en groupe lors de la conférence de Tugduall, axé sur l'amusement et les mécaniques de jeu rétro.",
  },
  "aoc-2024": {
    role: "AoC 2024",
    description: "Résolution des énigmes de l'Advent of Code 2024 pour approfondir mes compétences en C# et en algorithmique.",
  },
};

export default fr;
