"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

type Product = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  cta: { label: string; href: string } | null;
  sub: string;
  status: "live" | "dev";
  hasPhones: boolean;
  accent: string;
  dark: boolean;
};

const products: Product[] = [
  {
    id: "savefirst",
    index: "01",
    eyebrow: "iOS App · FinTech · AI-Powered",
    title: "SaveFirst",
    description:
      "A personal finance tracker for iOS that automatically categorises every transaction — expenses, income, and investments — with AI-powered spending insights and heads-up alerts.",
    tags: ["Expense Tracking", "Income & Investments", "AI Insights", "React Native"],
    cta: { label: "View App", href: "https://savefirst.app" },
    sub: "Live on the App Store",
    status: "live",
    hasPhones: true,
    accent: "#1392EC",
    dark: false,
  },
  {
    id: "saas",
    index: "02",
    eyebrow: "SaaS Platform · In Development",
    title: "Untitled SaaS",
    description:
      "A B2B SaaS platform in development. Multi-tenant architecture, subscription billing, and a real-time analytics dashboard built on Next.js.",
    tags: ["Multi-tenant", "Stripe Billing", "Next.js", "Real-time"],
    cta: null,
    sub: "Launching 2026",
    status: "dev",
    hasPhones: false,
    accent: "var(--teak)",
    dark: true,
  },
  {
    id: "mobileapp",
    index: "03",
    eyebrow: "Mobile App · In Development",
    title: "Untitled Mobile",
    description:
      "A consumer mobile app targeting the US market. React Native, offline-first architecture, push notifications, and a design system built from scratch.",
    tags: ["React Native", "Offline-first", "iOS & Android", "Design System"],
    cta: null,
    sub: "Launching 2026",
    status: "dev",
    hasPhones: false,
    accent: "var(--teak)",
    dark: false,
  },
];

// Each slide gets this much vertical scroll travel (px)
const SLIDE_SCROLL_PX = 620;

export default function Work() {
  const reduce = useReducedMotion();

  if (reduce) return <WorkStacked />;
  return <WorkCarousel />;
}

/* ─────────────────────────────────────────────────────────────
   Carousel — sticky horizontal scroll
   ───────────────────────────────────────────────────────────── */
function WorkCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const totalScrollPx = SLIDE_SCROLL_PX * (products.length - 1);

  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start start", "end end"],
  });

  const xVw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(products.length - 1) * 100]
  );
  const x = useTransform(xVw, (v) => `${v}vw`);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.min(
        products.length - 1,
        Math.floor(v * products.length + 0.15)
      );
      setActive(Math.max(0, idx));
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* ─── Sticky carousel (header pinned inside) ─── */}
      <div
        id="work"
        ref={carouselRef}
        style={{
          position: "relative",
          height: `calc(100vh + ${totalScrollPx}px)`,
          background: "var(--white)",
          borderTop: "1px solid var(--ink-hairline)",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Pinned header */}
          <div style={{ position: "absolute", top: "clamp(48px, 8vh, 96px)", left: 0, right: 0, zIndex: 10 }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(32px, 4.2vw, 54px)",
                  fontWeight: 400,
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                  marginBottom: 12,
                }}
              >
                Our Products
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(18px, 1.8vw, 22px)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  color: "var(--ink-muted)",
                }}
              >
                Products we&apos;ve{" "}
                <span style={{ fontStyle: "italic", color: "var(--teak)" }}>shipped.</span>
              </p>
            </div>
          </div>

          {/* Slide counter */}
          <div
            style={{
              position: "absolute",
              bottom: 36,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 0.45, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                }}
              >
                {String(active + 1).padStart(2, "0")} — {String(products.length).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Scroll hint */}
          <AnimatePresence>
            {active === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "absolute",
                  bottom: 36,
                  right: 48,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  zIndex: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    opacity: 0.32,
                    letterSpacing: "0.08em",
                  }}
                >
                  Scroll to explore
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7h10M8 3l4 4-4 4"
                      stroke="var(--teak)"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Horizontal track */}
          <motion.div
            style={{
              display: "flex",
              x,
              width: `${products.length * 100}vw`,
              willChange: "transform",
            }}
          >
            {products.map((product, i) => (
              <div
                key={product.id}
                style={{
                  width: "100vw",
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "clamp(150px, 22vh, 220px) 48px 40px",
                  flexShrink: 0,
                }}
              >
                <ProductCard product={product} isActive={active === i} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   The card
   ───────────────────────────────────────────────────────────── */
function ProductCard({ product, isActive }: { product: Product; isActive: boolean }) {
  const bg = product.dark ? "#141210" : "var(--white)";
  const fg = product.dark ? "#F5F1EA" : "var(--ink)";
  const panelBg = product.dark
    ? "linear-gradient(160deg, #1C1916 0%, #100E0C 100%)"
    : product.hasPhones
      ? "radial-gradient(120% 120% at 30% 0%, #F4FAFF 0%, #E4F1FB 45%, #D2E7F5 100%)"
      : "linear-gradient(160deg, var(--cream) 0%, var(--cream-deep) 100%)";
  const subtleBorder = product.dark ? "rgba(255,255,255,0.07)" : "var(--ink-hairline)";
  const tagBorder = product.dark ? "rgba(255,255,255,0.14)" : "var(--ink-subtle)";
  const mutedFg = product.dark ? "rgba(245,241,234,0.5)" : "var(--ink-muted)";

  return (
    <motion.div
      animate={{ scale: isActive ? 1 : 0.93, opacity: isActive ? 1 : 0.4 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{
        width: "100%",
        maxWidth: 1100,
        height: "min(560px, 100%)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: bg,
        borderRadius: 18,
        overflow: "hidden",
        border: `1px solid ${subtleBorder}`,
        boxShadow: isActive
          ? "0 50px 120px -40px rgba(21,19,17,0.28), 0 12px 32px -18px rgba(21,19,17,0.12)"
          : "none",
        transition: "box-shadow 0.5s ease",
      }}
      className="product-card-grid"
    >
      {/* Left — visual */}
      <div
        style={{
          background: panelBg,
          display: "flex",
          alignItems: product.hasPhones ? "flex-end" : "center",
          justifyContent: "center",
          padding: product.hasPhones ? "52px 40px 0" : "40px",
          overflow: "hidden",
          position: "relative",
          borderRight: `1px solid ${subtleBorder}`,
        }}
      >
        {/* Grid texture */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(${
              product.dark ? "rgba(255,255,255,0.04)" : "rgba(21,19,17,0.045)"
            } 1px, transparent 1px), linear-gradient(90deg, ${
              product.dark ? "rgba(255,255,255,0.04)" : "rgba(21,19,17,0.045)"
            } 1px, transparent 1px)`,
            backgroundSize: "38px 38px",
            maskImage: "radial-gradient(circle at 50% 45%, #000 25%, transparent 72%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 45%, #000 25%, transparent 72%)",
          }}
        />

        {product.hasPhones ? (
          <>
            {/* Ambient glow */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: "28%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: 340,
                height: 340,
                background: "radial-gradient(circle, rgba(19,146,236,0.18) 0%, transparent 70%)",
              }}
            />
            {/* Floating insight chip */}
            <motion.div
              animate={{ y: isActive ? [0, -8, 0] : 0 }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: 40,
                right: 34,
                zIndex: 3,
                background: "rgba(255,255,255,0.82)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.9)",
                borderRadius: 14,
                padding: "11px 15px",
                boxShadow: "0 16px 40px -18px rgba(19,146,236,0.45)",
                display: "flex",
                alignItems: "center",
                gap: 11,
              }}
            >
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  background: "#1392EC",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M4 15l5-5 4 4 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 9, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1392EC" }}>
                  This month
                </div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 16, fontWeight: 500, color: "#0F4C81", lineHeight: 1.1 }}>
                  &minus;18% spend
                </div>
              </div>
            </motion.div>

            <div style={{ display: "flex", gap: 16, alignItems: "flex-end", position: "relative", zIndex: 2 }}>
              <motion.div
                animate={{ y: isActive ? 0 : 16 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                style={{ transform: "rotate(-3.5deg)", filter: "drop-shadow(0 24px 48px rgba(19,146,236,0.2)) drop-shadow(0 6px 12px rgba(0,0,0,0.1))" }}
              >
                <PhoneShell>
                  <Image src="/savefirst-home.png" alt="SaveFirst home" width={320} height={693}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </PhoneShell>
              </motion.div>
              <motion.div
                animate={{ y: isActive ? -24 : -8 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                style={{ transform: "rotate(2.5deg)", filter: "drop-shadow(0 28px 56px rgba(19,146,236,0.22)) drop-shadow(0 8px 16px rgba(0,0,0,0.1))" }}
              >
                <PhoneShell>
                  <Image src="/savefirst-transaction.png" alt="SaveFirst transaction" width={320} height={693}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </PhoneShell>
              </motion.div>
            </div>
          </>
        ) : (
          <DevArt dark={product.dark} isActive={isActive} fg={fg} />
        )}
      </div>

      {/* Right — content */}
      <div style={{ padding: "clamp(40px, 5vw, 56px) clamp(32px, 4vw, 52px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {/* Index + status row */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 26 }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, color: fg, opacity: 0.22, letterSpacing: "0.08em" }}>
            {product.index}
          </span>
          <div style={{ height: 1, flex: 1, background: fg, opacity: 0.1 }} />
          <StatusPill status={product.status} dark={product.dark} />
        </div>

        <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: fg, opacity: 0.4, marginBottom: 14 }}>
          {product.eyebrow}
        </div>

        <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 3.2vw, 44px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", color: fg, marginBottom: 16 }}>
          {product.title}
        </h3>

        <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.85, color: mutedFg, marginBottom: 28, maxWidth: 400 }}>
          {product.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 34 }}>
          {product.tags.map((tag) => (
            <span key={tag} style={{
              fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.03em",
              padding: "6px 14px", borderRadius: 999, border: `1px solid ${tagBorder}`, color: fg, opacity: 0.62,
            }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
          {product.cta ? (
            <motion.a
              href={product.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              style={{
                fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em",
                textTransform: "uppercase", color: "#fff", background: "#1392EC",
                padding: "13px 26px", textDecoration: "none", borderRadius: 6,
                display: "inline-flex", alignItems: "center", gap: 9,
                boxShadow: "0 14px 30px -14px rgba(19,146,236,0.6)",
              }}
            >
              {product.cta.label}
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          ) : (
            <span style={{
              fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em",
              textTransform: "uppercase", color: fg, opacity: 0.3,
              padding: "13px 24px", borderRadius: 6, border: `1px dashed ${tagBorder}`,
            }}>
              Not yet public
            </span>
          )}
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: fg, opacity: 0.32, fontStyle: "italic" }}>
            {product.sub}
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .product-card-grid { grid-template-columns: 1fr !important; height: auto !important; min-height: 72vh; }
        }
      `}</style>
    </motion.div>
  );
}

function StatusPill({ status, dark }: { status: "live" | "dev"; dark: boolean }) {
  const live = status === "live";
  const color = live ? "#1E9E5A" : "var(--teak)";
  const dot = live ? "#22B463" : "var(--teak-light)";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontFamily: "var(--font-sans)",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: dark && !live ? "var(--teak-light)" : color,
      }}
    >
      <motion.span
        animate={live ? { scale: [1, 1.35, 1], opacity: [1, 0.6, 1] } : {}}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: 7, height: 7, borderRadius: 999, background: dot }}
      />
      {live ? "Live" : "In Development"}
    </span>
  );
}

