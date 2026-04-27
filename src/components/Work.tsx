"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition =
              "opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

export default function Work() {
  const headRef = useReveal(0);

  return (
    <section
      id="work"
      style={{
        background: "var(--cream)",
        padding: "120px 0",
        borderTop: "1px solid rgba(17,17,17,0.08)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div
          ref={headRef}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 72,
            flexWrap: "wrap",
            gap: 32,
          }}
        >
          <div>
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
                Our Products
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              Products we&apos;ve
              <br />
              <span style={{ fontStyle: "italic" }}>shipped.</span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              lineHeight: 1.7,
              opacity: 0.55,
              maxWidth: 340,
            }}
          >
            We don&apos;t just build for clients — we build our own products too.
            Here&apos;s what we&apos;ve shipped.
          </p>
        </div>

        {/* SaveFirst — Featured card */}
        <SaveFirstCard />

        {/* Coming soon row */}
        <ComingSoonRow />
      </div>
    </section>
  );
}

function SaveFirstCard() {
  const ref = useReveal(0);

  return (
    <div
      ref={ref}
      style={{
        background: "var(--white)",
        border: "1px solid rgba(17,17,17,0.08)",
        marginBottom: 24,
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: 480,
      }}
      className="savefirst-card"
    >
      {/* Left — screenshots */}
      <div
        style={{
          background: "linear-gradient(135deg, #EEF7FF 0%, #D9EDF7 100%)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          padding: "48px 40px 0",
          gap: 20,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            height: 300,
            background: "radial-gradient(circle, rgba(19,146,236,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* Phone 1 — home */}
        <div
          style={{
            transform: "translateY(0) rotate(-3deg)",
            zIndex: 1,
            flexShrink: 0,
            filter: "drop-shadow(0 24px 40px rgba(19,146,236,0.18)) drop-shadow(0 6px 12px rgba(0,0,0,0.1))",
          }}
        >
          <PhoneShell>
            <Image
              src="/savefirst-home.png"
              alt="SaveFirst home screen"
              width={320}
              height={693}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            />
          </PhoneShell>
        </div>
        {/* Phone 2 — transaction */}
        <div
          style={{
            transform: "translateY(-20px) rotate(2.5deg)",
            zIndex: 2,
            flexShrink: 0,
            filter: "drop-shadow(0 28px 48px rgba(19,146,236,0.22)) drop-shadow(0 8px 16px rgba(0,0,0,0.12))",
          }}
        >
          <PhoneShell>
            <Image
              src="/savefirst-transaction.png"
              alt="SaveFirst add transaction screen"
              width={320}
              height={693}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            />
          </PhoneShell>
        </div>
      </div>

      {/* Right — content */}
      <div
        style={{
          padding: "52px 48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Category pill */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#1392EC",
              background: "#EEF7FF",
              padding: "5px 12px",
            }}
          >
            iOS App · FinTech
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--teak)",
              background: "var(--teak-pale)",
              padding: "5px 12px",
            }}
          >
            AI-Powered
          </span>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(32px, 3.5vw, 48px)",
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          SaveFirst
        </h3>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 15,
            lineHeight: 1.8,
            opacity: 0.62,
            marginBottom: 32,
            maxWidth: 400,
          }}
        >
          A personal finance tracker for iOS that automatically categorises every
          transaction — expenses, income, and investments. Integrated with AI to surface
          spending insights, heads-up alerts, and visualise trends before you even
          think to look.
        </p>

        {/* Feature chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
          {[
            "Expense Tracking",
            "Income & Investments",
            "AI Insights",
            "Spend Trends",
            "Heads-Up Alerts",
            "React Native",
          ].map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.03em",
                padding: "6px 14px",
                border: "1px solid rgba(17,17,17,0.13)",
                color: "var(--ink)",
                opacity: 0.7,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <a
            href="https://savefirst.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "var(--cream)",
              background: "#1392EC",
              padding: "13px 28px",
              textDecoration: "none",
              display: "inline-block",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#0F75CC")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#1392EC")
            }
          >
            View App
          </a>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              opacity: 0.4,
              fontStyle: "italic",
            }}
          >
            Available on the App Store
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .savefirst-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 180,
        height: 388,
        borderRadius: 32,
        border: "6px solid #1a1a1a",
        background: "#000",
        overflow: "hidden",
        position: "relative",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
      }}
    >
      {/* Dynamic island notch */}
      <div
        style={{
          position: "absolute",
          top: 8,
          left: "50%",
          transform: "translateX(-50%)",
          width: 64,
          height: 18,
          background: "#000",
          borderRadius: 10,
          zIndex: 10,
        }}
      />
      {children}
    </div>
  );
}

function ComingSoonRow() {
  const ref = useReveal(100);

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 24,
      }}
      className="coming-grid"
    >
      {["SaaS Platform", "Web App", "Mobile App"].map((label, i) => (
        <div
          key={i}
          style={{
            border: "1px dashed rgba(17,17,17,0.15)",
            padding: "48px 32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              border: "1px solid rgba(17,17,17,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 4,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              opacity: 0.3,
            }}
          >
            {label}
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              opacity: 0.25,
              fontStyle: "italic",
            }}
          >
            Coming soon
          </span>
        </div>
      ))}
      <style>{`
        @media (max-width: 768px) {
          .coming-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}