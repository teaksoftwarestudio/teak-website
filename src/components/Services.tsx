"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState, type CSSProperties, type ReactNode } from "react";
import { Reveal, fadeUp, stagger } from "./motion";
import { services } from "@/data/services";

function getService(slug: string) {
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    throw new Error(`Missing service data for ${slug}`);
  }

  return service;
}

const webService = getService("web-applications");
const mobileService = getService("mobile-apps");
const aiService = getService("ai-systems");

type Capability = {
  title: string;
  kicker: string;
  body: string;
  href: string;
  icon: ReactNode;
  accent: string;
  soft: string;
  tags: string[];
};

const capabilities: Capability[] = [
  {
    title: "Web Apps",
    kicker: "Browser-based products",
    body:
      "Web products that are easy to use, fast to load, and built to scale as your business grows.",
    href: `/services/${webService.slug}`,
    icon: webService.icon,
    accent: "var(--teak)",
    soft: "var(--teak-pale)",
    tags: ["Dashboards", "Marketplaces", "SaaS"],
  },
  {
    title: "Mobile Apps",
    kicker: "iOS and Android",
    body:
      "Mobile apps that feel smooth, work reliably, and are ready for both iOS and Android.",
    href: `/services/${mobileService.slug}`,
    icon: mobileService.icon,
    accent: "var(--teak)",
    soft: "var(--teak-pale)",
    tags: ["App Dev", "Cross Platform", "App Store"],
  },
  {
    title: "AI Systems",
    kicker: "Intelligence and automation",
    body:
      "Copilots, smart search, agents, and automated workflows grounded in your real data.",
    href: `/services/${aiService.slug}`,
    icon: aiService.icon,
    accent: "var(--teak)",
    soft: "var(--teak-pale)",
    tags: ["LLM Integration", "RAG", "AI Automation"],
  },
];

const overlaps = [
  {
    title: "Web + Mobile",
    body: "A web product with companion apps for customers, teams, or field work.",
  },
  {
    title: "Web + AI",
    body: "SaaS, portals, and internal tools with copilots, smart search, or document intelligence.",
  },
  {
    title: "Mobile + AI",
    body: "Phone-first experiences with voice, camera, assistant, or on-the-go automation.",
  },
  {
    title: "Everything Together",
    body: "A complete product ecosystem across web, mobile, and AI-backed workflows.",
  },
];

