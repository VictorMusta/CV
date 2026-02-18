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
    role: "Back-End Developer",
    description:
      "Building high-performance microservices for one of Europe's leading online betting platforms.",
    highlights: [
      "Developed compliance & AML micro-services in Go and Java",
      "Designed event-driven architectures with Kafka",
      "Implemented fraud-detection pipelines processing millions of daily transactions",
      "Collaborated cross-team on regulatory integrations across multiple jurisdictions",
    ],
  },
  delfox: {
    role: "Back-End Developer",
    description:
      "AI-driven startup leveraging reinforcement learning to create smarter autonomous systems.",
    highlights: [
      "Built REST & gRPC APIs powering real-time AI inference",
      "Managed training data pipelines with Python and Go",
      "Deployed ML models through CI/CD to AWS ECS",
      "Optimised latency-critical paths for sub-50ms response times",
    ],
  },
  tild: {
    role: "Full-Stack Developer",
    description:
      "Digital agency delivering bespoke web applications for enterprise clients.",
    highlights: [
      "Developed custom CMS platforms with React & Node.js",
      "Integrated third-party APIs (payment, shipping, CRM)",
      "Led front-end architecture decisions for client projects",
      "Mentored junior developers on best practices",
    ],
  },
  cosderma: {
    role: "Full-Stack Developer (Intern)",
    description:
      "Cosmetics e-commerce platform — first professional full-stack experience.",
    highlights: [
      "Built a complete e-commerce front-end with React",
      "Designed RESTful APIs with Node.js & Express",
      "Implemented product catalog search and filter features",
      "Managed deployment on cloud infrastructure",
    ],
  },
  education: {
    title: "Education",
    role: "Epitech · Sup de Vinci",
    description:
      "Dual-track Computer Science education combining hands-on project methodology with academic foundations.",
    highlights: [
      "Epitech — Project-based curriculum emphasising autonomy and low-level C/C++",
      "Sup de Vinci — Master's in Software Engineering & Cloud Computing",
      "Capstone projects in distributed systems and DevOps",
      "Active participation in hackathons and coding competitions",
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
