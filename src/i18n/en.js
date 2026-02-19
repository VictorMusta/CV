const en = {
  /* ── UI ── */
  tagline: "Fullstack Developer .NET + JS",
  trackCareer: "Career",
  trackEducation: "Education",
  trackProjects: "Personal Projects",
  viewOnGithub: "View on GitHub",
  liveDemo: "Live Demo",
  viewBenchmark: "Benchmark Dashboard",
  keyFeatures: "Key Features",
  addImage: "Add image to",
  footer: (year) => `© ${year} Victor Grabowski — Built with React & Framer Motion`,

  /* ── Career ── */
  betclic: {
    role: "Fullstack Developer .NET + JS",
    description:
      "Joined Betclic in 2024 (850+ employees) within the SQIPI squad (Identity & Payment Integrity), working on Juno, the core system for AML (Anti-Money Laundering). As part of the Experience team, my mission was to develop new asynchronous business rules and enhance the back-office to streamline agent workflows. Collaborating closely with POs and PMs, I contributed to process optimization and the visualization of critical performance metrics.",
    highlights: [
      "Agile & Microservices Architecture: Operating within a large-scale agile organization, focusing on scalability and software quality through .NET microservices.",
      "Reactive Architecture & Cloud: Developed asynchronous fraud rules using AWS (SNS, SQS) to analyze risky behaviors in real-time.",
      "Juno Back-Office: Enhanced the investigation interface with new endpoints and data visualizations to accelerate agent efficiency.",
      "Fraud-PEP (Publicly Exposed Person) Project: Integrated Dow Jones lists for automated identity verification, protecting the onboarding process from day one.",
      "AI Automation: Participated in an experimental project using AI agents for profile reviews based on scoring thresholds (IA Threshold).",
    ],
    cvDescription: ".NET Microservices & AWS. Optimization of Juno back-office and AML anti-fraud rules.",
    cvHighlights: [
      "Development of asynchronous rules (SNS/SQS) and monitoring endpoints",
      "Fraud-PEP (Publicly Exposed Person) Project: Automated identity verification",
      "AI Project: Automated profile reviews through intelligent agents",
    ],
  },
  delfox: {
    role: "Full-Stack Developer (React / Python / gRPC - Google Remote Procedure Call)",
    description: "Aerospace & Defense startup specializing in Deep Reinforcement Learning (Deep RL). I led the development of 'Realmind', a software suite designed to monitor and interact with AI agents during training sessions.",
    highlights: [
      "Real-time Communication Architecture: Implemented 100% gRPC integration for bidirectional exchanges between React frontend and Python training backends.",
      "Complex Visualization: Created monitoring dashboards for massive simulations (drone swarms, autonomous underwater vehicles).",
      "Game Engine Integration: Collaborated on interfaces between AI agents and Unity/Unreal Engine simulation environments.",
      "Design System: Fully designed the visual identity and UI (User Interface) component library for the platform.",
    ],
    cvDescription: "Aerospace startup. Developed Realmind, a monitoring platform for autonomous ML agents.",
    cvHighlights: [
      "100% gRPC communication between React and Python",
      "Designed visual identity and real-time monitoring dashboards",
    ],
  },
  tild: {
    role: "Full-Stack Developer (VueJS / Python)",
    description: "Designed and maintained Alma Mater, a modular CRM/ERP (Customer Relationship Management / Enterprise Resource Planning) solution for the Collège de Paris school group. The project involved managing complex data flows between students, teachers, and administration.",
    highlights: [
      "Calendar Module: Developed a dynamic timetable generation engine with room and trainer conflict management.",
      "Data Backend: Refactored Python services to optimize enrollment processing and automated administrative document generation.",
      "User Interface: Modernized the VueJS frontend to improve user experience and responsiveness.",
    ],
    cvDescription: "Developed Alma Mater (modular CRM) for Collège de Paris.",
    cvHighlights: ["Implemented complex calendar and timetable management module"],
  },
  cosderma: {
    role: "Developer (Internship / Consulting)",
    description: "Clinical testing laboratory. My primary mission was to ensure the technical survival of a legacy data system and its compliance with new European regulations.",
    highlights: [
      "Database Migration: Architectural reverse-engineering and migration of a 15-year-old critical SQL (Structured Query Language) system without prior documentation.",
      "GDPR (General Data Protection Regulation) Compliance: Technical implementation of patient data anonymization and automated retention policies.",
      "Auditability: Created internal tools for secure archiving and report extraction for clinical audits.",
    ],
    cvDescription: "Migration of a critical database without documentation and GDPR compliance.",
    cvHighlights: ["Implemented archival system and GDPR anonymization"],
  },
  supdevinci: {
    title: "Sup de Vinci",
    role: "Master's in Software Engineering & Cloud",
    description:
      "Focused on technical project management and Cloud architecture. Discovery of numerous technologies, languages, and tools through intensive workshops.",
    highlights: [
      "Master's in Software Engineering & Cloud",
      "Agile Project Management & Technical leadership",
      "Wide technology stack discovery and adoption",
    ],
  },
  epitech: {
    title: "Epitech Technology",
    role: "Expert in Information Technology",
    description: "Expertise Cycle (2021-2022). Advanced C# and TypeScript project-based learning.",
    highlights: ["Master's level degree (RNCP - Répertoire National des Certifications Professionnelles Level 7)"],
  },

  /* ── Technical Skills ── */
  technicalSkills: {
    languages: {
      title: "Specializations",
      content: "TypeScript, .NET C#, Python (no framework), SQL",
    },
    technologies: {
      title: "Technologies",
      content: "ReactJS, .NET, Node.js, MongoDB, DynamoDB, gRPC",
    },
    tools: {
      title: "Tools & Cloud",
      content: "AWS (S3, SNS, SQS), Docker, Terraform, Jenkins, Jira, Confluence, GitHub, CursorAI",
    },
    methods: {
      title: "Architecture & Methods",
      content: "Agile, TDD (Test-Driven Development), Spec-driven development, Event-driven, Micro-services, Security & Optimization",
    },
    ai_productivity: {
      title: "AI & Productivity",
      content: "Learning & productivity catalyst (pre-AI foundations), Responsible Code (zero unmastered push)",
    },
  },

  /* ── Projects ── */
  tamagotchi: {
    role: "AutoBattler 2D",
    description:
      "A desktop auto-battler inspired by Tamagotchi, built with ElectronJS. Collect potato creatures, level them up through turn-based combat, and watch them bounce around in a physics-driven jar — all rendered live on your desktop.",
    highlights: [
      "Turn-based combat system with stats, weapons & abilities",
      "Physics-powered \"Bocal\" sandbox mode",
      "Creature collection with leveling & evolution",
      "Persistent save system with multiple mob slots",
    ],
  },
  aicontentremover: {
    role: "Reporting API (Application Programming Interface) & Masking Extension",
    description:
      "A community-driven API and browser extension to report and hide AI-generated content on social media. Relying on a collaborative consensus voting system.",
    highlights: [
      "REST (Representational State Transfer) API with community voting system",
      "Browser extension integration (Chrome, Firefox)",
      "SQLite dev / PostgreSQL prod with EF Core",
      "AI detection threshold based on consensus",
    ],
  },
  loutaupia: {
    role: "Geocaching Backend",
    description:
      "A .NET API backend for Loutaupia V2 — a collaborative geocaching app with treasure hunts on a map.",
    highlights: [
      "RESTful API with .NET / C#",
      "Geolocation-based game mechanics",
      "User authentication & progress tracking",
      "Designed for mobile-first frontend",
    ],
  },
  imapunsub: {
    role: "Newsletter Killer",
    description:
      "A Python script that scans your inbox via IMAP (Internet Message Access Protocol), finds unsubscribe links in newsletters and follows them automatically — reducing email clutter and carbon footprint.",
    highlights: [
      "IMAP integration with Gmail app passwords",
      "HTML (HyperText Markup Language) parsing with BeautifulSoup",
      "Automated link following via requests",
      "Environmental impact awareness",
    ],
  },
  bonobot: {
    role: "Bot Discord",
    description:
      "A multi-purpose Discord bot for fun and utility — built in Python and managed via Jira for structured development.",
    highlights: [
      "Modular command architecture",
      "Jira-tracked development workflow",
      "Event-driven Discord.py integration",
      "Extensible plugin system",
    ],
  },
  knightjumper: {
    role: "Platformer2D",
    description: "A dynamic platformer created with Godot 4. Exploring jump mechanics and 2D sprite management.",
    highlights: [
      "Godot 4 engine with GDScript",
      "Tile-based level design",
      "Character physics & animation",
      "Parallax scrolling backgrounds",
    ],
  },
  "money-maker": {
    role: "PomodoroHub",
    description: "Productivity management platform based on the Pomodoro method, integrated with a real-time earnings visualizer.",
  },
  pachinko: {
    role: "Game Jam / Conference",
    description: "Game developed in a group during Tugduall's conference, focusing on fun and retro gameplay mechanics.",
  },
  "aoc-2024": {
    role: "AoC 2024",
    description: "Solving Advent of Code 2024 puzzles to deepen C# skills and algorithmic thinking.",
  },
};

export default en;
