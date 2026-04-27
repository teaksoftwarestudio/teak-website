"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    number: "01",
    title: "SaaS Products",
    description:
      "End-to-end product development — from architecture and design to launch and iteration. We build subscription platforms, dashboards, and internal tools that scale.",
    tags: ["Product Strategy", "Full-Stack Dev", "Subscriptions", "Auth & Billing"],
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Complex, data-rich web apps engineered for performance and usability. Whether B2B or B2C, we handle the full scope from database design to frontend polish.",
    tags: ["Next.js", "React", "REST & GraphQL", "Performance"],
  },
  {
    number: "03",
    title: "Mobile Apps",
    description:
      "Native-quality iOS and Android applications built with React Native. Clean UX, smooth animations, and deep platform integrations — shipped on time.",
    tags: ["React Native", "iOS & Android", "Push Notifications", "Offline Support"],
  },
  {
    number: "04",
    title: "Design Systems",
    description:
      "Cohesive component libraries and design tokens that accelerate your team. We bridge design and engineering so your product stays consistent at any scale.",
    tags: ["Figma", "Storybook", "Accessibility", "Documentation"],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      style={{
        borderTop: "1px solid rgba(17,17,17,0.12)",
        padding: "40px 0",
        display: "grid",
        gridTemplateColumns: "80px 1fr 1fr",
        gap: "0 48px",
        cursor: "default",
      }}
      className="service-row"
    >
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.08em",
          color: "var(--teak)",
          paddingTop: 4,
        }}
      >
        {service.number}
      </span>

      <div>
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(26px, 3vw, 36px)",
            fontWeight: 400,
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 15,
            lineHeight: 1.75,
            color: "var(--ink)",
            opacity: 0.6,
            maxWidth: 420,
          }}
        >
          {service.description}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          alignContent: "flex-start",
          paddingTop: 6,
        }}
      >
        {service.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.04em",
              padding: "6px 14px",
              border: "1px solid rgba(17,17,17,0.15)",
              color: "var(--ink)",
              opacity: 0.7,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .service-row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function Services() {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" style={{ background: "var(--cream)", padding: "120px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div ref={headRef} style={{ marginBottom: 72 }}>
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
              What We Do
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 400,
              lineHeight: 1.1,
              maxWidth: 600,
            }}
          >
            Craft at every
            <br />
            <span style={{ fontStyle: "italic" }}>layer of the stack.</span>
          </h2>
        </div>

        <div>
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
          <div style={{ borderTop: "1px solid rgba(17,17,17,0.12)" }} />
        </div>
      </div>
    </section>
  );
}