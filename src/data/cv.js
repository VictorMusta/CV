/*
 * LE CONTENU DU CV, en un seul endroit.
 *
 * Les pages /cv/dev et /cv/jeu — et les deux PDF qu'on en tire — en sont deux lectures :
 * le même parcours, dans un ordre différent selon ce que cherche la personne qui le reçoit.
 * Un recruteur web lit d'abord les expériences ; un studio lit d'abord les jeux.
 *
 * Les formulations viennent de master (src/i18n/fr.js et src/data/timelineData.js), où
 * chacune a été discutée — le profil en particulier. Ne pas les réécrire sans raison.
 */

export const identite = {
  nom: 'Victor Grabowski',
  ville: 'Bordeaux, France',
  email: 'victorgrabowski33@gmail.com',
  telephone: { affiche: '07 67 30 22 93', lien: '+33767302293' },
  github: { affiche: 'github.com/VictorMusta', lien: 'https://github.com/VictorMusta' },
  linkedin: { affiche: 'linkedin.com/in/vgrabowski', lien: 'https://www.linkedin.com/in/vgrabowski/' },
  site: { affiche: 'lootopia.site', lien: 'https://lootopia.site' },
};

/*
 * Le profil ouvre sur un FAIT, le plus spécifique qu'il y ait : un site créé pour
 * convaincre cinq amis d'essayer un jeu, et qui sert encore. Le deuxième paragraphe est
 * de Victor, presque mot pour mot. Le troisième présente le jeu vidéo comme la source
 * d'une exigence, pas comme une confidence.
 */
export const profil = [
  'Pour convaincre cinq amis d’essayer un jeu vidéo, j’ai fini par leur créer un site. Ils s’en servent encore.',
  'Fullstack junior à Bordeaux. Monolithe ou micro-services, JavaScript ou .NET : je choisis selon le projet, pas selon mes préférences.',
  'Le jeu vidéo est ce qui me passionne : il faut y tenir la technique et l’attention du joueur en même temps. J’attends la même chose du web — d’où mon intérêt pour l’expérience utilisateur et l’accessibilité.',
];

export const experiences = [
  {
    id: 'betclic',
    entreprise: 'Betclic Everest Group',
    periode: '2024 – aujourd’hui',
    lieu: 'Bordeaux',
    role: 'Développeur Backend .NET + TypeScript',
    resume: 'Micro-services .NET + TS sur AWS. Développement d’un back-office et de règles anti-fraude et anti-blanchiment d’argent.',
    points: [
      'Développement d’endpoints d’API et de services asynchrones (SNS/SQS) et monitoring',
      'Projet Fraud-PEP : automatisation de la vérification d’identité via Dow Jones',
      'Initiative IA : automatisation de la revue de profil par agents intelligents',
      'Optimisation du back-office Juno .NET pour l’efficacité des agents',
    ],
    stack: ['.NET C#', 'TypeScript', 'DynamoDB', 'MongoDB', 'SQS/SNS', 'Terraform', 'Jenkins'],
  },
  {
    id: 'delfox',
    entreprise: 'Delfox — Predictive Technologies',
    periode: '2022 – 2024',
    lieu: 'Mérignac',
    role: 'Développeur Full-Stack (alternance — React / Python / gRPC)',
    resume: 'Alternance de 2 ans. Développement de Realmind, plateforme de pilotage et visualisation 3D pour agents IA autonomes.',
    points: [
      'Communication temps réel haut flux (gRPC) entre React et backends Python',
      'Visualisation complexe (essaims de drones, véhicules) via Unity, Unreal et WebGL',
      'Conception du design system et des dashboards de monitoring Realmind',
      'Gestion de la dette technique sur un projet POC à forte croissance',
    ],
    stack: ['React', 'Python', 'gRPC', 'Unity', 'Unreal Engine', 'WebGL'],
  },
  {
    id: 'tild',
    entreprise: 'Agence Tild',
    periode: '2021 – 2022',
    lieu: 'Montpellier',
    role: 'Développeur Full-Stack (VueJS / Python)',
    resume: 'Développement du CRM/ERP Alma Mater (VueJS/Python). Réconciliation des pratiques inter-équipes en 100 % remote.',
    points: ['Optimisation du module agenda et documentation API via Swagger'],
    stack: ['VueJS', 'Python', 'Swagger'],
  },
  {
    id: 'cosderma',
    entreprise: 'Laboratoire Cosderma',
    periode: '2020',
    lieu: 'Bordeaux',
    role: 'Développeur (stage / prestation)',
    resume: 'Reverse-engineering SQL et archivage de données critiques (30+ tables). Optimisation de la performance.',
    points: ['Modélisation relationnelle complète et réduction de l’empreinte de la base'],
    stack: ['SQL', 'Merise', 'RGPD'],
  },
];

/* Un prix se lit avant la description : c'est le seul élément de la fiche qu'un tiers a validé. */
const PRIX = 'Prix du meilleur gameplay — Winter Game Jam, La Horde';

