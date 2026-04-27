"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", budget: "" });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Simulate send
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
    borderBottom: "1px solid rgba(17,17,17,0.2)",
    padding: "14px 0",
    outline: "none",
    transition: "border-color 0.2s",
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

  return (
    <section
      id="contact"
      style={{
        background: "var(--cream)",
        padding: "120px 0",
        borderTop: "1px solid rgba(17,17,17,0.08)",
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
          <div ref={ref}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <div style={{ width: 32, height: 1, background: "var(--teak)" }} />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--teak)",
                }}
              >
                Get in Touch
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 400,
                lineHeight: 1.1,
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
                opacity: 0.6,
                marginBottom: 52,
                maxWidth: 380,
              }}
            >
              Tell us about your project. We typically respond within one business day and
              offer a free 30-minute discovery call to explore fit.
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
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      opacity: 0.75,
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {status === "sent" ? (
              <div
                style={{
                  padding: "60px 0",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    border: "1.5px solid var(--teak)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4 11l5 5 9-9" stroke="var(--teak)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 28,
                    fontWeight: 400,
                    marginBottom: 12,
                  }}
                >
                  Message received.
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, opacity: 0.6 }}>
                  We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="form-row">
                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderBottomColor = "var(--teak)")}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderBottomColor = "rgba(17,17,17,0.2)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderBottomColor = "var(--teak)")}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderBottomColor = "rgba(17,17,17,0.2)")}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="form-row">
                  <div>
                    <label style={labelStyle}>Company</label>
                    <input
                      type="text"
                      placeholder="Acme Inc."
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderBottomColor = "var(--teak)")}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderBottomColor = "rgba(17,17,17,0.2)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Budget Range</label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderBottomColor = "var(--teak)")}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderBottomColor = "rgba(17,17,17,0.2)")}
                    >
                      <option value="">Select a range</option>
                      <option value="<25k">Under $25k</option>
                      <option value="25k-75k">$25k – $75k</option>
                      <option value="75k-150k">$75k – $150k</option>
                      <option value="150k+">$150k+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Tell us about your project</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="What are you building? What problem does it solve?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "var(--font-sans)" }}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderBottomColor = "var(--teak)")}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderBottomColor = "rgba(17,17,17,0.2)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
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
                    padding: "16px 40px",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    transition: "background 0.2s",
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
                </button>
              </form>
            )}
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