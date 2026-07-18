"use client";

import type { CSSProperties, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "var(--cream)",
        padding: "56px 0 40px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 40,
          }}
          className="footer-top"
        >
          {/* Logo + tagline */}
          <div style={{ maxWidth: 300 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <Image
                src="/teak-logo-white.svg"
                alt="Teak Software Studio"
                width={38}
                height={38}
                style={{ height: 34, width: "auto" }}
              />
              <Image
                src="/teak-wordmark-white.svg"
                alt=""
                width={320}
                height={26}
                style={{ height: 23, width: "auto" }}
              />
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                lineHeight: 1.7,
                opacity: 0.45,
                color: "var(--cream)",
              }}
            >
              SaaS, web, mobile, and AI products for businesses across North America and Europe.
            </p>
          </div>

          {/* Links */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 140px)",
              gap: "0 40px",
            }}
            className="footer-links"
          >
            {[
              {
                heading: "Studio",
                links: [
                  { label: "Our Work", href: "/#work" },
                  { label: "Services", href: "/#services" },
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/#contact" },
                ],
              },
              {
                heading: "Services",
                links: [
                  { label: "Web Applications", href: "/services/web-applications" },
                  { label: "Mobile Apps", href: "/services/mobile-apps" },
                  { label: "AI Systems", href: "/services/ai-systems" },
                ],
              },
              {
                heading: "Contact",
                links: [
                  { label: "hello@teaksoftware.studio", href: "mailto:hello@teaksoftware.studio" },
                  { label: "5900 Balcones Drive Ste 100", href: null },
                  { label: "Austin, TX 78731, USA", href: null },
                ],
              },
            ].map((col) => (
              <div key={col.heading}>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#C4A882",
                    marginBottom: 16,
                  }}
                >
                  {col.heading}
                </div>
                {col.links.map((link) => {
                  const linkStyle: CSSProperties = {
                    display: "block",
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    fontWeight: 300,
                    color: "var(--cream)",
                    textDecoration: "none",
                    opacity: 0.5,
                    marginBottom: 10,
                    transition: "opacity 0.2s",
                  };

                  if (!link.href) {
                    return (
                      <span key={link.label} style={linkStyle}>
                        {link.label}
                      </span>
                    );
                  }

                  const hoverHandlers = {
                    onMouseEnter: (e: MouseEvent<HTMLElement>) => {
                      e.currentTarget.style.opacity = "1";
                    },
                    onMouseLeave: (e: MouseEvent<HTMLElement>) => {
                      e.currentTarget.style.opacity = "0.5";
                    },
                  };

                  return link.href.startsWith("/") ? (
                    <Link
                      key={link.label}
                      href={link.href}
                      style={linkStyle}
                      {...hoverHandlers}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      style={linkStyle}
                      {...hoverHandlers}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(250,248,245,0.1)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              opacity: 0.35,
              color: "var(--cream)",
            }}
          >
            © {year} Teak Software Studio. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              opacity: 0.25,
              color: "var(--cream)",
              fontStyle: "italic",
            }}
          >
            Built with intention.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-links { grid-template-columns: 1fr 1fr !important; gap: 32px 24px !important; }
        }
        @media (max-width: 480px) {
          .footer-top { flex-direction: column !important; }
          .footer-links { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
