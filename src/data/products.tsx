export type ProductFeature = {
  title: string;
  detail: string;
};

export type ProductFaq = {
  question: string;
  answer: string;
};

export type ProductScreenshot = {
  src: string;
  alt: string;
};

export type Product = {
  slug: string;
  name: string;
  /** Short category line, e.g. "iOS App · Personal Finance" */
  category: string;
  status: "live" | "soon" | "dev";
  statusLabel: string;
  /** External link to the live product/app, if any */
  externalUrl?: string;
  externalLabel?: string;

  // SEO
  seoTitle: string;
  seoDescription: string;

  // Hero
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  headlineTail: string;
  deck: string;

  // Body
  overview: string[];
  features: ProductFeature[];
  techStack: string[];
  faqs: ProductFaq[];

  // Visuals
  layout: "phones" | "browser";
  screenshots: ProductScreenshot[];
  accent: string;

  // Schema
  /** schema.org @type — SoftwareApplication for apps, WebSite for sites */
  schemaType: "SoftwareApplication" | "WebSite";
  applicationCategory?: string;
  operatingSystem?: string;
};

export const products: Product[] = [
  {
    slug: "savefirst",
    name: "SaveFirst",
    category: "iOS App · Personal Finance · AI-Powered",
    status: "soon",
    statusLabel: "Launching soon",
    externalUrl: "https://savefirst.app",
    externalLabel: "Visit savefirst.app",

    seoTitle: "SaveFirst — AI Personal Finance & Expense Tracker for iOS",
    seoDescription:
      "SaveFirst is an AI-powered personal finance app for iOS that automatically categorises every expense, income, and investment, with smart spending insights and real-time alerts. Built by Teak Software Studio.",

    eyebrow: "Our Product · iOS App",
    headlineLead: "Know exactly where",
    headlineAccent: "your money goes",
    headlineTail: ".",
    deck: "A personal finance tracker for iOS that automatically categorises every transaction — expenses, income, and investments — with AI-powered spending insights and heads-up alerts.",

    overview: [
      "Most people don't overspend because they're careless — they overspend because they can't see the full picture in time to do anything about it. SaveFirst was built to change that. It brings expenses, income, and investments into one clear view, so your real financial position is never more than a glance away.",
      "Instead of asking you to tag and file every purchase by hand, SaveFirst uses AI to categorise transactions automatically and surface the patterns that matter — the subscription you forgot about, the category quietly creeping up, the month you're on track to beat. It's the difference between a ledger you have to maintain and a companion that actually keeps you ahead.",
    ],
    features: [
      {
        title: "Automatic transaction categorisation",
        detail:
          "Every expense, income, and investment is sorted for you the moment it lands — no manual tagging, no spreadsheets.",
      },
      {
        title: "AI-powered spending insights",
        detail:
          "SaveFirst learns your habits and highlights what's changing, so you catch overspending before it becomes a problem.",
      },
      {
        title: "Heads-up alerts",
        detail:
          "Real-time nudges when a bill is due, a budget is close, or something unusual shows up — quiet by default, timely when it counts.",
      },
      {
        title: "Income & investments in one view",
        detail:
          "Track what's coming in and what's growing alongside what you spend, for a complete picture of your financial health.",
      },
    ],
    techStack: ["iOS (Swift)", "AI Categorisation", "Secure Sync", "On-device Privacy"],
    faqs: [
      {
        question: "What platforms does SaveFirst support?",
        answer:
          "SaveFirst is a native iOS app, engineered to feel fast and at home on iPhone. It's launching soon on the App Store.",
      },
      {
        question: "How does the automatic categorisation work?",
        answer:
          "SaveFirst uses AI to read and classify each transaction — expenses, income, and investments — and learns from your corrections over time, so categorisation gets more accurate the more you use it.",
      },
      {
        question: "Is my financial data private?",
        answer:
          "Privacy is central to SaveFirst. The app is built with a privacy-first architecture that keeps sensitive data protected, so you get powerful insights without giving up control of your information.",
      },
    ],
    layout: "phones",
    screenshots: [
      { src: "/savefirst-home.png", alt: "SaveFirst home screen showing spending overview" },
      { src: "/savefirst-transaction.png", alt: "SaveFirst automatic transaction categorisation screen" },
    ],
    accent: "#1392EC",

    schemaType: "SoftwareApplication",
    applicationCategory: "FinanceApplication",
    operatingSystem: "iOS",
  },
  {
    slug: "sns-events",
    name: "SNS Events",
    category: "Web App · Luxury Event Planning · Dallas–Fort Worth",
    status: "live",
    statusLabel: "Live",
    externalUrl: "https://sseventsdfw.com",
    externalLabel: "Visit sseventsdfw.com",

    seoTitle: "SNS Events — Luxury Event Planning Website | Dallas–Fort Worth",
    seoDescription:
      "SNS Events is an elegant event-planning website built by Teak Software Studio for a premier Dallas–Fort Worth planner — with service showcases, custom package requests, and online booking for weddings, corporate galas, and milestone celebrations.",

    eyebrow: "Our Work · Web App",
    headlineLead: "A luxury event brand,",
    headlineAccent: "beautifully online",
    headlineTail: ".",
    deck: "An elegant marketing site and booking experience for a premier Dallas–Fort Worth event planner — service showcases, custom package requests, and online booking for weddings, corporate galas, and milestone celebrations.",

    overview: [
      "A luxury event planner sells a feeling long before they sell a service — and the website has to carry that feeling from the very first scroll. For SNS Events, a premier Dallas–Fort Worth planner, we built a marketing site that looks and moves like the events themselves: refined, warm, and unmistakably high-end.",
      "Beyond the visuals, the site does real work. Prospective clients can explore curated service showcases, request custom packages tailored to their occasion, and book online — turning an elegant first impression into qualified enquiries and confirmed events, without the planner living in their inbox.",
    ],
    features: [
      {
        title: "An elegant, on-brand marketing site",
        detail:
          "A design that mirrors the sophistication of a luxury event experience, built to convert admiration into enquiries.",
      },
      {
        title: "Curated service showcases",
        detail:
          "Weddings, corporate galas, and milestone celebrations presented in a way that lets each service sell itself.",
      },
      {
        title: "Custom package requests",
        detail:
          "A tailored request flow so clients can describe their occasion and get packages shaped to their vision.",
      },
      {
        title: "Online booking",
        detail:
          "A booking experience that turns interest into confirmed dates, reducing back-and-forth for the planner.",
      },
    ],
    techStack: ["Marketing Site", "Online Booking", "Responsive Design", "DFW Local"],
    faqs: [
      {
        question: "What is SNS Events?",
        answer:
          "SNS Events is a luxury event-planning website we designed and built for a premier Dallas–Fort Worth planner, covering weddings, corporate galas, and milestone celebrations.",
      },
      {
        question: "What can visitors do on the site?",
        answer:
          "Visitors can browse curated service showcases, request custom event packages tailored to their occasion, and book online — all within an elegant, on-brand experience.",
      },
      {
        question: "Is the site live?",
        answer:
          "Yes. SNS Events is live at sseventsdfw.com, serving clients across the Dallas–Fort Worth area.",
      },
    ],
    layout: "browser",
    screenshots: [
      { src: "/sns-events.png", alt: "SNS Events website homepage" },
      { src: "/sns-events-2.png", alt: "SNS Events weddings and engagement page" },
    ],
    accent: "var(--teak)",

    schemaType: "WebSite",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
