/* ------------------------------------------------------------------
   profile.js — everything about *you* that is not a job, a project
   or a degree: identity, hero copy, metrics, skills, contact, about.
   Edit the values here; the pages re-render from this file.
   ------------------------------------------------------------------ */
window.SITE = window.SITE || {};

SITE.profile = {
  name: "Christian Bile",
  fullName: "Bile Ezanin Christian Prince Carlos",
  user: "christian",
  host: "bile",
  roles: ["Software Engineer", "Distributed Systems & AI"],
  openToWork: true,
  resume: "en_cv_Bile_Christian.pdf",
  /* [code, file, label] — all offered from the nav button and the contact terminal */
  resumes: [
    ["en", "en_cv_Bile_Christian.pdf", "English"],
    ["fr", "fr_cv_Bile_Christian.pdf", "Français"],
    ["it", "it_cv_Bile_Christian.pdf", "Italiano"]
  ],
  email: "christian2tv@gmail.com",
  github: "https://github.com/chrissbill23",
  githubLabel: "github.com/chrissbill23",
  linkedin: "https://www.linkedin.com/in/christian-prince-bile/",
  web: "chrissbill23.github.io",
  location: "European Union",
  locationShort: "EU",
  languages: "EN · FR · IT",
  version: "v2.0.0",

  /* ---------- home.sh ---------- */
  hero: {
    boot: [
      { t: "0.000", msg: "starting christian.v5" },
      { t: "0.041", msg: "loading education  master_ai_polytechnique · bachelor_cs_padova", ok: true },
      { t: "0.087", msg: "loading experience  11 roles · 5+ years", ok: true },
      { t: "0.112", msg: "loading skills  java python typescript react c++ pytorch", ok: true }
    ],
    bio:
      "I build reliable software products and scalable systems. 5+ years shipping Java, Python, C++, " +
      "React and Angular platforms in insurance, business management, health-tech, aerospace and travel, " +
      "with a Master's in AI from École Polytechnique and a Bachelor's in Computer Science from " +
      "Università di Padova.",
    primaryCta: { label: "$ ./view --experiences", href: "experience.html" },
    secondaryCta: { label: "open projects/", href: "projects.html" }
  },

  modelCard: {
    name: "Christian Bile",
    role: ["Software Engineer", "AI Engineer"],
    currently: "Latitude · Reims",
    experience_years: 5,
    education: { master: "AI @ École Polytechnique", bachelor: "Computer Science @ Univ. of Padova" },
    stack: ["java", "python", "angular", "react"],
    domains: ["backend", "frontend", "applied AI"],
    open_to_work: true
  },

  training: { task: "currently: solving your_team.problems()", epoch: "year 05/∞" },

  metrics: [
    { key: "years_exp", value: "5+", desc: "production engineering", color: "green" },
    { key: "roles", value: "11", desc: "industry + research labs", color: "cyan" },
    { key: "degrees", value: "2", desc: "Bachelor CS · Master AI", color: "violet" },
    { key: "projects", value: "20+", desc: "Web · ML · CV · RL", color: "amber" },
    { key: "countries", value: "2", desc: "Italy → France", color: "pink" }
  ],

  /* ids from works.js (SITE.experience) shown in "featured --latest -3" */
  featuredExperience: ["latitude", "delane", "ag2r"],

  /* ids from works.js (SITE.projects) shown in "list projects/ --top 3",
     with the copy used by the home cards */
  featuredProjects: [
    {
      id: "mokili", file: "mokili/README.md", color: "green", cat: "ASATA · DEVOPS CONSOLE", href: "projects.html#p-mokili",
      title: "Mokili — applications manager",
      desc: "Where a team keeps its apps, versions and repositories, follows CI pipelines, launches deployments and runs its Scrum board. Java 25 / Spring Boot 4, Angular 21.",
      metric: { key: "tests", value: "305", kind: "num" }
    },
    {
      id: "umoja", file: "umoja/README.md", color: "cyan", cat: "ASATA · IDENTITY & TEAMS", href: "projects.html#p-umoja",
      title: "Umoja — organizations & identity",
      desc: "Organizations manage people, teams, app access, roles, approval workflows and billing; it is also the single sign-on the other services rely on.",
      metric: { key: "tests", value: "457", kind: "num" }
    },
    {
      id: "oro", file: "oro/README.md", color: "violet", cat: "ASATA · MESSAGING", href: "projects.html#p-oro",
      title: "Oro — real-time messaging",
      desc: "Privacy-first chat shared by two products: strict ordering, live streams over SSE, Web Push, malware-scanned attachments and an iOS/Android app.",
      metric: { key: "load_tested", value: "3,000 concurrent users", kind: "str" }
    }
  ],

  stackLayers: [
    { name: "languages", sub: "layer_0 · Input", color: "cyan",
      items: ["Python", "Java", "TypeScript", "JavaScript", "C++", "SQL"] },
    { name: "frameworks", sub: "layer_1 · Hidden", color: "violet",
      items: ["Spring Boot", "React", "Angular", "FastAPI", "Qt", "PyTorch"] },
    { name: "infra", sub: "layer_2 · Hidden", color: "amber",
      items: ["Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "Kafka", "PostgreSQL"] },
    { name: "value delivered", sub: "layer_3 · Output", color: "green",
      items: ["Backend", "Frontend", "Distributed Systems", "DevOps", "Applied AI"] }
  ],

  /* ---------- footer / contact ---------- */
  contact: {
    headline: ["Let's build", "intelligent", "software."],
    sub: "Hiring a Software, ML or AI Engineer? Let's talk on-site, hybrid or remote.",
    terminalTitle: "contact.sh — zsh",
    command: { cmd: "./contact.sh ", flag: "--role ", value: "\"software|ml|ai engineer\"" },
    rows: [
      ["email", "christian2tv@gmail.com"],
      ["resume", "en · fr · it"],
      ["github", "github.com/chrissbill23"],
      ["web", "chrissbill23.github.io"],
      ["based_in", "European Union 🇪🇺"],
      ["languages", "EN · FR · IT"],
      ["status", "available ✓", "green"]
    ]
  },

  statusBar: {
    left: [
      { icon: "git-branch", text: "main" },
      { icon: "circle-check", text: "build passing" },
      { icon: "cpu", text: "5+ yrs uptime" }
    ],
    right: ["UTF-8", "Python 3.12 · Java 21 · TS 5"],
    copyright: "Christian Bile"
  },

  /* ---------- about.md ---------- */
  about: {
    editorTitle: "about.md — vim",
    editorMeta: "NORMAL · utf-8",
    /* kind: h1 | h2 | li | p | quote | strong | blank */
    lines: [
      { kind: "h1", text: "# Christian Bile" },
      { kind: "blank" },
      { kind: "h2", text: "## In short" },
      { kind: "li", text: "- Software & AI engineer · 5+ years in production" },
      { kind: "li", text: "- Now @ Latitude (Reims): the SaaS that configures, builds" },
      { kind: "li", text: "  and launches a European small-sat rocket — Java/Spring Boot, React" },
      { kind: "li", text: "- Master's in AI @ École Polytechnique · Bachelor's in CS @ Padova" },
      { kind: "li", text: "- Built in Italy 🇮🇹, shipping in France 🇫🇷" },
      { kind: "blank" },
      { kind: "h2", text: "## Story" },
      { kind: "p", text: "Science hooked me early — biology, then chemistry, then" },
      { kind: "p", text: "physics. Computer science won: I graduated in Padova in" },
      { kind: "p", text: "2017, shipped C++/Qt systems for 100+ customers, then" },
      { kind: "p", text: "went to École Polytechnique to specialise in computer" },
      { kind: "p", text: "vision and NLP. Since 2021 I've built back-ends, data" },
      { kind: "p", text: "pipelines and AI for health, marketing, travel & insurance" },
      { kind: "p", text: "— two years of Python/Java/Angular platforms at AG2R La" },
      { kind: "p", text: "Mondiale, then geo-economic R&D on France's medical" },
      { kind: "p", text: "deserts (geographic data pipelines). In 2026 I joined" },
      { kind: "p", text: "Latitude to build the tools behind a rocket." },
      { kind: "blank" },
      { kind: "h2", text: "## Goal" },
      { kind: "quote", text: "> Grow into a senior engineer with a leadership role," },
      { kind: "quote", text: "> building software, web & AI products — from finance" },
      { kind: "quote", text: "> and insurance to space." },
      { kind: "blank" },
      { kind: "strong", text: "**Flexible. Fast to adapt. Happy in international teams.**", cursor: true }
    ],
    neofetch: {
      logo: "CB",
      version: "v5.0",
      rows: [
        ["Role", "Software Engineer @ Latitude"],
        ["Experience", "5+ yrs in production"],
        ["Based in", "European Union"],
        ["Education", "Master's AI · École Polytechnique"],
        ["Tools", "git · Docker · CI/CD"],
        ["Code", "Java Python TS C++ Go"],
        ["Speaks", "EN · FR · IT"],
        ["Focus", "back-end · SaaS · ML"],
        ["Hobbies", "music · travel · film"]
      ],
      palette: ["#07090C", "#FF5F57", "#3DFFA2", "#FFC266", "#5CE1E6", "#A98BFF", "#FF7AC6", "#E6EDF3"]
    }
  },

  /* skills grouped by how I use them — no made-up scores */
  skills: {
    groups: [
      { key: "daily_driver", color: "green", title: "daily_driver.txt",
        note: "what I write every week right now",
        items: ["Java 25", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Docker", "GitLab CI/CD", "Git", "Linux"] },
      { key: "shipped", color: "cyan", title: "shipped_to_production.txt",
        note: "used on paid work and in the Asata products",
        items: ["Python", "Angular", "C++", "Qt / QML", "Go", "FastAPI", "Django", "Node.js", "Kubernetes", "Jenkins", "Azure", "MySQL", "SQL Server", "Oracle SQL", "MongoDB", "SQLite", "Databricks", "GraphQL", "FHIR", "pandas", "OSRM", "NATS JetStream", "Prometheus", "OpenTelemetry", "Caddy", "nginx", "S3 / MinIO"] },
      { key: "practices", color: "amber", title: "how_i_work.txt",
        note: "the habits behind the code",
        items: ["System design", "Data modelling", "API design", "Multi-tenancy & RLS", "Transactional outbox", "Automated tests", "Load testing", "Observability", "Runbooks & backups", "Agile / Scrum", "UI design in Pencil"] },
      { key: "research", color: "violet", title: "research_and_academic.txt",
        note: "from École Polytechnique, INRIA and side projects",
        items: ["Deep Learning", "Machine Learning", "Computer Vision", "Reinforcement Learning", "NLP", "Explainable AI", "PyTorch", "TensorFlow", "scikit-learn", "Statistics", "R", "Matlab", "AMPL", "Unity / C#"] }
    ]
  },

  /* ---------- experience page filter facets ----------
     Keys are the tech slugs (lower-case, spaces -> "-") used in
     SITE.experience[].tech. Anything not listed lands in "other". */
  techCategories: [
    { name: "languages", color: "cyan",
      items: ["python", "typescript", "java", "go", "c++", "javascript"] },
    { name: "frameworks", color: "violet",
      items: ["angular", "spring-boot", "react", "fastapi", "django", "node.js", "qt", "graphql", "pandas"] },
    { name: "data", color: "amber",
      items: ["postgresql", "mongodb", "mysql", "microsoft-sql-server", "oracle-sql", "sqlite", "databricks", "osrm", "fhir", "data-engineering"] },
    { name: "devops / cloud", color: "pink",
      items: ["gitlab-ci", "azure", "github", "jenkins", "kubernetes", "docker"] },
    { name: "ai / ml", color: "green",
      items: ["deep-learning", "machine-learning", "tensorflow", "pytorch", "data-science", "xai", "data-mining"] }
  ]
};
