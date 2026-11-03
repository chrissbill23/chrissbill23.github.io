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
     repo      "private" shows "private repo" in place of a link
     study     { pitch, solves, users, built, status, architecture[], stack[],
               challenges[{q,a}], results[[k,v]] } -> full-width case-study card
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
    id: "adentis", hash: "e44c90a", branch: "consulting",
    company: "Adentis & Epigone", role: "Software Engineering Consultant",
    start: "2023-09", end: null, location: "Paris, France",
    desc: "Software engineering consultant across the shared consulting operations of Adentis and Epigone (Epigone joined the Adentis group): design and delivery of software solutions for enterprise clients. Client assignments so far: AG2R La Mondiale (March 2024 – April 2026) and Latitude (September 2026 – present), each detailed above.",
    tech: [],
    stack: ["Solution design", "Consulting", "Enterprise clients"]
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
  { path: "asata",               color: "green",  filter: "asata",
    note: "Asata — a suite of SaaS products I design, build and run end-to-end since March 2026: one shared PostgreSQL, Java 25 / Spring Boot 4 services, Angular and React Native clients, Docker, CI, backups and monitoring." },
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
  { key: "asata", label: "asata", match: ["asata"] },
  { key: "ai", label: "ai", match: ["ai/"] },
  { key: "vision", label: "vision", match: ["ai/computer_vision"] },
  { key: "rl", label: "reinforcement", match: ["ai/reinforcement"] },
  { key: "graphics", label: "graphics", match: ["graphics"] },
  { key: "software", label: "software", match: ["software/"] }
];

