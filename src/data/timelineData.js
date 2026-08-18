import {
  Gamepad2,
  Brain,
  Globe,
  Pill,
  GraduationCap,
  Cpu,
  MessageSquare,
  ShieldAlert,
  MailMinus,
  Bot,
  Sword,
  Map,
  Coins,
  Layout,
  Zap,
  Smartphone,
  Dice6,
  Code2,
  Megaphone,
  Star,
  Scaling,
  Utensils,
} from "lucide-react";

/* ──────────────────────────────────────────────
   Career track — professional experiences
   ────────────────────────────────────────────── */

const careerData = [
  {
    id: "betclic",
    type: "career",
    year: "2024 – Present",
    sortYear: 2024.9,
    title: "Betclic Everest Group",
    location: "Bordeaux",
    icon: ShieldAlert, // Assuming ShieldAlert is the intended icon from the snippet, as ShieldCheck is not imported.
    color: "#E63946",
    stack: [".NET C#", "TypeScript", "DynamoDB", "MongoDB", "SQS/SNS", "Terraform", "Jenkins"],
    image: "/images/betclic_banner.png",
    imageAlt: "Betclic website screenshot",
  },
  {
    id: "delfox",
    type: "career",
    year: "2022 – 2024",
    sortYear: 2024,
    title: "Delfox - Predictive Technologies",
    location: "Mérignac",
    icon: Brain, // Keeping original icon as Rocket is not imported and not explicitly stated to be changed.
    color: "#457B9D",
    stack: ["React", "Python", "gRPC", "Unity", "Unreal Engine", "WebGL"],
    image: "/images/delfox_banner.png",
    imageAlt: "Delfox Realmind platform screenshot",
    imagePosition: "top",
  },
  {
    id: "tild",
    type: "career",
    year: "2021 – 2022",
    sortYear: 2022,
    title: "Agence Tild",
    location: "Montpellier",
    icon: Globe, 
    color: "#2A9D8F",
    stack: ["VueJS", "Python", "Swagger", "Monolith"],
    image: "/images/tild_banner.png",
    imageAlt: "Agence Tild website screenshot",
  },
  {
    id: "cosderma",
    type: "career",
    year: "2020",
    sortYear: 2020,
    title: "Laboratoire Cosderma",
    location: "Bordeaux",
    icon: Pill,
    color: "#E9C46A",
    stack: ["SQL", "Merise", "RGPD", "Archivage"],
    image: "/images/cosderma_banner.png",
    imageAlt: "Cosderma portal screenshot",
  },
];

const educationData = [
  {
    id: "supdevinci",
    type: "education",
    year: "2024 – 2026",
    sortYear: 2024.1,
    title: "Sup de Vinci",
    location: "Bordeaux",
    icon: GraduationCap,
    color: "#A8DADC",
    stack: ["Master Ingénierie Logicielle", "Cloud", "DevOps"],
    image: "/images/supdevinci_banner.png",
    imageAlt: "Sup de Vinci - École des Ingénieurs Informatique",
  },
  {
    id: "epitech",
    type: "education",
    year: "2022 – 2024",
    sortYear: 2023,
    title: "Epitech Technology",
    location: "Bordeaux",
    icon: GraduationCap,
    color: "#5FBADC",
    stack: ["C#", "TypeScript", "Python", "Linux", "Docker", "Architecture"],
    image: "/images/epitech_banner.png",
    imageAlt: "Epitech Bordeaux - Innovation Hub",
  },
  {
    id: "keyce",
    type: "education",
    year: "2022 – 2023",
    sortYear: 2022.05,
    title: "Keyce Informatique (OpenIt)",
    location: "Montpellier",
    icon: GraduationCap,
    color: "#4A90E2",
    stack: ["Bachelor", "Fullstack", "PHP", "JavaScript", "SQL"],
    image: "/images/keyce_banner.png",
    imageAlt: "Keyce Academy - Bachelor Informatique",
  },
  {
    id: "btssio",
    type: "education",
    year: "2018 – 2020",
    sortYear: 2018,
    title: "Lycée Gustave Eiffel",
    location: "Bordeaux",
    icon: GraduationCap,
    color: "#264653",
    stack: ["BTS SIO", "OOP", "Java", "C#", "Python", "SQL"],
    image: "/images/eiffel_banner.png",
    imageAlt: "Lycée Gustave Eiffel - BTS SIO",
  },
  {
    id: "bacpro",
    type: "education",
    year: "2015 – 2018",
    sortYear: 2015,
    title: "Lycée Jacques Brel",
    location: "Lormont",
    icon: GraduationCap,
    color: "#E76F51",
    stack: ["Électronique", "Électricité", "Maintenance", "Systémique"],
    image: "/images/brel_banner.png",
    imageAlt: "Lycée Jacques Brel - Bac Pro SEN",
  },
];

/* ──────────────────────────────────────────────
   Projects track — side projects from GitHub
   ────────────────────────────────────────────── */

