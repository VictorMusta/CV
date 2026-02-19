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
      "Developed asynchronous fraud rules (SNS/SQS) and monitoring endpoints",
      "Fraud-PEP Project: Automated identity verification using Dow Jones lists",
      "Optimized Juno back-office (React/.NET) for increased agent efficiency",
      "AI Initiative: Profile review automation through intelligent agents",
    ],
  },
  delfox: {
    role: "Full-Stack Developer (Apprenticeship - React / Python / gRPC)",
    description: "AI startup specializing in Deep Reinforcement Learning (Deep RL). During this 2-year apprenticeship, I developed 'Realmind', a POC (Proof of Concept) for piloting autonomous agent training. My role was to create an interface capable of launching complex training scripts, monitoring performance, and visualizing simulations in 3D.",
    highlights: [
      "POC Development: Full design and implementation of the monitoring interface in ReactJS and the Python backend.",
      "Real-time 3D Visualization: Integrated game engines (Unity, Unreal Engine, WebGL) to render simulations of drone swarms and autonomous vehicles.",
      "gRPC (Google Remote Procedure Call) Architecture: Implemented high-frequency data flows between the frontend and AI backends.",
      "Cross-team Collaboration: Worked closely with Machine Learning engineers to interface the UI with their training libraries.",
    ],
    cvDescription: "2-year apprenticeship. Developed Realmind, a control and 3D visualization platform for autonomous AI agents.",
    cvHighlights: [
      "High-frequency real-time communication (gRPC) between React and Python",
      "Complex simulation visualization (drones, vehicles) via Unity, Unreal & WebGL",
      "Designed the Design System and Realmind monitoring dashboards",
      "Technical debt management on a high-growth POC project",
    ],
  },
  tild: {
    role: "Full-Stack Developer (VueJS / Python)",
    description: "Designed and maintained Alma Mater, a monolithic CRM/ERP (Customer Relationship Management / Enterprise Resource Planning) solution. Working in a 100% remote environment, I served as a technical bridge between two teams with distinct practices, requiring high autonomy.",
    highlights: [
      "Monolithic Architecture: Maintenance and evolution of a Python API and VueJS frontend communicating via HTTP.",
      "Cross-team Interoperability: Integrated and reconciled development best practices from two different engineering poles.",
      "API Documentation: Leveraged Swagger to ensure clarity and auditability of system endpoints.",
      "Calendar Module: Developed a dynamic timetable generation engine with room and trainer conflict management.",
    ],
    cvDescription: "Development of the Alma Mater CRM/ERP (VueJS/Python). Reconciled inter-team practices in a 100% remote setup.",
    cvHighlights: ["Optimized calendar module and API documentation through Swagger"],
  },
  cosderma: {
    role: "Developer (Internship / Consulting)",
    description: "Clinical data restructuring mission. In the absence of documentation for a complex database, I performed full reverse-engineering of 30+ tables (approx. 600 properties) to restore a coherent relational model and implement a high-performance archiving solution.",
    highlights: [
      "SQL Reverse-engineering: Deep analysis and modeling (Merise) of undocumented schemas, transitioning from paper-based design to SQL implementation.",
      "High-Integrity Archiving: Developed a historical data transfer system ensuring strict adherence to referential integrity constraints.",
      "Production Optimization: Massive reduction in active database size, significantly speeding up back-office response times.",
      "GDPR Compliance: Structured archiving processes to meet sensitive data retention requirements.",
    ],
    cvDescription: "SQL reverse-engineering and critical data archiving (30+ tables). Performance optimization.",
    cvHighlights: ["Full relational modeling and database footprint reduction"],
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
  keyce: {
    title: "Keyce Informatique (OpenIt)",
    role: "Bachelor in Computer Science",
    description: "Generalist training in Montpellier focused on Web and software development. Learning coding fundamentals and building autonomous fullstack projects.",
    highlights: ["Fullstack Developer Bachelor", "Web & Mobile Specialization"],
  },
  btssio: {
    title: "Lycée Gustave Eiffel (Bordeaux)",
    role: "BTS SIO (IT Services for Organizations)",
    description: "Learning the fundamental basics of computer science: Object-Oriented Programming (OOP), algorithms, and database management. Fullstack program with Java, C#, and Python over 2 years.",
    highlights: ["Algorithm & OOP Foundations", "SQL Database Management", "Java, C# & Python Development"],
  },
  bacpro: {
    title: "Bac Pro SEN (Digital Electronic Systems)",
    role: "Vocational Baccalaureate SEN (Digital Electronic Systems)",
    description: "Versatile training in digital systems, power electronics, and industrial maintenance.",
    highlights: ["Maintenance & Troubleshooting", "Electronics & Electricity", "Systemic Approach"],
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
      "A wacky auto-combat game built with ElectronJS. Create and collect potato warriors, strategically choose their level-up upgrades, and throw them into automatic tournaments against procedurally generated opponents.",
    highlights: [
      "Auto-Battler Mechanics: AI-driven combat, focusing on strategic stat management.",
      "Customization & Progression: Storage PC, unique traits, weapons, and upgrade trees.",
      "Tournament Mode: A series of duels to test the viability of your potato builds.",
      "Humor & Fun: A project exploring RPG mechanics with a lighthearted, second-degree tone.",
    ],
  },
  aicontentremover: {
    role: "Camouflage Extension & Vibe Coding",
    description:
      "Born from frustration with the proliferation of AI-generated content and bots on social networks (Twitter/X), AIContentRemover is a project testing the 'Vibe Coding' concept. It allows the community to vote to hide suspicious posts, improving feed quality for everyone.",
    highlights: [
      "Vibe Coding: Exploratory project on ultra-fast and collaborative development.",
      "DOM Cleaning: Direct removal of HTML elements from reported accounts to cut off visibility and reach.",
      "Social Consensus: Voting system to collectively validate the AI nature of a post.",
      "Ethical Motivation: Protecting original artists from AI-generative work theft.",
    ],
  },
  // Loutaupia removed
  imapunsub: {
    role: "Newsletter Killer (Green IT)",
    description:
      "An automated unsubscription tool born from a desire to reduce digital pollution (Green IT). A mailbox saturated with unread newsletters consumes considerable energy; this script automates the tedious one-click unsubscription process.",
    highlights: [
      "IMAP Automation: Ultra-fast scanning and parsing of newsletters via Python.",
      "One-click Unsubscribe: Automatic detection and following of legally compliant unsubscribe links.",
      "Digital Ecology: Drastic reduction of the carbon footprint associated with storing useless email data.",
      "Security Audit: Assessment of risks associated with fake unsubscribe links (phishing/malware).",
    ],
  },
  // Bonobot removed
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
    role: "Realtime Earnings",
    description: "A cozy application designed to visualize financial earnings in real-time while staying productive. Based on net salary and hours worked, it displays money accumulating in an interactive jar during work sessions.",
    highlights: [
      "Interactive Jar Mode: Dynamic visualization of money falling in real-time with a physics engine (shake the jar!).",
      "Tasty Pomodoro: Timer system based on pastry recipes (sweet/savory) to pace your work.",
      "Productivity Dashboard: Automatic calculation based on morning check-in and salary settings.",
      "Chill Vibe: Integrated radio with several stations and visual animations (rain/snow) matching real-time weather.",
    ],
  },
  pachinko: {
    role: "Pachinko (High Risk / High Reward)",
    description: "Started during a Betclic workshop to test AI development (Copilot / Coding Agents). I later expanded it solo to create an addictive arcade game blending luck and strategy.",
    highlights: [
      "AI-Assisted Development: POC developed by a 4-person team in 3 hours, then iterated solo.",
      "Casino Mechanics: Added 'High Risk / High Reward' features and score multipliers.",
      "Procedural Generation: Randomly generated levels with maluses increasing rewards.",
      "Global Leaderboard: Real-time scoring system hosted on Supabase.",
    ],
  },
  "aoc-2024": {
    role: "Advent of Code 2024 (C#)",
    description: "A series of daily algorithmic challenges to master C# syntax and complex data structures when joining Betclic.",
    highlights: [
      "Solved algorithmic puzzles of increasing complexity.",
      "Intensive practice of .NET and pure algorithms.",
      "Learning by doing approach.",
    ],
  },
};

export default en;
