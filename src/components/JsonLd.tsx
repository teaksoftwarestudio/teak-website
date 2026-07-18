import type { Service } from "@/data/services";
import type { Product } from "@/data/products";
import type { BlogPost } from "@/data/blog";

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
    address: {
      "@type": "PostalAddress",
      streetAddress: "5900 Balcones Drive Ste 100",
      addressLocality: "Austin",
      addressRegion: "TX",
      postalCode: "78731",
      addressCountry: "US",
    },
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

/** A product/work item. SoftwareApplication for apps, WebSite for sites. */
export function productSchema(product: Product) {
  const url = `${BASE_URL}/products/${product.slug}`;
  const image = `${BASE_URL}${product.screenshots[0]?.src ?? "/apple-touch-icon.png"}`;

  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": product.schemaType,
    "@id": `${url}/#product`,
    name: product.name,
    description: product.seoDescription,
    url,
    image,
    creator: { "@id": `${BASE_URL}/#organization` },
  };

  if (product.schemaType === "SoftwareApplication") {
    base.applicationCategory = product.applicationCategory;
    base.operatingSystem = product.operatingSystem;
    // Free-to-list offer keeps the SoftwareApplication schema valid without inventing a price.
    base.offers = {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    };
  }

  return base;
}

/** FAQ rich-result markup, built from a product's FAQ data. */
export function productFaqSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Breadcrumb trail: Home → Products → this product. */
export function productBreadcrumbSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: product.name,
        item: `${BASE_URL}/products/${product.slug}`,
      },
    ],
  };
}

/** Article rich-result markup for a blog post. */
export function blogPostSchema(post: BlogPost) {
  const url = `${BASE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}/#article`,
    headline: post.title,
    description: post.seoDescription,
    url,
    mainEntityOfPage: url,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@id": `${BASE_URL}/#organization` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    keywords: post.keywords.join(", "),
    image: `${BASE_URL}/apple-touch-icon.png`,
  };
}

/** FAQ rich-result markup, built from a blog post's FAQ data. */
export function blogFaqSchema(post: BlogPost) {
  if (!post.faqs || post.faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Breadcrumb trail: Home → Blog → this post. */
export function blogBreadcrumbSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${BASE_URL}/blog/${post.slug}`,
      },
    ],
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
