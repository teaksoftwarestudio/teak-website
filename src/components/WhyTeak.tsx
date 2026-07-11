"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "We ship, not just plan.",
    body: "No endless discovery phases. We move from idea to production-ready software fast — without cutting corners on quality.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 11l5 5 9-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Founders & engineers.",
    body: "We build our own products. That means we understand product-market fit, margins, and what actually matters — not just clean code.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.4" />
        <rect x="12" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.4" />
        <rect x="3" y="12" width="7" height="7" stroke="currentColor" strokeWidth="1.4" />
        <rect x="12" y="12" width="7" height="7" stroke="currentColor" strokeWidth="1.4" fill="currentColor" opacity="0.15" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Senior-only team.",
    body: "No juniors hidden in the work. Every line of code is written by someone with 5+ years of production experience.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 19c0-3.866 3.134-7 7-7h.5c3.866 0 7 3.134 7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Full-stack ownership.",
    body: "Design, frontend, backend, DevOps, mobile — one team, one invoice, one point of contact. No handoff friction.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3v16M3 11h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

export default function WhyTeak() {
  return (
    <section
      style={{
        background: "#0a0a0a",
        padding: "100px 0",
        borderTop: "1px solid rgba(10,10,10,0.1)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Faint grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", position: "relative" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ marginBottom: 72, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 28, height: 1, background: "rgba(255,255,255,0.25)" }} />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
                Why Teak
              </span>
            </div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(34px, 4.5vw, 58px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#ffffff" }}>
              Not just another
              <br />
              <em style={{ fontStyle: "italic", opacity: 0.5 }}>dev shop.</em>
            </h2>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.4)", maxWidth: 300 }}>
            We&apos;ve built products ourselves — so we know what it actually takes to ship something people use.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: "1px solid rgba(255,255,255,0.07)", borderLeft: "1px solid rgba(255,255,255,0.07)" }} className="pillars-grid">
          {pillars.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: i * 0.1 }}
              style={{
                padding: "40px 32px",
                borderRight: "1px solid rgba(255,255,255,0.07)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                transition: "background 0.25s",
              }}
              className="pillar-card"
            >
              {/* Icon */}
              <div style={{ color: "rgba(255,255,255,0.4)", width: 22, height: 22 }}>
                {p.icon}
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", marginBottom: 10 }}>
                  {p.number}
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px, 1.8vw, 22px)", fontWeight: 400, color: "#ffffff", lineHeight: 1.3, marginBottom: 12 }}>
                  {p.title}
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.4)" }}>
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .pillars-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .pillars-grid { grid-template-columns: 1fr !important; } }
        .pillar-card:hover { background: rgba(255,255,255,0.03) !important; }
      `}</style>
    </section>
  );
}
