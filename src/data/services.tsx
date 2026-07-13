import type { ReactNode } from "react";

export type ProcessStep = {
  title: string;
  detail: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type CaseStudy = {
  client: string;
  summary: string;
  result: string;
  quote?: string;
  quoteAuthor?: string;
  quoteRole?: string;
  quoteLocation?: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Deliverable = {
  title: string;
  detail: string;
};

export type StackGroup = {
  title: string;
  items: string[];
};

export type WizardQuestion = {
  key: string;
  label: string;
  kicker: string;
  options: string[];
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  plain: string;
  description: string;
  tags: string[];
  span: 2 | 3;
  dark?: boolean;
  icon: ReactNode;
  // Rich page content
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  // Editorial hero: headline split into lead + italic accent + tail
  headlineLead: string;
  headlineAccent: string;
  headlineTail: string;
  deck: string;
  stats: Stat[];
  overview: string[];
  overviewPull: string;
  useCases?: Deliverable[];
  useCasesIntro?: string;
  deliverables: Deliverable[];
  deliverablesIntro?: string;
  process: ProcessStep[];
  techStack: string[];
  stackGroups?: StackGroup[];
  caseStudy?: CaseStudy;
  faqs: Faq[];
  // Per-service intake wizard
  wizardHeadlineLead: string;
  wizardHeadlineAccent: string;
  wizard: WizardQuestion[];
};

const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const services: Service[] = [
  {
    slug: "web-applications",
    number: "01",
    title: "Web Applications",
    plain: "Custom web apps for real workflows",
    description:
      "Dashboards, portals, SaaS platforms, and marketplaces engineered to feel fast, clear, and ready to grow.",
    tags: ["Next.js", "React", "APIs", "Performance"],
    span: 3,
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
      </svg>
    ),
    seoTitle: "Web Application Development — Teak Software Studio",
    seoDescription:
      "Custom web application development for SaaS platforms, dashboards, portals, marketplaces, and API-backed business tools. Built with Next.js, React, and TypeScript.",
    eyebrow: "Service 01 — Web Applications",
    headlineLead: "Custom web application",
    headlineAccent: "development",
    headlineTail: ".",
    deck: "We design and build dashboards, portals, SaaS platforms, marketplaces, and API-backed business tools that feel fast, clear, and ready to grow.",
    stats: [
      { value: "Ship", label: "Built to launch, learn, and improve with real users" },
      { value: "Full-stack", label: "Product design, frontend, APIs, and data" },
      { value: "1 team", label: "No hand-offs between design and build" },
    ],
    overview: [
      "A serious web application is more than screens in a browser. It has roles, permissions, workflows, dashboards, search, payments, files, notifications, integrations, and data that has to stay reliable as the business grows.",
      "We build that full product surface: calm frontends for complex work, structured application logic, API layers, database-backed features, and the measurement needed to keep the product fast after launch. We can start from a blank slate, extend an existing backend, or rebuild a slow product without losing what already works.",
    ],
    overviewPull:
      "Complexity is the enemy of adoption. Our job is to make business software feel obvious.",
    useCases: [
      {
        title: "SaaS platforms",
        detail:
          "Multi-tenant products with accounts, roles, billing, onboarding, dashboards, and admin tools.",
      },
      {
        title: "Internal dashboards",
        detail:
          "Operational views for teams that need to monitor data, approve work, and act quickly.",
      },
      {
        title: "Customer portals",
        detail:
          "Secure self-service spaces for clients, members, vendors, or partners to manage their work with you.",
      },
      {
        title: "Marketplaces",
        detail:
          "Two-sided products with listings, profiles, search, messaging, payments, and trust workflows.",
      },
      {
        title: "Workflow systems",
        detail:
          "Booking, intake, approval, scheduling, reporting, and automation tools shaped around your process.",
      },
      {
        title: "API-backed tools",
        detail:
          "Front ends for existing APIs, CRMs, databases, AI systems, payment providers, and third-party services.",
      },
    ],
    useCasesIntro: "Web apps for real business workflows, not just polished screens.",
    deliverables: [
      {
        title: "Interfaces that stay calm under load",
        detail:
          "Information-dense screens that stay legible with large tables, filters, live states, permissions, and real operational pressure.",
      },
      {
        title: "Architecture you can keep building on",
        detail:
          "A data model, API layer, authentication setup, and deployment path designed for the next version, not just the first launch.",
      },
      {
        title: "Performance you can prove",
        detail:
          "We measure bundle size, query time, render cost, and key interactions throughout the build so speed stays visible.",
      },
    ],
    deliverablesIntro:
      "The parts that make a web app usable, maintainable, and ready for real customers.",
    process: [
      {
        title: "Scope and architecture",
        detail:
          "We map users, roles, workflows, data, integrations, and risks before design starts so the foundation matches the product you actually need.",
      },
      {
        title: "Interface design",
        detail:
          "We design the core screens with realistic data, edge cases, empty states, and mobile behavior so the app is usable before it is beautiful.",
      },
      {
        title: "Engineering",
        detail:
          "We build the React and Next.js front end, connect APIs or create them, wire auth and data flows, and keep performance measured throughout.",
      },
      {
        title: "Launch and improve",
        detail:
          "We deploy, monitor, fix launch issues, and keep a clear path for the next features after real users start using the product.",
      },
    ],
    techStack: ["Next.js", "React", "TypeScript", "shadcn/ui", "REST / GraphQL", "PostgreSQL", "Auth", "Stripe", "Edge"],
    stackGroups: [
      {
        title: "Frontend",
        items: ["Next.js", "React", "TypeScript", "shadcn/ui", "Tailwind CSS", "Framer Motion"],
      },
      {
        title: "Backend & APIs",
        items: ["FastAPI", "Node.js", "REST", "GraphQL", "Webhooks"],
      },
      {
        title: "Data & Auth",
        items: ["PostgreSQL", "Redis", "Prisma", "Supabase Auth", "Clerk"],
      },
      {
        title: "Payments & Deployment",
        items: ["Stripe", "Vercel", "Docker", "AWS", "Sentry"],
      },
    ],
    caseStudy: {
      client: "SNS Events",
      summary:
        "We built a live web experience for a Dallas-Fort Worth event planner with service showcases, custom package requests, and online booking, turning a high-touch service into a clearer digital workflow.",
      result: "Brand, booking, and client intake in one responsive web product",
      quote:
        "Teak made the booking experience feel clear and professional. The new site gives clients an easier way to understand our services, request packages, and start planning with confidence.",
      quoteAuthor: "Zakaria Sakib",
      quoteRole: "Founder, SNS Events",
      quoteLocation: "Dallas-Fort Worth, TX",
    },
    faqs: [
      {
        question: "Can you work with our existing backend?",
        answer:
          "Absolutely. We regularly build front ends against existing APIs and databases, and can extend or refactor your backend where it helps.",
      },
      {
        question: "Can you build the full web application from scratch?",
        answer:
          "Yes. We can handle product scope, UX, interface design, frontend engineering, backend APIs, database design, authentication, deployment, and post-launch iteration.",
      },
      {
        question: "Do you build SaaS products?",
        answer:
          "Yes. We build SaaS products with accounts, roles, onboarding, dashboards, subscription billing, admin tools, and the operational workflows around them.",
      },
      {
        question: "How long does a web app project take?",
        answer:
          "A focused first version often takes 8 to 12 weeks. Larger platforms, complex integrations, or rebuilds can take longer, so we scope the smallest useful launch before estimating the full roadmap.",
      },
      {
        question: "Can you improve an existing web app?",
        answer:
          "Yes. We can audit the current product, improve performance and UX, rebuild problem areas, add new features, or migrate the app gradually instead of starting over.",
      },
      {
        question: "How do you keep it fast at scale?",
        answer:
          "We measure real performance from the start — bundle size, query times, render cost — and use caching, pagination, and edge rendering where they matter.",
      },
      {
        question: "Can you add AI features to a web app?",
        answer:
          "Yes. We can add copilots, smart search, document workflows, AI-powered automation, or model-backed features when they make the product genuinely more useful.",
      },
      {
        question: "Who owns the code after launch?",
        answer:
          "You do. We build in your repository or transfer the codebase, documentation, and deployment access so your team can keep operating the product.",
      },
    ],
    wizardHeadlineLead: "Let's scope your",
    wizardHeadlineAccent: "web application",
    wizard: [
      {
        key: "kind",
        kicker: "Your app",
        label: "What kind of web app is it?",
        options: ["Dashboard / analytics", "Customer portal", "Marketplace", "Internal tool", "Something else"],
      },
      {
        key: "starting",
        kicker: "Starting point",
        label: "What are you starting from?",
        options: ["Blank slate", "Have designs", "Existing app to extend", "Rebuild / migration"],
      },
      {
        key: "backend",
        kicker: "Data & backend",
        label: "Is there a backend already?",
        options: ["Build it fresh", "Existing API to connect", "Existing DB, no API", "Not sure"],
      },
      {
        key: "timeline",
        kicker: "Timing",
        label: "When do you want to start?",
        options: ["ASAP", "This quarter", "Next 6 months", "Just exploring"],
      },
    ],
  },
  {
    slug: "mobile-apps",
    number: "02",
    title: "Mobile Apps",
    plain: "Mobile app development for iOS and Android",
    description:
      "Flutter apps for iPhone and Android — clean UX, smooth performance, push notifications, offline support, and store-ready releases.",
    tags: ["Flutter", "iOS & Android", "App Store"],
    span: 2,
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M11 18.5h2" />
      </svg>
    ),
    seoTitle: "Mobile App Development — iOS & Android — Teak Software Studio",
    seoDescription:
      "Flutter mobile app development for iOS and Android — clean UX, smooth performance, push notifications, offline support, and App Store launch support.",
    eyebrow: "Service 02 — Mobile Apps",
    headlineLead: "Mobile app development",
    headlineAccent: "for iOS and Android",
    headlineTail: ".",
    deck: "We design and build Flutter apps for iPhone and Android that feel polished, work reliably, and are ready for App Store and Play Store launch.",
    stats: [
      { value: "Store-ready", label: "Built for App Store and Play Store launch" },
      { value: "Native", label: "Built to feel at home on each platform" },
      { value: "Store", label: "Submission and launch support included" },
    ],
    overview: [
      "A good mobile app has to earn a place on someone's home screen. It needs to open quickly, feel natural in the hand, handle flaky connections, respect platform expectations, and make the core action obvious from the first session.",
      "We build that full mobile product surface with Flutter: polished interfaces, reliable app architecture, API-backed features, offline data where needed, push notifications, analytics, crash reporting, and the release process required to get through the App Store and Play Store cleanly.",
    ],
    overviewPull:
      "Users never see your architecture. They feel it — in every tap, scroll, and transition.",
    useCases: [
      {
        title: "Consumer apps",
        detail:
          "Phone-first products for habits, finance, communities, media, wellness, and everyday workflows.",
      },
      {
        title: "SaaS companion apps",
        detail:
          "Mobile extensions of web platforms for customers, teams, operators, or field users.",
      },
      {
        title: "Booking and marketplace apps",
        detail:
          "Discovery, profiles, scheduling, payments, messaging, and service workflows on mobile.",
      },
      {
        title: "Internal field apps",
        detail:
          "Apps for teams that need forms, checklists, photos, offline data, or real-time updates away from a desk.",
      },
      {
        title: "Finance and tracking apps",
        detail:
          "Secure mobile products for transactions, progress tracking, alerts, insights, and personal data.",
      },
      {
        title: "AI-assisted apps",
        detail:
          "Mobile experiences with copilots, smart search, document workflows, voice, camera, or automation.",
      },
    ],
    useCasesIntro: "Mobile apps for real-world usage, not just polished launch screens.",
    deliverables: [
      {
        title: "Native feel, both platforms",
        detail:
          "Flutter interfaces tuned for iOS and Android conventions, with native integrations where the product needs them.",
      },
      {
        title: "Reliable app behavior",
        detail:
          "Offline support, push notifications, deep links, analytics, crash reporting, and sync patterns shaped around real usage.",
      },
      {
        title: "Shipped to the stores",
        detail:
          "Provisioning, listings, review, and release handled — under your developer account or ours.",
      },
    ],
    deliverablesIntro:
      "The parts that make a mobile app reliable, store-ready, and useful after launch.",
    process: [
      {
        title: "Product & flows",
        detail:
          "We define the core screens, user journeys, and platform expectations before committing to the build.",
      },
      {
        title: "Design",
        detail:
          "We design mobile-first flows with real states, gestures, permissions, empty screens, and store requirements in mind.",
      },
      {
        title: "Build",
        detail:
          "We build the Flutter app, connect APIs, wire native capabilities, and test the experience across devices.",
      },
      {
        title: "Submit & support",
        detail:
          "We handle App Store and Play Store submission, then support updates and new features over time.",
      },
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Push / FCM", "SQLite", "App Store"],
    stackGroups: [
      {
        title: "App",
        items: ["Flutter", "Dart", "Material", "Cupertino", "Responsive layouts"],
      },
      {
        title: "Native features",
        items: ["Push notifications", "Deep links", "Camera / media", "Biometrics", "In-app purchases"],
      },
      {
        title: "Data & APIs",
        items: ["REST", "GraphQL", "Firebase", "SQLite", "Secure storage"],
      },
      {
        title: "Release & Monitoring",
        items: ["App Store Connect", "Play Console", "Firebase Crashlytics", "Sentry", "TestFlight"],
      },
    ],
    faqs: [
      {
        question: "Can Flutter apps really feel native?",
        answer:
          "Yes. Flutter gives us a shared codebase with polished native-feeling UI, and we use platform-specific integrations when the app needs deeper iOS or Android behavior.",
      },
      {
        question: "Do you handle App Store submission?",
        answer:
          "We do — provisioning, store listings, review, and release. We can publish under your developer account or guide you through setting one up.",
      },
      {
        question: "How long does a mobile app take?",
        answer:
          "A focused first version often takes 8 to 12 weeks. Apps with complex backend logic, payments, offline sync, or native integrations can take longer, so we scope the first useful release before expanding the roadmap.",
      },
      {
        question: "Can you build iOS first?",
        answer:
          "Yes. We can launch iOS first, Android first, or both together. Flutter keeps the shared foundation in place while still letting us tune platform-specific details.",
      },
      {
        question: "Can you work from existing designs?",
        answer:
          "Yes. We can build from your Figma files, refine an existing design system, or design the mobile experience from scratch if the product is still early.",
      },
      {
        question: "Can you turn our web app into a mobile app?",
        answer:
          "Yes. We can bring the right parts of an existing web product to mobile, connect to your current APIs, and reshape the experience around phone-first usage.",
      },
      {
        question: "Do you support the app after launch?",
        answer:
          "Yes. We can monitor crashes, support store updates, add features, improve onboarding, and keep the app healthy as OS versions and user needs change.",
      },
    ],
    wizardHeadlineLead: "Let's scope your",
    wizardHeadlineAccent: "mobile app",
    wizard: [
      {
        key: "platforms",
        kicker: "Platforms",
        label: "Which platforms do you need?",
        options: ["iOS & Android", "iOS first", "Android first", "Not sure yet"],
      },
      {
        key: "stage",
        kicker: "Your app",
        label: "Where are you today?",
        options: ["Just an idea", "Have designs", "Existing app to improve", "Web app to bring to mobile"],
      },
      {
        key: "features",
        kicker: "Key needs",
        label: "Anything essential to get right?",
        options: ["Offline mode", "Push notifications", "Payments", "Real-time / chat", "Not sure yet"],
      },
      {
        key: "timeline",
        kicker: "Timing",
        label: "When do you want to start?",
        options: ["ASAP", "This quarter", "Next 6 months", "Just exploring"],
      },
    ],
  },
  {
    slug: "ai-systems",
    number: "03",
    title: "AI Systems",
    plain: "Products with intelligence built in",
    description:
      "AI assistants, copilots, document workflows, and search experiences grounded in your data and built for real product use.",
    tags: ["AI Products", "Copilots", "RAG / Your Data"],
    span: 2,
    dark: true,
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M12 3l1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5L12 3Z" />
        <path d="M18.5 14.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1Z" />
      </svg>
    ),
    seoTitle: "AI Application Development — Teak Software Studio",
    seoDescription:
      "AI application development for assistants, copilots, document workflows, and search experiences grounded in your data with retrieval, evals, and guardrails.",
    eyebrow: "Service 03 — AI Systems",
    headlineLead: "Products with",
    headlineAccent: "intelligence",
    headlineTail: " built in.",
    deck: "We build AI features that answer from your data, fit into your product, and hold up when real users start asking messy questions.",
    stats: [
      { value: "Production", label: "Built beyond the demo stage" },
      { value: "Grounded", label: "Answers tied to your data" },
      { value: "Measured", label: "Quality tested with evals" },
    ],
    overview: [
      "Useful AI is not a chatbot bolted onto a page. It has to understand the task, respect the workflow, answer from the right knowledge, and fail gracefully when it does not know enough.",
      "We design and build AI systems around real product behavior: retrieval over your documents and data, model selection for the job, evals that measure quality, and guardrails that make the experience reliable enough to ship.",
    ],
    overviewPull:
      "The gap between a demo and a product is trust. We engineer for the product.",
    useCases: [
      {
        title: "Knowledge copilots",
        detail:
          "Internal assistants that help teams search policies, docs, project history, support notes, or operational knowledge with cited answers.",
      },
      {
        title: "Customer support AI",
        detail:
          "Support assistants that answer common questions, surface source material, draft replies, and hand off cleanly when a human is needed.",
      },
      {
        title: "Document workflows",
        detail:
          "Systems that read, classify, summarize, extract fields, and route documents across finance, legal, operations, or admin workflows.",
      },
      {
        title: "AI search",
        detail:
          "Search experiences that understand meaning, not just keywords, with retrieval tuned around your content and user intent.",
      },
      {
        title: "Product copilots",
        detail:
          "AI features inside SaaS or internal tools that help users write, analyze, decide, and move through complex workflows faster.",
      },
      {
        title: "Workflow automation",
        detail:
          "AI-assisted processes that turn messy inputs into structured actions, approvals, drafts, summaries, or next-step recommendations.",
      },
    ],
    useCasesIntro:
      "AI systems for real workflows, not just impressive demos.",
    deliverables: [
      {
        title: "Grounded in your knowledge",
        detail:
          "Retrieval over your documents, database records, and product context, with citations where the user needs to trust the answer.",
      },
      {
        title: "Measured, not vibes",
        detail:
          "Real evaluation suites that score quality, so we tune prompts and retrieval against evidence.",
      },
      {
        title: "Safe in the wild",
        detail:
          "Guardrails, cost controls, monitoring, and fallback paths so the system behaves and you know when it needs attention.",
      },
    ],
    deliverablesIntro:
      "The parts that make an AI feature useful, reliable, and safe enough to put in front of real users.",
    process: [
      {
        title: "Use-case shaping",
        detail:
          "We find where AI actually earns its place in your product, what success should look like, and where simpler software is the better choice.",
      },
      {
        title: "Data & retrieval",
        detail:
          "We connect your documents, data, and product context so the model can answer from your knowledge instead of guessing.",
      },
      {
        title: "Build & evaluate",
        detail:
          "We build the user experience, prompts, retrieval, and eval suites together, then tune against evidence instead of opinions.",
      },
      {
        title: "Ship with guardrails",
        detail:
          "We launch with monitoring, cost controls, fallback behavior, and safety guardrails so the system can improve without becoming risky.",
      },
    ],
    techStack: ["Language models", "RAG", "Vector DBs", "LangGraph", "Evals", "Guardrails"],
    stackGroups: [
      {
        title: "Models",
        items: [
          "Language models",
          "Reasoning models",
          "Long-context models",
          "Fast task models",
        ],
      },
      {
        title: "Data & Context",
        items: [
          "RAG",
          "Embeddings",
          "Hybrid search",
          "Knowledge graphs",
        ],
      },
      {
        title: "Vector DBs",
        items: ["Qdrant", "Pinecone", "pgvector"],
      },
      {
        title: "AI Workflows",
        items: [
          "LangChain",
          "LangGraph",
          "Tool calling",
          "Function calling",
          "Agents",
          "Structured outputs",
          "Document extraction",
        ],
      },
      {
        title: "Quality & safety",
        items: [
          "Evals",
          "Guardrails",
          "Cost controls",
          "Monitoring",
          "Tracing",
          "Explainability",
          "Interpretability",
          "Observability",
        ],
      },
    ],
    faqs: [
      {
        question: "Will it hallucinate?",
        answer:
          "No AI system can promise zero wrong answers, but we reduce risk by grounding responses in your data, showing citations where useful, testing quality with evals, and adding fallback behavior when confidence is low.",
      },
      {
        question: "Which models do you use?",
        answer:
          "We choose the right model for the job based on quality, speed, cost, context length, and safety needs, then design the system so models can be swapped or upgraded as the landscape changes.",
      },
      {
        question: "Can it connect to our existing docs or database?",
        answer:
          "Yes. We can connect to documents, help centers, internal wikis, databases, APIs, and product data, then shape retrieval around the questions users actually ask.",
      },
      {
        question: "Do we need clean data before starting?",
        answer:
          "Not perfectly clean. We usually start by auditing the sources you already have, identifying gaps, and deciding what needs cleanup before it becomes part of the AI system.",
      },
      {
        question: "How do you control cost?",
        answer:
          "We control cost with model selection, caching, retrieval limits, prompt design, usage caps, monitoring, and routing simpler tasks to cheaper models where quality allows.",
      },
      {
        question: "Can this live inside our existing app?",
        answer:
          "Yes. We can add AI features inside an existing product, build a standalone internal tool, or create a new AI-native product from scratch.",
      },
    ],
    wizardHeadlineLead: "Let's scope your",
    wizardHeadlineAccent: "AI product",
    wizard: [
      {
        key: "kind",
        kicker: "Your product",
        label: "What are you looking to build?",
        options: ["Chat assistant", "Copilot in your app", "Smart search", "Document AI", "Not sure yet"],
      },
      {
        key: "data",
        kicker: "Your data",
        label: "Should it know your content?",
        options: ["Yes — our docs & data", "Public knowledge is fine", "A mix of both", "Not sure"],
      },
      {
        key: "surface",
        kicker: "Where it lives",
        label: "Where will it run?",
        options: ["New standalone product", "Inside our existing app", "Internal tool", "Still deciding"],
      },
      {
        key: "timeline",
        kicker: "Timing",
        label: "When do you want to start?",
        options: ["ASAP", "This quarter", "Next 6 months", "Just exploring"],
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
