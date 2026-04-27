"use client";

import { useEffect, useRef } from "react";

const testimonial = {
  quote:
    "Teak took our half-baked idea and turned it into a product our customers actually love. Their ability to balance speed with quality is rare.",
  author: "Sarah K.",
  role: "Founder, Finlo",
  location: "San Francisco, CA",
};

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = "opacity 0.9s ease";
          el.style.opacity = "1";
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: "var(--teak-pale, #EFE5D6)",
        borderTop: "1px solid rgba(17,17,17,0.06)",
        borderBottom: "1px solid rgba(17,17,17,0.06)",
        padding: "80px 0",
        overflow: "hidden",
      }}
    >
      <div ref={ref} style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
        {/* Stars */}
        <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 28 }}>
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 1l1.8 3.6L14 5.4l-3 2.9.7 4.1L8 10.4 4.3 12.4l.7-4.1-3-2.9 4.2-.8L8 1z"
                fill="var(--teak)"
              />
            </svg>
          ))}
        </div>

        <blockquote
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(20px, 3vw, 32px)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.45,
            color: "var(--ink)",
            marginBottom: 36,
          }}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              background: "var(--teak)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 16,
                fontWeight: 400,
                color: "white",
              }}
            >
              {testimonial.author.charAt(0)}
            </span>
          </div>
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              {testimonial.author}
            </div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                opacity: 0.55,
              }}
            >
              {testimonial.role} · {testimonial.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}