"use client";

import { motion } from "framer-motion";
import { EASE, fadeUp, stagger } from "./motion";

const testimonial = {
  quote:
    "Teak took our half-baked idea and turned it into a product our customers actually love. Their ability to balance speed with quality is rare.",
  author: "Sarah K.",
  role: "Founder, Finlo",
  location: "San Francisco, CA",
};

export default function TrustBar() {
  return (
    <section
      style={{
        background: "var(--teak-pale)",
        borderBottom: "1px solid rgba(21,19,17,0.06)",
        padding: "72px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Oversized decorative quote mark */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -40,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-serif)",
          fontSize: 340,
          lineHeight: 1,
          color: "var(--teak)",
          opacity: 0.07,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        &ldquo;
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 32px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Stars */}
        <motion.div
          variants={fadeUp}
          style={{ display: "flex", justifyContent: "center", gap: 5, marginBottom: 28 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.svg
              key={i}
              width="17"
              height="17"
              viewBox="0 0 16 16"
              fill="none"
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08, ease: EASE, duration: 0.4 }}
            >
              <path
                d="M8 1l1.8 3.6L14 5.4l-3 2.9.7 4.1L8 10.4 4.3 12.4l.7-4.1-3-2.9 4.2-.8L8 1z"
                fill="var(--teak)"
              />
            </motion.svg>
          ))}
        </motion.div>

        <motion.blockquote
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(22px, 3.2vw, 34px)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.42,
            letterSpacing: "-0.01em",
            color: "var(--ink)",
            marginBottom: 36,
          }}
        >
          {testimonial.quote}
        </motion.blockquote>

        <motion.div
          variants={fadeUp}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "var(--teak)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 8px 20px -8px rgba(139,111,71,0.6)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 18,
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
                letterSpacing: "0.01em",
              }}
            >
              {testimonial.author}
            </div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, opacity: 0.55 }}>
              {testimonial.role} · {testimonial.location}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
