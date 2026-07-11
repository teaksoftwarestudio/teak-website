"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const navCols = [
  {
    heading: "Studio",
    links: [
      { label: "Our Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "SaaS Products", href: "#services" },
      { label: "Web Apps", href: "#services" },
      { label: "Mobile Apps", href: "#services" },
      { label: "Design Systems", href: "#services" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "hello@teaksoftware.studio", href: "mailto:hello@teaksoftware.studio" },
      { label: "Start a Project", href: "#contact" },
    ],
  },
];

const socials = [
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M1 1l5 6-5 6h1.5l4.2-4.8L10.5 13H13L7.8 6.8 12.5 1H11l-3.8 4.4L3.5 1H1z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="1" y="1" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M4 6v4M4 4.5v.01M7 10V7.5C7 6.7 7.7 6 8.5 6s1.5.7 1.5 1.5V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 1a6 6 0 00-1.9 11.7c.3.05.4-.13.4-.3v-1.1C3.7 11.6 3.3 10 3.3 10c-.3-.7-.7-.9-.7-.9-.6-.4 0-.4 0-.4.6.04 1 .64 1 .64.57 1 1.5.7 1.9.54.05-.42.22-.7.4-.86-1.4-.16-2.88-.7-2.88-3.12 0-.68.24-1.25.64-1.68-.07-.16-.28-.8.06-1.65 0 0 .53-.17 1.7.64A5.93 5.93 0 017 3.8c.52 0 1.06.07 1.56.21 1.18-.8 1.7-.64 1.7-.64.34.86.13 1.5.06 1.65.4.43.64 1 .64 1.68 0 2.42-1.47 2.96-2.88 3.12.23.2.43.58.43 1.17v1.73c0 .17.1.36.4.3A6 6 0 007 1z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0a0a0a", color: "#ffffff" }}>
      {/* Top CTA band */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "64px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 32 }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#ffffff" }}>
            Ready to build
            <br />
            <em style={{ fontStyle: "italic", opacity: 0.45 }}>something great?</em>
          </h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <motion.a
              href="#contact"
              whileHover={{ opacity: 0.8 }}
              style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#0a0a0a", background: "#ffffff", padding: "14px 32px", textDecoration: "none" }}
            >
              Start a Project
            </motion.a>
            <motion.a
              href="mailto:hello@teaksoftware.studio"
              whileHover={{ borderColor: "rgba(255,255,255,0.5)" }}
              style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.18)", padding: "14px 32px", textDecoration: "none", transition: "border-color 0.2s" }}
            >
              Say Hello
            </motion.a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px 40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 64, flexWrap: "wrap", gap: 48 }} className="footer-top">
          {/* Brand */}
          <div style={{ maxWidth: 260 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Image src="/teak-logo-white.svg" alt="Teak Software" width={24} height={24} style={{ height: 24, width: "auto" }} />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "#ffffff", letterSpacing: "-0.01em" }}>Teak Software</span>
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.75, opacity: 0.32, color: "#ffffff", marginBottom: 24 }}>
              A boutique product engineering studio building SaaS, web, and mobile products for founders and teams worldwide.
            </p>
            {/* Socials */}
            <div style={{ display: "flex", gap: 8 }}>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ opacity: 1 }}
                  aria-label={s.label}
                  style={{ width: 32, height: 32, border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "border-color 0.2s" }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 140px)", gap: "0 40px" }} className="footer-links">
            {navCols.map((col) => (
              <div key={col.heading}>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 18 }}>
                  {col.heading}
                </div>
                {col.links.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{ opacity: 0.9 }}
                    style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 300, color: "#ffffff", textDecoration: "none", opacity: 0.38, marginBottom: 11, transition: "opacity 0.2s" }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, opacity: 0.22, color: "#ffffff" }}>
            © {year} Teak Software Studio. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <motion.a key={l} href="#" whileHover={{ opacity: 0.7 }} style={{ fontFamily: "var(--font-sans)", fontSize: 12, opacity: 0.2, color: "#ffffff", textDecoration: "none" }}>
                {l}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .footer-links { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
        @media (max-width: 480px) { .footer-top { flex-direction: column; } .footer-links { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
