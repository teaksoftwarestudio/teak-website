import type { ReactNode } from "react";

/* ------------------------------------------------------------------ types --- */

export type BlogSection =
  | { type: "p"; text: ReactNode }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: ReactNode[] }
  | { type: "ol"; items: ReactNode[] }
  | { type: "quote"; text: string }
  | { type: "callout"; title: string; text: string };

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  /** Category tag shown on cards, e.g. "Cost & Budgeting" */
  category: string;
  title: string;
  /** ~155-char meta description — the primary SERP snippet */
  seoDescription: string;
  /** Distinct, keyword-led <title> for the browser/SERP */
  seoTitle: string;
  /** Target keywords — used for internal reference and meta keywords */
  keywords: string[];
  /** Short deck under the H1 */
  excerpt: string;
  /** ISO date */
  date: string;
  /** Reading time, e.g. "8 min read" */
  readingTime: string;
  author: string;
  body: BlogSection[];
  faqs?: BlogFaq[];
  /** Slugs of related posts to cross-link (internal linking = SEO) */
  related: string[];
};

/* ------------------------------------------------------------------ posts --- */

export const posts: BlogPost[] = [
  {
    slug: "how-much-does-it-cost-to-build-a-saas-mvp",
    category: "Cost & Budgeting",
    title: "How Much Does It Cost to Build a SaaS MVP in 2026?",
    seoTitle: "How Much Does It Cost to Build a SaaS MVP in 2026? — Teak Software Studio",
    seoDescription:
      "A clear 2026 breakdown of SaaS MVP development costs — what drives the price, realistic budget ranges, and how to build a minimum viable product without overspending.",
    keywords: [
      "cost to build a SaaS MVP",
      "SaaS MVP development cost",
      "how much does it cost to build a SaaS product",
      "minimum viable product cost 2026",
      "SaaS development pricing",
    ],
    excerpt:
      "The honest answer is \"it depends\" — but here's the real breakdown of what a SaaS MVP costs in 2026, what drives the number up or down, and how to spend smart.",
    date: "2026-01-14",
    readingTime: "9 min read",
    author: "Teak Software Studio",
    body: [
      {
        type: "p",
        text: "If you're planning to build a SaaS product, the first question is almost always the same: what will it cost? It's the right question — and also the hardest to answer with a single number. The cost to build a SaaS MVP in 2026 ranges from roughly $15,000 for a focused, single-workflow product to $150,000+ for a multi-tenant platform with billing, integrations, and a polished design system. This guide explains exactly what moves that number.",
      },
      { type: "h2", text: "What is a SaaS MVP, really?" },
      {
        type: "p",
        text: "A minimum viable product (MVP) is the smallest version of your SaaS that a real customer would pay for. It is not a prototype, and it is not the full vision — it is the sharpest possible slice of value you can ship, launch, and learn from. The whole point of building an MVP is to validate demand before you spend a full budget, so scope discipline is where most of the cost savings live.",
      },
      {
        type: "callout",
        title: "The single biggest cost lever",
        text: "Scope. Every feature you add multiplies design, engineering, and testing time. The teams that ship affordable MVPs are ruthless about cutting everything that isn't core to the one job the product does.",
      },
      { type: "h2", text: "What actually drives SaaS MVP cost" },
      {
        type: "p",
        text: "Development cost is mostly a function of complexity and time. These are the factors that move the number the most:",
      },
      {
        type: "ul",
        items: [
          "Number of user roles and permissions (a single-user tool is far cheaper than a multi-tenant platform with admins, teams, and billing tiers).",
          "Third-party integrations — payments (Stripe), auth, email, analytics, and any external APIs each add real engineering time.",
          "Custom design vs. a component library. A bespoke, branded interface costs more than a clean, systematic UI built on proven components.",
          "Data complexity — dashboards, search, reporting, and real-time features are more expensive than simple CRUD screens.",
          "Whether you need mobile, web, or both.",
        ],
      },
      { type: "h2", text: "Realistic SaaS MVP budget ranges in 2026" },
      {
        type: "h3",
        text: "$15,000 – $40,000 — the focused MVP",
      },
      {
        type: "p",
        text: "One core workflow, a clean interface, authentication, and a simple database. Perfect for validating a single sharp idea with early users. This is the sweet spot for most first-time founders.",
      },
      {
        type: "h3",
        text: "$40,000 – $90,000 — the growth-ready MVP",
      },
      {
        type: "p",
        text: "Multi-tenant architecture, subscription billing, a proper admin panel, a few integrations, and a design that can carry the brand as you scale. This is where most funded startups land.",
      },
      {
        type: "h3",
        text: "$90,000 – $150,000+ — the platform MVP",
      },
      {
        type: "p",
        text: "Complex permissions, real-time features, multiple integrations, analytics dashboards, and a polished, fully custom product experience. Appropriate when you're entering a competitive market and the product experience is the differentiator.",
      },
      { type: "h2", text: "How to build a SaaS MVP without overspending" },
      {
        type: "ol",
        items: [
          "Write down the one job your product does, then cut every feature that isn't essential to it.",
          "Use proven infrastructure (Next.js, managed databases, Stripe) instead of building everything from scratch.",
          "Ship to a small group of real users fast, then let their behaviour — not your roadmap — decide what to build next.",
          "Work with one team that handles design and engineering together, so you don't pay for hand-offs and rework.",
        ],
      },
      {
        type: "quote",
        text: "The most expensive SaaS MVP is the one you build twice. Getting scope and architecture right the first time is the real cost saving.",
      },
      {
        type: "p",
        text: "At Teak Software Studio, we build SaaS platforms and MVPs for founders across North America and Europe — from first-line-of-code startups to companies rescuing a stalled build. If you're weighing up what your product should cost, the conversation is free.",
      },
    ],
    faqs: [
      {
        question: "How much does it cost to build a SaaS MVP in 2026?",
        answer:
          "A SaaS MVP typically costs between $15,000 and $150,000 in 2026, depending on complexity. A focused single-workflow MVP starts around $15,000–$40,000, while a multi-tenant platform with billing and integrations ranges from $40,000 to over $150,000.",
      },
      {
        question: "How long does it take to build a SaaS MVP?",
        answer:
          "Most focused SaaS MVPs take 6 to 12 weeks to build and launch. More complex platforms with multi-tenancy, billing, and integrations can take 3 to 6 months.",
      },
      {
        question: "What's the cheapest way to build a SaaS MVP?",
        answer:
          "Keep scope tight to one core workflow, use proven infrastructure like Next.js and Stripe instead of custom-building everything, and work with a single team that handles both design and engineering to avoid hand-off costs.",
      },
    ],
    related: [
      "how-long-does-it-take-to-build-a-mobile-app",
      "react-vs-nextjs-for-startups",
      "how-to-choose-a-software-development-company",
    ],
  },

  {
    slug: "how-long-does-it-take-to-build-a-mobile-app",
    category: "Mobile Development",
    title: "How Long Does It Take to Build a Mobile App?",
    seoTitle: "How Long Does It Take to Build a Mobile App? (2026 Timeline) — Teak",
    seoDescription:
      "A realistic 2026 timeline for building a mobile app — from idea to App Store. See how long each phase takes and what makes iOS and Android apps faster or slower to build.",
    keywords: [
      "how long does it take to build a mobile app",
      "mobile app development timeline",
      "time to build an iOS app",
      "how long to build an Android app",
      "app development process",
    ],
    excerpt:
      "From first sketch to the App Store, here's a realistic phase-by-phase timeline for building a mobile app in 2026 — and what speeds it up or slows it down.",
    date: "2026-01-28",
    readingTime: "8 min read",
    author: "Teak Software Studio",
    body: [
      {
        type: "p",
        text: "How long does it take to build a mobile app? For a well-scoped product, expect 3 to 6 months from idea to launch. A simple app can ship in 8–10 weeks; a complex, data-heavy app with backend infrastructure can take 6+ months. The timeline depends far more on scope and decision speed than on the platform itself.",
      },
      { type: "h2", text: "The phases of mobile app development" },
      {
        type: "h3",
        text: "1. Discovery & design — 2 to 4 weeks",
      },
      {
        type: "p",
        text: "Before any code, you define the core user journey, wireframe the screens, and design the interface. Skipping this phase is the number-one cause of expensive rebuilds later. Good design work here saves months down the line.",
      },
      {
        type: "h3",
        text: "2. Core development — 6 to 16 weeks",
      },
      {
        type: "p",
        text: "This is where the app is built: screens, navigation, business logic, the backend API, and data storage. Offline support, push notifications, and real-time features each add time. Building for iOS and Android at once with a cross-platform framework like Flutter or React Native is usually faster than two separate native builds.",
      },
      {
        type: "h3",
        text: "3. Testing & polish — 2 to 4 weeks",
      },
      {
        type: "p",
        text: "Real devices, edge cases, performance, and the small interactions that make an app feel trustworthy. This phase is often underestimated and is what separates a shippable app from a polished one.",
      },
      {
        type: "h3",
        text: "4. App Store submission — a few days to 2 weeks",
      },
      {
        type: "p",
        text: "Apple's App Store review typically takes 1–3 days but can be longer for a first submission. Google Play is usually faster. Building this buffer into your launch plan avoids nasty surprises.",
      },
      {
        type: "callout",
        title: "The hidden timeline killer",
        text: "Slow decisions. Apps rarely run late because engineering is slow — they run late because feedback, approvals, and scope changes pile up. A responsive stakeholder is the cheapest way to ship faster.",
      },
      { type: "h2", text: "What makes an app faster or slower to build" },
      {
        type: "ul",
        items: [
          "Cross-platform (Flutter/React Native) is usually faster than two native codebases.",
          "A clear, frozen scope ships far faster than a moving target.",
          "Reusing proven backend infrastructure beats building from scratch.",
          "Complex features — real-time sync, offline-first, video, AI — add weeks each.",
          "Design that's finished before development starts prevents costly rework.",
        ],
      },
      {
        type: "quote",
        text: "The fastest way to build an app is to build the right app once — not the wrong app quickly and then rebuild it.",
      },
      {
        type: "p",
        text: "Teak Software Studio designs and builds iOS and Android apps for clients across the US and Europe, including SaveFirst, an AI-powered personal finance app for iOS. If you have an app in mind and want a realistic timeline, we're happy to map it out with you.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to build a mobile app?",
        answer:
          "A well-scoped mobile app typically takes 3 to 6 months from idea to launch. Simple apps can ship in 8–10 weeks, while complex apps with backends and real-time features can take 6 months or more.",
      },
      {
        question: "Is it faster to build for iOS or Android?",
        answer:
          "Neither platform is inherently faster. Building for both at once using a cross-platform framework like Flutter or React Native is usually quicker and cheaper than maintaining two separate native codebases.",
      },
      {
        question: "How long does App Store approval take?",
        answer:
          "Apple's App Store review usually takes 1 to 3 days, though a first submission can take longer. Google Play review is typically faster.",
      },
    ],
    related: [
      "how-much-does-it-cost-to-build-a-saas-mvp",
      "flutter-vs-react-native",
      "how-to-choose-a-software-development-company",
    ],
  },

  {
    slug: "react-vs-nextjs-for-startups",
    category: "Engineering",
    title: "React vs. Next.js: Which Should Your Startup Use?",
    seoTitle: "React vs. Next.js for Startups: Which to Choose in 2026 — Teak Software",
    seoDescription:
      "React vs. Next.js explained for founders — the real differences, when to use each, and why most startups building a web app should choose Next.js in 2026.",
    keywords: [
      "React vs Next.js",
      "Next.js for startups",
      "should I use React or Next.js",
      "best framework for a web app",
      "Next.js vs React 2026",
    ],
    excerpt:
      "React and Next.js aren't really competitors — one is a library, the other a framework built on it. Here's what that means for your startup, in plain English.",
    date: "2026-02-11",
    readingTime: "7 min read",
    author: "Teak Software Studio",
    body: [
      {
        type: "p",
        text: "React vs. Next.js is one of the most common questions founders ask when starting a web app — and it's slightly the wrong question. Next.js is a framework built on top of React. React gives you the building blocks for user interfaces; Next.js wraps those blocks with the structure a real product needs: routing, server rendering, SEO, and performance out of the box. For most startups building a web application in 2026, the answer is Next.js.",
      },
      { type: "h2", text: "What is React?" },
      {
        type: "p",
        text: "React is a JavaScript library for building user interfaces, created by Meta. It's the most popular front-end technology in the world, with a huge ecosystem and talent pool. But React on its own is unopinionated — it handles the UI and leaves decisions about routing, data fetching, rendering, and SEO up to you. That flexibility is powerful, and also a lot of setup.",
      },
      { type: "h2", text: "What is Next.js?" },
      {
        type: "p",
        text: "Next.js is a React framework that provides the missing structure: file-based routing, server-side rendering and static generation (crucial for SEO), image optimization, API routes, and sensible performance defaults. It's what powers a large share of modern production web apps. You still write React — you just get a proven foundation instead of assembling one yourself.",
      },
      {
        type: "callout",
        title: "The short version",
        text: "If your web app needs to be found on Google, load fast, and scale cleanly — which is nearly every startup — Next.js gives you those things by default. Plain React makes you build them.",
      },
      { type: "h2", text: "When to choose Next.js" },
      {
        type: "ul",
        items: [
          "You're building a product or marketing site that needs strong SEO (server rendering makes your pages visible to Google).",
          "You want fast page loads and good Core Web Vitals without hand-tuning.",
          "You need a full-stack setup — frontend and API routes in one codebase.",
          "You want a structure the next engineer will recognise instantly.",
        ],
      },
      { type: "h2", text: "When plain React is enough" },
      {
        type: "ul",
        items: [
          "You're building a purely internal tool or dashboard behind a login, where SEO is irrelevant.",
          "You're embedding an interactive widget inside an existing site.",
          "You have a very specific setup that doesn't fit a framework's conventions.",
        ],
      },
      {
        type: "quote",
        text: "For a startup that wants to be found, load fast, and move quickly, Next.js isn't just an option — it's the default that saves you months.",
      },
      {
        type: "p",
        text: "Teak Software Studio builds web applications with Next.js, React, and TypeScript for founders who care about performance and being found. If you're deciding on your stack, we're glad to help you choose the right foundation for what you're building.",
      },
    ],
    faqs: [
      {
        question: "Is Next.js better than React?",
        answer:
          "Next.js isn't better or worse than React — it's a framework built on React. It adds routing, server rendering, SEO, and performance defaults that plain React doesn't include. For most startups building a web app, Next.js is the better starting point.",
      },
      {
        question: "Should a startup use React or Next.js?",
        answer:
          "Most startups building a public-facing web app should use Next.js, because its server rendering makes pages visible to search engines and its defaults deliver fast performance. Plain React is fine for internal tools where SEO doesn't matter.",
      },
      {
        question: "Do I still write React with Next.js?",
        answer:
          "Yes. Next.js is built on React, so you write React components as usual. Next.js simply provides the surrounding structure — routing, rendering, and optimization — so you don't have to assemble it yourself.",
      },
    ],
    related: [
      "how-much-does-it-cost-to-build-a-saas-mvp",
      "flutter-vs-react-native",
      "do-you-need-ai-in-your-product",
    ],
  },

  {
    slug: "flutter-vs-react-native",
    category: "Mobile Development",
    title: "Flutter vs. React Native: Which Is Right for Your App?",
    seoTitle: "Flutter vs. React Native in 2026: Which to Choose — Teak Software Studio",
    seoDescription:
      "Flutter vs. React Native compared for 2026 — performance, cost, developer availability, and which cross-platform framework fits your mobile app project best.",
    keywords: [
      "Flutter vs React Native",
      "best cross-platform framework",
      "React Native or Flutter 2026",
      "cross-platform mobile development",
      "which framework for mobile app",
    ],
    excerpt:
      "Both let you build iOS and Android from one codebase — but they make different trade-offs. Here's how to choose between Flutter and React Native for your app.",
    date: "2026-02-25",
    readingTime: "8 min read",
    author: "Teak Software Studio",
    body: [
      {
        type: "p",
        text: "Flutter vs. React Native is the central decision in cross-platform mobile development. Both let you build for iOS and Android from a single codebase, saving significant time and cost versus two native apps. The right choice depends on your team, your design ambitions, and the kind of app you're building. Neither is universally better — but the differences matter.",
      },
      { type: "h2", text: "What is React Native?" },
      {
        type: "p",
        text: "React Native, created by Meta, lets you build mobile apps using React and JavaScript. Its biggest advantage is the ecosystem: if you already have React or web developers, they can build mobile apps without learning a new language. It renders to genuinely native UI components, and it's a proven choice for content-driven and business apps.",
      },
      { type: "h2", text: "What is Flutter?" },
      {
        type: "p",
        text: "Flutter, created by Google, uses the Dart language and draws its own pixel-perfect UI, giving you complete control over how the app looks on every device. It's known for smooth animations, a consistent look across platforms, and strong performance for graphics-rich and highly branded apps.",
      },
      { type: "h2", text: "Head-to-head" },
      {
        type: "ul",
        items: [
          "Team fit: React Native wins if you have React/JavaScript developers. Flutter requires learning Dart.",
          "UI control: Flutter wins for pixel-perfect, custom, animation-heavy designs.",
          "Performance: Both are excellent; Flutter has a slight edge for graphics-intensive apps.",
          "Ecosystem & hiring: React Native has a larger talent pool thanks to JavaScript.",
          "Consistency: Flutter looks identical across platforms by design; React Native adapts to each platform's native feel.",
        ],
      },
      {
        type: "callout",
        title: "A simple rule of thumb",
        text: "Choose React Native if you already have web/React talent or want a native platform feel. Choose Flutter if your app is highly branded, animation-rich, or design is the differentiator.",
      },
      {
        type: "quote",
        text: "The best framework is the one your team can ship and maintain well. A brilliant app in the 'wrong' framework beats a mediocre one in the 'right' one.",
      },
      {
        type: "p",
        text: "Teak Software Studio builds cross-platform mobile apps in both Flutter and React Native, choosing the right tool for each project rather than forcing one on every client. If you're weighing the two for your app, we can help you decide based on your actual product and team.",
      },
    ],
    faqs: [
      {
        question: "Is Flutter better than React Native?",
        answer:
          "Neither is universally better. Flutter offers pixel-perfect UI control and excels at animation-rich, highly branded apps. React Native is ideal if you have React or JavaScript developers and want a native platform feel. The best choice depends on your team and product.",
      },
      {
        question: "Which is cheaper, Flutter or React Native?",
        answer:
          "Both save money versus building two separate native apps. Costs are usually similar; React Native may be cheaper if you already have React developers, since it avoids learning a new language.",
      },
      {
        question: "Which has better performance?",
        answer:
          "Both deliver excellent performance for most apps. Flutter has a slight edge for graphics-intensive or animation-heavy applications because it renders its own UI directly.",
      },
    ],
    related: [
      "how-long-does-it-take-to-build-a-mobile-app",
      "react-vs-nextjs-for-startups",
      "how-much-does-it-cost-to-build-a-saas-mvp",
    ],
  },

  {
    slug: "do-you-need-ai-in-your-product",
    category: "AI & Product",
    title: "Do You Actually Need AI in Your Product? A Practical Guide",
    seoTitle: "Do You Need AI in Your Product? A Practical 2026 Guide — Teak Software",
    seoDescription:
      "A practical guide to adding AI to your product in 2026 — where AI genuinely helps, where it's just hype, and how to add AI features that users actually value.",
    keywords: [
      "AI in your product",
      "how to add AI to an app",
      "AI features for SaaS",
      "should I add AI to my product",
      "practical AI product development",
    ],
    excerpt:
      "AI is in every pitch deck — but not every product needs it. Here's a grounded way to tell where AI creates real value and where it's just noise.",
    date: "2026-03-10",
    readingTime: "7 min read",
    author: "Teak Software Studio",
    body: [
      {
        type: "p",
        text: "Should you add AI to your product? In 2026, AI is expected in almost every pitch — but bolting a chatbot onto a product rarely creates lasting value. The right question isn't \"how do we add AI?\" but \"where does AI remove real friction for our users?\" This guide gives you a practical way to answer that.",
      },
      { type: "h2", text: "Where AI genuinely helps" },
      {
        type: "p",
        text: "AI creates the most value where it removes tedious, repetitive, or judgement-heavy work at scale. The strongest use cases share a pattern: a task that's slow or annoying for humans, done often, where being roughly right is more useful than being slow.",
      },
      {
        type: "ul",
        items: [
          "Automatic categorisation and tagging — sorting transactions, tickets, or content that users would otherwise organise by hand.",
          "Summarisation — turning long documents, threads, or data into a quick, readable digest.",
          "Search and retrieval — letting users ask questions in plain language instead of hunting through menus.",
          "Drafting and suggestions — a strong first draft the user edits, rather than a blank page.",
          "Anomaly detection — surfacing the one thing that needs attention out of thousands of data points.",
        ],
      },
      {
        type: "callout",
        title: "The value test",
        text: "If you removed the AI feature, would users be noticeably worse off? If yes, it's real. If it's just a novelty demo, it's hype — and it'll cost you maintenance for little return.",
      },
      { type: "h2", text: "Where AI is usually just hype" },
      {
        type: "ul",
        items: [
          "A chatbot bolted onto a product that already has clear navigation.",
          "AI features added to impress investors rather than serve users.",
          "Automating a task that happens so rarely the effort isn't justified.",
          "Anything where a wrong answer is costly and there's no human in the loop.",
        ],
      },
      { type: "h2", text: "How to add AI the right way" },
      {
        type: "ol",
        items: [
          "Start from a real user frustration, not from the technology.",
          "Prototype the smallest useful version and put it in front of real users fast.",
          "Keep a human in the loop wherever a wrong answer has real consequences.",
          "Measure whether the feature actually changes behaviour — usage, retention, time saved.",
        ],
      },
      {
        type: "quote",
        text: "The best AI features are invisible. Users don't think 'wow, AI' — they just notice the product quietly did the boring part for them.",
      },
      {
        type: "p",
        text: "Teak Software Studio builds AI systems and AI-powered product features that solve real problems — like the automatic transaction categorisation and spending insights in our SaveFirst app. If you're wondering whether AI belongs in your product, we'll give you an honest answer.",
      },
    ],
    faqs: [
      {
        question: "Does my product need AI?",
        answer:
          "Only if AI removes real friction for your users. AI creates value when it automates tedious, repetitive, or judgement-heavy tasks at scale. If a feature is just a novelty or added to impress investors, it usually isn't worth the cost.",
      },
      {
        question: "What are good uses of AI in a product?",
        answer:
          "Strong use cases include automatic categorisation and tagging, summarising long content, natural-language search, drafting and suggestions, and anomaly detection — tasks that are slow or repetitive for humans but where being roughly right at speed is valuable.",
      },
      {
        question: "How do I add AI to my app?",
        answer:
          "Start from a real user frustration rather than the technology, prototype the smallest useful version, keep a human in the loop where wrong answers are costly, and measure whether the feature actually changes user behaviour.",
      },
    ],
    related: [
      "react-vs-nextjs-for-startups",
      "how-much-does-it-cost-to-build-a-saas-mvp",
      "how-to-choose-a-software-development-company",
    ],
  },

  {
    slug: "how-to-choose-a-software-development-company",
    category: "Hiring & Partnerships",
    title: "How to Choose a Software Development Company (2026 Checklist)",
    seoTitle: "How to Choose a Software Development Company — 2026 Checklist | Teak",
    seoDescription:
      "How to choose the right software development company in 2026 — the questions to ask, red flags to avoid, and what separates a great development partner from a risky one.",
    keywords: [
      "how to choose a software development company",
      "hire a software development agency",
      "best software development company",
      "choosing a development partner",
      "custom software development company",
    ],
    excerpt:
      "Choosing the wrong development partner is expensive and slow to fix. Here's a practical checklist for picking a software company that actually delivers.",
    date: "2026-03-24",
    readingTime: "8 min read",
    author: "Teak Software Studio",
    body: [
      {
        type: "p",
        text: "Choosing a software development company is one of the highest-stakes decisions a founder makes. The right partner ships a product that grows with you; the wrong one leaves you with a slow, brittle codebase and months of lost time. This checklist covers what to look for, what to ask, and the red flags that should make you walk away.",
      },
      { type: "h2", text: "What a great development partner looks like" },
      {
        type: "ul",
        items: [
          "They ask about your users and business goals before talking about technology.",
          "They're honest about trade-offs and will tell you when a feature isn't worth building.",
          "They show real, shipped work — not just mockups and promises.",
          "Design and engineering work together, so you're not paying for hand-offs and rework.",
          "They communicate clearly and predictably, and you always know what's happening.",
        ],
      },
      { type: "h2", text: "Questions to ask before you hire" },
      {
        type: "ol",
        items: [
          "Can I see products you've actually shipped, and talk to those clients?",
          "Who exactly will work on my project — and will that change?",
          "How do you handle scope changes and unexpected problems?",
          "What happens after launch — do you support and maintain what you build?",
          "Who owns the code and the accounts? (The answer should always be: you.)",
        ],
      },
      {
        type: "callout",
        title: "The biggest red flag",
        text: "A company that agrees to everything, quotes a suspiciously low price, and promises an unrealistic timeline. Serious partners push back, scope carefully, and are honest about what things cost.",
      },
      { type: "h2", text: "Red flags to walk away from" },
      {
        type: "ul",
        items: [
          "No verifiable shipped work or client references.",
          "Vague answers about who will actually build your product.",
          "Pressure to sign quickly with no discovery or scoping.",
          "Unwillingness to hand over code ownership.",
          "Communication that's already slow before you've even started.",
        ],
      },
      {
        type: "quote",
        text: "You're not just buying code — you're choosing a team you'll trust with the core of your business. Judge them on honesty as much as on skill.",
      },
      {
        type: "p",
        text: "Teak Software Studio is a software development company building web, mobile, and AI products for clients across North America and Europe. We show real shipped work, keep design and engineering under one roof, and you always own everything we build. If you're evaluating partners, we'd welcome the chance to earn your trust.",
      },
    ],
    faqs: [
      {
        question: "How do I choose a software development company?",
        answer:
          "Look for a partner who understands your users before your technology, shows real shipped work, keeps design and engineering together, communicates clearly, and lets you own the code. Ask to see past products, talk to references, and understand exactly who will build your project.",
      },
      {
        question: "What are red flags when hiring a development agency?",
        answer:
          "Watch for no verifiable shipped work, vague answers about who will build your product, pressure to sign quickly without scoping, unwillingness to hand over code ownership, and slow communication before the project even begins.",
      },
      {
        question: "Should I own the code a development company builds?",
        answer:
          "Yes, always. You should own the codebase and all accounts for anything a development company builds for you. Any partner unwilling to hand over ownership is a serious red flag.",
      },
    ],
    related: [
      "how-much-does-it-cost-to-build-a-saas-mvp",
      "how-long-does-it-take-to-build-a-mobile-app",
      "do-you-need-ai-in-your-product",
    ],
  },
];

/* ---------------------------------------------------------------- helpers --- */

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.related
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => Boolean(p));
}
