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
  roles: ["Software", "AI Engineer"],
  openToWork: true,
  resume: "en_cv_Bile_Christian.pdf",
  email: "christian2tv@gmail.com",
  github: "https://github.com/chrissbill23",
  githubLabel: "github.com/chrissbill23",
  linkedin: "https://www.linkedin.com/in/christian-prince-bile/",
  web: "chrissbill23.github.io",
  location: "Paris, France",
  locationShort: "Paris, FR",
  languages: "EN · FR · IT",
  version: "v2.0.0",

  /* ---------- home.sh ---------- */
  hero: {
    boot: [
      { t: "0.000", msg: "booting christian.v5 kernel" },
      { t: "0.041", msg: "loading weights  polytechnique_msc_ai.ckpt", ok: true },
      { t: "0.087", msg: "mounting /experience  12 roles · 5+ years", ok: true },
      { t: "0.112", msg: "importing stack  java python typescript react c++ pytorch", ok: true }
    ],
    bio:
      "Today I build the internal SaaS that configures, builds and launches rockets at Latitude " +
      "(Java/Spring Boot, React, PostgreSQL). Before that: 5+ years shipping Java, Python and " +
      "Angular platforms in insurance, SaaS, health-tech and travel, a Master's in AI from " +
      "École Polytechnique and deep-learning research at INRIA.",
    primaryCta: { label: "$ ./view --experience", href: "experience.html" },
    secondaryCta: { label: "cd projects/", href: "projects.html" }
  },

  modelCard: {
    name: "Christian Bile",
    role: ["Software Eng", "AI Eng"],
    now: "Latitude · Reims",
    experience_years: 5,
    education: { msc: "AI @ École Polytechnique", bsc: "CS @ Univ. of Padova" },
    stack: ["java", "python", "ts", "react"],
    domains: ["backend", "space", "CV", "NLP"],
    open_to_work: true
  },

  training: { task: "fine_tuning on: your_team.problems()", epoch: "epoch 05/∞" },

  metrics: [
    { key: "years_exp", value: "5+", desc: "production engineering", color: "green" },
    { key: "roles", value: "12", desc: "industry + research labs", color: "cyan" },
    { key: "degrees", value: "2", desc: "BSc CS · MScT AI", color: "violet" },
    { key: "projects", value: "20+", desc: "ML · CV · RL · web", color: "amber" },
    { key: "countries", value: "2", desc: "Italy → France", color: "pink" }
  ],

  /* ids from works.js (SITE.experience) shown in "git log --oneline -3" */
  featuredExperience: ["latitude", "delane", "ag2r"],

  /* ids from works.js (SITE.projects) shown in "ls projects/ --top 3",
     with the copy used by the home cards */
  featuredProjects: [
    {
      id: "asl", file: "sign_language_rt.py", color: "green", cat: "COMPUTER VISION",
      title: "American Sign Language translator",
      desc: "Real-time desktop app recognising sign letters from a webcam stream with a classifier trained end-to-end.",
      metric: { key: "f1_score", value: "0.93", kind: "num" }
    },
    {
      id: "dnn-debugging", file: "dnn_debugger.py", color: "violet", cat: "DEEP LEARNING · INRIA",
      title: "Mining a network's blind spots",
      desc: "Data-mining framework that links groups of neurons to wrong classifications, flagging mispredictions before they happen.",
      metric: { key: "venue", value: "\"INRIA\"", kind: "str" }
    },
    {
      id: "cltv", file: "cltv_forecast.ipynb", color: "cyan", cat: "ML · AMADEUS",
      title: "Customer Lifetime Value",
      desc: "ML & DL models predicting an airline's future high-value travellers from profile and purchase behaviour.",
      metric: { key: "domain", value: "\"travel\"", kind: "str" }
    }
  ],

  stackLayers: [
    { name: "layer_0 · Input", sub: "languages", color: "cyan",
      items: ["Python", "Java", "TypeScript", "C++", "Go", "SQL"] },
    { name: "layer_1 · Hidden", sub: "frameworks", color: "violet",
      items: ["Spring Boot", "React", "Angular", "FastAPI", "PyTorch", "scikit-learn"] },
    { name: "layer_2 · Hidden", sub: "infra", color: "amber",
      items: ["Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "Kafka", "PostgreSQL"] },
    { name: "layer_3 · Output", sub: "value delivered", color: "green",
      items: ["Computer Vision", "NLP", "Forecasting", "Back-end platforms", "Data pipelines", "MLOps"] }
  ],

  /* ---------- footer / contact ---------- */
  contact: {
    headline: ["Let's build", "intelligent", "software."],
    sub: "Hiring a Software, ML or AI Engineer? Let's talk — Paris on-site, hybrid or remote.",
    terminalTitle: "contact.sh — zsh",
    command: { cmd: "./contact.sh ", flag: "--role ", value: "\"software|ml|ai engineer\"" },
    rows: [
      ["email", "christian2tv@gmail.com"],
      ["github", "github.com/chrissbill23"],
      ["web", "chrissbill23.github.io"],
      ["based_in", "Paris, France 🇫🇷"],
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
      { kind: "h2", text: "## TL;DR" },
      { kind: "li", text: "- Software & AI engineer · 5+ years in production" },
      { kind: "li", text: "- Now @ Latitude (Reims): the SaaS that configures, builds" },
      { kind: "li", text: "  and launches a European small-sat rocket — Java/Spring Boot, React" },
      { kind: "li", text: "- MScT AI @ École Polytechnique · BSc CS @ Padova" },
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
      { kind: "p", text: "deserts (pandas + OSRM pipelines). In 2026 I joined" },
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
        ["Uptime", "5+ yrs in production"],
        ["Host", "Paris, France"],
        ["Kernel", "MScT AI · École Polytechnique"],
        ["Shell", "zsh · bash · git"],
        ["Langs", "Java Python TS C++ Go"],
        ["Locale", "EN · FR · IT"],
        ["Focus", "back-end · SaaS · ML"],
        ["Hobbies", "music · travel · film"]
      ],
      palette: ["#07090C", "#FF5F57", "#3DFFA2", "#FFC266", "#5CE1E6", "#A98BFF", "#FF7AC6", "#E6EDF3"]
    }
  },

  skills: {
    ai: {
      title: "ai_model.predict()", domain: "ai", color: "violet",
      items: [
        ["Deep Learning", 0.93], ["Machine Learning", 0.90], ["Computer Vision", 0.90],
        ["Reinforcement L.", 0.89], ["Statistics", 0.85], ["NLP", 0.75],
        ["scikit-learn", 0.98], ["TensorFlow", 0.80], ["PyTorch", 0.69],
        ["AMPL", 0.70], ["R", 0.65], ["Matlab", 0.60]
      ]
    },
    eng: {
      title: "eng_model.predict()", domain: "eng", color: "green",
      items: [
        ["Web Development", 0.97], ["TypeScript", 0.97], ["Software Eng.", 0.95],
        ["Qt / QML", 0.95], ["SQL (SQLite)", 0.95], ["C++", 0.94],
        ["JavaScript", 0.94], ["Python", 0.90], ["Java", 0.90],
        ["Angular", 0.90], ["CI/CD", 0.90], ["Spring Boot", 0.85]
      ]
    },
    alsoShipped: [
      "Go", "Kubernetes", "Docker", "Jenkins", "GitLab CI/CD", "Kafka", "FastAPI", "Django",
      "GraphQL", "FHIR", "Node.js", "React", "pandas", "OSRM", "PostgreSQL", "MySQL", "Oracle SQL",
      "Microsoft SQL Server", "SQLite", "MongoDB", "Databricks", "Azure"
    ]
  },

  /* ---------- experience.log filter facets ----------
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
