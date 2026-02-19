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
} from "lucide-react";

/* ──────────────────────────────────────────────
   Career track — professional experiences
   ────────────────────────────────────────────── */

const careerData = [
  {
    id: "betclic",
    type: "career",
    year: "2024 – Présent",
    sortYear: 2024.9,
    title: "Betclic",
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
    year: "2021 – 2023",
    sortYear: 2021,
    title: "Delfox",
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
    sortYear: 2021.5,
    title: "Tild",
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
    title: "Cosderma",
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
    year: "2022 – 2024",
    sortYear: 2022.1,
    title: "Sup de Vinci",
    location: "Bordeaux",
    icon: GraduationCap,
    color: "#A8DADC",
    stack: ["Master Ingénierie Logicielle", "Cloud", "DevOps"],
    image: "https://logo.clearbit.com/supdevinci.fr",
    imageAlt: "Sup de Vinci logo",
  },
  {
    id: "epitech",
    type: "education",
    year: "2021 – 2022",
    sortYear: 2021,
    title: "Epitech Technology",
    location: "Bordeaux",
    icon: GraduationCap,
    color: "#5FBADC",
    stack: ["C#", "TypeScript", "Python", "Linux", "Docker", "Architecture"],
    image: "https://logo.clearbit.com/epitech.eu",
    imageAlt: "Epitech logo",
  },
  {
    id: "keyce",
    type: "education",
    year: "2020 – 2021",
    sortYear: 2020.1,
    title: "Keyce Informatique (OpenIt)",
    location: "Montpellier",
    icon: GraduationCap,
    color: "#4A90E2",
    stack: ["Bachelor", "Fullstack", "PHP", "JavaScript", "SQL"],
    image: "https://logo.clearbit.com/keyce.fr",
    imageAlt: "Keyce logo",
  },
  {
    id: "btssio",
    type: "education",
    year: "2016 – 2018",
    sortYear: 2016,
    title: "Lycée Gustave Eiffel",
    location: "Bordeaux",
    icon: GraduationCap,
    color: "#264653",
    stack: ["BTS SIO", "OOP", "Java", "C#", "Python", "SQL"],
    image: "/images/eiffel_logo.png",
    imageAlt: "Gustave Eiffel logo",
  },
  {
    id: "bacpro",
    type: "education",
    year: "2013 – 2016",
    sortYear: 2013,
    title: "Bac Professionnel SEN",
    location: "Lormont",
    icon: GraduationCap,
    color: "#E76F51",
    stack: ["Électronique", "Électricité", "Maintenance", "Systémique"],
    image: "/images/bacpro_logo.png",
    imageAlt: "Bac Pro logo",
  },
];

/* ──────────────────────────────────────────────
   Projects track — side projects from GitHub
   ────────────────────────────────────────────── */

const projectData = [
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
      "https://opengraph.githubassets.com/1/VictorMusta/Tamagotchi-in-ElectronJS",
    ],
    stack: ["TypeScript", "Electron", "Procedural", "Auto-battler"],
    image: "https://opengraph.githubassets.com/1/VictorMusta/Tamagotchi-in-ElectronJS",
    imageAlt: "Potatetoro Teto - Potato Warrior Game",
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
      "https://opengraph.githubassets.com/1/VictorMusta/KnightJumper",
    ],
    stack: ["GDScript", "Godot 4", "Aseprite"],
    image: "https://opengraph.githubassets.com/1/VictorMusta/KnightJumper",
    imageAlt: "Platformer2D GitHub preview",
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
    screenshots: [
      "https://opengraph.githubassets.com/1/VictorGrabowski/pachinko",
    ],
    stack: ["JavaScript", "Physics", "AI-Assisted (Copilot)", "Supabase"],
    image: "https://opengraph.githubassets.com/1/VictorGrabowski/pachinko",
    imageAlt: "Pachinko - High Risk High Reward Game",
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
