"use client";

import { motion } from "framer-motion";
import { EASE, Reveal, fadeUp, stagger } from "./motion";

const steps = [
  {
    step: "Discovery",
    duration: "1–2 weeks",
    description:
      "We learn your business, users, and constraints. Product workshops, technical audit, and a shared understanding of what success looks like.",
  },
  {
    step: "Design & Architecture",
    duration: "2–3 weeks",
    description:
      "UI/UX design in Figma, system architecture, technology selection, and a detailed project plan. You sign off before a single line of code is written.",
  },
  {
    step: "Build",
    duration: "6–16 weeks",
    description:
      "Iterative development in 2-week sprints. Weekly demos, continuous deployment to staging, and tight communication throughout.",
  },
  {
    step: "Launch & Grow",
    duration: "Ongoing",
    description:
      "Production deployment, monitoring setup, performance tuning, and ongoing feature development as your product evolves.",
  },
];

export default function Process() {
  return (
    <section
      style={{
        background: "var(--teak-pale)",
        padding: "128px 0",
        borderTop: "1px solid rgba(21,19,17,0.06)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <Reveal>
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
            How We Work
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 72,
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(19px, 2vw, 24px)",
                fontWeight: 400,
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
                color: "var(--ink-muted)",
              }}
            >
              From idea to{" "}
              <span style={{ fontStyle: "italic", color: "var(--teak)" }}>production.</span>
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                lineHeight: 1.7,
                opacity: 0.6,
                maxWidth: 360,
              }}
            >
              Our process is designed to minimise surprises and maximise the quality
              of what ships. Here&apos;s what working with us looks like.
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: EASE }}
            style={{
              position: "absolute",
              top: 24,
              left: 0,
              right: 0,
              height: 1,
              background: "rgba(21,19,17,0.15)",
              transformOrigin: "left",
            }}
            className="process-line"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 40,
              position: "relative",
            }}
            className="process-grid"
          >
            {steps.map((s, i) => (
              <motion.div key={s.step} variants={fadeUp}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    background: "var(--teak)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 28,
                    flexShrink: 0,
                    boxShadow: "0 10px 24px -12px rgba(139,111,71,0.7)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "white",
                      letterSpacing: "0.05em",
                    }}
                  >
                    0{i + 1}
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--teak)",
                    marginBottom: 8,
                  }}
                >
                  {s.duration}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 23,
                    fontWeight: 400,
                    marginBottom: 12,
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.step}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    lineHeight: 1.75,
                    opacity: 0.62,
                  }}
                >
                  {s.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .process-line { display: none !important; }
        }
        @media (max-width: 540px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
