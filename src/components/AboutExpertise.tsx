"use client";

import { motion, Reveal } from "./motion";
import { fadeUp, stagger } from "./motion";

const areas = [
  {
    title: "Product Engineering",
    body: "SaaS platforms, dashboards, and internal tools built to scale — clean architecture, typed end to end, tested where it counts.",
    tags: ["TypeScript", "Next.js", "Node", "PostgreSQL"],
  },
  {
    title: "Web Applications",
    body: "Fast, accessible, beautifully rendered front-ends. Marketing sites to complex authenticated apps, all with performance as a feature.",
    tags: ["React", "Framer Motion", "Tailwind", "Edge"],
  },
  {
    title: "Mobile Apps",
    body: "Cross-platform apps that feel native. One codebase, iOS and Android, tuned for smooth interaction and offline resilience.",
    tags: ["React Native", "Expo", "Swift", "Kotlin"],
  },
  {
    title: "Design & Systems",
    body: "Interface design and design systems in Figma, translated pixel-faithfully into code with reusable, documented components.",
    tags: ["Figma", "Design Tokens", "Storybook", "a11y"],
  },
  {
    title: "Cloud & Infrastructure",
    body: "CI/CD, observability, and infrastructure-as-code so deploys are boring and uptime is high. We ship on Fridays.",
    tags: ["AWS", "Vercel", "Docker", "Terraform"],
  },
  {
    title: "AI Integration",
    body: "LLM-powered features done well — retrieval, agents, and tool use wired into real products with the right guardrails.",
    tags: ["Claude", "RAG", "Vector DBs", "Evals"],
  },
];

export default function AboutExpertise() {
  return (
    <section
      style={{
        background: "var(--ink)",
        color: "var(--cream)",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: 620,
          height: 620,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(196,168,130,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
        }}
      >
        <Reveal style={{ marginBottom: 60 }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 5vw, 66px)",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "var(--cream)",
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
              color: "rgba(250,248,245,0.6)",
              maxWidth: 640,
            }}
          >
            Deep in the work,{" "}
            <span style={{ fontStyle: "italic", color: "var(--teak-light)" }}>
              across the whole stack.
            </span>
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
          className="expertise-grid"
        >
          {areas.map((a) => (
            <motion.article
              key={a.title}
              variants={fadeUp}
              style={{
                border: "1px solid rgba(250,248,245,0.12)",
                borderRadius: 4,
                padding: "32px 28px 30px",
                display: "flex",
                flexDirection: "column",
                background: "rgba(250,248,245,0.02)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 22,
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  color: "var(--cream)",
                  marginBottom: 12,
                }}
              >
                {a.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "rgba(250,248,245,0.55)",
                  marginBottom: 22,
                  flex: 1,
                }}
              >
                {a.body}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {a.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 11.5,
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                      color: "var(--teak-light)",
                      border: "1px solid rgba(196,168,130,0.28)",
                      borderRadius: 999,
                      padding: "4px 11px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .expertise-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .expertise-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
