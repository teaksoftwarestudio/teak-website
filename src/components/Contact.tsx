"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE, Reveal, fadeUp, stagger } from "./motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", budget: "" });
  const reduce = useReducedMotion();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1800);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    fontFamily: "var(--font-sans)",
    fontSize: 15,
    fontWeight: 300,
    color: "var(--ink)",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid var(--ink-subtle)",
    padding: "14px 0",
    outline: "none",
    transition: "border-color 0.3s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--teak)",
    display: "block",
    marginBottom: 4,
  };

  const focusOn = (e: React.FocusEvent<HTMLElement>) =>
    ((e.target as HTMLElement).style.borderBottomColor = "var(--teak)");
  const focusOff = (e: React.FocusEvent<HTMLElement>) =>
    ((e.target as HTMLElement).style.borderBottomColor = "var(--ink-subtle)");

  return (
    <section
      id="contact"
      style={{
        background: "var(--cream)",
        padding: "128px 0",
        borderTop: "1px solid var(--ink-hairline)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 96,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left */}
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <div style={{ width: 32, height: 1, background: "var(--teak)" }} />
              <span className="eyebrow">Get in Touch</span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 5vw, 62px)",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                marginBottom: 28,
              }}
            >
              Let&apos;s build
              <br />
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
                marginBottom: 52,
                maxWidth: 380,
              }}
            >
              Tell us about your project. We typically respond within one business day
              and offer a free 30-minute discovery call to explore fit.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { label: "Email", value: "hello@teaksoftware.studio" },
                { label: "Based in", value: "Remote — serving US & Europe" },
                { label: "Response time", value: "Within 1 business day" },
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
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 15, opacity: 0.78 }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — Form */}
          <div>
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  style={{ padding: "60px 0", textAlign: "center" }}
                >
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
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, opacity: 0.6 }}>
                    We&apos;ll be in touch within one business day.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  exit={{ opacity: 0 }}
                  style={{ display: "flex", flexDirection: "column", gap: 32 }}
                >
                  <motion.div
                    variants={fadeUp}
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}
                    className="form-row"
                  >
                    <div>
                      <label style={labelStyle} htmlFor="c-name">
                        Your Name <span style={{ color: "var(--teak)" }}>*</span>
                      </label>
                      <input
                        id="c-name"
                        required
                        type="text"
                        placeholder="Jane Smith"
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                        onFocus={focusOn}
                        onBlur={focusOff}
                      />
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="c-email">
                        Email <span style={{ color: "var(--teak)" }}>*</span>
                      </label>
                      <input
                        id="c-email"
                        required
                        type="email"
                        placeholder="jane@company.com"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={inputStyle}
                        onFocus={focusOn}
                        onBlur={focusOff}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeUp}
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}
                    className="form-row"
                  >
                    <div>
                      <label style={labelStyle} htmlFor="c-company">Company</label>
                      <input
                        id="c-company"
                        type="text"
                        placeholder="Acme Inc."
                        autoComplete="organization"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        style={inputStyle}
                        onFocus={focusOn}
                        onBlur={focusOff}
                      />
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="c-budget">Budget Range</label>
                      <select
                        id="c-budget"
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}
                        onFocus={focusOn}
                        onBlur={focusOff}
                      >
                        <option value="">Select a range</option>
                        <option value="<25k">Under $25k</option>
                        <option value="25k-75k">$25k – $75k</option>
                        <option value="75k-150k">$75k – $150k</option>
                        <option value="150k+">$150k+</option>
                      </select>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label style={labelStyle} htmlFor="c-message">
                      Tell us about your project <span style={{ color: "var(--teak)" }}>*</span>
                    </label>
                    <textarea
                      id="c-message"
                      required
                      rows={4}
                      placeholder="What are you building? What problem does it solve?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: "vertical", fontFamily: "var(--font-sans)" }}
                      onFocus={focusOn}
                      onBlur={focusOff}
                    />
                  </motion.div>

                  <motion.button
                    variants={fadeUp}
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={reduce || status === "sending" ? undefined : { scale: 1.03 }}
                    whileTap={reduce || status === "sending" ? undefined : { scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    style={{
                      alignSelf: "flex-start",
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--cream)",
                      background: status === "sending" ? "var(--teak)" : "var(--ink)",
                      border: "none",
                      padding: "17px 42px",
                      cursor: status === "sending" ? "not-allowed" : "pointer",
                      boxShadow: "0 12px 30px -14px rgba(21,19,17,0.5)",
                      transition: "background 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      if (status !== "sending")
                        (e.currentTarget as HTMLElement).style.background = "var(--teak)";
                    }}
                    onMouseLeave={(e) => {
                      if (status !== "sending")
                        (e.currentTarget as HTMLElement).style.background = "var(--ink)";
                    }}
                  >
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .form-row { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}
