"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./motion";
import type { BlogPost as Post, BlogSection } from "@/data/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Section({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "h2":
      return (
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(26px, 3vw, 34px)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            margin: "48px 0 18px",
          }}
        >
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 19,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            margin: "32px 0 12px",
          }}
        >
          {section.text}
        </h3>
      );
    case "p":
      return (
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 17,
            lineHeight: 1.8,
            color: "var(--ink)",
            marginBottom: 22,
          }}
        >
          {section.text}
        </p>
      );
    case "ul":
      return (
        <ul style={{ margin: "0 0 24px", paddingLeft: 0, listStyle: "none" }}>
          {section.items.map((item, i) => (
            <li
              key={i}
              style={{
                position: "relative",
                paddingLeft: 26,
                marginBottom: 12,
                fontFamily: "var(--font-sans)",
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--ink)",
              }}
            >
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  left: 4,
                  top: 12,
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--teak)",
                }}
              />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol style={{ margin: "0 0 24px", paddingLeft: 0, listStyle: "none", counterReset: "step" }}>
          {section.items.map((item, i) => (
            <li
              key={i}
              style={{
                position: "relative",
                paddingLeft: 40,
                marginBottom: 14,
                fontFamily: "var(--font-sans)",
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--ink)",
              }}
            >
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  left: 0,
                  top: 1,
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  background: "var(--teak-pale)",
                  color: "var(--teak)",
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote
          style={{
            margin: "32px 0",
            padding: "4px 0 4px 28px",
            borderLeft: "3px solid var(--teak)",
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(20px, 2.4vw, 26px)",
            fontStyle: "italic",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
            color: "var(--ink)",
          }}
        >
          {section.text}
        </blockquote>
      );
    case "callout":
      return (
        <div
          style={{
            margin: "32px 0",
            padding: "24px 28px",
            background: "var(--cream)",
            border: "1px solid var(--ink-hairline)",
            borderRadius: 14,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--teak)",
              marginBottom: 10,
            }}
          >
            {section.title}
          </div>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              lineHeight: 1.7,
              color: "var(--ink)",
              margin: 0,
            }}
          >
            {section.text}
          </p>
        </div>
      );
    case "table":
      return (
        <div style={{ margin: "32px 0", overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              minWidth: 480,
            }}
          >
            <thead>
              <tr>
                {section.headers.map((h, i) => (
                  <th
                    key={i}
                    style={{
                      textAlign: "left",
                      padding: "12px 16px",
                      background: "var(--cream)",
                      borderBottom: "2px solid var(--teak)",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--teak)",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      style={{
                        padding: "14px 16px",
                        borderBottom: "1px solid var(--ink-hairline)",
                        lineHeight: 1.6,
                        color: "var(--ink)",
                        fontWeight: ci === 0 ? 600 : 400,
                        verticalAlign: "top",
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default function BlogPost({
  post,
  related,
}: {
  post: Post;
  related: Post[];
}) {
  const reduce = useReducedMotion();

  return (
    <>
      {/* ───────────── Header ───────────── */}
      <article>
        <header
          style={{
            background: "var(--cream)",
            padding: "148px 0 56px",
            borderBottom: "1px solid var(--ink-hairline)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Ambient glow — matches the service/product hero treatment */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "-40%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 900,
              height: 900,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(196,168,130,0.16) 0%, transparent 68%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              padding: "0 32px",
              position: "relative",
            }}
          >
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: 24 }}
            >
              <Link
                href="/blog"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--ink-muted)",
                  textDecoration: "none",
                }}
              >
                ← All articles
              </Link>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              style={{
                display: "inline-block",
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--teak)",
                background: "var(--teak-pale)",
                borderRadius: 999,
                padding: "5px 12px",
                marginBottom: 22,
              }}
            >
              {post.category}
            </motion.div>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                marginBottom: 22,
              }}
            >
              {post.title}
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 19,
                lineHeight: 1.6,
                color: "var(--ink-muted)",
                marginBottom: 28,
              }}
            >
              {post.excerpt}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ display: "flex", alignItems: "center", gap: 14 }}
            >
              <span style={metaStyle}>{post.author}</span>
              <span style={{ opacity: 0.3 }}>·</span>
              <span style={metaStyle}>{formatDate(post.date)}</span>
              <span style={{ opacity: 0.3 }}>·</span>
              <span style={metaStyle}>{post.readingTime}</span>
            </motion.div>
          </div>
        </header>

        {/* ───────────── Body ───────────── */}
        <div style={{ background: "var(--white)", padding: "56px 0 80px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px" }}>
            {/* Key takeaway — a strong answer up top, good for readers and featured snippets */}
            <div
              style={{
                display: "flex",
                gap: 18,
                padding: "24px 28px",
                background: "var(--teak-pale)",
                borderRadius: 14,
                marginBottom: 48,
              }}
            >
              <div
                aria-hidden
                style={{
                  flexShrink: 0,
                  width: 4,
                  borderRadius: 4,
                  background: "var(--teak)",
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--teak)",
                    marginBottom: 8,
                  }}
                >
                  The short answer
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 16.5,
                    lineHeight: 1.65,
                    color: "var(--ink)",
                    margin: 0,
                  }}
                >
                  {post.keyTakeaway}
                </p>
              </div>
            </div>

            {post.body.map((section, i) => (
              <Section key={i} section={section} />
            ))}

            {/* FAQ */}
            {post.faqs && post.faqs.length > 0 && (
              <div style={{ marginTop: 56 }}>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(26px, 3vw, 34px)",
                    fontWeight: 400,
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                    marginBottom: 24,
                  }}
                >
                  Frequently asked questions
                </h2>
                {post.faqs.map((faq, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "24px 0",
                      borderTop: i === 0 ? "1px solid var(--ink-hairline)" : "none",
                      borderBottom: "1px solid var(--ink-hairline)",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 18,
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                        marginBottom: 10,
                      }}
                    >
                      {faq.question}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 16,
                        lineHeight: 1.75,
                        color: "var(--ink-muted)",
                        margin: 0,
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>

      {/* ───────────── CTA ───────────── */}
      <section
        style={{
          background: "var(--cream)",
          borderTop: "1px solid var(--ink-hairline)",
          padding: "80px 0",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
          <Reveal>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 3.4vw, 44px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: 18,
              }}
            >
              Have a project in{" "}
              <span style={{ fontStyle: "italic", color: "var(--teak)" }}>mind</span>?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--ink-muted)",
                marginBottom: 30,
              }}
            >
              We design and build web, mobile, and AI products for founders who care
              about quality. Tell us what you&apos;re building.
            </p>
            <Link
              href="/#contact"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--cream)",
                background: "var(--teak)",
                padding: "15px 32px",
                textDecoration: "none",
                borderRadius: 6,
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                boxShadow: "0 14px 30px -14px rgba(139,111,71,0.6)",
              }}
            >
              Start a project
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 12L12 4M12 4H6M12 4V10"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───────────── Related ───────────── */}
      {related.length > 0 && (
        <section
          style={{
            background: "var(--white)",
            borderTop: "1px solid var(--ink-hairline)",
            padding: "80px 0 104px",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
            <Reveal>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--teak)",
                  marginBottom: 32,
                }}
              >
                Keep reading
              </p>
            </Reveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 24,
              }}
            >
              {related.map((r) => (
                <Reveal key={r.slug}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="related-card"
                    style={{
                      display: "block",
                      padding: "28px 26px",
                      height: "100%",
                      border: "1px solid var(--ink-hairline)",
                      borderRadius: 14,
                      textDecoration: "none",
                      color: "inherit",
                      transition: "border-color 0.25s, transform 0.25s",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--teak)",
                      }}
                    >
                      {r.category}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 20,
                        fontWeight: 400,
                        lineHeight: 1.2,
                        letterSpacing: "-0.01em",
                        margin: "12px 0 0",
                      }}
                    >
                      {r.title}
                    </h3>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .related-card:hover {
          border-color: var(--teak) !important;
          transform: translateY(-3px);
        }
      `}</style>
    </>
  );
}

const metaStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: 13,
  color: "var(--ink-muted)",
  opacity: 0.75,
};
