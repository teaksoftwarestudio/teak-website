"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, fadeUp, stagger } from "./motion";

type Member = {
  name: string;
  role: string;
  bio: string;
  shortBio: string;
  initials: string;
  focus: string[];
  /** Optional headshot in /public (e.g. "/team/jane.jpg"), shown on the homepage
   *  compact variant only. The /about page always uses initials. Falls back to initials. */
  image?: string;
};

const team: Member[] = [
  {
    name: "Murshed Al Amin",
    role: "CEO",
    bio: "Sets the vision and steers the company's direction, from client relationships to long-term strategy. Focused on building a studio that clients trust with their most ambitious ideas.",
    shortBio: "Sets the vision and steers the company's direction.",
    initials: "MA",
    focus: ["Strategy", "Leadership", "Client Relations", "Growth"],
    // image: "/team/murshed.jpg", // homepage photo — drop a headshot in /public/team and uncomment
  },
  {
    name: "Amit Aditaya",
    role: "CTO",
    bio: "Owns the technical direction and architecture across every product the studio ships. Turns ambitious ideas into resilient, production-grade systems, and knows exactly which corners are safe to cut and which aren't.",
    shortBio: "Owns the technical direction and architecture end to end.",
    initials: "AA",
    focus: ["Architecture", "Backend", "DevOps", "Engineering"],
  },
  {
    name: "Ifaz Alam",
    role: "COO",
    bio: "Runs the day-to-day operations that keep projects on track and teams aligned. Bridges strategy and execution, making sure the work gets delivered smoothly from kickoff to launch.",
    shortBio: "Runs day-to-day operations and keeps delivery on track.",
    initials: "IA",
    focus: ["Operations", "Delivery", "Process", "Team Ops"],
  },
];

type TeamProps = {
  /** "full" — detailed cream section for the About page.
   *  "compact" — short, dark variant that aligns with the homepage About section. */
  variant?: "full" | "compact";
};

export default function Team({ variant = "full" }: TeamProps) {
  const dark = variant === "compact";

  const ink = dark ? "var(--cream)" : "var(--ink)";
  const muted = dark ? "rgba(250,248,245,0.6)" : "var(--ink-muted)";
  const accent = dark ? "var(--teak-light)" : "var(--teak)";
  const cardBg = dark ? "rgba(250,248,245,0.03)" : "var(--white)";
  const cardBorder = dark ? "1px solid rgba(250,248,245,0.12)" : "1px solid var(--ink-hairline)";

  return (
    <section
      style={{
        background: dark ? "var(--ink)" : "var(--cream)",
        color: ink,
        padding: dark ? "0 0 96px" : "96px 0",
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
              color: ink,
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
              color: muted,
              maxWidth: 640,
              marginBottom: dark ? 48 : 28,
            }}
          >
            Three people.{" "}
            <span style={{ fontStyle: "italic", color: accent }}>
              One high bar.
            </span>
          </p>
          {!dark && (
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                lineHeight: 1.75,
                color: muted,
                maxWidth: 560,
                marginBottom: 64,
              }}
            >
              We&rsquo;re deliberately small. You work directly with the people
              building your product — no hand-offs, no account managers, no
              diluted ownership.
            </p>
          )}
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: dark ? 24 : 28,
          }}
          className="team-grid"
        >
          {team.map((m) => (
            <motion.article
              key={m.name}
              variants={fadeUp}
              style={{
                background: cardBg,
                border: cardBorder,
                borderRadius: 4,
                padding: dark ? "30px 28px" : "36px 32px 40px",
                display: "flex",
                flexDirection: dark ? "row" : "column",
                alignItems: dark ? "center" : "stretch",
                gap: dark ? 18 : 0,
              }}
            >
              {/* Avatar — photo (compact/homepage only) if provided, otherwise initials */}
              <div
                aria-hidden={!(dark && m.image)}
                style={{
                  position: "relative",
                  width: dark ? 56 : 72,
                  height: dark ? 56 : 72,
                  flexShrink: 0,
                  borderRadius: "50%",
                  overflow: "hidden",
                  background:
                    "linear-gradient(140deg, var(--teak-pale) 0%, var(--teak-light) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-serif)",
                  fontSize: dark ? 20 : 26,
                  color: "var(--teak-deep)",
                  marginBottom: dark ? 0 : 24,
                }}
              >
                {dark && m.image ? (
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="56px"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  m.initials
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: dark ? 20 : 24,
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    color: ink,
                    marginBottom: 4,
                  }}
                >
                  {m.name}
                </h3>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: dark ? 12 : 13,
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: accent,
                    marginBottom: dark ? 8 : 18,
                  }}
                >
                  {m.role}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14.5,
                    lineHeight: 1.7,
                    color: muted,
                    marginBottom: dark ? 0 : 24,
                    flex: dark ? "none" : 1,
                  }}
                >
                  {dark ? m.shortBio : m.bio}
                </p>

                {!dark && (
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
                )}
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
