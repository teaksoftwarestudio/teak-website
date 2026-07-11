"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Reveal, fadeUp, stagger } from "./motion";

type Service = {
  number: string;
  title: string;
  plain: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  span: 2 | 3;
  dark?: boolean;
};

const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const services: Service[] = [
  {
    number: "01",
    title: "SaaS Products",
    plain: "Software people subscribe to",
    description:
      "We take your idea from a sketch to a product with paying customers — design, engineering, billing, and launch, handled end to end.",
    tags: ["Product Strategy", "Full-Stack Dev", "Auth & Billing", "Launch"],
    span: 3,
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
        <path d="M9 21h6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Web Applications",
    plain: "Powerful tools that run in the browser",
    description:
      "Dashboards, portals, marketplaces — complex web apps engineered to feel fast and simple, whether you serve ten users or ten million.",
    tags: ["Next.js", "React", "APIs", "Performance"],
    span: 3,
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Mobile Apps",
    plain: "iOS & Android, one codebase",
    description:
      "Native-quality apps for iPhone and Android — clean UX, smooth animations, push notifications to offline mode.",
    tags: ["React Native", "iOS & Android", "App Store"],
    span: 2,
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M11 18.5h2" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "AI Applications",
    plain: "Products with intelligence built in",
    description:
      "Chat assistants, copilots, search that actually understands — AI-native products built on the latest models, tuned to your data.",
    tags: ["LLM Integration", "Copilots", "RAG / Your Data"],
    span: 2,
    dark: true,
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M12 3l1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5L12 3Z" />
        <path d="M18.5 14.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1Z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "AI Automation",
    plain: "Your busywork, done by machines",
    description:
      "We wire AI into your operations — automating support, documents, and workflows so your team spends time where it matters.",
    tags: ["AI Agents", "Workflows", "Integrations"],
    span: 2,
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1" />
      </svg>
    ),
  },
];

function ServiceCard({ service }: { service: Service }) {
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();
  const dark = !!service.dark;

  const textColor = dark ? "var(--cream)" : "var(--ink)";

  return (
    <motion.div
      variants={fadeUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={
        reduce
          ? undefined
          : { y: hovered ? -6 : 0 }
      }
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="service-card"
      style={{
        gridColumn: `span ${service.span}`,
        display: "flex",
        flexDirection: "column",
        padding: "36px 32px",
        borderRadius: 20,
        background: dark ? "var(--ink)" : "rgba(255,255,255,0.72)",
        border: dark
          ? "1px solid var(--ink)"
          : `1px solid ${hovered ? "var(--teak-light)" : "var(--ink-hairline)"}`,
        boxShadow: hovered
          ? "0 24px 48px -20px rgba(21,19,17,0.18)"
          : "0 4px 16px -10px rgba(21,19,17,0.08)",
        transition: "border-color 0.35s ease, box-shadow 0.35s ease",
        color: textColor,
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {dark && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 220,
            height: 220,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(196,168,130,0.28) 0%, rgba(196,168,130,0) 70%)",
            pointerEvents: "none",
          }}
        />
      )}

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 28,
        }}
      >
        <motion.span
          animate={reduce ? undefined : { scale: hovered ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 52,
            height: 52,
            borderRadius: 14,
            background: dark ? "rgba(196,168,130,0.16)" : "var(--teak-pale)",
            color: dark ? "var(--teak-light)" : "var(--teak)",
            transformOrigin: "center",
          }}
        >
          {service.icon}
        </motion.span>
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 14,
            letterSpacing: "0.1em",
            color: dark ? "rgba(250,248,245,0.4)" : "var(--ink-muted)",
          }}
        >
          {service.number}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(24px, 2.4vw, 30px)",
          fontWeight: 400,
          lineHeight: 1.15,
          letterSpacing: "-0.01em",
          marginBottom: 6,
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: 15.5,
          color: dark ? "var(--teak-light)" : "var(--teak)",
          marginBottom: 16,
          letterSpacing: "0.01em",
        }}
      >
        {service.plain}
      </p>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 14.5,
          lineHeight: 1.7,
          color: textColor,
          opacity: dark ? 0.68 : 0.62,
          marginBottom: 24,
        }}
      >
        {service.description}
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          marginTop: "auto",
        }}
      >
        {service.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11.5,
              fontWeight: 500,
              letterSpacing: "0.03em",
              padding: "5px 12px",
              borderRadius: 999,
              border: dark
                ? "1px solid rgba(250,248,245,0.18)"
                : "1px solid var(--ink-subtle)",
              color: textColor,
              opacity: dark ? 0.75 : 0.72,
              background: !dark && hovered ? "var(--teak-pale)" : "transparent",
              borderColor:
                !dark && hovered
                  ? "transparent"
                  : dark
                    ? "rgba(250,248,245,0.18)"
                    : "var(--ink-subtle)",
              transition: "border-color 0.3s, background 0.3s",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function HireUsBand() {
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();

  return (
    <Reveal style={{ marginTop: 24 }}>
      <a
        href="#contact"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px 32px",
          padding: "36px 40px",
          borderRadius: 20,
          background: hovered ? "var(--teak)" : "var(--teak-deep)",
          color: "var(--cream)",
          textDecoration: "none",
          transition: "background 0.4s ease",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(24px, 2.6vw, 34px)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              marginBottom: 10,
            }}
          >
            Have a product in mind?{" "}
            <span style={{ fontStyle: "italic", opacity: 0.85 }}>
              We&rsquo;ll build it for you.
            </span>
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              lineHeight: 1.6,
              opacity: 0.75,
              maxWidth: 520,
            }}
          >
            Companies and founders hire us as their product team — one partner
            for design, engineering, and AI, from first call to launch.
          </p>
        </div>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--font-sans)",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.04em",
            padding: "14px 26px",
            borderRadius: 999,
            background: "var(--cream)",
            color: "var(--ink)",
            whiteSpace: "nowrap",
          }}
        >
          Start a project
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            animate={reduce ? undefined : { x: hovered ? 4 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </span>
      </a>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ background: "var(--cream)", padding: "88px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <Reveal style={{ marginBottom: 64 }}>
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
              maxWidth: 640,
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
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 20,
            marginBottom: 0,
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </motion.div>

        <HireUsBand />

        <style>{`
          @media (max-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            .services-grid .service-card {
              grid-column: span 1 !important;
            }
            .services-grid .service-card:last-child {
              grid-column: span 2 !important;
            }
          }
          @media (max-width: 640px) {
            .services-grid {
              grid-template-columns: 1fr !important;
            }
            .services-grid .service-card:last-child {
              grid-column: span 1 !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
