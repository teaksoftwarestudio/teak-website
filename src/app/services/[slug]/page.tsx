import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServiceDetail";
import JsonLd, {
  serviceSchema,
  faqSchema,
  serviceBreadcrumbSchema,
} from "@/components/JsonLd";
import { services, getService } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service not found — Teak Software Studio" };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service)} />
      <JsonLd data={serviceBreadcrumbSchema(service)} />
      <Nav />
      <main>
        <ServiceDetail service={service} />
      </main>
      <Footer />
    </>
  );
}