function CapabilityCard({ capability }: { capability: Capability }) {
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={reduce ? undefined : { y: hovered ? -6 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="capability-card"
      style={
        {
          "--accent": capability.accent,
          "--soft": capability.soft,
        } as CSSProperties
      }
    >
      <Link href={capability.href} className="capability-link">
        <span className="capability-rule" aria-hidden="true" />
        <div className="capability-topline">
          <motion.span
            animate={reduce ? undefined : { scale: hovered ? 1.08 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="capability-icon"
          >
            {capability.icon}
          </motion.span>
          <span className="capability-kicker">{capability.kicker}</span>
        </div>

        <h3>{capability.title}</h3>
        <p className="capability-body">{capability.body}</p>

        <div className="capability-tags">
          {capability.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="capability-actions">
          <span>
            Explore
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
        </div>
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
              Let&rsquo;s build it together!
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
    <section id="services" style={{ background: "var(--teak-pale)", padding: "88px 0" }}>
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
            Everything we build is a blend of{" "}
            <span style={{ fontStyle: "italic", color: "var(--teak)" }}>
              three crafts.
            </span>
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="capability-grid"
        >
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} capability={capability} />
          ))}
        </motion.div>

        <Reveal style={{ marginTop: 22 }}>
          <div className="overlap-band">
            <div className="overlap-copy">
              <span>Where needs overlap</span>
              <p>
                Start with one, or combine them into the product your business
                needs.
              </p>
            </div>
            <div className="overlap-grid">
              {overlaps.map((overlap) => (
                <div key={overlap.title} className="overlap-chip">
                  <strong>{overlap.title}</strong>
                  <span>{overlap.body}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <HireUsBand />

        <style>{`
          .capability-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
          }

          .capability-card {
            position: relative;
            min-height: 360px;
          }

          .capability-link {
            position: relative;
            display: flex;
            min-height: 100%;
            height: 100%;
            flex-direction: column;
            overflow: hidden;
            padding: 30px;
            border-radius: 12px;
            border: 1px solid var(--ink-hairline);
            background: rgba(255, 255, 255, 0.72);
            color: var(--ink);
            text-decoration: none;
            box-shadow: 0 4px 16px -10px rgba(21, 19, 17, 0.08);
            transition:
              border-color 0.35s ease,
              box-shadow 0.35s ease,
              background 0.35s ease;
          }

          .capability-link:hover {
            border-color: color-mix(in srgb, var(--accent) 42%, transparent);
            background: rgba(255, 255, 255, 0.86);
            box-shadow: 0 24px 48px -22px rgba(21, 19, 17, 0.18);
          }

          .capability-rule {
            position: absolute;
            inset: 0 0 auto;
            height: 4px;
            background: var(--accent);
          }

          .capability-topline {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 18px;
            margin-bottom: 34px;
          }

          .capability-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 54px;
            height: 54px;
            flex: 0 0 54px;
            border-radius: 12px;
            background: var(--soft);
            color: var(--accent);
            transform-origin: center;
          }

          .capability-kicker {
            max-width: 136px;
            font-family: var(--font-sans);
            font-size: 11px;
            font-weight: 700;
            line-height: 1.35;
            letter-spacing: 0.12em;
            text-align: right;
            text-transform: uppercase;
            color: color-mix(in srgb, var(--accent) 78%, var(--ink));
          }

          .capability-card h3 {
            margin-bottom: 12px;
            font-family: var(--font-serif);
            font-size: clamp(26px, 2.4vw, 34px);
            font-weight: 400;
            line-height: 1.1;
            letter-spacing: 0;
          }

          .capability-body {
            max-width: 31ch;
            margin-bottom: 24px;
            font-family: var(--font-sans);
            font-size: 15px;
            line-height: 1.68;
            color: var(--ink-muted);
          }

          .capability-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: auto;
          }

          .capability-tags span {
            padding: 6px 11px;
            border-radius: 999px;
            border: 1px solid color-mix(in srgb, var(--accent) 24%, transparent);
            background: var(--soft);
            color: color-mix(in srgb, var(--accent) 72%, var(--ink));
            font-family: var(--font-sans);
            font-size: 11.5px;
            font-weight: 600;
            line-height: 1.2;
            letter-spacing: 0.03em;
          }

          .capability-actions {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-top: 28px;
          }

          .capability-actions span {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--accent);
            font-family: var(--font-sans);
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.02em;
          }

          .overlap-band {
            display: grid;
            grid-template-columns: minmax(220px, 0.55fr) minmax(0, 1.45fr);
            gap: 24px;
            align-items: stretch;
            padding: 28px 0;
            border-top: 1px solid var(--ink-hairline);
            border-bottom: 1px solid var(--ink-hairline);
          }

          .overlap-copy {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;
          }

          .overlap-copy span {
            font-family: var(--font-sans);
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--teak);
          }

          .overlap-copy p {
            max-width: 310px;
            font-family: var(--font-serif);
            font-size: clamp(18px, 1.7vw, 23px);
            font-weight: 400;
            line-height: 1.25;
            letter-spacing: 0;
            color: var(--ink);
          }

          .overlap-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 10px;
          }

          .overlap-chip {
            display: flex;
            min-height: 136px;
            flex-direction: column;
            justify-content: space-between;
            gap: 16px;
            padding: 18px;
            border-radius: 12px;
            border: 1px solid var(--ink-hairline);
            background:
              linear-gradient(180deg, rgba(255, 255, 255, 0.76), rgba(255, 255, 255, 0.42));
          }

          .overlap-chip strong {
            font-family: var(--font-serif);
            font-size: 20px;
            font-weight: 400;
            line-height: 1.15;
            letter-spacing: 0;
          }

          .overlap-chip span {
            font-family: var(--font-sans);
            font-size: 13px;
            line-height: 1.5;
            color: var(--ink-muted);
          }

          @media (max-width: 1040px) {
            .capability-grid {
              grid-template-columns: 1fr;
            }

            .capability-card {
              min-height: 0;
            }

            .capability-body {
              max-width: 56ch;
            }

            .overlap-band {
              grid-template-columns: 1fr;
            }

            .overlap-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 640px) {
            .capability-link {
              padding: 26px 22px;
            }

            .capability-topline {
              margin-bottom: 28px;
            }

            .capability-kicker {
              max-width: 120px;
              font-size: 10.5px;
            }

            .overlap-grid {
              grid-template-columns: 1fr;
            }

            .overlap-chip {
              min-height: 0;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
