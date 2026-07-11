"use client";

import { motion } from "framer-motion";

const services = [
  { label: "SaaS Products", desc: "Subscription platforms & dashboards" },
  { label: "Web Applications", desc: "Complex B2B & B2C web apps" },
  { label: "Mobile Apps", desc: "iOS & Android with React Native" },
  { label: "Design Systems", desc: "Component libraries & tokens" },
];

const recentWork = [
  { name: "SaveFirst", type: "iOS · FinTech", status: "Live" },
  { name: "Untitled SaaS", type: "SaaS Platform", status: "In Dev" },
  { name: "Untitled Mobile", type: "Mobile App", status: "In Dev" },
];

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: 68,
        background: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fine grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(10,10,10,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 90% 90% at 50% 40%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 40%, black 20%, transparent 100%)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "64px 32px 0",
          width: "100%",
          position: "relative",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 48 }}
        >
          <div style={{ width: 28, height: 1, background: "#0a0a0a", opacity: 0.2 }} />
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0a0a0a", opacity: 0.38 }}>
            Product Studio · Est. 2016
          </span>
          <span style={{ color: "#0a0a0a", opacity: 0.15 }}>·</span>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 400, letterSpacing: "0.06em", color: "#0a0a0a", opacity: 0.32 }}>
            Remote · US &amp; Europe
          </span>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 48, flex: 1, alignItems: "start" }}
          className="hero-grid"
        >
          {/* LEFT — headline + sub + CTAs */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Headline */}
            <div style={{ marginBottom: 36 }}>
              {["We build", "products", "that ship."].map((line, i) => (
                <div key={line} style={{ overflow: "hidden" }}>
                  <motion.div
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.12 }}
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(56px, 9vw, 124px)",
                      fontWeight: 400,
                      lineHeight: 0.93,
                      letterSpacing: "-0.035em",
                      color: "#0a0a0a",
                      fontStyle: i === 1 ? "italic" : "normal",
                      paddingBottom: "0.06em",
                    }}
                  >
                    {line}
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 0.48, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(15px, 1.5vw, 17px)",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "#0a0a0a",
                maxWidth: 460,
                marginBottom: 40,
              }}
            >
              Teak is a small product engineering studio. We build our own SaaS and mobile
              products — and we&apos;re available to hire for yours. Senior-heavy, fully remote.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.72 }}
              style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
            >
              <motion.a
                href="#work"
                whileHover={{ opacity: 0.78 }}
                style={{
                  fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600,
                  letterSpacing: "0.06em", textTransform: "uppercase",
                  color: "#ffffff", background: "#0a0a0a",
                  padding: "14px 32px", textDecoration: "none",
                }}
              >
                See Our Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ background: "#0a0a0a", color: "#ffffff", borderColor: "#0a0a0a" }}
                style={{
                  fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600,
                  letterSpacing: "0.06em", textTransform: "uppercase",
                  color: "#0a0a0a", background: "transparent",
                  border: "1px solid rgba(10,10,10,0.22)",
                  padding: "14px 32px", textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                Hire Us
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT — info panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
            style={{ display: "flex", flexDirection: "column", gap: 0, paddingTop: 8 }}
          >
            {/* What we build */}
            <div style={{ marginBottom: 2 }}>
              <div style={{
                fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#0a0a0a", opacity: 0.28, marginBottom: 0,
                padding: "0 0 12px",
                borderBottom: "1px solid rgba(10,10,10,0.08)",
              }}>
                What we build
              </div>
              {services.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 + i * 0.08 }}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(10,10,10,0.07)",
                    gap: 12,
                  }}
                  className="service-row"
                >
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, color: "#0a0a0a" }}>
                    {s.label}
                  </span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "#0a0a0a", opacity: 0.32, textAlign: "right", flexShrink: 0 }}>
                    {s.desc}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Recent work */}
            <div style={{ marginTop: 28 }}>
              <div style={{
                fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#0a0a0a", opacity: 0.28,
                padding: "0 0 12px",
                borderBottom: "1px solid rgba(10,10,10,0.08)",
              }}>
                Recent work
              </div>
              {recentWork.map((w, i) => (
                <motion.div
                  key={w.name}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.75 + i * 0.08 }}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(10,10,10,0.07)",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: 15, fontWeight: 400, color: "#0a0a0a" }}>
                      {w.name}
                    </span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "#0a0a0a", opacity: 0.3 }}>
                      {w.type}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    color: w.status === "Live" ? "#0a0a0a" : "#0a0a0a",
                    background: w.status === "Live" ? "rgba(10,10,10,0.06)" : "transparent",
                    border: w.status === "Live" ? "none" : "1px solid rgba(10,10,10,0.12)",
                    padding: "3px 8px",
                    opacity: w.status === "Live" ? 1 : 0.35,
                    flexShrink: 0,
                  }}>
                    {w.status}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              style={{
                marginTop: 24,
                padding: "14px 18px",
                background: "rgba(10,10,10,0.03)",
                border: "1px solid rgba(10,10,10,0.07)",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: 6, height: 6, borderRadius: "50%", background: "#0a0a0a", flexShrink: 0 }}
              />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "#0a0a0a", opacity: 0.55 }}>
                Currently taking new projects
              </span>
              <motion.a
                href="#contact"
                whileHover={{ opacity: 1 }}
                style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#0a0a0a", opacity: 0.45, textDecoration: "none", marginLeft: "auto", flexShrink: 0 }}
              >
                Get in touch →
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom stat bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        style={{ borderTop: "1px solid rgba(10,10,10,0.08)", marginTop: 64 }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderLeft: "1px solid rgba(10,10,10,0.08)" }}>
            {[
              { v: "50+", l: "Products Shipped" },
              { v: "8yr", l: "In Business" },
              { v: "US / EU", l: "Client Reach" },
              { v: "100%", l: "Remote-Native" },
            ].map((s) => (
              <div
                key={s.l}
                style={{
                  padding: "24px 32px",
                  borderRight: "1px solid rgba(10,10,10,0.08)",
                  display: "flex",
                  gap: 10,
                  alignItems: "baseline",
                }}
              >
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px, 2.2vw, 28px)", fontWeight: 400, color: "#0a0a0a", letterSpacing: "-0.02em" }}>
                  {s.v}
                </span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "#0a0a0a", opacity: 0.35 }}>
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        .service-row:hover span:first-child { opacity: 0.6; }
      `}</style>
    </section>
  );
}
