"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE, Reveal } from "./motion";
import type { Service } from "@/data/services";

export default function ServiceWizard({ service }: { service: Service }) {
  const reduce = useReducedMotion();
  const flow = service.wizard;

  const [step, setStep] = useState(0); // 0..n-1 = questions, n = email
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const totalSteps = flow.length + 1; // questions + email
  const emailStep = flow.length;
  const onEmail = step === emailStep;
  const currentQ = step < flow.length ? flow[step] : null;

  function pickAnswer(key: string, value: string) {
    setAnswers((a) => ({ ...a, [key]: value }));
    setTimeout(() => setStep((s) => s + 1), reduce ? 0 : 220);
  }

  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1600);
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setMessage("");
    setEmail("");
    setStatus("idle");
  }

  const progress =
    onEmail || status === "sent" ? 1 : step / Math.max(totalSteps - 1, 1);

  return (
    <section
      id="start"
      style={{
        background: "var(--teak-pale)",
        padding: "104px 0",
        borderTop: "1px solid var(--ink-hairline)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        <div
          className="svc-wizard-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: 88,
            alignItems: "start",
          }}
          >
          {/* Left — intro */}
          <Reveal>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 400,
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                marginBottom: 22,
              }}
            >
              {service.wizardHeadlineLead}{" "}
              <span style={{ fontStyle: "italic", color: "var(--teak)" }}>
                {service.wizardHeadlineAccent}
              </span>
              .
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--ink-muted)",
                maxWidth: 380,
                marginBottom: 40,
              }}
            >
              A few quick questions so we come to the first call already knowing
              your project. No long forms — leave your email and we&apos;ll reply
              within one business day.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                { label: "You get", value: "A tailored, no-obligation proposal" },
                { label: "Response time", value: "Within 1 business day" },
                { label: "Cost", value: "The conversation is free" },
              ].map((item) => (
                <div key={item.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--teak)",
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      color: "var(--ink)",
                      opacity: 0.78,
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — wizard card */}
          <div
            className="svc-wizard-card"
            style={{
              background: "var(--white)",
              border: "1px solid var(--ink-hairline)",
              borderRadius: 18,
              padding: "40px 40px 36px",
              boxShadow: "0 28px 60px -40px rgba(21,19,17,0.4)",
              minHeight: 440,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Progress */}
            {status !== "sent" && (
              <div style={{ marginBottom: 32 }}>
                <div
                  style={{
                    height: 3,
                    borderRadius: 3,
                    background: "var(--ink-hairline)",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    animate={{ width: `${Math.max(progress, 0.06) * 100}%` }}
                    transition={{ duration: 0.5, ease: EASE }}
                    style={{
                      height: "100%",
                      background: "var(--teak)",
                      borderRadius: 3,
                    }}
                  />
                </div>
                <div
                  style={{
                    marginTop: 12,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={back}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 12,
                        fontWeight: 500,
                        letterSpacing: "0.02em",
                        color: "var(--ink-muted)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span style={{ fontSize: 15, lineHeight: 1 }}>←</span> Back
                    </button>
                  ) : (
                    <span />
                  )}
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--teak)",
                    }}
                  >
                    Step {Math.min(step + 1, totalSteps)} of {totalSteps}
                  </span>
                </div>
              </div>
            )}

            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <AnimatePresence mode="wait">
                {/* SENT */}
                {status === "sent" ? (
                  <StepShell key="sent" reduce={reduce} center>
                    <motion.div
                      initial={reduce ? false : { scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                        delay: 0.1,
                      }}
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        border: "1.5px solid var(--teak)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 24px",
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
                        <motion.path
                          d="M4 11l5 5 9-9"
                          stroke="var(--teak)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={reduce ? false : { pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
                        />
                      </svg>
                    </motion.div>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 30,
                        fontWeight: 400,
                        marginBottom: 12,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      Brief received.
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 15,
                        opacity: 0.6,
                        marginBottom: 28,
                        maxWidth: 340,
                      }}
                    >
                      Thanks — we have what we need on your{" "}
                      {service.title.toLowerCase()} project and will reply at{" "}
                      <span style={{ color: "var(--ink)" }}>{email}</span> within
                      one business day.
                    </p>
                    <button
                      type="button"
                      onClick={reset}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "var(--teak)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Start over
                    </button>
                  </StepShell>
                ) : onEmail ? (
                  /* EMAIL */
                  <StepShell key="email" reduce={reduce}>
                    <StepHeading kicker="Last step" title="Where should we reply?" />

                    <Summary service={service} answers={answers} />

                    <form onSubmit={submit} style={{ marginTop: "auto" }}>
                      <label
                        htmlFor="sw-message"
                        style={labelStyle}
                      >
                        Anything else we should know?{" "}
                        <span
                          style={{
                            opacity: 0.45,
                            letterSpacing: 0,
                            textTransform: "none",
                            fontWeight: 400,
                          }}
                        >
                          (optional)
                        </span>
                      </label>
                      <textarea
                        id="sw-message"
                        rows={3}
                        placeholder="Links, context, anything helpful…"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{
                          width: "100%",
                          fontFamily: "var(--font-sans)",
                          fontSize: 15,
                          fontWeight: 300,
                          lineHeight: 1.6,
                          color: "var(--ink)",
                          background: "transparent",
                          border: "1px solid var(--ink-subtle)",
                          borderRadius: 10,
                          padding: "12px 14px",
                          outline: "none",
                          resize: "vertical",
                          marginBottom: 24,
                          transition: "border-color 0.3s",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "var(--teak)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "var(--ink-subtle)")
                        }
                      />

                      <label htmlFor="sw-email" style={labelStyle}>
                        Your email
                      </label>
                      <input
                        id="sw-email"
                        required
                        type="email"
                        autoFocus
                        placeholder="you@company.com"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          width: "100%",
                          fontFamily: "var(--font-sans)",
                          fontSize: 16,
                          fontWeight: 300,
                          color: "var(--ink)",
                          background: "transparent",
                          border: "none",
                          borderBottom: "1px solid var(--ink-subtle)",
                          padding: "12px 0",
                          outline: "none",
                          transition: "border-color 0.3s",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderBottomColor = "var(--teak)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderBottomColor = "var(--ink-subtle)")
                        }
                      />

                      <motion.button
                        type="submit"
                        disabled={status === "sending"}
                        whileHover={
                          reduce || status === "sending"
                            ? undefined
                            : { scale: 1.02 }
                        }
                        whileTap={
                          reduce || status === "sending"
                            ? undefined
                            : { scale: 0.98 }
                        }
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        style={{
                          marginTop: 28,
                          width: "100%",
                          fontFamily: "var(--font-sans)",
                          fontSize: 13,
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "var(--cream)",
                          background:
                            status === "sending" ? "var(--teak)" : "var(--ink)",
                          border: "none",
                          borderRadius: 10,
                          padding: "17px 42px",
                          cursor:
                            status === "sending" ? "not-allowed" : "pointer",
                          boxShadow: "0 12px 30px -14px rgba(21,19,17,0.5)",
                          transition: "background 0.3s",
                        }}
                      >
                        {status === "sending" ? "Sending…" : "Send my brief"}
                      </motion.button>

                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 12,
                          opacity: 0.5,
                          marginTop: 14,
                          textAlign: "center",
                        }}
                      >
                        No spam, ever. We only use this to reply.
                      </p>
                    </form>
                  </StepShell>
                ) : (
                  /* QUESTION STEPS */
                  currentQ && (
                    <StepShell key={currentQ.key} reduce={reduce}>
                      <StepHeading
                        kicker={currentQ.kicker}
                        title={currentQ.label}
                      />
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 12,
                          marginTop: 8,
                        }}
                      >
                        {currentQ.options.map((opt) => {
                          const active = answers[currentQ.key] === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => pickAnswer(currentQ.key, opt)}
                              className="sw-chip"
                              style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: 14.5,
                                fontWeight: 400,
                                color: active ? "var(--cream)" : "var(--ink)",
                                background: active
                                  ? "var(--teak)"
                                  : "var(--cream)",
                                border: `1px solid ${
                                  active ? "var(--teak)" : "var(--ink-hairline)"
                                }`,
                                borderRadius: 100,
                                padding: "13px 22px",
                                cursor: "pointer",
                                transition: "all 0.2s",
                              }}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </StepShell>
                  )
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .sw-chip:hover { border-color: var(--teak) !important; }
        @media (max-width: 900px) {
          .svc-wizard-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .svc-wizard-card { padding: 30px 24px 28px !important; min-height: 0 !important; }
        }
      `}</style>
    </section>
  );
}

/* -------------------------------------------------------------- helpers --- */

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--teak)",
  display: "block",
  marginBottom: 6,
};

function StepShell({
  children,
  reduce,
  center,
}: {
  children: React.ReactNode;
  reduce: boolean | null;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, x: -24 }}
      transition={{ duration: 0.4, ease: EASE }}
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        ...(center
          ? {
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }
          : {}),
      }}
    >
      {children}
    </motion.div>
  );
}

function StepHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div style={{ marginBottom: 26 }}>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--teak)",
          marginBottom: 10,
        }}
      >
        {kicker}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(22px, 2.4vw, 28px)",
          fontWeight: 400,
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h3>
    </div>
  );
}

function Summary({
  service,
  answers,
}: {
  service: Service;
  answers: Record<string, string>;
}) {
  const chosen = service.wizard.map((q) => answers[q.key]).filter(Boolean);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        marginBottom: 30,
      }}
    >
      {[service.title, ...chosen].map((v, i) => (
        <span
          key={i}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12.5,
            fontWeight: 500,
            color: "var(--ink-muted)",
            background: "var(--teak-pale)",
            borderRadius: 100,
            padding: "6px 13px",
          }}
        >
          {v}
        </span>
      ))}
    </div>
  );
}
