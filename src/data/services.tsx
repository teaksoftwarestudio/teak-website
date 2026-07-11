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
};

export type Stat = {
  value: string;
  label: string;
};

export type Deliverable = {
  title: string;
  detail: string;
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
  deliverables: Deliverable[];
  process: ProcessStep[];
  techStack: string[];
  caseStudy?: CaseStudy;
  faqs: Faq[];
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
    slug: "saas-products",
    number: "01",
    title: "SaaS Products",
    plain: "Software people subscribe to",
    description:
      "We take your idea from a sketch to a product with paying customers — design, engineering, billing, and launch, handled end to end.",
    tags: ["Product Strategy", "Full-Stack Dev", "Auth & Billing", "Launch"],
    span: 3,
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
        <path d="M9 21h6" />
      </svg>
    ),
    seoTitle: "SaaS Product Development — Teak Software Studio",
    seoDescription:
      "We design, build, and launch subscription software end to end — product strategy, full-stack engineering, auth, billing, and go-to-market.",
    eyebrow: "Service 01 — SaaS Products",
    headlineLead: "Software people",
    headlineAccent: "subscribe to",
    headlineTail: ", built end to end.",
    deck: "From a sketch to a product with paying customers — one team owning design, engineering, billing, and launch.",
    stats: [
      { value: "8 wks", label: "Idea to first paying users" },
      { value: "1", label: "Team, from strategy to launch" },
      { value: "100%", label: "Ownership of your codebase" },
    ],
    overview: [
      "A SaaS product is never just an app. It's onboarding that converts, billing that never drops a charge, retention that compounds, and support that scales — all working as one system. We build every layer so your customers can sign up, pay, and get value without you ever touching the plumbing.",
      "Whether you're a founder validating a first idea or an established company launching a new line, we step in as your product team. Strategy in the first week. A working prototype in the first month. Paying customers before we're done.",
    ],
    overviewPull:
      "We don't hand you a demo and walk away. We hand you a business that runs.",
    deliverables: [
      {
        title: "A product, not a prototype",
        detail:
          "Auth, subscriptions, dashboards, and admin — the whole surface your customers and your team actually touch.",
      },
      {
        title: "Revenue that works on day one",
        detail:
          "Plans, trials, upgrades, invoices, and dunning wired in from the start, not bolted on before launch.",
      },
      {
        title: "A codebase you own",
        detail:
          "Clean, documented, and typed — so whether we stay on or you take it in-house, nothing is a black box.",
      },
    ],
    process: [
      {
        title: "Discovery & strategy",
        detail:
          "We pin down the core job your product does, who pays for it, and the smallest version worth shipping.",
      },
      {
        title: "Design & prototype",
        detail:
          "Clickable flows and a real design system before a line of production code — so you see it before you buy it.",
      },
      {
        title: "Build & integrate",
        detail:
          "Full-stack engineering with auth, subscriptions, and billing wired in from day one, not bolted on later.",
      },
      {
        title: "Launch & iterate",
        detail:
          "We ship to real users, watch what they do, and tune onboarding and pricing until the numbers move.",
      },
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Auth", "Vercel"],
    caseStudy: {
      client: "Early-stage founder",
      summary:
        "Took a spreadsheet-based workflow and turned it into a subscription product with self-serve signup and billing.",
      result: "First paying customers within 8 weeks of kickoff.",
    },
    faqs: [
      {
        question: "Can you handle billing and subscriptions?",
        answer:
          "Yes. We set up Stripe (or your provider of choice) end to end — plans, trials, upgrades, dunning, and invoices — so revenue works from launch day.",
      },
      {
        question: "Do you help after launch?",
        answer:
          "We stay on for iteration and support. Most clients keep us as their ongoing product team, but we're happy to hand off a clean, documented codebase too.",
      },
    ],
  },
  {
    slug: "web-applications",
    number: "02",
    title: "Web Applications",
    plain: "Powerful tools that run in the browser",
    description:
      "Dashboards, portals, marketplaces — complex web apps engineered to feel fast and simple, whether you serve ten users or ten million.",
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
      "Custom web applications — dashboards, portals, and marketplaces — engineered with Next.js and React to feel fast and simple at any scale.",
    eyebrow: "Service 02 — Web Applications",
    headlineLead: "Powerful tools that run",
    headlineAccent: "in the browser",
    headlineTail: ".",
    deck: "Dashboards, portals, and marketplaces engineered to feel fast and simple — whether you serve ten users or ten million.",
    stats: [
      { value: "<100ms", label: "Interaction targets, measured" },
      { value: "10M+", label: "Users the architecture scales to" },
      { value: "0", label: "Hand-offs between design and build" },
    ],
    overview: [
      "The browser is the most capable application platform ever built — and most teams barely use a fraction of it. We build web applications that handle genuine complexity: heavy data, live updates, granular roles and permissions, all while staying fast and effortless to use.",
      "From internal dashboards to customer-facing portals and multi-sided marketplaces, we engineer for performance first. So the app that feels instant on day one still feels instant when your data and your user count have grown ten times over.",
    ],
    overviewPull:
      "Complexity is the enemy of adoption. Our job is to make the complicated feel obvious.",
    deliverables: [
      {
        title: "Interfaces that stay calm under load",
        detail:
          "Information-dense screens that stay legible and quick even with thousands of rows and real-time updates.",
      },
      {
        title: "Architecture built to scale",
        detail:
          "A data model, API layer, and caching strategy designed for where you're going, not just where you are.",
      },
      {
        title: "Performance you can prove",
        detail:
          "We measure bundle size, query time, and render cost throughout — and hold the line as the app grows.",
      },
    ],
    process: [
      {
        title: "Architecture",
        detail:
          "We map the data model, the roles, and the flows so the foundation holds up as the app grows.",
      },
      {
        title: "Interface design",
        detail:
          "Clean, information-dense UI that makes complex tasks feel simple — designed with your real data.",
      },
      {
        title: "Engineering",
        detail:
          "React and Next.js front end wired to fast, well-structured APIs, with performance measured throughout.",
      },
      {
        title: "Ship & scale",
        detail:
          "Deployed on infrastructure that scales, with monitoring so you know it's healthy in production.",
      },
    ],
    techStack: ["Next.js", "React", "TypeScript", "REST / GraphQL", "PostgreSQL", "Edge"],
    faqs: [
      {
        question: "Can you work with our existing backend?",
        answer:
          "Absolutely. We regularly build front ends against existing APIs and databases, and can extend or refactor your backend where it helps.",
      },
      {
        question: "How do you keep it fast at scale?",
        answer:
          "We measure real performance from the start — bundle size, query times, render cost — and use caching, pagination, and edge rendering where they matter.",
      },
    ],
  },
  {
    slug: "mobile-apps",
    number: "03",
    title: "Mobile Apps",
    plain: "iOS & Android, one codebase",
    description:
      "Native-quality apps for iPhone and Android — clean UX, smooth animations, push notifications to offline mode.",
    tags: ["React Native", "iOS & Android", "App Store"],
    span: 2,
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M11 18.5h2" />
      </svg>
    ),
    seoTitle: "Mobile App Development — iOS & Android — Teak Software Studio",
    seoDescription:
      "Native-quality iOS and Android apps from a single codebase — clean UX, smooth animations, push notifications, and offline support.",
    eyebrow: "Service 03 — Mobile Apps",
    headlineLead: "iOS and Android,",
    headlineAccent: "one codebase",
    headlineTail: ".",
    deck: "Native-quality apps for iPhone and Android — clean UX, fluid animations, push notifications, offline mode — from a single shared codebase.",
    stats: [
      { value: "2", label: "Platforms, one team" },
      { value: "60fps", label: "Animation as the baseline" },
      { value: "1", label: "Codebase to maintain" },
    ],
    overview: [
      "We build mobile apps that feel genuinely native on both platforms from a single shared codebase — so you ship to iPhone and Android on the same day, without doubling the cost or splitting the team.",
      "Fluid animations, push notifications, offline-first data, and full App Store and Play Store submission are all part of the work. Your users get an app that feels like it belongs on their phone; you get one team, one codebase, and one roadmap.",
    ],
    overviewPull:
      "Users never see your architecture. They feel it — in every tap, scroll, and transition.",
    deliverables: [
      {
        title: "Native feel, both platforms",
        detail:
          "Platform-native components and gestures, with native code where it counts — indistinguishable from fully native apps.",
      },
      {
        title: "Works without a signal",
        detail:
          "Offline-first data and sync so the app stays useful on a subway, a plane, or a bad connection.",
      },
      {
        title: "Shipped to the stores",
        detail:
          "Provisioning, listings, review, and release handled — under your developer account or ours.",
      },
    ],
    process: [
      {
        title: "Product & flows",
        detail:
          "We define the core screens and journeys, tuned for how people actually use their phones.",
      },
      {
        title: "Design",
        detail:
          "Native-feeling UI that respects each platform's conventions while staying true to your brand.",
      },
      {
        title: "Build",
        detail:
          "One React Native codebase covering iOS and Android, with native modules where they're needed.",
      },
      {
        title: "Submit & support",
        detail:
          "We handle App Store and Play Store submission, then support updates and new features over time.",
      },
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Push / FCM", "SQLite", "App Store"],
    faqs: [
      {
        question: "One codebase — does it really feel native?",
        answer:
          "Yes. We use platform-native components and drop to native code where needed, so users can't tell the difference — but you maintain a single codebase.",
      },
      {
        question: "Do you handle App Store submission?",
        answer:
          "We do — provisioning, store listings, review, and release. We can publish under your developer account or guide you through setting one up.",
      },
    ],
  },
  {
    slug: "ai-applications",
    number: "04",
    title: "AI Applications",
    plain: "Products with intelligence built in",
    description:
      "Chat assistants, copilots, search that actually understands — AI-native products built on the latest models, tuned to your data.",
    tags: ["LLM Integration", "Copilots", "RAG / Your Data"],
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
      "AI-native products built on the latest models and tuned to your data — chat assistants, copilots, and search that actually understands.",
    eyebrow: "Service 04 — AI Applications",
    headlineLead: "Products with",
    headlineAccent: "intelligence",
    headlineTail: " built in.",
    deck: "Chat assistants, copilots, and search that actually understands — AI-native products built on the latest models and tuned to your data.",
    stats: [
      { value: "Latest", label: "Claude models, chosen per job" },
      { value: "Cited", label: "Answers grounded in your data" },
      { value: "Evals", label: "Quality measured, not guessed" },
    ],
    overview: [
      "We build products with intelligence at their core — not a chatbot bolted onto a contact form, but assistants, copilots, and search that genuinely understand your domain, your data, and your users.",
      "Using the latest models and techniques like retrieval-augmented generation, we ground AI in your own content so answers are accurate, cited, and actually useful. Then we wrap it in the evals and guardrails that turn an impressive demo into something you can trust in production.",
    ],
    overviewPull:
      "The gap between a demo and a product is trust. We engineer for the product.",
    deliverables: [
      {
        title: "Grounded in your knowledge",
        detail:
          "Retrieval over your documents and data, with citations — so the model answers from truth, not guesses.",
      },
      {
        title: "Measured, not vibes",
        detail:
          "Real evaluation suites that score quality, so we tune prompts and retrieval against evidence.",
      },
      {
        title: "Safe in the wild",
        detail:
          "Guardrails, cost controls, and monitoring so it behaves — and you know instantly when it doesn't.",
      },
    ],
    process: [
      {
        title: "Use-case shaping",
        detail:
          "We find where AI actually earns its place in your product — and, just as important, where it doesn't.",
      },
      {
        title: "Data & retrieval",
        detail:
          "We connect your documents and data so the model answers from your knowledge, not guesses.",
      },
      {
        title: "Build & evaluate",
        detail:
          "We build the experience and measure quality with real evals, tuning prompts and retrieval until it holds up.",
      },
      {
        title: "Ship with guardrails",
        detail:
          "Launched with monitoring, cost controls, and safety guardrails so it behaves in the real world.",
      },
    ],
    techStack: ["Claude", "RAG", "Vector DB", "TypeScript", "Next.js", "Evals"],
    faqs: [
      {
        question: "Will it hallucinate?",
        answer:
          "We ground responses in your data with retrieval and citations, and add evals and guardrails — dramatically reducing wrong answers and making the ones that do occur easy to catch.",
      },
      {
        question: "Which models do you use?",
        answer:
          "We pick the best model for the job — usually the latest Claude models — and design so you can swap or upgrade as the landscape changes.",
      },
    ],
  },
  {
    slug: "ai-automation",
    number: "05",
    title: "AI Automation",
    plain: "Your busywork, done by machines",
    description:
      "We wire AI into your operations — automating support, documents, and workflows so your team spends time where it matters.",
    tags: ["AI Agents", "Workflows", "Integrations"],
    span: 2,
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1" />
      </svg>
    ),
    seoTitle: "AI Automation & Agents — Teak Software Studio",
    seoDescription:
      "We wire AI into your operations — automating support, document processing, and internal workflows with agents that integrate with your tools.",
    eyebrow: "Service 05 — AI Automation",
    headlineLead: "Your busywork,",
    headlineAccent: "done by machines",
    headlineTail: ".",
    deck: "We wire AI into your operations — automating support, documents, and workflows so your team spends its time where it actually matters.",
    stats: [
      { value: "24/7", label: "Runs while your team sleeps" },
      { value: "Human", label: "In the loop where it counts" },
      { value: "Yours", label: "Integrated with your tools" },
    ],
    overview: [
      "Every team carries busywork that shouldn't need a human — triaging support tickets, extracting data from documents, moving information between systems that don't talk to each other. We automate it with AI so your people spend their hours on the work only people can do.",
      "We build agents and workflows that plug into the software you already run, execute reliably, and stay firmly under your control — with a human in the loop wherever judgment matters and a full audit trail of everything they touch.",
    ],
    overviewPull:
      "Automation shouldn't mean losing control. It should mean earning back your time.",
    deliverables: [
      {
        title: "Agents that fit your stack",
        detail:
          "They connect to your CRM, help desk, email, and spreadsheets — no rip-and-replace, no new platform to learn.",
      },
      {
        title: "Human-in-the-loop by default",
        detail:
          "Routine cases handled automatically; anything uncertain routed to your team with the context to act.",
      },
      {
        title: "Fully accountable",
        detail:
          "Dashboards and logs of every action, so you can see exactly what ran, when, and why.",
      },
    ],
    process: [
      {
        title: "Map the workflow",
        detail:
          "We trace the manual process step by step to find exactly where automation pays off.",
      },
      {
        title: "Design the automation",
        detail:
          "We design agents and rules that handle the routine cases and escalate the edge cases to a human.",
      },
      {
        title: "Integrate",
        detail:
          "We connect to your existing tools — CRM, help desk, email, spreadsheets — so it fits your stack.",
      },
      {
        title: "Monitor & refine",
        detail:
          "Live with dashboards and logs so you can see what it's doing and trust it over time.",
      },
    ],
    techStack: ["AI Agents", "Claude", "Webhooks", "APIs", "Queues", "Zapier / n8n"],
    faqs: [
      {
        question: "Will we lose control of the process?",
        answer:
          "No — we design human-in-the-loop by default. The automation handles routine work and routes anything uncertain to your team, with full logs of every action.",
      },
      {
        question: "Can it work with our current tools?",
        answer:
          "Yes. We integrate with the CRMs, help desks, and internal systems you already run, rather than asking you to switch platforms.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
