/* ------------------------------------------------------------------
   works.js — jobs / internships (SITE.experience) and projects
   (SITE.projects). This is the file to edit when you ship something.

   experience entry
     id        unique key (referenced by profile.featuredExperience)
     branch    main | consulting | research | freelance   (colour + legend)
     start/end "YYYY-MM"; end = null means PRESENT
     tech      display names; filter slugs are derived automatically
               ("Microsoft SQL Server" -> microsoft-sql-server, "GitLab CI" -> gitlab-ci)
     featured  short copy + chips used by the home page

   project entry
     dir       one of SITE.projectDirs[].path
     file      the "filename" shown in the card tab
     url       GitHub (or other) link; omit if private
   ------------------------------------------------------------------ */
window.SITE = window.SITE || {};

SITE.experience = [
  {
    id: "latitude", hash: "f1a9c3e", branch: "consulting",
    company: "Latitude", role: "Software Engineer",
    start: "2026-09", end: null, location: "Reims, France",
    desc: "Latitude builds a French small-satellite launcher — up to 300 kg to sun-synchronous orbit, roughly one launch a week at full cadence, first flight planned for 2027, ~160 people and €50M+ raised. I design and build the internal SaaS the engineering teams run on: web platforms to configure a launcher for a given mission, drive its build and integration, and prepare and run launch campaigns — turning spreadsheets and tribal knowledge into traceable, versioned workflows. Full ownership from the PostgreSQL/MySQL data models and Java/Spring Boot APIs to the React front-end, containerised with Docker and shipped continuously through GitLab CI/CD to users sitting a few desks away.",
    tech: ["Java", "Spring Boot", "React", "JavaScript", "TypeScript", "PostgreSQL", "MySQL", "Docker", "GitLab CI"],
    stack: ["Java", "Spring Boot", "React", "PostgreSQL", "MySQL", "Docker", "GitLab CI/CD", "Internal SaaS"],
    featured: {
      summary: "Internal SaaS for a European small-satellite launcher: mission configuration, vehicle build & integration tracking and launch-campaign tooling for ~160 engineers in Reims.",
      chips: ["Java", "Spring Boot", "React", "PostgreSQL"]
    }
  },
  {
    id: "delane", hash: "d4e7a21", branch: "research",
    company: "Delane SI", role: "Data Engineer · R&D",
    start: "2026-06", end: "2026-09", location: "Paris, France",
    desc: "R&D unit tackling France's medical deserts as a geo-economic optimisation problem: which levers — salaries, benefits, incentives — best attract healthcare workers to under-served areas, under constraints of travel distance, local demand and supply, and the number of doctors, nurses and other practitioners available. I owned the data layer: reproducible Python/pandas pipelines that ingest, clean and join public health, demographic and geographic datasets; road-network travel times computed at scale with OSRM; everything shipped as Docker services so analysts and the optimisation model work from one trusted, versioned dataset.",
    tech: ["Python", "Pandas", "OSRM", "Docker", "Data Engineering"],
    stack: ["Python", "pandas", "OSRM", "Docker", "Geospatial pipelines"],
    featured: {
      summary: "Geo-economic R&D on France's medical deserts — Python/pandas pipelines over health, demographic and geographic data, OSRM travel-time computation, Dockerised for the optimisation team.",
      chips: ["Python", "pandas", "OSRM", "Docker"]
    }
  },
  {
    id: "ag2r", hash: "a9f3e21", branch: "consulting",
    company: "AG2R La Mondiale", role: "Software Engineer",
    start: "2024-03", end: "2026-04", location: "Esvres, France",
    desc: "In an agile team of 9, I designed and developed IT tools and platforms that process single documents or whole batches and distribute them through multiple channels — mail, letters, electronic document management and e-signature. Batch processing and distribution in Python; single-document platforms built as Java back-ends with Angular front-ends. Also owned bug fixing and CI/CD with GitLab, Jenkins and Kubernetes.",
    tech: ["Python", "Java", "JavaScript", "TypeScript", "Angular", "Microsoft SQL Server", "SQLite", "GitLab CI", "Jenkins", "Kubernetes"],
    stack: ["Python", "Java", "TypeScript", "Angular", "Microsoft SQL Server", "SQLite", "GitLab CI/CD", "Jenkins", "Kubernetes"],
    featured: {
      summary: "Document-processing & distribution platforms for a top French insurer — Python batch pipelines, Java/Angular services, CI/CD on GitLab, Jenkins & Kubernetes.",
      chips: ["Java", "Angular", "Python", "K8s"]
    }
  },
  {
    id: "epigone", hash: "5d07b1c", branch: "consulting",
    company: "Epigone", role: "IT Consultant",
    start: "2024-02", end: null, location: "Paris, France",
    desc: "Epigone was acquired by Adentis, so I joined as an IT consultant designing and building IT solutions for medium and large clients. First mission: AG2R La Mondiale.",
    tech: [],
    stack: ["Solution design", "Consulting"]
  },
  {
    id: "adentis", hash: "e44c90a", branch: "consulting",
    company: "Adentis", role: "IT Consultant",
    start: "2023-09", end: null, location: "Paris, France",
    desc: "Designing and building IT solutions for medium and large enterprise clients as part of the Adentis consulting group.",
    tech: [],
    stack: ["Consulting", "Architecture"]
  },
  {
    id: "ike", hash: "b21f6e8", branch: "freelance",
    company: "iKe Tech", role: "Full-stack Web Developer",
    start: "2023-02", end: "2023-09", location: "Paris, France",
    desc: "Sole engineer on a responsive business-card sharing web app: designed the database, a FastAPI micro-services server and a Django + React front-end from scratch, delivered incrementally with GitHub.",
    tech: ["Python", "FastAPI", "Django", "React", "JavaScript", "PostgreSQL", "GitHub"],
    stack: ["Python", "FastAPI", "Django", "React", "Micro-services"]
  },
  {
    id: "imagino", hash: "7c2b0d4", branch: "main",
    company: "imagino", role: "Software Engineer · Back-end",
    start: "2022-07", end: "2023-02", location: "Paris, France",
    desc: "Implemented and extended back-end features of a data-driven marketing SaaS: a batch pipeline processing end-client data, then stats and ad campaigns over SMS, email, Google Ads and Facebook Ads. Go and Python over MongoDB, MySQL, PostgreSQL, Oracle SQL, Microsoft SQL Server and Databricks; agile, CI/CD on GitLab and Azure.",
    tech: ["Go", "Python", "React", "JavaScript", "MongoDB", "MySQL", "PostgreSQL", "Oracle SQL", "Microsoft SQL Server", "Databricks", "Docker", "GitLab CI", "Azure"],
    stack: ["Go", "Python", "React", "MongoDB", "MySQL", "PostgreSQL", "Oracle SQL", "Microsoft SQL Server", "Databricks", "Docker", "Azure"],
    featured: {
      summary: "Data-driven marketing SaaS: batch pipelines triggering SMS, email & ads campaigns across SQL and NoSQL stores.",
      chips: ["Go", "Python", "MongoDB", "Azure"]
    }
  },
  {
    id: "tech2heal", hash: "0f9a3d2", branch: "main",
    company: "Tech2Heal", role: "Artificial Intelligence Engineer",
    start: "2022-03", end: "2022-06", location: "Paris, France",
    desc: "In a team of 4, built AI and web solutions that automatically monitor patients' health and alert their doctor in emergencies — Python/FastAPI back-end and Angular front-end, with GraphQL over FHIR-structured healthcare data.",
    tech: ["Python", "FastAPI", "Angular", "JavaScript", "GraphQL", "FHIR", "Data Science", "Machine Learning", "GitLab CI"],
    stack: ["Python", "FastAPI", "Angular", "GraphQL", "FHIR", "Data Science", "Machine Learning", "GitLab"]
  },
  {
    id: "inria", hash: "3e81f9a", branch: "research",
    company: "INRIA", role: "Deep Learning Researcher",
    start: "2021-04", end: "2021-09", location: "Rennes, France",
    desc: "Research internship at the French national institute for digital science (HyAIAI interpretable-AI lab). Proposed a framework that mines neuron values correlated with a DNN classifier's correct and wrong predictions, to detect future mispredictions.",
    tech: ["Python", "Pandas", "TensorFlow", "PyTorch", "Machine Learning", "Deep Learning", "XAI", "Data Mining"],
    stack: ["Python", "pandas", "TensorFlow", "PyTorch", "Machine Learning", "Deep Learning", "XAI", "Data Mining"],
    featured: {
      summary: "Framework mining neuron activations correlated with a DNN's wrong predictions, to detect future mispredictions.",
      chips: ["PyTorch", "XAI", "Data Mining"]
    }
  },
  {
    id: "amadeus", hash: "8a6e2c7", branch: "research",
    company: "Amadeus", role: "Data Scientist",
    start: "2020-04", end: "2020-09", location: "Nice, France",
    desc: "Travel-sector internship: built machine-learning and deep-learning models that forecast Customer Lifetime Value from travellers' characteristics and purchase behaviour — completed successfully.",
    tech: ["Python", "Pandas", "TensorFlow", "PyTorch", "Data Science", "Machine Learning", "Deep Learning"],
    stack: ["Python", "pandas", "TensorFlow", "PyTorch", "Data Science", "Machine Learning", "Deep Learning"]
  },
  {
    id: "sogea", hash: "1c4d8f0", branch: "main",
    company: "SOGEA S.R.L", role: "Software Engineer",
    start: "2018-06", end: "2019-09", location: "Treviso, Italy",
    desc: "Permanent role building desktop applications and management systems for 100+ customers across industries. Led the largest project: a desktop + tablet app automating clothes-production processes for a fast-fashion multinational, in C++/Qt on PostgreSQL.",
    tech: ["C++", "Qt", "PostgreSQL"]
  },
  {
    id: "comunica", hash: "6b3e5a9", branch: "freelance",
    company: "Studio Com.unica", role: "Full-stack Web Developer",
    start: "2017-10", end: "2018-01", location: "Padova, Italy",
    desc: "Startup contract: system design and development of “Mode”, a web app bridging small fashion businesses and their clients. Node.js, Angular, TypeScript and MongoDB, versioned on GitHub and deployed on Azure.",
    tech: ["JavaScript", "TypeScript", "Node.js", "Angular", "MongoDB", "GitHub", "Azure"],
    stack: ["Node.js", "Angular", "TypeScript", "MongoDB", "Azure"]
  }
];

