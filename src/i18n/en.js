const en = {
  /* ── UI ── */
  tagline: "Back-End Developer",
  trackCareer: "Career",
  trackProjects: "Projects",
  viewOnGithub: "View on GitHub",
  addImage: "Add image to",
  footer: (year) => `© ${year} Victor Grabowski — Built with React & Framer Motion`,

  /* ── Career ── */
  betclic: {
    role: "Back-End Developer (.NET / TypeScript)",
    description:
      "Within the SQIPI squad (Identity & Payment Integrity), I contributed to fraud prevention and anti-money laundering at one of Europe's leading online sports betting platforms. I joined the SQEXP team to work on an AI-powered user profile analysis project — a strategic bet that paid off: AML investigation reviews that were once fully manual are now largely automated.",
    highlights: [
      "Built AML alert management, investigation creation & resolution, and player profile impact tracking",
      "Contributed to Fraud-PEP: identity verification and conflict-of-interest detection to block risky accounts at creation",
      "Multi-jurisdiction handling: differentiated thresholds, treatments, and restrictions per country / regulator",
      "AI pioneer at Betclic: created Skills, Agent-instructions, and MCPs to automate 30% of PRs",
    ],
  },
  delfox: {
    role: "Full-Stack Developer (React / Python / gRPC)",
    description:
      "Aerospace & defense startup building autonomous ML agents for weapons systems (missiles, drones, aircraft). I worked on Realmind, a platform enabling users to create scenarios, launch training sessions, and monitor AI agent training across multiple simulation engines (Unity, Unreal Engine, proprietary engines).",
    highlights: [
      "ReactJS front-end + Python back-end (no framework), 100% gRPC communication",
      "Designed the application's visual identity — well-received by clients during demos",
      "Scenario creation, real-time training monitoring, reward tuning, and agent comparison features",
      "Technical demos to defense clients and active participation in Agile discussions",
    ],
  },
  tild: {
    role: "Full-Stack Developer (VueJS / Python)",
    description:
      "IT services agency specializing in custom software development. I contributed to Alma Mater, a modular school CRM built for the Collège de Paris, featuring a lazy loading system designed to ensure smooth access even on very low-bandwidth connections (notably across Africa).",
    highlights: [
      "Full-stack development: VueJS front-end, Python back-end",
      "Built the calendar / timetable module of the CRM",
      "Lazy loading optimization for schools with limited connectivity",
      "Collaborated within one of two teams dedicated to the Alma Mater project",
    ],
  },
  cosderma: {
    role: "Full-Stack Developer (Internship / Consulting)",
    description:
      "Company specializing in clinical cosmetic testing on volunteers for brands and labs. My first professional experience as a consultant deployed on-site — I was tasked with solving a critical oversized database problem, with no existing documentation or data model.",
    highlights: [
      "Complete reverse-engineering of a DB with no foreign keys or indexes — created a full relational model (Merise) printed across 3 A2 sheets",
      "Built an archival application to split and migrate data while preserving historical records",
      "Implemented a GDPR anonymization system for volunteer personal data",
      "Full autonomy in a client environment — first taste of professional life",
    ],
  },
  education: {
    title: "Education",
    role: "Epitech · Sup de Vinci",
    description:
      "Dual-track Computer Science education combining Epitech's project-based pedagogy (autonomy, low-level C/C++) with Sup de Vinci's human-centric approach (industry professionals from diverse sectors, enriching exchanges on real-world business challenges). Thesis: \"The Impact of Generative AI on Junior Developers.\"",
    highlights: [
      "Epitech — Autonomy and project-based learning, low-level C/C++ programming",
      "Sup de Vinci — Master's in Software Engineering & Cloud, exchanges with professionals from all industries",
      "Personal side-projects more polished than school assignments — driven by passion and a long-term roadmap",
      "Thesis: hands-on feedback and best practices for juniors navigating generative AI",
    ],
  },

  /* ── Projects ── */
  tamagotchi: {
    role: "Desktop Video Game",
    description:
      "A Tamagotchi-inspired desktop video game built with ElectronJS. Collect potato creatures, level them up through turn-based combat, and watch them bounce around in a physics-driven jar — all rendered live on your desktop.",
    highlights: [
      "Turn-based combat system with stats, weapons & abilities",
      "Physics-powered \"Bocal\" sandbox mode",
      "Creature collection with leveling & evolution",
      "Persistent save system with multiple mob slots",
    ],
  },
  discordkiller: {
    role: "P2P Messaging",
    description:
      "A fully decentralised peer-to-peer messaging application written in Rust — no servers, no middlemen.",
    highlights: [
      "Peer discovery via mDNS and manual connect",
      "End-to-end encrypted communication",
      "Real-time audio channel support",
      "Cross-platform desktop client",
    ],
  },
  aicontentremover: {
    role: "Browser Extension API",
    description:
      "A community-driven API + browser extension that flags AI-generated tweets via crowdsourced voting. Features rate limiting, batch verification, and Swagger docs.",
    highlights: [
      "REST API with community upvote/downvote system",
      "Browser extension integration (Chrome, Firefox)",
      "SQLite dev / PostgreSQL prod with EF Core",
      "Consensus-based AI detection threshold",
    ],
  },
  loutaupia: {
    role: "Geocaching Backend",
    description:
      "A .NET backend API for Loutaupia V2 — a collaborative geocaching application with map-based treasure hunts.",
    highlights: [
      "RESTful API in .NET / C#",
      "Geolocation-based game mechanics",
      "User authentication & progress tracking",
      "Designed for mobile-first frontend",
    ],
  },
  imapunsub: {
    role: "Email Automation",
    description:
      "A Python script that scans your inbox via IMAP, finds unsubscribe links in newsletters, and follows them automatically — reducing email clutter and carbon footprint.",
    highlights: [
      "IMAP integration with Gmail app passwords",
      "HTML parsing with BeautifulSoup",
      "Automated link following via requests",
      "Environmental impact awareness",
    ],
  },
  bonobot: {
    role: "Discord Bot",
    description:
      "A multi-purpose Discord bot for fun and utility — built with Python and managed via Jira for structured development.",
    highlights: [
      "Modular command architecture",
      "Jira-tracked development workflow",
      "Event-driven Discord.py integration",
      "Extensible plugin system",
    ],
  },
  knightjumper: {
    role: "Platformer Game",
    description:
      "A 2D platformer game built with the Godot engine featuring a knight character with jump mechanics and level progression.",
    highlights: [
      "Godot 4 engine with GDScript",
      "Tile-based level design",
      "Character physics & animation",
      "Parallax scrolling backgrounds",
    ],
  },
};

export default en;