export const projets = {
  'taille-and-retry': {
    titre: 'Taille and Retry',
    annee: '2026',
    role: 'Puzzle-platformer 3D — Winter Game Jam',
    prix: PRIX,
    description: 'Un puzzle-platformer où le joueur plie le monde à sa volonté : aplatir le niveau, l’élargir, l’étirer sur les trois axes pour ouvrir un passage. Fait en équipe sous Unity, en 48 h.',
    stack: ['Unity', 'C#', 'Game jam 48 h'],
  },
  bankal: {
    titre: 'Bankal!',
    annee: '2025',
    role: 'Coopération locale à quatre — Winter Game Jam',
    prix: PRIX,
    description: 'Quatre joueurs portent la même table, un joystick chacun sur deux manettes seulement. Quand les directions données se contredisent, la table tremble : le désaccord se voit avant de se comprendre. Fait à sept sous Unity.',
    stack: ['Unity', 'C#', 'Game jam 48 h'],
  },
  eyesofheimdall: {
    titre: 'EyesOfHeimdall',
    annee: '2026',
    role: 'Mod Valheim — accessibilité',
    description: 'Rend visible la direction des sons pour un joueur qui n’entend que d’une oreille : chaque son fait apparaître un arc bref autour du viseur, dans la bonne direction, avec l’icône réelle de la créature. Rien ne s’affiche tant qu’aucun son ne se produit.',
    stack: ['C#', 'BepInEx', 'Harmony'],
  },
  jvcritique: {
    titre: 'jvcritiqué',
    annee: '2026',
    role: 'Fullstack — application de partage d’avis',
    description: 'Un petit groupe d’amis note des jeux vidéo par domaine, et chaque lecteur voit la note recalculée selon ses propres critères. 214 tests, dont 21 contre un vrai PostgreSQL ; contrastes WCAG AA mesurés par script.',
    stack: ['Next.js 16', 'TypeScript', 'Drizzle ORM', 'PostgreSQL', 'Docker'],
  },
  moyenax: {
    titre: 'Moyenax',
    annee: '2026',
    role: 'Fullstack / lead technique — jeu de stratégie web',
    description: 'Un jeu de stratégie au tour par tour (1v1) sur navigateur, inspiré de Dofus : exploration, économie (craft, boutique) et combat tactique PvP, sur un moteur isométrique 3D.',
    stack: ['React', 'Three.js', 'NestJS', 'PostgreSQL', 'Redis', 'SSE'],
  },
  autobattler: {
    titre: 'AutoBattler 2D',
    annee: '2025 – 2026',
    role: 'Prototype — auto-combat',
    description: 'Des guerriers patates, des montées en niveau choisies avec soin et des tournois automatiques contre des adversaires générés procéduralement.',
    stack: ['TypeScript', 'Electron', 'Procédural'],
  },
};

export const competences = {
  dev: [
    { titre: 'Spécialisations', contenu: 'TypeScript, .NET C#, Python (scripting, tooling, gRPC)' },
    { titre: 'Technologies', contenu: 'ReactJS, Next.js, Astro, PostgreSQL, MongoDB, DynamoDB' },
    { titre: 'Outils', contenu: 'AWS (S3, SNS, SQS), Docker, Terraform, Jenkins, Jira, Confluence, GitHub' },
    { titre: 'Architecture & méthodes', contenu: 'Agile, TDD (red-green-refactor au quotidien), spec-driven development, event-driven, micro-services' },
    { titre: 'IA & productivité', contenu: 'Appris à coder avant l’IA ; je l’utilise comme accélérateur (exploration, revue, questionnement) en gardant la maîtrise de chaque ligne poussée.' },
    { titre: 'Langues', contenu: 'Français (natif) · Anglais (lecture technique courante, oral opérationnel en contexte pro)' },
  ],
  jeu: [
    { titre: 'Moteurs & outils', contenu: 'Unity (C#), Godot 4 (GDScript), Three.js / React Three Fiber, Aseprite' },
    { titre: 'Game design', contenu: 'Prototypage en game jam (48 h, en équipe), mécaniques coopératives, systèmes (économie, craft, combat), accessibilité' },
    { titre: 'Programmation', contenu: 'C#, TypeScript, Python ; mods Unity avec BepInEx et Harmony' },
    { titre: 'Web', contenu: 'Fullstack TypeScript et .NET, en poste chez Betclic' },
    { titre: 'Langues', contenu: 'Français (natif) · Anglais (lecture technique courante, oral opérationnel en contexte pro)' },
  ],
};

export const formation = [
  { ecole: 'Sup de Vinci', periode: '2024 – 2026', lieu: 'Bordeaux', diplome: 'Master Ingénierie Logicielle & Cloud' },
  { ecole: 'Epitech Technology', periode: '2022 – 2024', lieu: 'Bordeaux', diplome: 'Expert en Technologies de l’Information (RNCP niveau 7), en alternance chez Delfox' },
  { ecole: 'Keyce Informatique (OpenIt)', periode: '2022 – 2023', lieu: 'Montpellier', diplome: 'Bachelor Développeur Fullstack' },
  { ecole: 'Lycée Gustave Eiffel', periode: '2018 – 2020', lieu: 'Bordeaux', diplome: 'BTS SIO (Services Informatiques aux Organisations)' },
];

/*
 * LES DEUX LECTURES. `projets` fixe la sélection et son ordre ; `ordre`, celui des sections.
 * La sélection du CV dev est celle de master, qui tient sur deux pages.
 */
export const profils = {
  dev: {
    fichier: 'Victor_Grabowski_CV_Dev.pdf',
    titrePdf: 'CV Victor Grabowski — Développeur fullstack TypeScript et .NET',
    accroche: 'Développeur fullstack junior — TypeScript et .NET',
    projets: ['jvcritique', 'bankal', 'taille-and-retry', 'moyenax'],
    ordre: ['experiences', 'projets', 'competences', 'formation'],
  },
  jeu: {
    fichier: 'Victor_Grabowski_CV_Game_Design.pdf',
    titrePdf: 'CV Victor Grabowski — Game design : jams, prototypes, mods',
    accroche: 'Game design — jams, prototypes, mods · développeur fullstack',
    projets: ['taille-and-retry', 'bankal', 'eyesofheimdall', 'moyenax', 'autobattler'],
    ordre: ['projets', 'experiences', 'competences', 'formation'],
  },
};
