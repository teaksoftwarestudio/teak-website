"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Reveal, fadeUp, stagger } from "./motion";
import { services, type Service } from "@/data/services";

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
      }}
    >
    <Link
      href={`/services/${service.slug}`}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "36px 32px",
        borderRadius: 20,
        textDecoration: "none",
        background: dark ? "var(--ink)" : "rgba(255,255,255,0.72)",
        border: dark
          ? "1px solid var(--ink)"
          : `1px solid ${hovered ? "var(--teak-light)" : "var(--ink-hairline)"}`,
        boxShadow: hovered
          ? "0 24px 48px -20px rgba(21,19,17,0.18)"
          : "0 4px 16px -10px rgba(21,19,17,0.08)",
        transition: "border-color 0.35s ease, box-shadow 0.35s ease",
        color: textColor,
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

      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          marginTop: 24,
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.02em",
          color: dark ? "var(--teak-light)" : "var(--teak)",
        }}
      >
        Learn more
        <motion.svg
          width="15"
          height="15"
          viewBox="0 0 16 16"
          fill="none"
          animate={reduce ? undefined : { x: hovered ? 4 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          aria-hidden="true"
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
    </Link>
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
