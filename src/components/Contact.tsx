"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const budgets = ["Under $10k", "$10k – $30k", "$30k – $75k", "$75k – $150k", "$150k+"];
const projectTypes = ["New Product", "Existing Product", "Mobile App", "Web App", "SaaS", "Design System"];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", budget: "", type: "" });

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1800);
  }

  const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0a0a0a", opacity: 0.38 }}>
        {label}
      </label>
      {children}
    </div>
  );

  const inputBase: React.CSSProperties = {
    width: "100%",
    fontFamily: "var(--font-sans)",
    fontSize: 15,
    fontWeight: 300,
    color: "#0a0a0a",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(10,10,10,0.15)",
    padding: "12px 0",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ background: "#ffffff", padding: "120px 0", borderTop: "1px solid rgba(10,10,10,0.08)", scrollMarginTop: "68px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ marginBottom: 80 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <div style={{ width: 28, height: 1, background: "#0a0a0a", opacity: 0.25 }} />
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0a0a0a", opacity: 0.38 }}>
              Get in Touch
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 32 }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(38px, 5vw, 68px)", fontWeight: 400, lineHeight: 1.0, letterSpacing: "-0.03em" }}>
              Let&apos;s build
              <br />
              <em style={{ fontStyle: "italic", opacity: 0.35 }}>something great.</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.8, opacity: 0.45, maxWidth: 340 }}>
              Tell us about your project — whether you want us to build a product, hire our team, or just explore what&apos;s possible. We reply within one business day.
            </p>
          </div>
        </motion.div>

        {/* Two columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }} className="contact-grid">

          {/* Left — info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 48, borderTop: "1px solid rgba(10,10,10,0.08)" }}>
              {[
                { label: "Email", value: "hello@teaksoftware.studio", href: "mailto:hello@teaksoftware.studio" },
                { label: "Based in", value: "Remote · US & Europe", href: null },
                { label: "Response time", value: "Within 1 business day", href: null },
                { label: "Availability", value: "Currently taking projects", href: null },
              ].map((item) => (
                <div key={item.label} style={{ padding: "20px 0", borderBottom: "1px solid rgba(10,10,10,0.08)", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0a0a0a", opacity: 0.3 }}>
                    {item.label}
                  </span>
                  {item.href ? (
                    <a href={item.href} style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "#0a0a0a", opacity: 0.7, textDecoration: "none", transition: "opacity 0.2s" }} onMouseEnter={e => (e.currentTarget.style.opacity = "1")} onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}>
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "#0a0a0a", opacity: 0.65 }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* What to expect */}
            <div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0a0a0a", opacity: 0.3, marginBottom: 16 }}>
                What happens next
              </p>
              {[
                "We review your message and reply within 24h",
                "Free 30-min discovery call to explore fit",
                "Proposal with timeline and fixed price",
                "We get to work",
              ].map((step, i) => (
                <div key={i} style={{ display: "flex", gap: 14, marginBottom: 14, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, color: "#0a0a0a", opacity: 0.25, paddingTop: 2, flexShrink: 0 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "#0a0a0a", opacity: 0.5, lineHeight: 1.6 }}>{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ padding: "80px 0", textAlign: "center" }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  style={{ width: 56, height: 56, border: "1px solid #0a0a0a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 10l5 5 9-9" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 400, marginBottom: 10 }}>Message received.</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, opacity: 0.45 }}>We&apos;ll be in touch within one business day.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                {/* Name + Email */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="form-row">
                  <Field label="Your Name">
                    <input required type="text" placeholder="Jane Smith" value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      style={inputBase}
                      onFocus={e => (e.target.style.borderBottomColor = "#0a0a0a")}
                      onBlur={e => (e.target.style.borderBottomColor = "rgba(10,10,10,0.15)")}
                    />
                  </Field>
                  <Field label="Email">
                    <input required type="email" placeholder="jane@company.com" value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      style={inputBase}
                      onFocus={e => (e.target.style.borderBottomColor = "#0a0a0a")}
                      onBlur={e => (e.target.style.borderBottomColor = "rgba(10,10,10,0.15)")}
                    />
                  </Field>
                </div>

                {/* Company + Budget */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="form-row">
                  <Field label="Company (optional)">
                    <input type="text" placeholder="Acme Inc." value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      style={inputBase}
                      onFocus={e => (e.target.style.borderBottomColor = "#0a0a0a")}
                      onBlur={e => (e.target.style.borderBottomColor = "rgba(10,10,10,0.15)")}
                    />
                  </Field>
                  <Field label="Budget Range">
                    <select value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}
                      style={{ ...inputBase, cursor: "pointer", appearance: "none" }}
                      onFocus={e => (e.target.style.borderBottomColor = "#0a0a0a")}
                      onBlur={e => (e.target.style.borderBottomColor = "rgba(10,10,10,0.15)")}
                    >
                      <option value="">Select a range</option>
                      {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </Field>
                </div>

                {/* Project type chips */}
                <Field label="Project Type">
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingTop: 8 }}>
                    {projectTypes.map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm({ ...form, type: t })}
                        style={{
                          fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500,
                          letterSpacing: "0.03em", padding: "6px 14px", cursor: "pointer",
                          border: form.type === t ? "1px solid #0a0a0a" : "1px solid rgba(10,10,10,0.15)",
                          background: form.type === t ? "#0a0a0a" : "transparent",
                          color: form.type === t ? "#ffffff" : "#0a0a0a",
                          opacity: form.type === t ? 1 : 0.5,
                          transition: "all 0.2s",
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </Field>

                {/* Message */}
                <Field label="Tell us about your project">
                  <textarea required rows={4} placeholder="What are you building? What's the timeline? What does success look like?"
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputBase, resize: "vertical", fontFamily: "var(--font-sans)" }}
                    onFocus={e => (e.target.style.borderBottomColor = "#0a0a0a")}
                    onBlur={e => (e.target.style.borderBottomColor = "rgba(10,10,10,0.15)")}
                  />
                </Field>

                <div style={{ display: "flex", alignItems: "center", gap: 20, paddingTop: 4 }}>
                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ opacity: status === "sending" ? 0.6 : 0.8 }}
                    style={{
                      fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600,
                      letterSpacing: "0.06em", textTransform: "uppercase",
                      color: "#ffffff", background: "#0a0a0a", border: "none",
                      padding: "16px 44px", cursor: status === "sending" ? "not-allowed" : "pointer",
                      opacity: status === "sending" ? 0.6 : 1,
                    }}
                  >
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </motion.button>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, opacity: 0.3, fontStyle: "italic" }}>
                    Free discovery call included
                  </span>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .form-row { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}
