"use client";

import Image from "next/image";

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
            <Image
              src="/teak-logo-white.svg"
              alt="Teak Software Studio"
              width={130}
              height={34}
              style={{ height: 30, width: "auto", marginBottom: 16 }}
            />
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                lineHeight: 1.7,
                opacity: 0.45,
                color: "var(--cream)",
              }}
            >
              SaaS, web, and mobile products for founders and teams across the US and Europe.
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
                  { label: "SaaS Products", href: "/#services" },
                  { label: "Web Apps", href: "/#services" },
                  { label: "Mobile Apps", href: "/#services" },
                  { label: "Design Systems", href: "/#services" },
                ],
              },
              {
                heading: "Contact",
                links: [
                  { label: "hello@teaksoftware.studio", href: "mailto:hello@teaksoftware.studio" },
                  { label: "Start a Project", href: "/#contact" },
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
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      display: "block",
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      fontWeight: 300,
                      color: "var(--cream)",
                      textDecoration: "none",
                      opacity: 0.5,
                      marginBottom: 10,
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.opacity = "1")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.opacity = "0.5")
                    }
                  >
                    {link.label}
                  </a>
                ))}
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