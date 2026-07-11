"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, blurUp, fadeUp, stagger } from "./motion";
import AboutCta from "./AboutCta";
import type { Service } from "@/data/services";

export default function ServiceDetail({ service }: { service: Service }) {
  const reduce = useReducedMotion();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seoDescription,
    provider: {
      "@type": "Organization",
      name: "Teak Software Studio",
    },
    areaServed: "Worldwide",
    url: `/services/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ───────────────── Hero ───────────────── */}
      <section
        style={{
          background: "var(--cream)",
          color: "var(--ink)",
          padding: "156px 0 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-18%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 860,
            height: 860,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(196,168,130,0.16) 0%, transparent 68%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          variants={stagger}
          initial={reduce ? false : "hidden"}
          animate="show"
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            padding: "0 32px",
            position: "relative",
          }}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: 26 }}>
            <Link
              href="/#services"
              className="link-sweep"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.02em",
                color: "var(--ink-muted)",
                textDecoration: "none",
              }}
            >
              ← All services
            </Link>
          </motion.div>

          <motion.span
            variants={fadeUp}
            className="eyebrow"
            style={{ display: "block", marginBottom: 26 }}
          >
            {service.eyebrow}
          </motion.span>

          <motion.h1
            variants={reduce ? fadeUp : blurUp}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(42px, 6.4vw, 84px)",
              fontWeight: 400,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              maxWidth: 900,
              marginBottom: 28,
            }}
          >
            {service.headlineLead}{" "}
            <span style={{ fontStyle: "italic", color: "var(--teak)" }}>
              {service.headlineAccent}
            </span>
            {service.headlineTail}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(17px, 1.7vw, 20px)",
              lineHeight: 1.7,
              color: "var(--ink-muted)",
              maxWidth: 620,
            }}
          >
            {service.deck}
          </motion.p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={stagger}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="svc-stats"
          style={{
            maxWidth: 1000,
            margin: "72px auto 0",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: `repeat(${service.stats.length}, 1fr)`,
            gap: 0,
            borderTop: "1px solid var(--ink-hairline)",
          }}
        >
          {service.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              style={{
                padding: "38px 32px 40px 0",
                borderLeft: i === 0 ? "none" : "1px solid var(--ink-hairline)",
                paddingLeft: i === 0 ? 0 : 32,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: "var(--teak)",
                  marginBottom: 12,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  color: "var(--ink-muted)",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ───────────────── Overview (asymmetric) ───────────────── */}
      <section
        style={{
          background: "var(--cream)",
          padding: "104px 0",
          borderTop: "1px solid var(--ink-hairline)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
          <div
            className="svc-overview-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "0.85fr 1.15fr",
              gap: 72,
              alignItems: "start",
            }}
          >
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: 22 }}>
                Overview
              </p>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(24px, 2.6vw, 34px)",
                  fontWeight: 400,
                  lineHeight: 1.25,
                  letterSpacing: "-0.015em",
                  color: "var(--ink)",
                }}
              >
                {service.overviewPull}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              {service.overview.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 17,
                    lineHeight: 1.85,
                    color: "var(--ink-muted)",
                    marginBottom: i === service.overview.length - 1 ? 0 : 22,
                  }}
                >
                  {para}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────── Deliverables ───────────────── */}
      <section
        style={{
          background: "var(--cream-deep)",
          padding: "104px 0",
          borderTop: "1px solid var(--ink-hairline)",
          borderBottom: "1px solid var(--ink-hairline)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
          <Reveal style={{ marginBottom: 56 }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>
              What you get
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(30px, 3.6vw, 50px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                maxWidth: 640,
              }}
            >
              What we actually{" "}
              <span style={{ fontStyle: "italic", color: "var(--teak)" }}>
                deliver
              </span>
              .
            </h2>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="svc-deliverables"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {service.deliverables.map((d) => (
              <motion.div
                key={d.title}
                variants={fadeUp}
                style={{
                  background: "var(--cream)",
                  border: "1px solid var(--ink-hairline)",
                  borderRadius: 18,
                  padding: "34px 30px",
                }}
              >
                <div
                  aria-hidden
                  style={{
                    width: 34,
                    height: 2,
                    background: "var(--teak-light)",
                    marginBottom: 24,
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 23,
                    fontWeight: 400,
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                    marginBottom: 14,
                  }}
                >
                  {d.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14.5,
                    lineHeight: 1.75,
                    color: "var(--ink-muted)",
                  }}
                >
                  {d.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────────────── Process (sticky two-col) ───────────────── */}
      <section style={{ background: "var(--cream)", padding: "112px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
          <div
            className="svc-process-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "0.8fr 1.2fr",
              gap: 72,
              alignItems: "start",
            }}
          >
            <div className="svc-process-head">
              <Reveal>
                <p className="eyebrow" style={{ marginBottom: 20 }}>
                  How we work
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(30px, 3.6vw, 52px)",
                    fontWeight: 400,
                    lineHeight: 1.08,
                    letterSpacing: "-0.02em",
                    marginBottom: 18,
                  }}
                >
                  Our process
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 15.5,
                    lineHeight: 1.75,
                    color: "var(--ink-muted)",
                    maxWidth: 320,
                  }}
                >
                  Four steps, one team, no hand-offs. You see progress every week
                  and own every decision along the way.
                </p>
              </Reveal>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              {service.process.map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: 28,
                    alignItems: "baseline",
                    padding: "30px 0",
                    borderTop: "1px solid var(--ink-hairline)",
                    borderBottom:
                      i === service.process.length - 1
                        ? "1px solid var(--ink-hairline)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 15,
                      color: "var(--teak)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 24,
                        fontWeight: 400,
                        lineHeight: 1.2,
                        letterSpacing: "-0.01em",
                        marginBottom: 10,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 15,
                        lineHeight: 1.75,
                        color: "var(--ink-muted)",
                      }}
                    >
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────────────── Case study ───────────────── */}
      {service.caseStudy && (
        <section
          style={{
            background: "var(--ink)",
            color: "var(--cream)",
            padding: "120px 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "-30%",
              right: "-10%",
              width: 620,
              height: 620,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(196,168,130,0.22) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              padding: "0 32px",
              position: "relative",
            }}
          >
            <Reveal>
              <p
                className="eyebrow"
                style={{ color: "var(--teak-light)", marginBottom: 28 }}
              >
                In practice
              </p>
              <blockquote
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(26px, 3.4vw, 44px)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                {service.caseStudy.summary}
              </blockquote>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "8px 20px",
                  marginTop: 36,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: 20,
                    color: "var(--teak-light)",
                  }}
                >
                  {service.caseStudy.result}
                </span>
                <span
                  aria-hidden
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "rgba(250,248,245,0.35)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13.5,
                    letterSpacing: "0.02em",
                    color: "rgba(250,248,245,0.6)",
                  }}
                >
                  {service.caseStudy.client}
                </span>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ───────────────── Tech + FAQ ───────────────── */}
      <section style={{ background: "var(--cream)", padding: "104px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
          <div
            className="svc-faq-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "0.8fr 1.2fr",
              gap: 72,
              alignItems: "start",
            }}
          >
            {/* Tech stack */}
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: 22 }}>
                Built with
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 13.5,
                      fontWeight: 500,
                      padding: "9px 16px",
                      borderRadius: 10,
                      background: "var(--teak-pale)",
                      color: "var(--ink)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* FAQ */}
            <div>
              <Reveal>
                <p className="eyebrow" style={{ marginBottom: 8 }}>
                  Common questions
                </p>
              </Reveal>
              {service.faqs.map((faq, i) => (
                <Reveal key={faq.question} delay={i * 0.05}>
                  <div
                    style={{
                      borderBottom: "1px solid var(--ink-hairline)",
                      padding: "28px 0",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 21,
                        fontWeight: 400,
                        letterSpacing: "-0.01em",
                        marginBottom: 12,
                      }}
                    >
                      {faq.question}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 15.5,
                        lineHeight: 1.8,
                        color: "var(--ink-muted)",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AboutCta />

      <style>{`
        @media (min-width: 901px) {
          .svc-process-head { position: sticky; top: 120px; }
        }
        @media (max-width: 900px) {
          .svc-overview-grid,
          .svc-process-grid,
          .svc-faq-grid { grid-template-columns: 1fr !important; gap: 44px !important; }
          .svc-deliverables { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .svc-stats { grid-template-columns: 1fr !important; }
          .svc-stats > div { border-left: none !important; padding-left: 0 !important;
            border-top: 1px solid var(--ink-hairline); padding-top: 28px !important;
            padding-bottom: 28px !important; }
          .svc-stats > div:first-child { border-top: none; }
        }
      `}</style>
    </>
  );
}
