"use client";

import { motion } from "framer-motion";
import { Reveal, fadeUp, stagger } from "./motion";

const values = [
  {
    title: "Craft over speed",
    body: "We don't cut corners. Every interaction, every API endpoint, every pixel is considered. Quality compounds over time.",
  },
  {
    title: "Partnership, not order-taking",
    body: "We push back when something won't work and bring ideas to the table. Your success is our portfolio.",
  },
  {
    title: "Transparency by default",
    body: "Weekly updates, public roadmaps, honest timelines. No black boxes. You always know exactly where we stand.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--white)",
        color: "var(--ink)",
        padding: "88px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Warm ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: 560,
          height: 560,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,168,130,0.14) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", position: "relative" }}>
        {/* Two-column */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
          className="about-grid"
        >
          <Reveal>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(34px, 4vw, 54px)",
                fontWeight: 400,
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                marginBottom: 18,
              }}
            >
              About Us
            </h2>

            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(19px, 2vw, 24px)",
                fontWeight: 400,
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
                color: "rgba(21,19,17,0.6)",
                marginBottom: 28,
              }}
            >
              A small studio with{" "}
              <span style={{ fontStyle: "italic", color: "var(--teak)" }}>
                big ambitions.
              </span>
            </p>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                lineHeight: 1.8,
                opacity: 0.62,
                color: "var(--ink)",
                marginBottom: 20,
              }}
            >
              Teak Software Studio is a boutique product engineering team. We work
              closely with founders, product managers, and engineering leads to turn
              ideas into production-ready software.
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                lineHeight: 1.8,
                opacity: 0.62,
                color: "var(--ink)",
              }}
            >
              We specialise in the full product lifecycle — discovery, architecture,
              design, development, and post-launch growth. Our team is senior-heavy and
              remote-native, working across US and European time zones with ease.
            </p>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div style={{ marginBottom: 16, opacity: 0.4 }}>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                }}
              >
                Our Values
              </span>
            </div>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                style={{
                  borderTop: "1px solid rgba(21,19,17,0.1)",
                  padding: "28px 0",
                  borderBottom:
                    i === values.length - 1 ? "1px solid rgba(21,19,17,0.1)" : "none",
                }}
              >
                <h4
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 23,
                    fontWeight: 400,
                    color: "var(--ink)",
                    marginBottom: 10,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {v.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: "var(--ink)",
                    opacity: 0.55,
                  }}
                >
                  {v.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
