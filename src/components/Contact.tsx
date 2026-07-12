"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE, Reveal } from "./motion";

/* ---------------------------------------------------------------- data --- */

type Intent = "project" | "general";

const intents: {
  id: Intent;
  title: string;
  blurb: string;
  icon: React.ReactNode;
}[] = [
  {
    id: "project",
    title: "Start a project",
    blurb: "You have something to build and want a team to build it.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 7l8-4 8 4-8 4-8-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M4 12l8 4 8-4M4 17l8 4 8-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "general",
    title: "Just say hello",
    blurb: "A question, a partnership, or a general enquiry.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 5h16v12H8l-4 3V5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M9 10h6M9 13h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

// Step config keyed by intent — each is a single-select chip question.
const questions: Record<Intent, { key: string; label: string; options: string[] }[]> = {
  project: [
    {
      key: "type",
      label: "What are you looking to build?",
      options: [
        "Web Apps",
        "Mobile Apps",
        "AI Systems",
        "Web + Mobile",
        "Web + AI",
        "Mobile + AI",
        "Everything Together (Web + Mobile + AI)",
      ],
    },
    {
      key: "stage",
      label: "Where are you today?",
      options: ["Just an idea", "Have designs", "Existing product", "Rescue / rebuild"],
    },
    {
      key: "priority",
      label: "What matters most right now?",
      options: ["Launch quickly", "Get the UX right", "Scale the product", "Add AI", "Not sure yet"],
    },
    {
      key: "timeline",
      label: "When do you want to start?",
      options: ["ASAP", "This month", "This quarter"],
    },
  ],
  general: [
    {
      key: "topic",
      label: "What's this about?",
      options: ["A question", "Partnership", "Careers", "Press / media", "Something else"],
    },
  ],
};

/* ------------------------------------------------------------ component --- */

export default function Contact() {
  const reduce = useReducedMotion();

  const [intent, setIntent] = useState<Intent | null>(null);
  const [step, setStep] = useState(0); // 0 = intent, 1..n = questions, then email
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const flow = intent ? questions[intent] : [];
  const totalSteps = 1 + flow.length + 1; // intent + questions + email
  const emailStep = intent ? 1 + flow.length : -1;
  const onEmail = step === emailStep;

  function pickIntent(id: Intent) {
    setIntent(id);
    setAnswers({});
    setStep(1);
  }

  function pickAnswer(key: string, value: string) {
    setAnswers((a) => ({ ...a, [key]: value }));
    // Auto-advance for a frictionless feel.
    setTimeout(() => setStep((s) => s + 1), reduce ? 0 : 220);
  }

  function back() {
    if (step === 1) {
      setIntent(null);
      setStep(0);
    } else {
      setStep((s) => s - 1);
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ intent, answers, message, name, email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("idle");
      alert("Something went wrong sending your message. Please try again or email us directly.");
    }
  }

  function reset() {
    setIntent(null);
    setStep(0);
    setAnswers({});
    setMessage("");
    setName("");
    setEmail("");
    setStatus("idle");
  }

  const currentQ = intent && step >= 1 && step <= flow.length ? flow[step - 1] : null;
  const progress = onEmail || status === "sent" ? 1 : step / Math.max(totalSteps - 1, 1);

  return (
    <section
      id="contact"
      style={{
        background: "var(--white)",
        padding: "88px 0",
        borderTop: "1px solid var(--ink-hairline)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: 96,
            alignItems: "center",
          }}
          className="contact-grid"
        >
          {/* Left — intro */}
          <Reveal>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--teak)",
                marginBottom: 20,
              }}
            >
            </div>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 5vw, 62px)",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                marginBottom: 22,
              }}
            >
              Let&apos;s build{" "}
              <span style={{ fontStyle: "italic", color: "var(--teak)" }}>
                something great.
              </span>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                lineHeight: 1.8,
                opacity: 0.62,
                marginBottom: 44,
                maxWidth: 380,
              }}
            >
              No long forms. Answer a couple of quick questions, leave your email,
              and we&apos;ll take it from there — usually within one business day.
            </p>

          </Reveal>

          {/* Right — wizard */}
          <div
            style={{
              background: "var(--paper, #fff)",
              border: "1px solid var(--ink-hairline)",
              borderRadius: 18,
              padding: "40px 40px 36px",
              boxShadow: "0 28px 60px -40px rgba(21,19,17,0.4)",
              minHeight: 440,
              display: "flex",
              flexDirection: "column",
            }}
            className="wizard-card"
          >
            {/* Progress bar */}
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
                    style={{ height: "100%", background: "var(--teak)", borderRadius: 3 }}
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
                {/* --- SENT --- */}
                {status === "sent" ? (
                  <StepShell key="sent" reduce={reduce} center>
                    <motion.div
                      initial={reduce ? false : { scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
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
                      Message received.
                    </h3>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, opacity: 0.6, marginBottom: 28 }}>
                      Thanks — we&apos;ll be in touch at{" "}
                      <span style={{ color: "var(--ink)" }}>{email}</span> within one
                      business day.
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
                      Send another
                    </button>
                  </StepShell>
                ) : step === 0 ? (
                  /* --- STEP 0: intent --- */
                  <StepShell key="intent" reduce={reduce}>
                    <StepHeading
                      kicker="How can we help?"
                      title="What brings you here?"
                    />
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 14,
                        marginTop: 8,
                      }}
                      className="intent-grid"
                    >
                      {intents.map((it) => (
                        <button
                          key={it.id}
                          type="button"
                          onClick={() => pickIntent(it.id)}
                          className="option-card"
                          style={{
                            textAlign: "left",
                            background: "var(--cream)",
                            border: "1px solid var(--ink-hairline)",
                            borderRadius: 14,
                            padding: "24px 22px",
                            cursor: "pointer",
                            transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                          }}
                        >
                          <div
                            style={{
                              width: 44,
                              height: 44,
                              borderRadius: 11,
                              background: "var(--teak-pale)",
                              color: "var(--teak)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginBottom: 18,
                            }}
                          >
                            {it.icon}
                          </div>
                          <div
                            style={{
                              fontFamily: "var(--font-serif)",
                              fontSize: 20,
                              fontWeight: 400,
                              letterSpacing: "-0.01em",
                              marginBottom: 7,
                            }}
                          >
                            {it.title}
                          </div>
                          <div
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: 13.5,
                              lineHeight: 1.6,
                              opacity: 0.6,
                            }}
                          >
                            {it.blurb}
                          </div>
                        </button>
                      ))}
                    </div>
                  </StepShell>
                ) : onEmail ? (
                  /* --- FINAL: email --- */
                  <StepShell key="email" reduce={reduce}>
                    <StepHeading
                      kicker="Last step"
                      title="Where should we reply?"
                    />

                    <Summary intent={intent!} answers={answers} flow={flow} />

                    <form onSubmit={submit} style={{ marginTop: "auto" }}>
                      <label
                        htmlFor="c-message"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--teak)",
                          display: "block",
                          marginBottom: 6,
                        }}
                      >
                        {intent === "general" ? "Your message" : "Anything else we should know?"}{" "}
                        <span style={{ opacity: 0.45, letterSpacing: 0, textTransform: "none", fontWeight: 400 }}>
                          (optional)
                        </span>
                      </label>
                      <textarea
                        id="c-message"
                        rows={intent === "general" ? 4 : 2}
                        placeholder={
                          intent === "general"
                            ? "Tell us what's on your mind…"
                            : "Links, context, anything helpful…"
                        }
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
                          marginBottom: 22,
                          transition: "border-color 0.3s",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--teak)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--ink-subtle)")}
                      />

                      <div className="identity-grid">
                        <div>
                          <label
                            htmlFor="c-name"
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: 11,
                              fontWeight: 600,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: "var(--teak)",
                              display: "block",
                              marginBottom: 6,
                            }}
                          >
                            Your name
                          </label>
                          <input
                            id="c-name"
                            required
                            type="text"
                            autoFocus
                            placeholder="Your name"
                            autoComplete="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                            onFocus={(e) => (e.target.style.borderBottomColor = "var(--teak)")}
                            onBlur={(e) => (e.target.style.borderBottomColor = "var(--ink-subtle)")}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="c-email"
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: 11,
                              fontWeight: 600,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: "var(--teak)",
                              display: "block",
                              marginBottom: 6,
                            }}
                          >
                            Your email
                          </label>
                          <input
                            id="c-email"
                            required
                            type="email"
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
                            onFocus={(e) => (e.target.style.borderBottomColor = "var(--teak)")}
                            onBlur={(e) => (e.target.style.borderBottomColor = "var(--ink-subtle)")}
                          />
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        disabled={status === "sending"}
                        whileHover={reduce || status === "sending" ? undefined : { scale: 1.02 }}
                        whileTap={reduce || status === "sending" ? undefined : { scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        style={{
                          marginTop: 26,
                          width: "100%",
                          fontFamily: "var(--font-sans)",
                          fontSize: 13,
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "var(--cream)",
                          background: status === "sending" ? "var(--teak)" : "var(--ink)",
                          border: "none",
                          borderRadius: 10,
                          padding: "17px 42px",
                          cursor: status === "sending" ? "not-allowed" : "pointer",
                          boxShadow: "0 12px 30px -14px rgba(21,19,17,0.5)",
                          transition: "background 0.3s",
                        }}
                      >
                        {status === "sending" ? "Sending…" : "Send it over"}
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
                  /* --- QUESTION STEPS --- */
                  currentQ && (
                    <StepShell key={currentQ.key} reduce={reduce}>
                      <StepHeading
                        kicker={intent === "project" ? "Your project" : "Your enquiry"}
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
                              className="chip"
                              style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: 14.5,
                                fontWeight: 400,
                                color: active ? "var(--cream)" : "var(--ink)",
                                background: active ? "var(--teak)" : "var(--cream)",
                                border: `1px solid ${active ? "var(--teak)" : "var(--ink-hairline)"}`,
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
        .option-card:hover {
          border-color: var(--teak) !important;
          transform: translateY(-3px);
          box-shadow: 0 20px 40px -28px rgba(21,19,17,0.45);
        }
        .chip:hover { border-color: var(--teak) !important; }
        .identity-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .wizard-card { padding: 30px 24px 28px !important; min-height: 0 !important; }
        }
        @media (max-width: 460px) {
          .intent-grid { grid-template-columns: 1fr !important; }
          .identity-grid { grid-template-columns: 1fr !important; gap: 18px !important; }
        }
      `}</style>
    </section>
  );
}

/* -------------------------------------------------------------- helpers --- */

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
        ...(center ? { alignItems: "center", justifyContent: "center", textAlign: "center" } : {}),
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
  intent,
  answers,
  flow,
}: {
  intent: Intent;
  answers: Record<string, string>;
  flow: { key: string; label: string; options: string[] }[];
}) {
  const chosen = flow.map((q) => answers[q.key]).filter(Boolean);
  const label = intent === "project" ? "Start a project" : "Just say hello";
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        marginBottom: 30,
      }}
    >
      {[label, ...chosen].map((v, i) => (
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
