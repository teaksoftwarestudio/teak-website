"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { EASE, Reveal, fadeUp, stagger } from "./motion";

const services = [
  {
    number: "01",
    title: "SaaS Products",
    description:
      "End-to-end product development — from architecture and design to launch and iteration. We build subscription platforms, dashboards, and internal tools that scale.",
    tags: ["Product Strategy", "Full-Stack Dev", "Subscriptions", "Auth & Billing"],
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Complex, data-rich web apps engineered for performance and usability. Whether B2B or B2C, we handle the full scope from database design to frontend polish.",
    tags: ["Next.js", "React", "REST & GraphQL", "Performance"],
  },
  {
    number: "03",
    title: "Mobile Apps",
    description:
      "Native-quality iOS and Android applications built with React Native. Clean UX, smooth animations, and deep platform integrations — shipped on time.",
    tags: ["React Native", "iOS & Android", "Push Notifications", "Offline Support"],
  },
  {
    number: "04",
    title: "Design Systems",
    description:
      "Cohesive component libraries and design tokens that accelerate your team. We bridge design and engineering so your product stays consistent at any scale.",
    tags: ["Figma", "Storybook", "Accessibility", "Documentation"],
  },
];

function ServiceRow({ service }: { service: (typeof services)[0] }) {
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: "1px solid var(--ink-hairline)",
        padding: "40px 24px",
        marginLeft: -24,
        marginRight: -24,
        display: "grid",
        gridTemplateColumns: "80px 1fr 1fr",
        gap: "0 48px",
        cursor: "default",
        borderRadius: 4,
        background: hovered && !reduce ? "rgba(255,255,255,0.6)" : "transparent",
        transition: "background 0.4s ease",
        position: "relative",
      }}
      className="service-row"
    >
      <motion.span
        animate={reduce ? undefined : { color: hovered ? "var(--teak-deep)" : "var(--teak)" }}
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 20,
          fontWeight: 400,
          letterSpacing: "0.02em",
          color: "var(--teak)",
          paddingTop: 2,
        }}
      >
        {service.number}
      </motion.span>

      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(26px, 3vw, 38px)",
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: "-0.01em",
            }}
          >
            {service.title}
          </h3>
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            animate={reduce ? undefined : { x: hovered ? 4 : 0, opacity: hovered ? 1 : 0.35 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="var(--teak)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 15,
            lineHeight: 1.75,
            color: "var(--ink)",
            opacity: 0.62,
            maxWidth: 440,
          }}
        >
          {service.description}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          alignContent: "flex-start",
          paddingTop: 6,
        }}
      >
        {service.tags.map((tag) => (
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
              transition: "border-color 0.3s, background 0.3s",
              background: hovered ? "var(--teak-pale)" : "transparent",
              borderColor: hovered ? "transparent" : "var(--ink-subtle)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .service-row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ background: "var(--cream)", padding: "128px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <Reveal style={{ marginBottom: 72 }}>
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
            What We Do
          </h2>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(19px, 2vw, 24px)",
              fontWeight: 400,
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
              color: "var(--ink-muted)",
              maxWidth: 600,
            }}
          >
            Craft at every{" "}
            <span style={{ fontStyle: "italic", color: "var(--teak)" }}>
              layer of the stack.
            </span>
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <ServiceRow key={service.number} service={service} />
          ))}
          <div style={{ borderTop: "1px solid var(--ink-hairline)" }} />
        </motion.div>
      </div>
    </section>
  );
}