SITE.projects = [
/* ---- asata: products I design, build and run end-to-end ----
   `study` turns a card into a full-width case study on projects/. */
  { id: "mokili", dir: "asata", file: "mokili/", lang: "Java · Angular",
    title: "Mokili — applications manager & DevOps console", year: "2026 —", tag: "DevOps console", repo: "private",
    desc: "Where a team registers its applications, environments, versions and repositories, follows CI pipelines, launches deployments and runs its Scrum board.",
    study: {
      pitch: "The applications manager of Asata, and the catalogue the suite itself is registered in. A team keeps its applications, environments, roles, versions and source repositories in one place, and from there follows CI pipelines, streams job logs, launches deployments and runs a Scrum tracker.",
      solves: "Small teams scatter the lifecycle of their software across GitHub, GitLab, spreadsheets and chat. Mokili ties application → version → repository → pipeline → deployment → environment into one traceable chain, scoped per team, with notifications when something lands.",
      users: "Engineering teams and their managers, from a two-person startup to a department; it is also the catalogue the Asata suite itself is registered in.",
      built: "Everything: the backend (24 modules), the Angular web app, the GitHub and GitLab integrations, the deployment and tracker features, the database schema, CI and backups. Screens designed in Pencil.",
      architecture: [
        "Spring Boot backend split into 24 modules (auth, team, app info, environment, role, version, SCM connection, pipeline, webhook, deployment, tracker, notification, platform, console, CDN…), each with an API interface, controller, services and JPA entities.",
        "GitHub Actions and GitLab CI pipelines arrive by signed webhooks (HMAC, constant-time comparison, each delivery processed once) with a 5-minute sync as safety net; deployments start the repository's own deploy workflow and a reconciler follows the run.",
        "Angular 21 frontend on PrimeNG, signals for state, routes and sidebar driven by the user's permissions; 66 tracker screens and 16 deployment screens designed in Pencil for laptop, ultrawide and phone, light and dark.",
        "Short-lived access tokens, refresh tokens stored hashed and rotated, optional Google sign-in, permissions re-read per team on every request; connection secrets encrypted with AES-256-GCM, only the last 4 characters ever shown.",
        "Shared PostgreSQL database (47 mokili_* tables) backed up with pgBackRest: WAL archiving, weekly full and daily differential, AES-256, weekly automated restore drill. Logos over 100 KB go to S3 (MinIO locally)."
      ],
      stack: ["Java 25", "Spring Boot 4", "Spring Security · OAuth2", "Spring Data JPA", "PostgreSQL 17", "Angular 21", "PrimeNG", "ApexCharts", "TypeScript 5.9", "S3 · MinIO", "Testcontainers", "Docker Compose", "nginx", "GitHub Actions", "pgBackRest"],
      challenges: [
        { q: "Launching a deployment when the provider's answer may be lost.",
          a: "The provider is asked once, outside any transaction, with no automatic retry. A timeout makes the deployment `unknown` and a reconciler finds the run by the deployment id embedded in the workflow's run name. Final states can never be changed by a late event, and one deployment at a time per target is enforced by a unique index." },
        { q: "Matching pipelines to versions without being fooled by late or re-run events.",
          a: "Matched by commit, then by tag, never by branch name. Mokili always asks the provider for the latest commit instead of trusting the event, so a late delivery never moves a version back." },
        { q: "A one-click “Connect GitHub” that cannot be hijacked.",
          a: "A 32-byte single-use install state, stored as SHA-256 and valid 10 minutes; the user's OAuth code proves they can reach the installation, which must belong to the official app and to exactly one team. Installation tokens are cached until 5 minutes before expiry." },
        { q: "Showing CI job logs without storing gigabytes.",
          a: "Logs are streamed, never stored: the last 5,000 lines, at most 20 MB read from the end, ANSI colours and sections parsed, GitLab jobs followed live every 5 seconds." },
        { q: "A tracker that is more than a board.",
          a: "Backlog with 9 item types, sprints, burndown, increments tied to versions, and velocity, throughput, cycle-time and cumulative-flow reports." }
      ],
      results: [["tests", "305 backend"], ["modules", "24"], ["tables", "47"], ["screens designed", "80+"]],
      status: "Active since March 2026, running on Docker Compose with CI on GitHub Actions; the deploy workflow is linted but not yet exercised on GitHub."
    } },
  { id: "umoja", dir: "asata", file: "umoja/", lang: "Java · Angular",
    title: "Umoja — organizations, teams & identity", year: "2026", tag: "identity & teams", repo: "private",
    desc: "SaaS where organizations manage people, hierarchical teams, app access, roles, approval workflows and billing; it also issues the tokens the other Asata services trust.",
    study: {
      pitch: "The identity and organization hub of Asata. Companies, administrations and associations manage their people, hierarchical teams, access to applications, roles and permissions, approval requests, offices and rooms, agenda and billing. Umoja is also the single sign-on that Oro and the other services rely on.",
      solves: "Every B2B product needs the same unglamorous core: who belongs to which organization and team, who may do what, how access is requested and approved, and who gets invoiced. Umoja builds it once, isolated per organization, so each product only has to plug in.",
      users: "Companies, administrations and associations: their employees on one side, their administrators on the other. The other Asata products plug into it for sign-on and team membership.",
      built: "The whole product: backend, Angular web app, data model (31 tables), sign-on and account security, approval workflows, billing, and the integrations with Oro and Sululu.",
      architecture: [
        "Spring Boot backend at /umoja behind nginx, which proxies Oro on the same origin (no CORS); Caddy in front in production for HTTPS, HSTS, security headers and SSE flushing.",
        "Angular 21 frontend with standalone components and signals: an employee side (my apps, my teams, requests, agenda, messages, notifications, profile), an organization admin console, and a platform-staff area with the app marketplace and pricing plans per country.",
        "31 umoja_* tables on the shared PostgreSQL schema: hierarchical teams, memberships with lifecycle states, service-scoped roles, resource:action permissions, configurable request types with approval chains, audit log, subscriptions and invoices.",
        "Auth: hashed passwords, short-lived access tokens verified by the other services without any shared secret, refresh tokens kept in a secure cookie, stored hashed and rotated, lockout after repeated failed attempts.",
        "Integration: membership snapshots pushed to Oro, notifications through Sululu from a transactional outbox (localized en · fr · es · pt), a live bell fanned out to browsers over SSE, S3-compatible CDN for media, OpenStreetMap address autocomplete."
      ],
      stack: ["Java 25", "Spring Boot 4.1", "Spring Security · OAuth2", "Spring Data JPA", "PostgreSQL 17", "Angular 21", "PrimeNG 21", "TypeScript 5.9", "RxJS", "Vitest", "Testcontainers", "AWS S3 SDK", "Docker Compose", "nginx", "Caddy"],
      challenges: [
        { q: "Let other services trust Umoja's users without sharing a secret.",
          a: "Replaced a shared secret with signed tokens that other services verify through a public key, with audience checks and key rotation. Oro can verify a token but holds nothing that could issue one." },
        { q: "A stolen refresh token must not give lasting access.",
          a: "Tokens are stored hashed, rotated inside a family, and any reuse of a replaced token revokes the whole family, with a 30 s grace so two tabs refreshing at once do not lock the user out." },
        { q: "Oro must never re-grant an access that Umoja revoked, even if a sync arrives late.",
          a: "Snapshots are versioned by read time and reconciled every 10 minutes; a stale snapshot is ignored instead of applied." },
        { q: "Approval workflows that execute actions must not corrupt a request when the action fails.",
          a: "Built-in actions run in their own transaction on final approval. If it fails, the request stays approved for an admin to complete by hand." },
        { q: "One organization must never see another.",
          a: "Cross-organization administration lives under /platform behind a dedicated permission. An integration test sends another organization's ids to every endpoint and asserts nothing is read or changed." }
      ],
      results: [["tests", "271 backend · 186 frontend"], ["languages", "en · fr · es · pt"], ["data model", "31 tables + shared identity"]],
      status: "Functionally complete for a first launch; CDN and external OAuth login are in place but off by default; no payment provider yet."
    } },
  { id: "oro", dir: "asata", file: "oro/", lang: "Java · React Native",
    title: "Oro — real-time messaging", year: "2026", tag: "messaging",
    url: "https://github.com/chrissbill23/oro",
    desc: "Privacy-first messaging service shared by two products: personal chat (Oro) and workplace chat inside Umoja, with live streams, Web Push and an iOS/Android app.",
    study: {
      pitch: "The messaging service of Asata, shared by two products: Oro for personal messaging (friends, family groups, communities) and Umoja for workplace messaging (direct messages, groups, one chat per team). Real-time over Server-Sent Events, Web Push notifications, and a mobile app for iOS and Android.",
      solves: "Chat looks simple and is not: strict message order, retries that never duplicate, receipts, catching up after being offline, thousands of open streams, files that may carry malware, and privacy rules (requests from strangers, blocks, no history for newcomers, GDPR export and erasure). Oro solves all of that once, for both products.",
      users: "People, for personal chat with friends, family and communities; and organizations on Umoja, for workplace messaging with one chat per team.",
      built: "Backend, database schema and security model, real-time streaming, push notifications, attachment scanning, the iOS/Android app, load tests, monitoring and runbooks.",
      architecture: [
        "One Spring Boot service at /oro over the shared PostgreSQL 17 database: 16 tables, 27 row-level-security policies, 16 triggers and 21 functions in plain SQL with a versioned migration runner.",
        "Product isolation in the schema itself: every row carries a product id and every reference is a composite foreign key, so the database keeps an Oro user out of a Umoja conversation.",
        "Transactional outbox → in-memory LiveHub → one SSE stream per user, each with its own bounded queue and virtual-thread writer; events carry ids only and clients re-read content through the API.",
        "Attachments: type sniffed from the bytes with Apache Tika, EXIF stripped, ClamAV scan that fails closed, purge job and restic backups. Web Push (RFC 8291 / 8292) implemented with the JDK only.",
        "Identity: Umoja users verified through Umoja's public key; Oro's own accounts use short-lived access tokens and rotated refresh tokens (secure cookie for browsers, Keychain / Keystore for the app). Prometheus + Alertmanager with 20 alert rules, ECS logs that never hold message text.",
        "Mobile app in Expo / React Native with expo-router, TanStack Query and FlashList, designed in Pencil for light and dark themes."
      ],
      stack: ["Java 25", "Spring Boot 4.1", "PostgreSQL 17", "Spring Security", "SSE", "Web Push", "Apache Tika", "ClamAV", "React Native 0.88", "Expo 58", "React 19", "TypeScript", "TanStack Query", "Testcontainers", "k6", "Java Flight Recorder", "Prometheus", "Alertmanager", "Caddy", "GitHub Actions"],
      challenges: [
        { q: "Strict order and safe retries inside a conversation.",
          a: "Each send locks the conversation row and takes the next sequence number, so there are no gaps and no reordering. A client message id is unique per sender and conversation, so a retry, even a concurrent one, returns the stored message. Receipts are positions, not per-message rows." },
        { q: "Catching up after disconnects and restarts without replaying events.",
          a: "Every stream `hello` makes the client re-read what changed since its last sequence. In a load test, a restart lost none of ~58,000 generated messages and 300 of 300 simulated clients caught up." },
        { q: "Message search took 5 s for a heavy user: ILIKE is not leakproof under row-level security, so the trigram index was skipped.",
          a: "A SECURITY DEFINER search function re-applies the RLS rule and uses the index: 5,030 ms → 663 ms for a power user, 16 ms → 2 ms for a typical one." },
        { q: "A graceful stop took over 45 s and one slow client could block everyone.",
          a: "Presence fan-out was O(n²): indexing streams by organization cut the hub's work from 1,715 ms to 505 ms for 5,000 reconnects; per-stream queues isolate slow consumers; a stop now takes 0.2 s." },
        { q: "A security self-audit found 10 confirmed defects.",
          a: "All fixed: the API login could escalate to the system role, internal endpoints were reachable from the internet, streams outlived revoked tokens, interleaved syncs could restore revoked access, and there were no rate limits or quotas." }
      ],
      results: [["tests", "223 in 49 classes"], ["load test", "3,000 concurrent simulated users on 4 CPUs"], ["load-test delivery", "318,326 / 318,683 tracked · none lost, none twice"], ["query plans", "page of 40 in 0.2 ms over 9.9M generated messages"]],
      status: "Backend and mobile app working on the local stack; single instance for now (LISTEN/NOTIFY planned), phone push and object storage not yet done."
    } },
  { id: "sululu", dir: "asata", file: "sululu/", lang: "Java · Spring Boot",
    title: "Sululu — notification service", year: "2026", tag: "notifications", repo: "private",
    desc: "Multi-tenant notification service: email, in-app and push through one API, with ordered, idempotent, fully traced delivery.",
    study: {
      pitch: "The notification backbone of Asata. Any product sends email, in-app and push notifications through one HTTP API; each product is a tenant with its own API keys and only ever sees its own data.",
      solves: "Every product needs notifications that are never lost, never sent twice by accident and arrive in order per recipient, even when the mail provider, the broker or a worker fails. Sululu takes that problem out of each app and solves it once.",
      users: "The Asata products themselves (Mokili, Umoja, Oro and the next ones), and through them every one of their users.",
      built: "The whole service: API, delivery workers, queue integration, security model, metrics and alerts, load tests, deployment and runbooks.",
      architecture: [
        "Modular monolith: one image, three processes (public API, admin API with provider webhooks, delivery worker), each with its own database login and only the rights it needs.",
        "Accept → relay → deliver: a notification, one delivery per channel and an outbox event are committed in one transaction; a relay publishes the outbox to NATS JetStream; durable pull consumers per channel deliver over SMTP, the in-app inbox or FCM.",
        "PostgreSQL is the source of truth, the broker only distributes wake-ups: retries, expired leases, lane sweeping and retention all run from the database, so the API keeps accepting while NATS is down.",
        "Row-level security on every table, API keys stored as SHA-256 and checked through SECURITY DEFINER functions, one circuit breaker per provider, quarantine for poison deliveries, bounded retries with jittered backoff.",
        "Prometheus metrics with 13 unit-tested alert rules, ECS structured logs with correlation ids, OpenTelemetry traces from the request to the delivery."
      ],
      stack: ["Java 25", "Spring Boot 4.1", "Spring Data JPA · Hibernate 7", "PostgreSQL 17", "NATS JetStream", "Spring Security", "MapStruct", "OpenTelemetry", "Prometheus", "Testcontainers", "k6", "Docker Compose", "Caddy", "GitHub Actions"],
      challenges: [
        { q: "Keep deliveries in order per recipient with many workers, redeliveries and restarts.",
          a: "Each notification takes a sequence number under a row lock; a worker claims a delivery with a single conditional UPDATE that only succeeds if it is the head of its lane. Verified by tests running 12 workers over shuffled, duplicated wake-ups with injected faults; a mutation test proves the guard matters." },
        { q: "SMTP and FCM have no idempotency key: a timeout after sending is ambiguous.",
          a: "Such outcomes become `unknown` and are never retried blindly; an operator replays them. Processing is at-least-once with durable deduplication, and the documentation says so instead of claiming exactly-once." },
        { q: "The first load test reached only ~380 of 1,000 req/s, bound by PostgreSQL WAL writes (p95 7.3 s, 41% timeouts).",
          a: "Profiled the wait events, cut the statements per notification from ~31 to ~14, collapsed the claim into one UPDATE, dropped indexes and added fail-fast overload protection. Result in the load test: 1,000 req/s sustained for 5 minutes with p95 at 53 ms." },
        { q: "A flood of fake API keys could exhaust the database pool.",
          a: "Key ids are cached in memory and at most 4 credential reads run concurrently. The worker's login was removed from the API process and the admin API moved to its own process." }
      ],
      results: [["tests", "101 automated"], ["load test", "1,000 req/s sustained 5 min · p95 52.8 ms"], ["load-test drain", "~2,960 deliveries/s"], ["load-test integrity", "0 ordering violations · 0 duplicates over ~1.8M deliveries"]],
      status: "Working end-to-end on Docker Compose with load tests and runbooks; not yet on the production server, single node, push through FCM only."
    } },

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
