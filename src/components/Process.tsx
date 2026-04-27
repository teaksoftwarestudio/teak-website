"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    step: "Discovery",
    duration: "1–2 weeks",
    description:
      "We learn your business, users, and constraints. Product workshops, technical audit, and a shared understanding of what success looks like.",
  },
  {
    step: "Design & Architecture",
    duration: "2–3 weeks",
    description:
      "UI/UX design in Figma, system architecture, technology selection, and a detailed project plan. You sign off before a single line of code is written.",
  },
  {
    step: "Build",
    duration: "6–16 weeks",
    description:
      "Iterative development in 2-week sprints. Weekly demos, continuous deployment to staging, and tight communication throughout.",
  },
  {
    step: "Launch & Grow",
    duration: "Ongoing",
    description:
      "Production deployment, monitoring setup, performance tuning, and ongoing feature development as your product evolves.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      style={{
        background: "var(--teak-pale, #EFE5D6)",
        padding: "120px 0",
        borderTop: "1px solid rgba(17,17,17,0.06)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
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
            How We Work
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 72,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            From idea to
            <br />
            <span style={{ fontStyle: "italic" }}>production.</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              lineHeight: 1.7,
              opacity: 0.6,
              maxWidth: 360,
            }}
          >
            Our process is designed to minimise surprises and maximise the quality
            of what ships. Here&apos;s what working with us looks like.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Line */}
          <div
            style={{
              position: "absolute",
              top: 24,
              left: 0,
              right: 0,
              height: 1,
              background: "rgba(17,17,17,0.15)",
            }}
            className="process-line"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 40,
              position: "relative",
            }}
            className="process-grid"
          >
            {steps.map((s, i) => (
              <StepCard key={s.step} step={s} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .process-line { display: none !important; }
        }
        @media (max-width: 540px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, index * 120);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={ref} style={{ paddingTop: 0 }}>
      {/* Dot */}
      <div
        style={{
          width: 48,
          height: 48,
          background: "var(--teak)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 28,
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            fontWeight: 600,
            color: "white",
            letterSpacing: "0.05em",
          }}
        >
          0{index + 1}
        </span>
      </div>

      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--teak)",
          marginBottom: 8,
        }}
      >
        {step.duration}
      </div>

      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 22,
          fontWeight: 400,
          marginBottom: 12,
          lineHeight: 1.2,
        }}
      >
        {step.step}
      </h3>

      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 14,
          lineHeight: 1.75,
          opacity: 0.6,
        }}
      >
        {step.description}
      </p>
    </div>
  );
}