const fr = {
  /* ── UI ── */
  /*
   * Accroche RÉÉCRITE le 18 août 2026 : « Développeur Fullstack TypeScript · Micro-services
   * .NET » était une liste de mots-clés, pas une phrase. Elle disait ce qu'il a touché, jamais
   * qui il est — et sur un CV les mots-clés se lisent déjà dans les compétences.
   */
  tagline: "Développeur fullstack junior — TypeScript, .NET, et beaucoup de jeux vidéo",

  /*
   * Présentation, en trois temps courts : d'où il part, d'où lui vient l'envie, ce qui
   * l'occupe maintenant.
   *
   * « Junior » est ÉCRIT, et c'est un choix. Le cacher se voit toujours à l'entretien, et
   * l'assumer permet de parler de ce qu'on a déjà pratiqué sans avoir l'air de le surjouer.
   *
   * Un tableau et non une chaîne unique : trois paragraphes courts se lisent, un pavé de six
   * lignes se saute.
   */
  /*
   * PRÉSENTATION — une ACCROCHE, pas un résumé de poste.
   *
   * La première version décrivait correctement le profil et se lisait comme toutes les autres :
   * « développeur fullstack junior, j'ai travaillé en… ». Victor voulait quelque chose qui
   * interpelle sans être bizarre.
   *
   * D'où l'ouverture par un FAIT, et le plus spécifique qu'il possède : un site écrit pour
   * convaincre cinq amis, qui tourne encore. C'est la seule phrase de cette page que personne
   * d'autre ne pourrait écrire — et elle prouve en deux lignes ce qu'un paragraphe de qualités
   * ne fait que promettre : il finit ce qu'il commence, et pour de vrais utilisateurs.
   *
   * Une seule formule à la fin, pas trois. Empiler les aphorismes est exactement ce qui rend
   * un profil « bizarre » : on cesse de croire celui qui parle.
   */
  /*
   * PRÉSENTATION — une accroche, pas un résumé de poste.
   *
   * Elle ouvre sur le fait le plus spécifique qu'il possède : un site créé pour convaincre
   * cinq amis d'essayer un jeu, et qui tourne encore. C'est la seule phrase de cette page que
   * personne d'autre ne pourrait écrire, et elle démontre en deux lignes ce qu'un paragraphe
   * de qualités ne fait que promettre.
   *
   * LE DEUXIÈME PARAGRAPHE EST DE VICTOR, presque mot pour mot. Ma version disait la même
   * chose en plus long et en moins net : sur un principe de conception, sa formulation gagne.
   *
   * LE TROISIÈME A ÉTÉ REFAIT. Il portait « une fonctionnalité que personne ne trouve n'existe
   * pas » — une formule de moi, que Victor ne reconnaissait pas comme sienne, et « les jeux
   * vidéo m'ont amené au code », qui appuyait trop sur le goût personnel. Le jeu vidéo y est
   * désormais comme TERRAIN de travail, pas comme passion déclarée : sur un CV, c'est ce qui
   * en fait un argument plutôt qu'une confidence.
   */
  /*
   * PRÉSENTATION — une accroche, pas un résumé de poste.
   *
   * PREMIÈRE PHRASE : « pour convaincre… j'ai fini par leur créer un site ». La version
   * précédente disait « j'ai créé un site parce que je n'arrivais pas à convaincre », et on ne
   * comprenait pas que le site SERVE à convaincre — l'échec y était la cause, pas l'objet.
   * « J'ai fini par » raconte l'escalade en trois mots : j'ai essayé autrement, puis j'ai
   * construit.
   *
   * On n'écrit PAS « ça a marché ». Qu'ils se servent du site est vérifiable ; qu'ils aient
   * effectivement joué au jeu ne l'est pas, et une affirmation qu'on ne peut pas défendre en
   * entretien n'a rien à faire ici.
   *
   * DEUXIÈME PARAGRAPHE : de Victor, presque mot pour mot. Sur un principe de conception, sa
   * formulation gagne sur la mienne.
   *
   * TROISIÈME : la passion doit SERVIR le poste et non le concurrencer. Une accroche qui
   * centre le jeu vidéo fait craindre un départ ; la même passion présentée comme la SOURCE
   * d'un niveau d'exigence devient un argument pour embaucher. L'expérience utilisateur et
   * l'accessibilité cessent d'être des cases cochées : elles deviennent la CONSÉQUENCE de
   * cette exigence, ce que « j'attends la même chose du web » dit explicitement.
   *
   * La passion est au PRÉSENT et assumée — « est ce qui me passionne ». Une version antérieure
   * la mettait au passé (« m'a appris »), ce qui la faisait passer pour un souvenir de
   * formation. Et « le domaine le plus complet » est l'argument de Victor, pas le mien : la
   * technique, le ressenti et l'attention tenus en même temps, peu de disciplines l'exigent.
   */
  profil: [
    "Pour convaincre cinq amis d'essayer un jeu vidéo, j'ai fini par leur créer un site. Ils s'en servent encore.",
    "Développeur fullstack junior, à Bordeaux. Monolithe ou micro-services, JavaScript ou .NET : la meilleure stack technologique est celle qui est la mieux adaptée au projet. Je m'adapte à ses besoins, pas à mes préférences.",
    "Le développement de jeux vidéo est ce qui me passionne : c'est le domaine le plus complet qui existe, il faut y tenir la technique, le ressenti et l'attention du joueur en même temps. J'attends la même chose du web — et c'est de là que vient mon intérêt pour l'expérience utilisateur et l'accessibilité.",
  ],
  trackCareer: "Parcours",
  trackEducation: "Formation",
  trackProjects: "Projets Divers",
  viewOnGithub: "Voir sur GitHub",
  liveDemo: "Démo Live",
  viewBenchmark: "Dashboard Benchmark",
  keyFeatures: "Fonctionnalités Clés",
  addImage: "Ajouter une image à",
  footer: (year) => `© ${year} Victor Grabowski — Construit avec React & Framer Motion`,
  common: {
    present: "Présent",
    location: "Lieu",
    viewMore: "Voir plus sur",
    exportPdf: "Exporter en PDF",
    github: "GitHub",
    privateRepo: "Repo privé",
    cities: {
      bordeaux: "Bordeaux",
      merignac: "Mérignac",
      montpellier: "Montpellier",
      lormont: "Lormont",
    }
  },
  cv: {
    professionalExperience: "Expériences Professionnelles",
    sideProjects: "Projets Personnels",
    technicalSkills: "Compétences Techniques",
    education: "Formation",
    contact: {
      location: "Bordeaux, France",
    }
  },

  /* ── Parcours ── */
  betclic: {
    role: "Développeur Backend .NET + TypeScript",
    description:
      "Arrivé en 2024 au sein de Betclic (850+ collaborateurs), j'ai rejoint la squad SQIPI (Identity & Payment Integrity) pour œuvrer sur Juno, le cœur de la lutte anti-fraude (AML - Anti-Money Laundering). Au sein de l'équipe Expérience, ma mission était de développer de nouvelles règles métier asynchrones et d'enrichir le back-office pour faciliter le travail des agents. En collaboration étroite avec les PO/PM, j'ai contribué à l'optimisation des processus et à la visualisation de données critiques pour le pilotage de la performance.",
    highlights: [
      "Agilité & Architecture Micro-services : Évolution au sein d'une organisation agile d'envergure, favorisant la scalabilité et la qualité logicielle via les micro-services .NET.",
      "Architecture Réactive & Cloud : Développement de règles de fraude asynchrones s'appuyant sur AWS (SNS, SQS) pour analyser les comportements à risque en temps-réel.",
      "Back-Office Juno : Enrichissement de l'interface d'investigation avec de nouveaux endpoints et visualisations de données pour accélérer le workflow des agents.",
      "Projet Fraud-PEP (Publicly Exposed Person) : Intégration des listes Dow Jones pour automatiser la vérification d'identité et protéger l'onboarding dès la création de compte.",
      "Automatisation par IA : Participation à un projet expérimental d'agents IA pour les reviews de profils, basé sur des seuils de scoring (IA Threshold).",
    ],
    cvDescription: "Micro-services .NET + TS sur AWS. Développement d'un Back-office et de règles anti-fraude et blanchissement d'argent.",
    cvHighlights: [
      "Développement d'endpoints d'API et de services asynchrones (SNS/SQS) et monitoring",
      "Projet Fraud-PEP : Automatisation de la vérification d'identité via Dow Jones",
      "Initiative IA : Automatisation de la revue de profil par agents intelligents",
      "Optimisation du back-office Juno .NET pour l'efficacité des agents",
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
      "Communication temps-réel haut flux (gRPC) entre React et backends Python",
      "Visualisation complexe (essaims de drones, véhicules) via Unity, Unreal & WebGL",
      "Conception du Design System et des dashboards de monitoring Realmind",
      "Gestion de la dette technique sur un projet POC à forte croissance",
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
    description: "Cycle Expertise (2022-2024), en alternance chez Delfox. Perfectionnement C# et TypeScript en mode projet.",
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
    role: "Bac Professionnel SEN (Système Électronique Numérique)",
    description: "Formation polyvalente sur les systèmes numériques, l'électronique de puissance et la maintenance industrielle.",
  },

  /* ── Technical Skills ── */
  technicalSkills: {
    languages: {
      title: "Spécialisations",
      content: "TypeScript, .NET C#, Python (scripting, tooling, gRPC)",
    },
    technologies: {
      title: "Technologies",
      content: "ReactJS, MongoDB, DynamoDB",
    },
    tools: {
      title: "Outils",
      content: "AWS (S3, SNS, SQS), Docker, Terraform, Jenkins, Jira, Confluence, GitHub, CursorAI",
    },
    methods: {
      title: "Architecture & Méthodes",
      content: "Agile, TDD (red-green-refactor au quotidien), Spec-driven development (spec validée avant l'implémentation), Event-driven, Micro-services",
    },
    ai_productivity: {
      title: "IA & Productivité",
      content: "Appris à coder avant l'IA ; je l'utilise comme accélérateur (exploration, revue, questionnement) en gardant la maîtrise de chaque ligne poussée.",
    },
    spokenLanguages: {
      title: "Langues",
      content: "Français (natif) · Anglais (lecture technique courante, oral opérationnel en contexte pro)",
    },
  },

  /* ── Projets ── */
  moyenax: {
    role: "Fullstack Developer / Lead Technique",
    description: "Un jeu de stratégie au tour par tour (1v1) sur navigateur, inspiré de l'univers de Dofus. Le projet repose sur un moteur isométrique 3D performant et une architecture temps réel robuste.",
    highlights: [
      "Système de seed dynamique : chaque partie est unique et oriente les choix stratégiques (ressources, terrain).",
      "Boucle de gameplay complète : Exploration (farming), Économie (crafting/shop), et Combat tactique PvP.",
      "Architecture monolithe modulaire via un Monorepo NX avec NestJS et React.",
      "Communication temps réel optimisée via Server-Sent Events (SSE) et état de combat synchronisé dans Redis.",
      "Système de Forge & Crafting : Interface soignée pour la gestion des matériaux (Fer, Cuir, Cristaux) et la création d'équipements stratégiques.",
      "Interface 3D isométrique immersive avec React Three Fiber."
    ]
  },
  jvcritique: {
    role: "Fullstack — Application de partage d'avis",
    description: "Un site où un petit groupe d'amis note des jeux vidéo par domaine (gameplay, histoire, ambiance…), et où chaque lecteur voit la note recalculée SELON SES PROPRES CRITÈRES. Né d'un constat : une note globale ne dit rien à quelqu'un qui ne cherche pas la même chose dans un jeu. Conçu en méthodologie BMad (brief, PRD, architecture, ADR).",
    highlights: [
      "Moteur de notation unique, partagé : la note de l'auteur et la note relue du lecteur sont la même arithmétique sur des pondérations différentes — jamais deux implémentations.",
      "Notes recalculées à la lecture et jamais stockées : changer ses critères met à jour tout l'historique, sans migration de données.",
      "Grammaire de spoilers propre, révélable au clic, avec trois audiences distinctes — dont une qui ne reçoit AUCUN octet du passage masqué, pour les aperçus Open Graph.",
      "Règles métier portées par la base plutôt que par le code : contraintes CHECK sur l'exclusivité des états, unicité insensible à la casse, refus des auto-notifications.",
      "Contrastes WCAG AA mesurés par script sur dix variantes de couleurs, et textures de fond générées en CSS sans un octet réseau.",
      "Notifications in-app et système, aperçus de partage, mentions de jeux, brouillon local résistant aux coupures.",
      "Déploiement continu sur VPS mutualisé — Docker Compose, migrations avant démarrage, cloisonnement strict des voisins.",
      "214 tests, dont 21 contre un vrai PostgreSQL pour éprouver les contraintes que le code seul ne peut pas garantir.",
    ]
  },
  retour: {
    role: "SaaS B2B — Signalement citoyen",
    description: "Plateforme SaaS B2B permettant aux petites mairies françaises de recevoir et traiter les signalements citoyens (voirie, propreté, incidents). Projet mené en méthodologie BMad (brief, PRD, architecture).",
    highlights: [
      "Stack moderne : Next.js 15 (App Router, Turbopack), Prisma, PostgreSQL.",
      "Authentification multi-rôles via NextAuth 5 (agents mairie / citoyens).",
      "Signalements géolocalisés avec extraction des métadonnées EXIF des photos.",
      "Notifications e-mail transactionnelles via Resend.",
      "Qualité : TDD, tests Vitest + Playwright e2e, Biome, hooks Git.",
    ],
  },
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
