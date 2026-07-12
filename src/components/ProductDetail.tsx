"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, fadeUp, stagger } from "./motion";
import type { Product } from "@/data/products";

export default function ProductDetail({ product }: { product: Product }) {
  const reduce = useReducedMotion();

  return (
    <>
      {/* ───────────────── Hero ───────────────── */}
      <section
        style={{
          background: "var(--cream)",
          color: "var(--ink)",
          padding: "156px 0 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-18%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 860,
            height: 860,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(196,168,130,0.16) 0%, transparent 68%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          variants={stagger}
          initial={reduce ? false : "hidden"}
          animate="show"
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            padding: "0 32px",
            position: "relative",
          }}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: 26 }}>
            <Link
              href="/#work"
              className="link-sweep"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.02em",
                color: "var(--ink-muted)",
                textDecoration: "none",
              }}
            >
              ← All products
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="eyebrow"
            style={{ marginBottom: 22 }}
          >
            {product.eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(42px, 6.4vw, 84px)",
              fontWeight: 400,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              maxWidth: 900,
              marginBottom: 28,
            }}
          >
            {product.headlineLead}{" "}
            <span style={{ fontStyle: "italic", color: "var(--teak)" }}>
              {product.headlineAccent}
            </span>
            {product.headlineTail}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(16px, 1.5vw, 19px)",
              lineHeight: 1.7,
              color: "var(--ink-muted)",
              maxWidth: 620,
              marginBottom: 34,
            }}
          >
            {product.deck}
          </motion.p>

          <motion.div
            variants={fadeUp}
            style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}
          >
            {product.externalUrl && (
              <a
                href={product.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--cream)",
                  background: "var(--teak)",
                  padding: "14px 28px",
                  textDecoration: "none",
                  borderRadius: 6,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  boxShadow: "0 14px 30px -14px rgba(139,111,71,0.6)",
                }}
              >
                {product.externalLabel}
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 12L12 4M12 4H6M12 4V10"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
            <StatusPill status={product.status} label={product.statusLabel} />
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          variants={fadeUp}
          initial={reduce ? false : "hidden"}
          animate="show"
          style={{
            maxWidth: 1160,
            margin: "80px auto 0",
            padding: "0 32px",
          }}
        >
          {product.layout === "phones" ? (
            <PhoneVisual screenshots={product.screenshots} />
          ) : (
            <BrowserVisual screenshots={product.screenshots} />
          )}
        </motion.div>

        <div style={{ height: 96 }} />
      </section>

      {/* ───────────────── Overview ───────────────── */}
      <section
        style={{
          background: "var(--white)",
          borderTop: "1px solid var(--ink-hairline)",
          padding: "104px 0",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px" }}>
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 22 }}>
              Overview
            </p>
          </Reveal>
          {product.overview.map((para, i) => (
            <Reveal key={i}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(17px, 1.5vw, 20px)",
                  lineHeight: 1.75,
                  color: "var(--ink)",
                  marginBottom: 28,
                }}
              >
                {para}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────────── Features ───────────────── */}
      <section
        style={{
          background: "var(--cream)",
          borderTop: "1px solid var(--ink-hairline)",
          padding: "104px 0",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 32px" }}>
          <Reveal style={{ marginBottom: 56 }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>
              What it does
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(30px, 3.6vw, 50px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                maxWidth: 640,
              }}
            >
              Built to earn a place on{" "}
              <span style={{ fontStyle: "italic", color: "var(--teak)" }}>
                your home screen
              </span>
              .
            </h2>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 2,
              background: "var(--ink-hairline)",
              border: "1px solid var(--ink-hairline)",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            {product.features.map((feature) => (
              <Reveal key={feature.title}>
                <div
                  style={{
                    background: "var(--white)",
                    padding: "36px 32px",
                    height: "100%",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 21,
                      fontWeight: 400,
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                      marginBottom: 12,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "var(--ink-muted)",
                    }}
                  >
                    {feature.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Tech stack */}
          <Reveal style={{ marginTop: 48 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {product.techStack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.03em",
                    padding: "8px 16px",
                    borderRadius: 999,
                    border: "1px solid var(--ink-subtle)",
                    color: "var(--ink-muted)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── FAQ ───────────────── */}
      <section
        style={{
          background: "var(--white)",
          borderTop: "1px solid var(--ink-hairline)",
          padding: "104px 0",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px" }}>
          <Reveal style={{ marginBottom: 48 }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>
              Questions
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 3.2vw, 44px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Good to know
            </h2>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {product.faqs.map((faq, i) => (
              <Reveal key={i}>
                <div
                  style={{
                    padding: "28px 0",
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
                      marginBottom: 12,
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
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── CTA ───────────────── */}
      <section
        style={{
          background: "var(--cream)",
          borderTop: "1px solid var(--ink-hairline)",
          padding: "104px 0",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
          <Reveal>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(30px, 3.6vw, 52px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: 20,
              }}
            >
              Want something like{" "}
              <span style={{ fontStyle: "italic", color: "var(--teak)" }}>
                {product.name}
              </span>
              ?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(16px, 1.5vw, 19px)",
                lineHeight: 1.7,
                color: "var(--ink-muted)",
                maxWidth: 520,
                margin: "0 auto 34px",
              }}
            >
              We design and build polished web, mobile, and AI products for clients
              across North America and Europe. Tell us what you have in mind.
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
    </>
  );
}

/* ── Phone mockup (SaveFirst) ── */
function PhoneVisual({ screenshots }: { screenshots: Product["screenshots"] }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 24,
        background:
          "radial-gradient(120% 120% at 30% 0%, #FBF8F3 0%, #F1E8D9 45%, #E4D3BA 100%)",
        border: "1px solid var(--ink-hairline)",
        padding: "clamp(56px, 8vw, 110px) clamp(32px, 6vw, 88px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "clamp(20px, 3vw, 44px)",
        overflow: "hidden",
        boxShadow: "0 40px 90px -50px rgba(139,111,71,0.4)",
      }}
    >
      {/* Grid texture */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(21,19,17,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(21,19,17,0.045) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(circle at 50% 40%, #000 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 40%, #000 20%, transparent 70%)",
        }}
      />
      {/* Ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "22%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 520,
          height: 520,
          background:
            "radial-gradient(circle, rgba(139,111,71,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          transform: "rotate(-4deg)",
          filter: "drop-shadow(0 30px 60px rgba(139,111,71,0.22))",
        }}
      >
        <Image
          src={screenshots[0].src}
          alt={screenshots[0].alt}
          width={840}
          height={1740}
          style={{ width: "clamp(200px, 26vw, 320px)", height: "auto", display: "block" }}
        />
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 2,
          transform: "rotate(3deg) translateY(-32px)",
          filter: "drop-shadow(0 34px 70px rgba(139,111,71,0.24))",
        }}
      >
        <Image
          src={screenshots[1].src}
          alt={screenshots[1].alt}
          width={840}
          height={1740}
          style={{ width: "clamp(200px, 26vw, 320px)", height: "auto", display: "block" }}
        />
      </div>
    </div>
  );
}

/* ── Browser mockup (SNS Events) ── */
function BrowserVisual({ screenshots }: { screenshots: Product["screenshots"] }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "clamp(40px, 6vw, 72px)",
      }}
    >
      {screenshots.map((shot) => (
        <div
          key={shot.src}
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(21,19,17,0.1)",
            background: "#fff",
            boxShadow:
              "0 44px 90px -40px rgba(21,19,17,0.4), 0 12px 28px -14px rgba(21,19,17,0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "12px 16px",
              background: "#F5F1EA",
              borderBottom: "1px solid rgba(21,19,17,0.08)",
            }}
          >
            {["#E4655A", "#E9B24C", "#5DBF6B"].map((c) => (
              <span key={c} style={{ width: 11, height: 11, borderRadius: 999, background: c }} />
            ))}
          </div>
          <Image
            src={shot.src}
            alt={shot.alt}
            width={1876}
            height={942}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      ))}
    </div>
  );
}

function StatusPill({
  status,
  label,
}: {
  status: Product["status"];
  label: string;
}) {
  const live = status === "live";
  const color = live ? "#1E9E5A" : "var(--teak)";
  const dot = live ? "#22B463" : "var(--teak-light)";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--font-sans)",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color,
      }}
    >
      <motion.span
        animate={live ? { scale: [1, 1.35, 1], opacity: [1, 0.6, 1] } : {}}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: 8, height: 8, borderRadius: 999, background: dot }}
      />
      {label}
    </span>
  );
}
