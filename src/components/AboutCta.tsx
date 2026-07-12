"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Reveal } from "./motion";

export default function AboutCta() {
  const reduce = useReducedMotion();

  return (
    <section
      style={{
        background: "var(--teak-pale)",
        color: "var(--ink)",
        padding: "104px 0",
        borderTop: "1px solid var(--ink-hairline)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px" }}>
        <Reveal>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 5vw, 66px)",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              marginBottom: 18,
            }}
          >
            Work With Us
          </h2>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(19px, 2vw, 24px)",
              fontWeight: 400,
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
              color: "var(--ink-muted)",
              marginBottom: 30,
            }}
          >
            Have something worth{" "}
            <span style={{ fontStyle: "italic", color: "var(--teak)" }}>
              building?
            </span>
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16.5,
              lineHeight: 1.75,
              color: "var(--ink-muted)",
              maxWidth: 520,
              margin: "0 auto 36px",
            }}
          >
            We take on a small number of projects at a time so each one gets our
            full attention. Tell us what you&rsquo;re working on and we&rsquo;ll
            tell you honestly how we can help.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <motion.a
              href="/#contact"
              whileHover={reduce ? undefined : { scale: 1.04 }}
              whileTap={reduce ? undefined : { scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "var(--cream)",
                background: "var(--ink)",
                padding: "15px 30px",
                textDecoration: "none",
                borderRadius: 6,
              }}
            >
              Start a Project
            </motion.a>
            <Link
              href="/#work"
              className="link-sweep"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.02em",
                color: "var(--ink)",
                alignSelf: "center",
              }}
            >
              See our work
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
