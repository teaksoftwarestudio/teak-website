import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BlogIndex from "@/components/BlogIndex";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Software Development Insights for Founders | Teak Software Studio",
  description:
    "Practical, no-hype guides on software development cost, timelines, and technology — SaaS MVPs, mobile apps, AI, and choosing the right tech stack for your startup.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The Teak Journal — Software Development Insights",
    description:
      "Practical guides on building web, mobile, and AI products: cost, timelines, tech stacks, and how to hire the right development partner.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Nav />
      <main>
        <BlogIndex posts={sorted} />
      </main>
      <Footer />
    </>
  );
}
