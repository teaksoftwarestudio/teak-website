"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "50+", label: "Products Shipped" },
  { value: "8yr", label: "In Business" },
  { value: "US/EU", label: "Client Focus" },
  { value: "100%", label: "Remote-Native" },
];

const values = [
  {
    title: "Craft over speed",
    body: "We don't cut corners. Every interaction, every API endpoint, every pixel is considered. Quality compounds over time.",
  },
  {
    title: "Partnership, not order-taking",
    body: "We push back when something won't work and bring ideas to the table. Your success is our portfolio.",
  },
  {
    title: "Transparency by default",
    body: "Weekly updates, public roadmaps, honest timelines. No black boxes. You always know exactly where we stand.",
  },
];

export default function About() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    [leftRef, rightRef].forEach((ref, i) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.transition = "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)";
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 150);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    });
  }, []);

  return (
    <section
      id="about"
      style={{
        background: "var(--ink)",
        color: "var(--cream)",
        padding: "120px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
            borderBottom: "1px solid rgba(250,248,245,0.12)",
            marginBottom: 96,
            paddingBottom: 64,
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: "0 0 0 0",
                borderLeft: i > 0 ? "1px solid rgba(250,248,245,0.12)" : "none",
                paddingLeft: i > 0 ? 40 : 0,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(36px, 4vw, 56px)",
                  fontWeight: 400,
                  color: "var(--teak-light, #C4A882)",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: "0.04em",
                  opacity: 0.5,
                  color: "var(--cream)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Two-column */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
          className="about-grid"
        >
          <div ref={leftRef}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <div style={{ width: 32, height: 1, background: "#C4A882" }} />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#C4A882",
                }}
              >
                About Us
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(34px, 4vw, 52px)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "var(--cream)",
                marginBottom: 28,
              }}
            >
              A small studio with
              <br />
              <span style={{ fontStyle: "italic", color: "#C4A882" }}>big ambitions.</span>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                lineHeight: 1.8,
                opacity: 0.6,
                color: "var(--cream)",
                marginBottom: 20,
              }}
            >
              Teak Software Studio is a boutique product engineering team. We work closely with
              founders, product managers, and engineering leads to turn ideas into production-ready
              software.
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                lineHeight: 1.8,
                opacity: 0.6,
                color: "var(--cream)",
              }}
            >
              We specialise in the full product lifecycle — discovery, architecture, design, development,
              and post-launch growth. Our team is senior-heavy and remote-native, working across US and
              European time zones with ease.
            </p>
          </div>

          <div ref={rightRef}>
            <div style={{ marginBottom: 16, opacity: 0.4 }}>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--cream)",
                }}
              >
                Our Values
              </span>
            </div>
            {values.map((v, i) => (
              <div
                key={v.title}
                style={{
                  borderTop: "1px solid rgba(250,248,245,0.1)",
                  padding: "28px 0",
                  borderBottom: i === values.length - 1 ? "1px solid rgba(250,248,245,0.1)" : "none",
                }}
              >
                <h4
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 22,
                    fontWeight: 400,
                    color: "var(--cream)",
                    marginBottom: 10,
                  }}
                >
                  {v.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: "var(--cream)",
                    opacity: 0.55,
                  }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}