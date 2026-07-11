"use client";

import { motion, useReducedMotion } from "framer-motion";
import { blurUp } from "./motion";

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 72,
        background: "var(--cream)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Teak accent blobs — slow drift */}
      <motion.div
        aria-hidden
        animate={
          reduce ? undefined : { y: [0, -30, 0], x: [0, 18, 0], scale: [1, 1.06, 1] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "8%",
          right: "-12%",
          width: 640,
          height: 640,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(196,168,130,0.16) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        aria-hidden
        animate={reduce ? undefined : { y: [0, 24, 0], x: [0, -14, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "-6%",
          left: "-8%",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,111,71,0.09) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 32px",
          width: "100%",
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Main heading */}
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(52px, 8.4vw, 116px)",
            fontWeight: 400,
            lineHeight: 0.98,
            letterSpacing: "var(--tracking-tight)",
            color: "var(--ink)",
            marginBottom: 38,
          }}
        >
          <motion.span variants={blurUp} style={{ display: "block" }}>
            We build products for
          </motion.span>
          <motion.span
            variants={blurUp}
            style={{ display: "block", fontStyle: "italic", color: "var(--teak)" }}
          >
            people and&nbsp;agents.
          </motion.span>
        </h1>

        {/* Sub */}
        <motion.p
          variants={blurUp}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(16px, 2vw, 20px)",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "var(--ink)",
            opacity: 0.65,
            maxWidth: 560,
            marginBottom: 52,
          }}
        >
          We&rsquo;re a small studio creating our own digital products and
          collaborating with businesses on theirs.
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={blurUp}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <motion.a
            href="#work"
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "var(--cream)",
              background: "var(--ink)",
              padding: "17px 38px",
              textDecoration: "none",
              display: "inline-block",
              boxShadow: "0 12px 30px -12px rgba(21,19,17,0.4)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--teak)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--ink)")
            }
          >
            View Our Work
          </motion.a>
          <motion.a
            href="#contact"
            className="cta-arrow"
            whileHover={reduce ? undefined : "hover"}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--ink)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 10,
              opacity: 0.8,
            }}
          >
            Start a project
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              variants={{ hover: { x: 5 } }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.div>

    </section>
  );
}
