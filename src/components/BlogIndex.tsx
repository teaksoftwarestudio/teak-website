"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, fadeUp, stagger } from "./motion";
import type { BlogPost } from "@/data/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const reduce = useReducedMotion();
  const [featured, ...rest] = posts;

  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section
        style={{
          background: "var(--cream)",
          padding: "156px 0 72px",
          borderBottom: "1px solid var(--ink-hairline)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow"
            style={{ marginBottom: 22 }}
          >
            The Teak Journal
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(40px, 6vw, 76px)",
              fontWeight: 400,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              maxWidth: 820,
              marginBottom: 26,
            }}
          >
            Notes on building{" "}
            <span style={{ fontStyle: "italic", color: "var(--teak)" }}>
              great software
            </span>
            .
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(16px, 1.5vw, 19px)",
              lineHeight: 1.7,
              color: "var(--ink-muted)",
              maxWidth: 560,
            }}
          >
            Practical, no-hype guidance on cost, timelines, and technology for
            founders building web, mobile, and AI products.
          </motion.p>
        </div>
      </section>

      {/* ───────────── Featured ───────────── */}
      {featured && (
        <section
          style={{
            background: "var(--white)",
            padding: "72px 0",
            borderBottom: "1px solid var(--ink-hairline)",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="blog-featured"
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 48,
                    alignItems: "center",
                  }}
                  className="blog-featured-grid"
                >
                  <div
                    className="blog-featured-visual"
                    style={{
                      aspectRatio: "4 / 3",
                      borderRadius: 16,
                      background:
                        "radial-gradient(120% 120% at 30% 0%, #FBF8F3 0%, #F1E8D9 45%, #E4D3BA 100%)",
                      border: "1px solid var(--ink-hairline)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      aria-hidden
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                          "linear-gradient(rgba(21,19,17,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(21,19,17,0.045) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                        maskImage:
                          "radial-gradient(circle at 50% 45%, #000 25%, transparent 72%)",
                        WebkitMaskImage:
                          "radial-gradient(circle at 50% 45%, #000 25%, transparent 72%)",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(48px, 7vw, 96px)",
                        fontStyle: "italic",
                        color: "var(--teak)",
                        opacity: 0.35,
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      Teak
                    </span>
                  </div>

                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                      <span className="blog-tag">Featured</span>
                      <span className="blog-meta">{featured.category}</span>
                    </div>
                    <h2
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(26px, 3.2vw, 40px)",
                        fontWeight: 400,
                        lineHeight: 1.12,
                        letterSpacing: "-0.02em",
                        marginBottom: 16,
                      }}
                    >
                      {featured.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 16,
                        lineHeight: 1.7,
                        color: "var(--ink-muted)",
                        marginBottom: 22,
                      }}
                    >
                      {featured.excerpt}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span className="blog-meta">{formatDate(featured.date)}</span>
                      <span style={{ opacity: 0.3 }}>·</span>
                      <span className="blog-meta">{featured.readingTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* ───────────── Grid ───────────── */}
      <section style={{ background: "var(--white)", padding: "24px 0 120px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
          <motion.div
            variants={stagger}
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 2,
              background: "var(--ink-hairline)",
              border: "1px solid var(--ink-hairline)",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            {rest.map((post) => (
              <motion.div key={post.slug} variants={fadeUp}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="blog-card"
                  style={{
                    display: "block",
                    background: "var(--white)",
                    padding: "36px 32px",
                    height: "100%",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "background 0.25s",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                    <span className="blog-tag" style={{ marginBottom: 18 }}>
                      {post.category}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 23,
                        fontWeight: 400,
                        lineHeight: 1.18,
                        letterSpacing: "-0.01em",
                        marginBottom: 14,
                      }}
                    >
                      {post.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 15,
                        lineHeight: 1.7,
                        color: "var(--ink-muted)",
                        marginBottom: 24,
                      }}
                    >
                      {post.excerpt}
                    </p>
                    <div
                      style={{
                        marginTop: "auto",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <span className="blog-meta">{formatDate(post.date)}</span>
                      <span style={{ opacity: 0.3 }}>·</span>
                      <span className="blog-meta">{post.readingTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <style>{`
        .eyebrow {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--teak);
        }
        .blog-tag {
          display: inline-block;
          width: fit-content;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--teak);
          background: var(--teak-pale);
          border-radius: 999px;
          padding: 5px 12px;
        }
        .blog-meta {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--ink-muted);
          opacity: 0.7;
        }
        .blog-card:hover { background: var(--cream) !important; }
        .blog-featured:hover h2 { color: var(--teak); }
        @media (max-width: 760px) {
          .blog-featured-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .blog-featured-visual { aspect-ratio: 16 / 9 !important; }
        }
      `}</style>
    </>
  );
}