/* Abstract animated art for in-dev products */
function DevArt({ dark, isActive, fg }: { dark: boolean; isActive: boolean; fg: string }) {
  const bars = [0.5, 0.85, 0.35, 0.68, 0.5];
  return (
    <motion.div
      animate={{ opacity: isActive ? 1 : 0.4, y: isActive ? 0 : 12 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28, position: "relative", zIndex: 2 }}
    >
      {/* Mini dashboard mock */}
      <div
        style={{
          width: 260,
          padding: 22,
          borderRadius: 14,
          background: dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.7)",
          border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(21,19,17,0.06)"}`,
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          boxShadow: dark ? "none" : "0 24px 50px -30px rgba(21,19,17,0.3)",
        }}
      >
        <div style={{ display: "flex", gap: 6, marginBottom: 18 }}>
          {["var(--teak-light)", "var(--teak)", "var(--teak-pale)"].map((c, i) => (
            <span key={i} style={{ width: 8, height: 8, borderRadius: 999, background: c, opacity: 0.7 }} />
          ))}
        </div>
        {/* Bars */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 80 }}>
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isActive ? h : 0 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                flex: 1,
                height: "100%",
                transformOrigin: "bottom",
                borderRadius: 4,
                background:
                  i === 1
                    ? "linear-gradient(180deg, var(--teak-light), var(--teak))"
                    : dark
                      ? "rgba(255,255,255,0.14)"
                      : "rgba(21,19,17,0.1)",
              }}
            />
          ))}
        </div>
        <div style={{ marginTop: 16, height: 1, background: dark ? "rgba(255,255,255,0.08)" : "rgba(21,19,17,0.07)" }} />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14 }}>
          {[44, 30].map((w, i) => (
            <div key={i} style={{ width: w, height: 6, borderRadius: 3, background: dark ? "rgba(255,255,255,0.1)" : "rgba(21,19,17,0.08)" }} />
          ))}
        </div>
      </div>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: fg, opacity: 0.28 }}>
        Preview coming soon
      </span>
    </motion.div>
  );
}

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      width: 158, height: 342, borderRadius: 28,
      border: "5px solid #1a1a1a", background: "#000",
      overflow: "hidden", position: "relative",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
    }}>
      <div style={{
        position: "absolute", top: 6, left: "50%", transform: "translateX(-50%)",
        width: 50, height: 14, background: "#000", borderRadius: 7, zIndex: 10,
      }} />
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Reduced-motion fallback — simple stacked cards
   ───────────────────────────────────────────────────────────── */
function WorkStacked() {
  return (
    <section
      id="work"
      style={{
        background: "var(--white)",
        borderTop: "1px solid var(--ink-hairline)",
        padding: "104px 32px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px, 5vw, 66px)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: 18 }}>
          Our Products
        </h2>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(19px, 2vw, 24px)", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.01em", color: "var(--ink-muted)", marginBottom: 56 }}>
          Products we&apos;ve <span style={{ fontStyle: "italic", color: "var(--teak)" }}>shipped.</span>
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} isActive />
          ))}
        </div>
      </div>
    </section>
  );
}
