"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "SaaS Products",
    description:
      "End-to-end product development — architecture, design, launch, and iteration. We build subscription platforms, dashboards, and internal tools that scale.",
    tags: ["Product Strategy", "Full-Stack Dev", "Auth & Billing", "Subscriptions"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="5" width="16" height="11" rx="1" stroke="currentColor" strokeWidth="1.3" />
        <path d="M6 5V4a1 1 0 011-1h6a1 1 0 011 1v1" stroke="currentColor" strokeWidth="1.3" />
        <path d="M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Complex, data-rich web apps engineered for performance and usability. B2B or B2C — we handle everything from database design to frontend polish.",
    tags: ["Next.js", "React", "REST & GraphQL", "Performance"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="14" rx="1" stroke="currentColor" strokeWidth="1.3" />
        <path d="M2 7h16" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="5" cy="5" r="0.8" fill="currentColor" opacity="0.5" />
        <circle cx="8" cy="5" r="0.8" fill="currentColor" opacity="0.5" />
        <path d="M7 11l2 2-2 2M11 15h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Mobile Apps",
    description:
      "Native-quality iOS and Android apps built with React Native. Clean UX, smooth animations, deep platform integrations — shipped on time.",
    tags: ["React Native", "iOS & Android", "Push Notifications", "Offline Support"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="6" y="2" width="8" height="16" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M9 15.5h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M8 5h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Design Systems",
    description:
      "Cohesive component libraries and design tokens that keep your product consistent at any scale. We bridge design and engineering.",
    tags: ["Figma", "Storybook", "Accessibility", "Documentation"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="14" cy="6" r="3" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="6" cy="14" r="3" stroke="currentColor" strokeWidth="1.3" />
        <rect x="11" y="11" width="6" height="6" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.09 }}
      style={{
        border: "1px solid rgba(10,10,10,0.1)",
        padding: "36px 32px 32px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        background: "#ffffff",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
      className="service-card"
    >
      {/* Hover fill line */}
      <motion.div
        className="service-card-line"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "#0a0a0a",
          scaleX: 0,
          transformOrigin: "left",
        }}
      />

      {/* Icon + number row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ color: "#0a0a0a", opacity: 0.55 }}>{service.icon}</div>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", color: "#0a0a0a", opacity: 0.2 }}>
          {service.number}
        </span>
      </div>

      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(21px, 2.2vw, 26px)", fontWeight: 400, lineHeight: 1.2, color: "#0a0a0a" }}>
        {service.title}
      </h3>

      <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.85, color: "#0a0a0a", opacity: 0.5, flexGrow: 1 }}>
        {service.description}
      </p>

      <div style={{ borderTop: "1px solid rgba(10,10,10,0.07)", paddingTop: 16, display: "flex", flexWrap: "wrap", gap: 6 }}>
        {service.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500,
              letterSpacing: "0.03em", padding: "4px 11px",
              border: "1px solid rgba(10,10,10,0.1)", color: "#0a0a0a", opacity: 0.45,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <style>{`
        .service-card:hover .service-card-line { transform: scaleX(1) !important; transition: transform 0.35s ease; }
        .service-card:hover { background: #fafafa !important; }
      `}</style>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ background: "#ffffff", padding: "120px 0", borderTop: "1px solid rgba(10,10,10,0.1)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ marginBottom: 64, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 32 }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
              <div style={{ width: 28, height: 1, background: "#0a0a0a", opacity: 0.25 }} />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0a0a0a", opacity: 0.38 }}>
                What We Build
              </span>
            </div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", maxWidth: 480 }}>
              Craft at every
              <br />
              <em style={{ fontStyle: "italic" }}>layer of the stack.</em>
            </h2>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.75, opacity: 0.45, maxWidth: 300 }}>
            Whether you need a full product built from scratch or a team to extend what you already have — we do both.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "rgba(10,10,10,0.08)" }} className="services-grid">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>

        <HireCallout />
      </div>

      <style>{`
        @media (max-width: 768px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function HireCallout() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        marginTop: 1,
        background: "#0a0a0a",
        padding: "52px 56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 32,
        flexWrap: "wrap",
      }}
      className="hire-callout"
    >
      <div>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 12 }}>
          Available for hire
        </div>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 400, color: "#ffffff", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
          Need a team to build your product?
          <em style={{ fontStyle: "italic", opacity: 0.5 }}> Let&apos;s talk.</em>
        </p>
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", flexShrink: 0 }}>
        <motion.a
          href="#contact"
          whileHover={{ opacity: 0.8 }}
          style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#0a0a0a", background: "#ffffff", padding: "14px 32px", textDecoration: "none" }}
        >
          Start a Project
        </motion.a>
        <motion.a
          href="#work"
          whileHover={{ borderColor: "rgba(255,255,255,0.5)" }}
          style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.2)", background: "transparent", padding: "14px 32px", textDecoration: "none", transition: "border-color 0.2s" }}
        >
          See Our Work
        </motion.a>
      </div>

      <style>{`
        @media (max-width: 640px) { .hire-callout { padding: 36px 28px !important; } }
      `}</style>
    </motion.div>
  );
}