const projectData = [
  {
    id: "jvcritique",
    type: "project",
    year: "2026",
    sortYear: 2026.3,
    title: "jvcritiqué",
    icon: Star,
    color: "#C98A3C",
    github: "https://github.com/VictorMusta/jvcritique",
    demo: "https://jvcritique.duckdns.org/",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL",
      "Auth.js",
      "Tailwind v4",
      "Docker",
    ],
    screenshots: [
      "/images/projects/jvcritique/jeu.webp",
      "/images/projects/jvcritique/fil.webp",
      "/images/projects/jvcritique/avis.webp",
      "/images/projects/jvcritique/profil.webp",
    ],
    image: "/images/projects/jvcritique/jeu.webp",
    imageAlt: "jvcritiqué - avis de jeux notés selon les critères du lecteur",
  },
  {
    /*
     * DATE ÉTABLIE PAR LE DIPLÔME, pas par mémoire : le certificat « Meilleur Visuel » de la
     * même édition, remis à une autre équipe, porte « 14-15-16 mars 2025 » et exactement la
     * même maquette que celui de Bankal!. Les 48 h de jam tiennent donc dans un week-end de
     * trois jours — ce qui réconcilie les « 3 jours » de Victor et les « 48h » de l'école.
     */
    id: "bankal",
    type: "project",
    year: "2025",
    sortYear: 2025.2,
    title: "Bankal!",
    icon: Utensils,
    color: "#F2C230",
    stack: ["Unity", "C#", "Game Jam 48 h"],
    screenshots: [
      "/images/projects/bankal/titre.webp",
      "/images/projects/bankal/fin.webp",
      "/images/projects/bankal/concept-cuisine.webp",
      "/images/projects/bankal/concept-restaurant.webp",
      "/images/projects/winter-game-jam/diplome-bankal.webp",
      "/images/projects/winter-game-jam/trophee.webp",
    ],
    image: "/images/projects/bankal/titre.webp",
    imageAlt: "Bankal! - quatre joueurs portent une même table jusqu'à ses clients",
  },
  {
    /*
     * MARS 2026, d'après le nom du fichier de la photo du trophée (IMG_20260321) : la remise
     * a eu lieu le 21 mars 2026, au même moment de l'année que l'édition précédente
     * (14-15-16 mars 2025, celle de Bankal!). La médaille de cette dernière est gravée
     * « GAMEJAM 2025 », ce qui distingue sans ambiguïté les deux récompenses.
     */
    id: "taille-and-retry",
    type: "project",
    year: "2026",
    sortYear: 2026.22,
    title: "Taille and Retry",
    icon: Scaling,
    color: "#7BA05B",
    stack: ["Unity", "C#", "Game Jam 48 h"],
    screenshots: [
      "/images/projects/taille-and-retry/niveau.webp",
      "/images/projects/taille-and-retry/titre.webp",
      "/images/projects/taille-and-retry/cinematique.webp",
      "/images/projects/winter-game-jam/trophee.webp",
    ],
    image: "/images/projects/taille-and-retry/niveau.webp",
    imageAlt: "Taille and Retry - puzzle-platformer où le niveau se déforme sur trois axes",
  },
  {
    id: "retour",
    type: "project",
    year: "2026",
    sortYear: 2026.2,
    title: "Retour",
    icon: Megaphone,
    color: "#3B82F6",
    private: true, // private repo — shown with a "privé" tag, no dead link
    stack: ["Next.js 15", "Prisma", "NextAuth", "PostgreSQL", "Zod", "Tailwind"],
    imageAlt: "Retour - SaaS de signalement citoyen pour mairies",
  },
  {
    id: "moyenax",
    type: "project",
    year: "2026",
    sortYear: 2026.1,
    title: "Moyenax (Dofus-Like)",
    icon: Gamepad2,
    color: "#EB4B4B",
    github: "https://github.com/Dofus-Like/Moyenax",
    screenshots: [
      "/images/projects/moyenax/combat.png",
      "/images/projects/moyenax/forge.png",
    ],
    stack: ["React", "Three.js", "NestJS", "PostgreSQL", "Redis", "SSE", "NX"],
    image: "/images/projects/moyenax/combat.png",
    imageAlt: "Moyenax - Tour-based strategy game",
  },
  {
    id: "tamagotchi",
    type: "project",
    year: "2025 – 2026",
    sortYear: 2025.9,
    title: "AutoBattler 2D",
    icon: Cpu,
    color: "#F4A261",
    github: "https://github.com/VictorMusta/Tamagotchi-in-ElectronJS",
    benchmark: "https://victormusta.github.io/Tamagotchi-in-ElectronJS/",
    screenshots: [
      "/images/projects/autobattler/selection.png",
      "/images/projects/autobattler/battle.png",
      "/images/projects/autobattler/onsen.png",
      "/images/projects/autobattler/tournament.png",
      "/images/projects/autobattler/cityscape.png",
    ],
    stack: ["TypeScript", "Electron", "Procedural", "Auto-battler"],
    image: "/images/projects/autobattler/selection.png",
    imageAlt: "AutoBattler 2D - Tournament Overview",
  },
  {
    id: "aicontentremover",
    type: "project",
    year: "2025",
    sortYear: 2025.5,
    title: "AIContentRemover",
    icon: ShieldAlert,
    color: "#EF4444",
    github: "https://github.com/VictorMusta/AIContentRemover",
    stack: ["C#", ".NET", "Entity Framework", "PostgreSQL", "Swagger"],
    image: "https://opengraph.githubassets.com/1/VictorMusta/AIContentRemover",
    imageAlt: "AIContentRemover GitHub preview",
  },
