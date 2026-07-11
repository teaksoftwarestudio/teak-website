"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE, Reveal, fadeUp, stagger } from "./motion";

export default function Work() {
  return (
    <section
      id="work"
      style={{
        background: "var(--cream)",
        padding: "128px 0",
        borderTop: "1px solid var(--ink-hairline)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <Reveal
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 72,
            flexWrap: "wrap",
            gap: 32,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 32, height: 1, background: "var(--teak)" }} />
              <span className="eyebrow">Our Products</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 5vw, 66px)",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              Products we&apos;ve
              <br />
              <span style={{ fontStyle: "italic", color: "var(--teak)" }}>shipped.</span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              lineHeight: 1.7,
              opacity: 0.58,
              maxWidth: 340,
            }}
          >
            We don&apos;t just build for clients — we build our own products too.
            Here&apos;s what we&apos;ve shipped.
          </p>
        </Reveal>

        <SaveFirstCard />
        <ComingSoonRow />
      </div>
    </section>
  );
}

function SaveFirstCard() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: EASE }}
      whileHover={reduce ? undefined : { y: -6 }}
      style={{
        background: "var(--white)",
        border: "1px solid var(--ink-hairline)",
        marginBottom: 24,
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: 480,
        borderRadius: 8,
        boxShadow: "0 40px 80px -60px rgba(21,19,17,0.4)",
        transition: "box-shadow 0.5s ease",
      }}
      className="savefirst-card"
    >
      {/* Left — screenshots */}
      <div
        style={{
          background: "linear-gradient(135deg, #EEF7FF 0%, #D9EDF7 100%)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          padding: "48px 40px 0",
          gap: 20,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 320,
            height: 320,
            background: "radial-gradient(circle, rgba(19,146,236,0.16) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* Phone 1 — home */}
        <motion.div
          animate={reduce ? undefined : { y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            transform: "rotate(-3deg)",
            zIndex: 1,
            flexShrink: 0,
            filter:
              "drop-shadow(0 24px 40px rgba(19,146,236,0.18)) drop-shadow(0 6px 12px rgba(0,0,0,0.1))",
          }}
        >
          <PhoneShell>
            <Image
              src="/savefirst-home.png"
              alt="SaveFirst home screen"
              width={320}
              height={693}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            />
          </PhoneShell>
        </motion.div>
        {/* Phone 2 — transaction */}
        <motion.div
          animate={reduce ? undefined : { y: [-20, -32, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          style={{
            transform: "rotate(2.5deg)",
            zIndex: 2,
            flexShrink: 0,
            filter:
              "drop-shadow(0 28px 48px rgba(19,146,236,0.22)) drop-shadow(0 8px 16px rgba(0,0,0,0.12))",
          }}
        >
          <PhoneShell>
            <Image
              src="/savefirst-transaction.png"
              alt="SaveFirst add transaction screen"
              width={320}
              height={693}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            />
          </PhoneShell>
        </motion.div>
      </div>

      {/* Right — content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          padding: "52px 48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <motion.div
          variants={fadeUp}
          style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#1392EC",
              background: "#EEF7FF",
              padding: "5px 12px",
              borderRadius: 999,
            }}
          >
            iOS App · FinTech
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--teak)",
              background: "var(--teak-pale)",
              padding: "5px 12px",
              borderRadius: 999,
            }}
          >
            AI-Powered
          </span>
        </motion.div>

        <motion.h3
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(32px, 3.5vw, 50px)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 20,
          }}
        >
          SaveFirst
        </motion.h3>

        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 15,
            lineHeight: 1.8,
            opacity: 0.64,
            marginBottom: 32,
            maxWidth: 400,
          }}
        >
          A personal finance tracker for iOS that automatically categorises every
          transaction — expenses, income, and investments. Integrated with AI to
          surface spending insights, heads-up alerts, and visualise trends before you
          even think to look.
        </motion.p>

        <motion.div
          variants={fadeUp}
          style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}
        >
          {[
            "Expense Tracking",
            "Income & Investments",
            "AI Insights",
            "Spend Trends",
            "Heads-Up Alerts",
            "React Native",
          ].map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.03em",
                padding: "6px 14px",
                borderRadius: 999,
                border: "1px solid var(--ink-subtle)",
                color: "var(--ink)",
                opacity: 0.72,
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          style={{ display: "flex", alignItems: "center", gap: 24 }}
        >
          <motion.a
            href="https://savefirst.app"
            target="_blank"
            rel="noopener noreferrer"
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
              background: "#1392EC",
              padding: "14px 28px",
              textDecoration: "none",
              display: "inline-block",
              borderRadius: 4,
              boxShadow: "0 12px 28px -12px rgba(19,146,236,0.6)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#0F75CC")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#1392EC")
            }
          >
            View App
          </motion.a>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              opacity: 0.42,
              fontStyle: "italic",
            }}
          >
            Available on the App Store
          </span>
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .savefirst-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </motion.div>
  );
}

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 180,
        height: 388,
        borderRadius: 32,
        border: "6px solid #1a1a1a",
        background: "#000",
        overflow: "hidden",
        position: "relative",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 8,
          left: "50%",
          transform: "translateX(-50%)",
          width: 64,
          height: 18,
          background: "#000",
          borderRadius: 10,
          zIndex: 10,
        }}
      />
      {children}
    </div>
  );
}

function ComingSoonRow() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 24,
      }}
      className="coming-grid"
    >
      {["SaaS Platform", "Web App", "Mobile App"].map((label) => (
        <motion.div
          key={label}
          variants={fadeUp}
          whileHover={reduce ? undefined : { y: -4, borderColor: "var(--teak-light)" }}
          style={{
            border: "1px dashed var(--ink-subtle)",
            borderRadius: 8,
            padding: "48px 32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              border: "1px solid var(--ink-subtle)",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 4,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 3v10M3 8h10"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.3"
              />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              opacity: 0.34,
            }}
          >
            {label}
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              opacity: 0.28,
              fontStyle: "italic",
            }}
          >
            Coming soon
          </span>
        </motion.div>
      ))}
      <style>{`
        @media (max-width: 768px) {
          .coming-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </motion.div>
  );
}
