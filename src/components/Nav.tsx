"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s ease, border-color 0.3s ease",
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(10,10,10,0.08)" : "1px solid transparent",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: 88,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <Image
            src="/teak-logo-primary.svg"
            alt="Teak Software Studio"
            width={140}
            height={36}
            priority
            style={{ height: 38, width: "auto" }}
          />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              whiteSpace: "nowrap",
            }}
            className="brand-name"
          >
            Teak Software Studio
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 36 }} className="nav-links">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 0.55, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: "easeOut" }}
              whileHover={{ opacity: 1 }}
              style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 400, color: "#0a0a0a", textDecoration: "none" }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
            whileHover={{ opacity: 0.75 }}
            style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "#ffffff", background: "#0a0a0a", padding: "10px 22px", textDecoration: "none" }}
          >
            Hire Us
          </motion.a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 4 }}
          className="burger-btn"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: "block", width: 22, height: 1.5, background: "#0a0a0a", transition: "transform 0.2s, opacity 0.2s", transformOrigin: "center",
              transform: menuOpen && i === 0 ? "rotate(45deg) translate(4px, 4px)" : menuOpen && i === 2 ? "rotate(-45deg) translate(4px, -4px)" : "none",
              opacity: menuOpen && i === 1 ? 0 : 1 }} />
          ))}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ background: "#ffffff", borderTop: "1px solid rgba(10,10,10,0.08)", overflow: "hidden" }}
          >
            <div style={{ padding: "24px 32px 32px" }}>
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                  style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 20, fontWeight: 400, color: "#0a0a0a", textDecoration: "none", padding: "12px 0", borderBottom: "1px solid rgba(10,10,10,0.08)" }}>
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)}
                style={{ display: "inline-block", marginTop: 24, fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "#ffffff", background: "#0a0a0a", padding: "12px 24px", textDecoration: "none" }}>
                Hire Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .burger-btn { display: flex !important; }
        }
        @media (max-width: 480px) {
          .brand-name { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
}
