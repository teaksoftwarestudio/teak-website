"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const products = [
  {
    id: "savefirst",
    index: "01",
    eyebrow: "iOS App · FinTech · AI-Powered",
    title: "SaveFirst",
    description:
      "A personal finance tracker for iOS that automatically categorises every transaction — expenses, income, and investments — with AI-powered spending insights and heads-up alerts.",
    tags: ["Expense Tracking", "Income & Investments", "AI Insights", "React Native"],
    cta: { label: "View App →", href: "https://savefirst.app" },
    sub: "Live on the App Store",
    hasPhones: true,
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
    sub: "Launching 2025",
    hasPhones: false,
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
    sub: "Launching 2025",
    hasPhones: false,
    dark: false,
  },
];

// Each slide gets this much vertical scroll travel (px)
const SLIDE_SCROLL_PX = 600;

export default function Work() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const totalScrollPx = SLIDE_SCROLL_PX * (products.length - 1);

  // Scroll is measured against the carousel container only
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    // start measuring when top of carousel hits top of viewport,
    // stop when bottom of carousel hits bottom of viewport
    offset: ["start start", "end end"],
  });

  // Each slide = 1/(n-1) of the scroll range → translate -100vw per slide
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
      {/* ─── Section header — fully OUTSIDE the sticky scroll zone ─── */}
      <div
        id="work"
        style={{
          background: "#ffffff",
          borderTop: "1px solid rgba(10,10,10,0.1)",
          padding: "120px 32px 64px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 28, height: 1, background: "#0a0a0a", opacity: 0.3 }} />
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0a0a0a", opacity: 0.4 }}>
                  Our Products
                </span>
              </div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#0a0a0a" }}>
                Products we&apos;ve
                <br />
                <em style={{ fontStyle: "italic" }}>shipped.</em>
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 16 }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.7, opacity: 0.45, maxWidth: 280, textAlign: "right" }}>
                We don&apos;t just build for clients — we ship our own products to market.
              </p>
              {/* Dots */}
              <div style={{ display: "flex", gap: 6 }}>
                {products.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ width: active === i ? 24 : 6, opacity: active === i ? 1 : 0.2 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    style={{ height: 4, background: "#0a0a0a", borderRadius: 2 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Sticky carousel ─── */}
      {/* Height = 100vh (the sticky viewport) + scroll travel for (n-1) slides */}
      <div
        ref={carouselRef}
        style={{
          position: "relative",
          height: `calc(100vh + ${totalScrollPx}px)`,
          background: "#ffffff",
        }}
      >
        {/* Sticky viewport — exactly 100vh, vertically centred content */}
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
                animate={{ opacity: 0.3, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#0a0a0a" }}
              >
                {String(active + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* "Scroll to explore" hint */}
          <AnimatePresence>
            {active === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{ position: "absolute", bottom: 36, right: 48, display: "flex", alignItems: "center", gap: 8, zIndex: 10 }}
              >
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, opacity: 0.28, letterSpacing: "0.08em" }}>
                  Scroll to explore
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.28" />
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
              <ProductCard key={product.id} product={product} index={i} active={active} />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

function ProductCard({
  product,
  index,
  active,
}: {
  product: typeof products[0];
  index: number;
  active: number;
}) {
  const isActive = active === index;
  const bg = product.dark ? "#0a0a0a" : "#f7f7f7";
  const fg = product.dark ? "#ffffff" : "#0a0a0a";
  const panelBg = product.dark ? "#141414" : "#e9e9e9";
  const subtleBorder = product.dark ? "rgba(255,255,255,0.07)" : "rgba(10,10,10,0.07)";
  const tagBorder = product.dark ? "rgba(255,255,255,0.12)" : "rgba(10,10,10,0.1)";

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 48px",
        flexShrink: 0,
        background: "#ffffff",
      }}
    >
      <motion.div
        animate={{
          scale: isActive ? 1 : 0.93,
          opacity: isActive ? 1 : 0.45,
        }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "100%",
          maxWidth: 1100,
          height: "min(600px, 80vh)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          background: bg,
          overflow: "hidden",
          boxShadow: isActive
            ? "0 40px 100px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.06)"
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
            alignItems: "flex-end",
            justifyContent: "center",
            padding: "52px 40px 0",
            overflow: "hidden",
            position: "relative",
            borderRight: `1px solid ${subtleBorder}`,
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background: product.dark
                ? "radial-gradient(ellipse at 50% 70%, rgba(255,255,255,0.03) 0%, transparent 65%)"
                : "radial-gradient(ellipse at 50% 70%, rgba(0,0,0,0.025) 0%, transparent 65%)",
            }}
          />

          {product.hasPhones ? (
            <motion.div
              animate={{ y: isActive ? 0 : 16 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "flex", gap: 16, alignItems: "flex-end", position: "relative" }}
            >
              <div style={{ transform: "rotate(-3.5deg)", filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.2)) drop-shadow(0 6px 12px rgba(0,0,0,0.1))" }}>
                <PhoneShell>
                  <Image src="/savefirst-home.png" alt="SaveFirst home" width={320} height={693}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </PhoneShell>
              </div>
              <div style={{ transform: "rotate(2.5deg) translateY(-24px)", filter: "drop-shadow(0 28px 56px rgba(0,0,0,0.22)) drop-shadow(0 8px 16px rgba(0,0,0,0.1))" }}>
                <PhoneShell>
                  <Image src="/savefirst-transaction.png" alt="SaveFirst transaction" width={320} height={693}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </PhoneShell>
              </div>
            </motion.div>
          ) : (
            <motion.div
              animate={{ opacity: isActive ? 1 : 0.4, y: isActive ? 0 : 12 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, paddingBottom: 60 }}
            >
              {/* Abstract placeholder art */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, opacity: 0.15 }}>
                {[56, 80, 40, 68].map((h, j) => (
                  <div key={j} style={{
                    width: 88, height: h,
                    border: `1px solid ${fg}`,
                    background: j === 1 ? fg : "transparent",
                  }} />
                ))}
              </div>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: fg, opacity: 0.25 }}>
                In Development
              </span>
            </motion.div>
          )}
        </div>

        {/* Right — content */}
        <div style={{ padding: "52px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, color: fg, opacity: 0.18, letterSpacing: "0.08em", flexShrink: 0 }}>
              {product.index}
            </span>
            <div style={{ height: 1, flex: 1, background: fg, opacity: 0.08 }} />
          </div>

          <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: fg, opacity: 0.35, marginBottom: 14 }}>
            {product.eyebrow}
          </div>

          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 3.2vw, 44px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", color: fg, marginBottom: 16 }}>
            {product.title}
          </h3>

          <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.85, color: fg, opacity: 0.5, marginBottom: 26, maxWidth: 380 }}>
            {product.description}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 32 }}>
            {product.tags.map((tag) => (
              <span key={tag} style={{
                fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.03em",
                padding: "5px 13px", border: `1px solid ${tagBorder}`, color: fg, opacity: 0.55,
              }}>
                {tag}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {product.cta ? (
              <motion.a
                href={product.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ opacity: 0.75 }}
                style={{
                  fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: product.dark ? "#0a0a0a" : "#ffffff",
                  background: product.dark ? "#ffffff" : "#0a0a0a",
                  padding: "12px 26px", textDecoration: "none",
                }}
              >
                {product.cta.label}
              </motion.a>
            ) : (
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: fg, opacity: 0.18, padding: "12px 0" }}>
                Not yet public
              </span>
            )}
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: fg, opacity: 0.28, fontStyle: "italic" }}>
              {product.sub}
            </span>
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .product-card-grid { grid-template-columns: 1fr !important; height: auto !important; min-height: 70vh; }
        }
      `}</style>
    </div>
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
