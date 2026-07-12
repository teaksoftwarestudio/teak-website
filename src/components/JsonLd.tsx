import type { Service } from "@/data/services";

const BASE_URL = "https://www.teaksoftware.studio";

/**
 * Renders a JSON-LD structured-data <script>. Uses a native <script> tag
 * (not next/script) because JSON-LD is data, not executable JS. The `<`
 * escaping guards against XSS via string fields.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/** Identity of the studio. Rendered site-wide from the root layout. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Teak Software Studio",
    url: BASE_URL,
    logo: `${BASE_URL}/apple-touch-icon.png`,
    email: "hello@teaksoftware.studio",
    description:
      "Teak Software Studio builds polished web applications, mobile apps, and AI systems for clients across North America and Europe.",
    areaServed: [
      { "@type": "Place", name: "North America" },
      { "@type": "Place", name: "Europe" },
    ],
    knowsAbout: [
      "Web application development",
      "Mobile app development",
      "AI systems",
      "Product engineering",
    ],
  };
}

/** The site itself, so search engines can attach a sitelinks search box. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Teak Software Studio",
    publisher: { "@id": `${BASE_URL}/#organization` },
  };
}

/** One service offering. Rendered on each /services/[slug] page. */
export function serviceSchema(service: Service) {
  const url = `${BASE_URL}/services/${service.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}/#service`,
    name: service.title,
    description: service.seoDescription,
    url,
    serviceType: service.title,
    provider: { "@id": `${BASE_URL}/#organization` },
    areaServed: [
      { "@type": "Place", name: "North America" },
      { "@type": "Place", name: "Europe" },
    ],
  };
}

/** FAQ rich-result markup, built from a service's existing FAQ data. */
export function faqSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Breadcrumb trail: Home → Services → this service. */
export function serviceBreadcrumbSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: service.title,
        item: `${BASE_URL}/services/${service.slug}`,
      },
    ],
  };
}
