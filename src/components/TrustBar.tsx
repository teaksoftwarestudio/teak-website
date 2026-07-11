"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote: "Teak took our half-baked idea and turned it into a product our customers actually love. Their ability to balance speed with quality is rare.",
    author: "Sarah K.",
    role: "Founder",
    company: "Finlo",
    location: "San Francisco, CA",
  },
  {
    quote: "Working with Teak felt like having a founding engineer on the team. They challenged our assumptions and shipped faster than any agency we've worked with.",
    author: "Marcus D.",
    role: "CTO",
    company: "Loopback",
    location: "New York, NY",
  },
  {
    quote: "The design system they built has saved us months of work. Everything is consistent, accessible, and actually documented. Couldn't recommend them more.",
    author: "Priya M.",
    role: "Head of Product",
    company: "Karta",
    location: "London, UK",
  },
];

const marqueeItems = [
  "SaaS Products", "Mobile Apps", "Web Applications", "Design Systems",
  "React Native", "Next.js", "Full-Stack Engineering", "iOS & Android",
  "Product Strategy", "Auth & Billing", "GraphQL", "TypeScript",
];

export default function TrustBar() {
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <section style={{ background: "#f7f7f7", borderTop: "1px solid rgba(10,10,10,0.08)", borderBottom: "1px solid rgba(10,10,10,0.08)", overflow: "hidden" }}>

      {/* Marquee */}
      <div style={{ padding: "16px 0", borderBottom: "1px solid rgba(10,10,10,0.07)", overflow: "hidden", whiteSpace: "nowrap" }}>
        <div style={{ display: "inline-flex", animation: "marquee 32s linear infinite" }}>
          {doubled.map((item, i) => (
            <span key={i} style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0a0a0a", opacity: 0.25, padding: "0 28px", borderRight: "1px solid rgba(10,10,10,0.08)" }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 32px 72px" }}>
        {/* Stars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 36 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.svg key={i} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1l1.5 3.1L12 4.9l-2.5 2.4.6 3.4L7 9.1 3.9 10.7l.6-3.4L2 4.9l3.5-.8L7 1z" fill="#0a0a0a" />
            </motion.svg>
          ))}
        </motion.div>

        {/* Quote */}
        <div style={{ position: "relative", minHeight: 120, marginBottom: 40 }}>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(19px, 2.6vw, 28px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: "#0a0a0a", textAlign: "center" }}
            >
              &ldquo;{testimonials[active].quote}&rdquo;
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Author + controls */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24 }}>
          {/* Prev */}
          <motion.button
            onClick={prev}
            whileHover={{ opacity: 1 }}
            style={{ background: "none", border: "1px solid rgba(10,10,10,0.15)", padding: "8px 10px", cursor: "pointer", opacity: 0.4, display: "flex", alignItems: "center" }}
            aria-label="Previous"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M8 2L4 6l4 4" stroke="#0a0a0a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>

          {/* Author */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: "flex", alignItems: "center", gap: 12, textAlign: "left" }}
            >
              <div style={{ width: 36, height: 36, background: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: 14, color: "white" }}>{testimonials[active].author.charAt(0)}</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "#0a0a0a" }}>
                  {testimonials[active].author} — {testimonials[active].role}, {testimonials[active].company}
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "#0a0a0a", opacity: 0.38 }}>
                  {testimonials[active].location}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next */}
          <motion.button
            onClick={next}
            whileHover={{ opacity: 1 }}
            style={{ background: "none", border: "1px solid rgba(10,10,10,0.15)", padding: "8px 10px", cursor: "pointer", opacity: 0.4, display: "flex", alignItems: "center" }}
            aria-label="Next"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2l4 4-4 4" stroke="#0a0a0a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 24 }}>
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              animate={{ width: active === i ? 20 : 6, opacity: active === i ? 1 : 0.2 }}
              transition={{ duration: 0.3 }}
              style={{ height: 3, background: "#0a0a0a", borderRadius: 2, border: "none", cursor: "pointer", padding: 0 }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
