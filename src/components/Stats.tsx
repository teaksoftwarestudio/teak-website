"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";

const stats = [
  { value: "3", label: "Products Shipped" },
  { value: "2yr", label: "In Business" },
  { value: "100k+", label: "Users Reached" },
];

export default function Stats() {
  return (
    <section
      style={{
        background: "var(--teak-pale)",
        color: "var(--ink)",
        padding: "72px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))`,
            gap: 0,
            maxWidth: 900,
            margin: "0 auto",
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              style={{
                borderLeft: i > 0 ? "1px solid rgba(21,19,17,0.12)" : "none",
                padding: "0 40px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(38px, 4.4vw, 60px)",
                  fontWeight: 400,
                  color: "var(--teak)",
                  lineHeight: 1,
                  marginBottom: 8,
                  letterSpacing: "-0.02em",
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
                  color: "var(--ink)",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 24px !important; }
          .stats-grid > * { padding: 0 16px !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          .stats-grid > * { border-left: none !important; padding: 0 !important; }
        }
      `}</style>
    </section>
  );
}
