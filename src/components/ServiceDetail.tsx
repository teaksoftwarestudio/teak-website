"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, blurUp, fadeUp, stagger } from "./motion";
import ServiceWizard from "./ServiceWizard";
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

          <motion.div variants={fadeUp} style={{ marginTop: 36 }}>
            <a
              href="#start"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "var(--cream)",
                background: "var(--ink)",
                padding: "16px 32px",
                borderRadius: 10,
                textDecoration: "none",
                boxShadow: "0 14px 32px -16px rgba(21,19,17,0.5)",
              }}
            >
              Scope your project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
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
                padding: "38px 32px 40px",
                borderLeft: i === 0 ? "none" : "1px solid var(--ink-hairline)",
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
          background: "var(--cream-deep)",
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
                Overview
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(16px, 1.5vw, 18px)",
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: "var(--ink-muted)",
                  maxWidth: 380,
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

      {/* ───────────────── Use cases ───────────────── */}
      {service.useCases && (
        <section
          style={{
            background: "var(--cream)",
            padding: "104px 0",
            borderTop: "1px solid var(--ink-hairline)",
            borderBottom: "1px solid var(--ink-hairline)",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
            <Reveal style={{ marginBottom: 44 }}>
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
                What we{" "}
                <span style={{ fontStyle: "italic", color: "var(--teak)" }}>
                  build
                </span>
                .
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(16px, 1.5vw, 18px)",
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: "var(--ink-muted)",
                  maxWidth: 380,
                }}
              >
                {service.useCasesIntro ??
                  "Products for real workflows, not just polished screens."}
              </p>
            </Reveal>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="svc-use-cases"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 16,
              }}
            >
              {service.useCases.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  style={{
                    borderTop: "1px solid var(--ink-hairline)",
                    padding: "24px 22px 4px 0",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 22,
                      fontWeight: 400,
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                      marginBottom: 10,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14.5,
                      lineHeight: 1.72,
                      color: "var(--ink-muted)",
                    }}
                  >
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

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
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(16px, 1.5vw, 18px)",
                fontWeight: 400,
                lineHeight: 1.75,
                color: "var(--ink-muted)",
                maxWidth: 460,
                marginTop: 18,
              }}
            >
              {service.deliverablesIntro ??
                "The parts that make the product usable, maintainable, and ready for real customers."}
            </p>
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
      <section
        style={{
          background: "var(--cream)",
          padding: service.caseStudy ? "112px 0" : "112px 0 72px",
        }}
      >
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
                  Our{" "}
                  <span style={{ fontStyle: "italic", color: "var(--teak)" }}>
                    process
                  </span>
                  .
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
                &ldquo;
                {service.caseStudy.quote ?? service.caseStudy.summary}
                &rdquo;
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
                  {service.caseStudy.quoteAuthor && service.caseStudy.quoteRole
                    ? `${service.caseStudy.quoteAuthor} - ${service.caseStudy.quoteRole}${
                        service.caseStudy.quoteLocation
                          ? ` · ${service.caseStudy.quoteLocation}`
                          : ""
                      }`
                    : service.caseStudy.result}
                </span>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ───────────────── Tech + FAQ ───────────────── */}
      <section
        style={{
          background: "var(--cream)",
          padding: service.caseStudy ? "104px 0" : "72px 0 104px",
        }}
      >
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
            <div className="svc-stack-head">
              <Reveal>
                <p className="eyebrow" style={{ marginBottom: 22 }}>
                  Our Stack
                </p>
                {service.stackGroups ? (
                  <div style={{ display: "grid", gap: 24 }}>
                    {service.stackGroups.map((group) => (
                      <div
                        key={group.title}
                        style={{
                          borderTop: "1px solid var(--ink-hairline)",
                          paddingTop: 18,
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: 21,
                            fontWeight: 400,
                            lineHeight: 1.2,
                            letterSpacing: "-0.01em",
                            marginBottom: 12,
                          }}
                        >
                          {group.title}
                        </h3>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
                          {group.items.map((tech) => (
                            <span
                              key={tech}
                              style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: 13,
                                fontWeight: 500,
                                padding: "8px 13px",
                                borderRadius: 10,
                                background: "var(--teak-pale)",
                                color: "var(--ink)",
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
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
                )}
              </Reveal>
            </div>

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

      <ServiceWizard service={service} />

      <style>{`
        @media (min-width: 901px) {
          .svc-process-head { position: sticky; top: 120px; }
          .svc-stack-head { position: sticky; top: 120px; }
        }
        @media (max-width: 900px) {
          .svc-overview-grid,
          .svc-process-grid,
          .svc-faq-grid { grid-template-columns: 1fr !important; gap: 44px !important; }
          .svc-use-cases { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .svc-deliverables { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .svc-use-cases { grid-template-columns: 1fr !important; }
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
