const fr = {
  /* ── UI ── */
  tagline: "Développeur Fullstack",
  trackCareer: "Parcours Pro",
  trackProjects: "Projets Divers",
  viewOnGithub: "Voir sur GitHub",
  addImage: "Ajouter une image dans",
  footer: (year) => `© ${year} Victor Grabowski — Construit avec React & Framer Motion`,

  /* ── Parcours ── */
  betclic: {
    role: "Développeur Fullstack (.NET C# / TypeScript)",
    description:
      "Au sein de la squad SQIPI (Identity & Payment Integrity), j'ai contribué à la lutte contre la fraude et le blanchiment d'argent chez l'un des leaders européens des paris sportifs en ligne. J'ai rejoint l'équipe SQEXP pour travailler sur un projet d'analyse de profils utilisateurs par IA — un pari qui s'est révélé stratégique : les revues d'investigation AML autrefois manuelles sont aujourd'hui en grande partie automatisées.",
    highlights: [
      "Développement des alertes AML, création & résolution des investigations, et impacts sur les profils joueurs",
      "Contribution au projet Fraud-PEP : vérification d'identité et détection de conflits d'intérêts pour bloquer les comptes à risque dès leur création",
      "Gestion multi-juridictions : thresholds, traitements et restrictions différenciés par pays / régulateur",
      "Pionnier IA chez Betclic : création de Skills, Agent-instructions et MCPs pour automatiser 30% des PR",
    ],
  },
  delfox: {
    role: "Développeur Full-Stack (React / Python / gRPC)",
    description:
      "Startup aérospatiale & défense développant des agents autonomes par machine learning pour l'armement (missiles, drones, aéronefs). J'ai travaillé sur Realmind, une plateforme permettant aux utilisateurs de créer des scénarios, lancer des apprentissages et monitorer l'entraînement d'agents IA dans des moteurs de simulation variés (Unity, Unreal Engine, moteurs propriétaires).",
    highlights: [
      "Front-end ReactJS + back-end Python sans framework, communication 100% gRPC",
      "Conception de la charte graphique de l'application, très appréciée par les clients lors des démos",
      "Création de scénarios d'entraînement, monitoring temps réel, modification de récompenses et comparaison d'agents",
      "Démonstrations techniques aux clients et participation aux discussions Agile",
    ],
  },
  tild: {
    role: "Développeur Full-Stack (VueJS / Python)",
    description:
      "Agence de prestation de services spécialisée dans le développement sur mesure. J'ai contribué au développement d'Alma Mater, un CRM modulaire destiné aux écoles, conçu pour le Collège de Paris.",
    highlights: [
      "Développement full-stack : front-end VueJS, back-end Python",
      "Implémentation du module agenda / emploi du temps du CRM",
      "Collaboration au sein d'une des deux équipes dédiées au projet Alma Mater",
    ],
  },
  cosderma: {
    role: "Développeur Full-Stack (Stage / Prestation)",
    description:
      "Entreprise spécialisée dans les tests cliniques cosmétiques sur volontaires pour des marques et laboratoires. Première expérience professionnelle en tant que prestataire déployé sur site client — j'ai été missionné pour résoudre un problème critique de base de données surdimensionnée, sans aucune documentation ni modélisation existante.",
    highlights: [
      "Reverse-engineering complet d'une BDD sans clés étrangères ni index — création d'un MDR (Merise) imprimé sur 3 feuilles A2",
      "Développement d'une application d'archivage pour découper et migrer les données tout en préservant l'historique",
      "Implémentation d'un système d'anonymisation RGPD pour les données personnelles des volontaires",
      "Autonomie totale en environnement client, première expérience de la vie en entreprise",
    ],
  },
  supdevinci: {
    title: "Sup de Vinci",
    role: "Master Ingénierie Logicielle & Cloud",
    description:
      "Expert en Ingénierie Logicielle (Titre RNCP Niveau 7). Formation en alternance permettant d'approfondir les problématiques de Cloud, de management technique et d'architecture complexe en environnement professionnel. Mémoire : « L'impact de l'IA générative sur les développeurs Juniors ».",
    highlights: [
      "Master Ingénierie Logicielle & Cloud",
      "Échanges avec des intervenants professionnels de divers secteurs",
      "Mémoire : retour d'expérience et bonnes pratiques face à l'IA générative",
    ],
  },
  epitech: {
    title: "Epitech Technology",
    role: "Expert en Technologies de l'Information",
    description:
      "Formation intensive basée sur la pédagogie par projets. Apprentissage de l'autonomie, de la rigueur et de la résolution de problèmes techniques complexes. Spécialisation progressive vers le C# et le TypeScript via des projets d'envergure annuelle.",
    highlights: [
      "Expert en Technologies de l'Information (Titre RNCP Niveau 7)",
      "Pédagogie par projets : autonomie et travail en équipe",
      "Side-projects personnels portés par la passion et une vision long terme",
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
      "Une application de messagerie décentralisée peer-to-peer écrite en Rust — sans serveurs, sans intermédiaires.",
    highlights: [
      "Découverte de pairs via mDNS et connexion manuelle",
      "Communication chiffrée de bout en bout",
      "Support de canaux audio en temps réel",
      "Client desktop cross-platform",
    ],
  },
  aicontentremover: {
    role: "API + Extension Navigateur",
    description:
      "Une API communautaire + extension navigateur qui signale les tweets générés par IA via un système de vote collaboratif. Rate limiting, vérification par lots et documentation Swagger.",
    highlights: [
      "API REST avec système de votes communautaires",
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
    role: "Automatisation E-mail",
    description:
      "Un script Python qui scanne votre boîte mail via IMAP, trouve les liens de désinscription dans les newsletters et les suit automatiquement — réduisant le désordre e-mail et l'empreinte carbone.",
    highlights: [
      "Intégration IMAP avec mots de passe d'application Gmail",
      "Parsing HTML avec BeautifulSoup",
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
    role: "Jeu de Plateformes",
    description:
      "Un jeu de plateformes 2D développé avec le moteur Godot, mettant en scène un chevalier avec des mécaniques de saut et une progression par niveaux.",
    highlights: [
      "Moteur Godot 4 avec GDScript",
      "Level design basé sur des tiles",
      "Physique du personnage & animations",
      "Backgrounds en parallax scrolling",
    ],
  },
};

export default fr;
