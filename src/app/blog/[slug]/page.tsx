import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BlogPost from "@/components/BlogPost";
import JsonLd, {
  blogPostSchema,
  blogFaqSchema,
  blogBreadcrumbSchema,
} from "@/components/JsonLd";
import { posts, getPost, getRelatedPosts } from "@/data/blog";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Article not found — Teak Software Studio" };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
    },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const related = getRelatedPosts(post);
  const faqSchema = blogFaqSchema(post);

  return (
    <>
      <JsonLd data={blogPostSchema(post)} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <JsonLd data={blogBreadcrumbSchema(post)} />
      <Nav />
      <main>
        <BlogPost post={post} related={related} />
      </main>
      <Footer />
    </>
  );
}
