"use client";

import { motion, useReducedMotion } from "framer-motion";
import { blurUp, fadeUp, stagger } from "./motion";

export default function AboutHero() {
  const reduce = useReducedMotion();

  return (
    <section
      style={{
        background: "var(--cream)",
        color: "var(--ink)",
        padding: "168px 0 88px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Warm ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 780,
          height: 780,
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
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
          textAlign: "center",
        }}
      >
        <motion.span
          variants={fadeUp}
          className="eyebrow"
          style={{ display: "block", marginBottom: 24 }}
        >
          About Teak
        </motion.span>

        <motion.h1
          variants={reduce ? fadeUp : blurUp}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(40px, 6vw, 76px)",
            fontWeight: 400,
            lineHeight: 1.06,
            letterSpacing: "-0.03em",
            color: "var(--ink)",
            marginBottom: 26,
          }}
        >
          Software built with{" "}
          <span style={{ fontStyle: "italic", color: "var(--teak)" }}>
            intention
          </span>
          , by a team that cares.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(16px, 1.6vw, 19px)",
            lineHeight: 1.7,
            color: "var(--ink-muted)",
            maxWidth: 620,
            margin: "0 auto",
          }}
        >
          We&rsquo;re a boutique product studio of three. We partner with founders
          and teams to design, build, and grow software that feels considered from
          the first click to the last commit.
        </motion.p>
      </motion.div>
    </section>
  );
}
