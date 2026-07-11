"use client";

import { motion, Reveal } from "./motion";
import { fadeUp, stagger } from "./motion";

const beliefs = [
  {
    title: "Small teams ship better software",
    body: "The best products we’ve seen weren’t built by armies. They were built by a handful of people who deeply understood the problem and cared about every detail. That’s the model we chose on purpose.",
  },
  {
    title: "Engineering is a design discipline",
    body: "How a system is structured shapes how it feels to use and how easily it grows. We treat architecture, performance, and interface as one connected craft — not separate hand-offs.",
  },
  {
    title: "The relationship outlasts the launch",
    body: "Shipping is the start, not the finish. We stay close after go-live — measuring, refining, and building the next thing with the context we’ve already earned.",
  },
];

export default function AboutStory() {
  return (
    <section
      style={{
        background: "var(--cream)",
        color: "var(--ink)",
        padding: "96px 0",
        borderTop: "1px solid var(--ink-hairline)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: 80,
            alignItems: "start",
          }}
          className="story-grid"
        >
          {/* Left — heading + narrative */}
          <Reveal>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 5vw, 66px)",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                marginBottom: 18,
              }}
            >
              Our Story
            </h2>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(19px, 2vw, 24px)",
                fontWeight: 400,
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
                color: "var(--ink-muted)",
                marginBottom: 32,
              }}
            >
              Started small.{" "}
              <span style={{ fontStyle: "italic", color: "var(--teak)" }}>
                Stayed sharp.
              </span>
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15.5,
                lineHeight: 1.8,
                color: "var(--ink-muted)",
                marginBottom: 18,
              }}
            >
              Teak began with a simple frustration: too much software was being
              shipped fast and cheap, and it showed. We wanted to build the
              opposite &mdash; products that felt considered, held up under real
              use, and made the teams behind them proud.
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15.5,
                lineHeight: 1.8,
                color: "var(--ink-muted)",
              }}
            >
              So we kept the studio deliberately small and senior. No layers, no
              hand-offs, no diluted ownership. Just three people who&rsquo;ve
              shipped a lot of software, working directly with the people who need
              it built.
            </p>
          </Reveal>

          {/* Right — beliefs */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {beliefs.map((b, i) => (
              <motion.div
                key={b.title}
                variants={fadeUp}
                style={{
                  borderTop: "1px solid var(--ink-hairline)",
                  padding: "28px 0",
                  borderBottom:
                    i === beliefs.length - 1 ? "1px solid var(--ink-hairline)" : "none",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 24,
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 15,
                    color: "var(--teak)",
                    letterSpacing: "0.02em",
                  }}
                >
                  0{i + 1}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 22,
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                      marginBottom: 10,
                    }}
                  >
                    {b.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14.5,
                      lineHeight: 1.75,
                      color: "var(--ink-muted)",
                    }}
                  >
                    {b.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
