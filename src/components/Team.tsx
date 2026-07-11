"use client";

import { motion } from "framer-motion";
import { Reveal, fadeUp, stagger } from "./motion";

type Member = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  focus: string[];
};

// Placeholder team — replace names, roles, bios, and focus tags with real details.
const team: Member[] = [
  {
    name: "Team Member One",
    role: "Founder & Principal Engineer",
    bio: "Sets the technical direction and owns architecture end to end. Has spent a decade turning ambitious product ideas into resilient, production-grade systems — and knows exactly which corners are safe to cut and which aren’t.",
    initials: "T1",
    focus: ["Architecture", "Backend", "DevOps", "Strategy"],
  },
  {
    name: "Team Member Two",
    role: "Product Designer & Frontend",
    bio: "Owns the craft of every interface, from the first wireframe to the last pixel. Designs in Figma and builds in React, so nothing gets lost in translation — the thing you see is the thing that ships.",
    initials: "T2",
    focus: ["UI/UX", "Design Systems", "React", "Motion"],
  },
  {
    name: "Team Member Three",
    role: "Full-Stack Engineer",
    bio: "Ships across the stack and keeps the whole thing fast. Connects polished front-ends to dependable back-ends, wires up integrations, and sweats the performance details most people never notice.",
    initials: "T3",
    focus: ["Full-Stack", "APIs", "Mobile", "Performance"],
  },
];

export default function Team() {
  return (
    <section
      style={{
        background: "var(--cream)",
        color: "var(--ink)",
        padding: "96px 0",
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
              color: "var(--ink)",
              marginBottom: 18,
            }}
          >
            The People
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
              marginBottom: 28,
            }}
          >
            Three people.{" "}
            <span style={{ fontStyle: "italic", color: "var(--teak)" }}>
              One high bar.
            </span>
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              lineHeight: 1.75,
              color: "var(--ink-muted)",
              maxWidth: 560,
              marginBottom: 64,
            }}
          >
            We&rsquo;re deliberately small. You work directly with the people
            building your product — no hand-offs, no account managers, no diluted
            ownership.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }}
          className="team-grid"
        >
          {team.map((m) => (
            <motion.article
              key={m.name}
              variants={fadeUp}
              style={{
                background: "var(--white)",
                border: "1px solid var(--ink-hairline)",
                borderRadius: 4,
                padding: "36px 32px 40px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Avatar */}
              <div
                aria-hidden
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(140deg, var(--teak-pale) 0%, var(--teak-light) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-serif)",
                  fontSize: 26,
                  color: "var(--teak-deep)",
                  marginBottom: 24,
                }}
              >
                {m.initials}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 24,
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  color: "var(--ink)",
                  marginBottom: 4,
                }}
              >
                {m.name}
              </h3>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "var(--teak)",
                  marginBottom: 18,
                }}
              >
                {m.role}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14.5,
                  lineHeight: 1.75,
                  color: "var(--ink-muted)",
                  marginBottom: 24,
                  flex: 1,
                }}
              >
                {m.bio}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {m.focus.map((f) => (
                  <span
                    key={f}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 11.5,
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                      color: "var(--teak-deep)",
                      background: "var(--teak-pale)",
                      borderRadius: 999,
                      padding: "4px 11px",
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .team-grid { grid-template-columns: 1fr !important; gap: 20px !important; max-width: 480px; }
        }
      `}</style>
    </section>
  );
}
