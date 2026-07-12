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
  /** Optional headshot in /public (e.g. "/team/jane.webp"). Falls back to initials. */
  image?: string;
};

const team: Member[] = [
  {
    name: "Murshed Al Amin",
    role: "CEO",
    bio: "Focuses on turning complex technical ideas into clear product direction, shaped by 5+ years across infrastructure, AI systems, product, and research work.",
    shortBio: "Turns complex technical ideas into clear product direction.",
    initials: "MA",
    focus: ["Strategy", "Leadership", "Growth", "AI & Research"],
    image: "/team/murshed.webp",
  },
  {
    name: "Amit Aditaya",
    role: "CTO",
    bio: "Focuses on building mobile products that hold up as they grow, shaped by 5+ years creating and scaling apps for international organisations.",
    shortBio: "Leads product architecture and builds systems designed to scale.",
    initials: "AA",
    focus: ["Architecture", "Backend", "Frontend", "Engineering"],
    image: "/team/amit.webp",
  },
  {
    name: "Ifaz Alam",
    role: "COO",
    bio: "Focuses on practical web and SaaS execution, shaped by 5+ years building products that have scaled to 100k users.",
    shortBio: "Connects product execution, delivery, and growth for digital products.",
    initials: "IA",
    focus: ["Operations", "Delivery", "Backend", "DevOps"],
    image: "/team/ifaz-alam.webp",
  },
];

type TeamProps = {
  /** "full" — detailed section for the About page.
   *  "compact" — shorter bios for the homepage, its own cream section. */
  variant?: "full" | "compact";
};

export default function Team({ variant = "full" }: TeamProps) {
  const compact = variant === "compact";

  const ink = "var(--ink)";
  const muted = "var(--ink-muted)";
  const accent = "var(--teak)";
  const cardBg = "var(--white)";
  const cardBorder = "1px solid var(--ink-hairline)";

  return (
    <section
      style={{
        background: "var(--teak-pale)",
        color: ink,
        padding: compact ? "88px 0" : "96px 0",
        borderTop: compact ? "1px solid var(--ink-hairline)" : undefined,
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
            Who We Are
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
              marginBottom: 64,
            }}
          >
            Built around craft, clarity, and{" "}
            <span style={{ fontStyle: "italic", color: accent }}>
              ownership.
            </span>
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
                background: cardBg,
                border: cardBorder,
                borderRadius: 18,
                padding: "36px 32px 40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
              }}
            >
              <div
                aria-hidden={!m.image}
                style={{
                  position: "relative",
                  width: 72,
                  height: 72,
                  flexShrink: 0,
                  borderRadius: "50%",
                  overflow: "hidden",
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
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="72px"
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
                    fontSize: 24,
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
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: accent,
                    marginBottom: 18,
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
                    marginBottom: 24,
                    flex: 1,
                  }}
                >
                  {compact ? m.shortBio : m.bio}
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