// Loutaupia V2 removed per user request
  {
    id: "imapunsub",
    type: "project",
    year: "2024",
    sortYear: 2024.2,
    title: "Newsletter Killer",
    icon: MailMinus,
    color: "#06B6D4",
    github: "https://github.com/VictorMusta/ImapUnsubscriber",
    screenshots: [
      "https://opengraph.githubassets.com/1/VictorMusta/ImapUnsubscriber",
    ],
    stack: ["Python", "IMAP", "BeautifulSoup", "requests", "Green IT"],
    image: "https://opengraph.githubassets.com/1/VictorMusta/ImapUnsubscriber",
    imageAlt: "Newsletter Killer - Green IT Project",
  },
// Bot Discord removed per user request
  {
    id: "knightjumper",
    type: "project",
    year: "2024",
    sortYear: 2024.1,
    title: "Platformer2D",
    icon: Sword,
    color: "#F59E0B",
    github: "https://github.com/VictorMusta/KnightJumper",
    screenshots: [
      "/images/projects/platformer/level.png",
      "/images/projects/platformer/boss.png",
      "/images/projects/platformer/victory.png",
    ],
    stack: ["GDScript", "Godot 4", "Aseprite"],
    image: "/images/projects/platformer/level.png",
    imageAlt: "Platformer2D - Knight Jumper Gameplay",
  },
  {
    id: "money-maker",
    type: "project",
    year: "2025 – 2026",
    sortYear: 2025.8,
    title: "Realtime Earnings",
    icon: Coins,
    color: "#10B981",
    github: "https://github.com/VictorGrabowski/MoneyMaker",
    stack: [".NET", "C#", "WinForms", "Physics Engine"],
    image: "https://opengraph.githubassets.com/1/VictorGrabowski/MoneyMaker",
    imageAlt: "Pomodoro Hub - Interactive Jar",
  },
  {
    id: "pachinko",
    type: "project",
    year: "2025",
    sortYear: 2025.1,
    title: "Pachinko (High Stakes)",
    icon: Dice6,
    color: "#EC4899",
    github: "https://github.com/VictorGrabowski/pachinko",
    demo: "https://victorgrabowski.github.io/pachinko/",
    /*
     * DE VRAIES CAPTURES, à la place de la carte OpenGraph de GitHub. Celle-ci n'affichait
     * que le nom du dépôt sur fond gris : elle prouvait l'existence du projet, pas son
     * contenu — et c'était le seul projet du site dans ce cas.
     */
    screenshots: [
      "/images/projects/pachinko/jeu.webp",
      "/images/projects/pachinko/mise.webp",
      "/images/projects/pachinko/menu.webp",
    ],
    stack: ["JavaScript", "Physics", "AI-Assisted (Copilot)", "Supabase"],
    image: "/images/projects/pachinko/jeu.webp",
    imageAlt: "Pachinko - une bille tombe dans un champ de pins, combo à 8x et multiplicateur de mise",
  },
  {
    id: "aoc-2024",
    type: "project",
    year: "2024",
    sortYear: 2024.15,
    title: "Advent of Code 2024",
    icon: Code2,
    color: "#6366F1",
    github: "https://github.com/VictorGrabowski/Advent-of-code-2024",
    stack: ["C#", "Algorithmie", "TDD"],
    image: "https://opengraph.githubassets.com/1/VictorGrabowski/Advent-of-code-2024",
    imageAlt: "AoC 2024 C# Exercises",
  },
];

const sortedCareerData = [...careerData].sort((a, b) => a.sortYear - b.sortYear);
const sortedProjectData = [...projectData].sort((a, b) => a.sortYear - b.sortYear);
const sortedEducationData = [...educationData].sort((a, b) => a.sortYear - b.sortYear);

/* Merge all tracks into a single array — components filter by `type` */
const timelineData = [...sortedCareerData, ...sortedProjectData, ...sortedEducationData].sort(
  (a, b) => a.sortYear - b.sortYear
);

export { 
  sortedCareerData as careerData, 
  sortedProjectData as projectData, 
  sortedEducationData as educationData 
};
export default timelineData;
