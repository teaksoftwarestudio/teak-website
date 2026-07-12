import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";
import JsonLd, {
  productSchema,
  productFaqSchema,
  productBreadcrumbSchema,
} from "@/components/JsonLd";
import { products, getProduct } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return { title: "Product not found — Teak Software Studio" };
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      url: `/products/${product.slug}`,
      type: "website",
      images: product.screenshots[0]?.src
        ? [{ url: product.screenshots[0].src }]
        : undefined,
    },
  };
}

export default async function ProductPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  return (
    <>
      <JsonLd data={productSchema(product)} />
      <JsonLd data={productFaqSchema(product)} />
      <JsonLd data={productBreadcrumbSchema(product)} />
      <Nav />
      <main>
        <ProductDetail product={product} />
      </main>
      <Footer />
    </>
  );
}