/* Directories of the projects/ explorer, in display order.
   `filter` is the chip in the toolbar that selects this dir. */
SITE.projectDirs = [
  { path: "ai/deep_learning",    color: "violet", filter: "ai" },
  { path: "ai/computer_vision",  color: "cyan",   filter: "vision" },
  { path: "ai/reinforcement",    color: "pink",   filter: "rl" },
  { path: "ai/machine_learning", color: "green",  filter: "ai" },
  { path: "graphics",            color: "orange", filter: "graphics" },
  { path: "software/frameworks", color: "amber",  filter: "software" },
  { path: "software/web",        color: "amber",  filter: "software" },
  { path: "software/systems",    color: "amber",  filter: "software" }
];

SITE.projectFilters = [
  { key: "all", label: "all" },
  { key: "ai", label: "ai", match: ["ai/"] },
  { key: "vision", label: "vision", match: ["ai/computer_vision"] },
  { key: "rl", label: "rl", match: ["ai/reinforcement"] },
  { key: "graphics", label: "graphics", match: ["graphics"] },
  { key: "software", label: "software", match: ["software/"] }
];

SITE.projects = [
  /* ---- ai/deep_learning ---- */
  { id: "dnn-debugging", dir: "ai/deep_learning", file: "dnn_debugging.py", lang: "Python",
    title: "Mining a DNN's blind spots", year: "2021", tag: "INRIA · HyAIAI",
    desc: "INRIA internship: mines neuron groups correlated with wrong predictions to detect future errors." },
  { id: "adversarial", dir: "ai/deep_learning", file: "adversarial_robust.py", lang: "Python",
    title: "Adversarial robustness", year: "2020—21", tag: "Enedis",
    desc: "Robust classifier of high/low-voltage units against small and large perturbations, for Enedis." },
  { id: "simpsons", dir: "ai/deep_learning", file: "simpsons_cnn.py", lang: "Python",
    title: "The Simpsons classifier", year: "2018", tag: "CNN",
    desc: "My first DL project — compared techniques to classify Simpsons characters; a CNN won.",
    url: "https://github.com/chrissbill23/The-Simpsons-Classifier" },

  /* ---- ai/computer_vision ---- */
  { id: "asl", dir: "ai/computer_vision", file: "asl_realtime.py", lang: "Python",
    title: "Sign-language translator", year: "2019—20", tag: "F1 = 0.93",
    desc: "Real-time translator of American Sign Language letters from a webcam feed.",
    url: "https://github.com/marcogma/SignLanguageProject" },
  { id: "nfl", dir: "ai/computer_vision", file: "nfl_impact.py", lang: "Python",
    title: "NFL helmet-impact detection", year: "2020", tag: "Kaggle",
    desc: "Kaggle × NFL × AWS: detect helmet impacts from sideline & end-zone video + tracking data.",
    url: "https://github.com/chrissbill23/Kaggle-Challenge-NFL-1st-and-Future-Impact-Detection" },
  { id: "mean-shift", dir: "ai/computer_vision", file: "mean_shift.py", lang: "Python",
    title: "Epanechnikov mean shift", year: "2020", tag: "segmentation",
    desc: "Mean-shift image segmentation with an Epanechnikov kernel, benchmarked vs a Gaussian kernel.",
    url: "https://github.com/chrissbill23/Epanechnikov-Mean-Shift" },

  /* ---- ai/reinforcement ---- */
  { id: "bipedal", dir: "ai/reinforcement", file: "bipedal_walker.py", lang: "Python",
    title: "Bipedal Walker & CartPole", year: "2020", tag: "OpenAI Gym",
    desc: "Empirical study of agents and hyper-parameters across two environments of different complexity.",
    url: "https://github.com/chrissbill23/INF585-Reinforcement-Learning" },
  { id: "plants", dir: "ai/reinforcement", file: "plant_watering.py", lang: "Python",
    title: "Plant watering problem", year: "2021", tag: "RL",
    desc: "An RL agent that learns to water a garden of plants under resource constraints.",
    url: "https://github.com/chrissbill23/The-Plant-Watering-Problem" },

  /* ---- ai/machine_learning ---- */
  { id: "cltv", dir: "ai/machine_learning", file: "cltv_forecast.ipynb", lang: "Python",
    title: "CLTV forecasting", year: "2020", tag: "Amadeus",
    desc: "Amadeus internship: ML/DL models predicting an airline's future high-value travellers." },
  { id: "link-prediction", dir: "ai/machine_learning", file: "link_prediction.py", lang: "Python",
    title: "Link prediction", year: "2020", tag: "graphs",
    desc: "Predicting anchor links between web pages from their content, trained on graph ground-truth.",
    url: "https://github.com/marcogma/LinkPredictionOfFrenchWebGraph" },
  { id: "felicita", dir: "ai/machine_learning", file: "felicita.R", lang: "R",
    title: "Felicità regression", year: "2017", tag: "R",
    desc: "My first data-science project: regression on what makes people happy.",
    url: "https://github.com/chrissbill23/Data-Mining-Project-Felicita-Dataset-using-R" },
  { id: "maxi-pizza", dir: "ai/machine_learning", file: "maxi_pizza.mod", lang: "AMPL",
    title: "Maxi Pizza optimiser", year: "2017", tag: "LP",
    desc: "Linear programming to maximise a local pizzeria's revenue under constraints.",
    url: "https://github.com/chrissbill23/Maxi-pizza" },

  /* ---- graphics ---- */
  { id: "geodesics", dir: "graphics", file: "geodesics_heat.cpp", lang: "C++",
    title: "Geodesics in Heat", year: "2019", tag: "C++",
    desc: "Crane's heat method for geodesic distances on meshes and point clouds, with modified equations.",
    url: "https://github.com/chrissbill23/GeodesicInHeat" },
  { id: "world3d", dir: "graphics", file: "world_3d.cs", lang: "C#",
    title: "Advanced 3D graphics", year: "2020", tag: "Unity",
    desc: "Unity tools & scripts for a 3D world where animals and humans interact and evolve.",
    url: "https://github.com/chrissbill23/Advanced-3D-Graphics-Project" },
  { id: "boids", dir: "graphics", file: "boid_fishes.cpp", lang: "C++",
    title: "Boid fishes", year: "2020", tag: "animation",
    desc: "Flocking simulation of fish using Reynolds' three steering forces.",
    url: "https://github.com/chrissbill23/BoidsFishes" },

  /* ---- software/frameworks ---- */
  { id: "imgutils", dir: "software/frameworks", file: "imgutils/", lang: "Python",
    title: "ImgUtils", year: "2020—", tag: "open source",
    desc: "A framework for faster image-classification pipelines: loading & preprocessing.",
    url: "https://github.com/chrissbill23/ImgUtils" },
  { id: "vgoose", dir: "software/frameworks", file: "vgoose/", lang: "TypeScript",
    title: "VGoose", year: "2018—", tag: "open source",
    desc: "An OOP abstraction over Mongoose written in TypeScript.",
    url: "https://github.com/chrissbill23/VGoose" },
  { id: "dsa", dir: "software/frameworks", file: "dsa/", lang: "Python",
    title: "Data structures & algorithms", year: "2022—", tag: "CS fundamentals",
    desc: "My Python implementations of classic data structures and algorithms.",
    url: "https://github.com/chrissbill23/Data-Structures-and-Algorithms" },

  /* ---- software/web ---- */
  { id: "sondaggio", dir: "software/web", file: "sondaggio/", lang: "JavaScript",
    title: "Sondaggio.com", year: "2022", tag: "web app",
    desc: "A polling / survey web application.",
    url: "https://github.com/chrissbill23/Sondaggio.com" },
  { id: "flask-cache", dir: "software/web", file: "flask_cache.py", lang: "Python",
    title: "Flask server caching", year: "2022", tag: "GraphQL",
    desc: "GraphQL data server that caches university search results for repeat queries.",
    url: "https://github.com/chrissbill23/Flask-Server-Caching" },
  { id: "my-eventi", dir: "software/web", file: "my_eventi/", lang: "PHP",
    title: "My Eventi", year: "2017", tag: "a11y",
    desc: "Accessible website for event management and booking — my first website.",
    url: "https://github.com/chrissbill23/My-Eventi-simple-accessible-web-site-" },

  /* ---- software/systems ---- */
  { id: "production-mgmt", dir: "software/systems", file: "production_mgmt/", lang: "C++ / Qt",
    title: "Production management app", year: "2018", tag: "Qt",
    desc: "SOGEA internship: desktop + tablet app managing clothes production for Imperial Fashion." },
  { id: "feynman", dir: "software/systems", file: "feynman_it/", lang: "C++ / Qt",
    title: "School IT system", year: "2017", tag: "Qt",
    desc: "IT system for Liceo Richard Feynman: Moodle-like features, student & staff management.",
    url: "https://github.com/chrissbill23/Liceo-scientifico-Richard-Feynman" }
];
