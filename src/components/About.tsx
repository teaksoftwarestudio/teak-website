"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "50+", label: "Products Shipped" },
  { value: "8yr", label: "In Business" },
  { value: "US/EU", label: "Client Reach" },
  { value: "100%", label: "Remote-Native" },
];

const team = [
  {
    name: "Founder Name",
    role: "Co-Founder & CEO",
    bio: "Leads product strategy and client relationships. Previously built and scaled SaaS products across fintech and healthtech.",
    initials: "FN",
  },
  {
    name: "Founder Name",
    role: "Co-Founder & CTO",
    bio: "Architects the systems that power our products. A decade of shipping full-stack applications at scale.",
    initials: "FN",
  },
  {
    name: "Founder Name",
    role: "Co-Founder & Design Lead",
    bio: "Crafts the interfaces clients fall in love with. Obsessed with the intersection of usability and visual polish.",
    initials: "FN",
  },
];

const values = [
  { title: "Craft over speed", body: "We don't cut corners. Every interaction, every endpoint, every pixel is considered." },
  { title: "Partnership, not order-taking", body: "We push back when something won't work and bring ideas to the table. Your success is our portfolio." },
  { title: "Transparency by default", body: "Weekly updates, honest timelines, no black boxes. You always know where things stand." },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section ref={sectionRef} id="about" style={{ background: "#0a0a0a", color: "#ffffff", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Parallax grid */}
      <motion.div aria-hidden style={{ position: "absolute", inset: "-8%", backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)", backgroundSize: "64px 64px", y: bgY, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", position: "relative" }}>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderBottom: "1px solid rgba(255,255,255,0.08)", marginBottom: 100, paddingBottom: 64 }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none", paddingLeft: i > 0 ? 40 : 0 }}
            >
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px, 4vw, 54px)", fontWeight: 400, color: "#ffffff", lineHeight: 1, marginBottom: 8, letterSpacing: "-0.02em" }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: "0.04em", opacity: 0.32, color: "#ffffff" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Two-col: story + values */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start", marginBottom: 100 }} className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
              <div style={{ width: 28, height: 1, background: "rgba(255,255,255,0.25)" }} />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>About Us</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 3.8vw, 50px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#ffffff", marginBottom: 28 }}>
              A small studio with
              <br />
              <em style={{ fontStyle: "italic", opacity: 0.45 }}>big ambitions.</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.85, opacity: 0.48, color: "#ffffff", marginBottom: 18 }}>
              Teak is a boutique product engineering studio. We work closely with founders, product managers, and engineering leads to turn ideas into production-ready software.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.85, opacity: 0.48, color: "#ffffff", marginBottom: 36 }}>
              We build our own products and take them to market — and we&apos;re open to hiring out our team for web development, mobile apps, and SaaS builds. Senior-heavy, remote-native, US &amp; EU time zones.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ opacity: 0.8 }}
              style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#0a0a0a", background: "#ffffff", padding: "14px 30px", textDecoration: "none", display: "inline-block" }}
            >
              Work With Us
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          >
            <div style={{ marginBottom: 20 }}>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)" }}>
                How We Work
              </span>
            </div>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "28px 0", borderBottom: i === values.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none", display: "flex", gap: 20 }}
              >
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.2)", letterSpacing: "0.08em", paddingTop: 4, flexShrink: 0 }}>
                  0{i + 1}
                </span>
                <div>
                  <h4 style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 400, color: "#ffffff", marginBottom: 8 }}>{v.title}</h4>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.8, color: "#ffffff", opacity: 0.42 }}>{v.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team */}
        <div style={{ paddingTop: 80, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 52 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 28, height: 1, background: "rgba(255,255,255,0.25)" }} />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>The Founders</span>
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "rgba(255,255,255,0.35)", maxWidth: 280, textAlign: "right", lineHeight: 1.6 }}>
              Three builders who got tired of watching bad software get funded.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(255,255,255,0.07)" }} className="team-grid">
            {team.map((member, i) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: "easeOut", delay: i * 0.12 }}
                style={{ background: "#0a0a0a", padding: "36px 32px", display: "flex", flexDirection: "column", gap: 20, transition: "background 0.2s" }}
                className="team-card"
              >
                {/* Avatar */}
                <div style={{ width: 52, height: 52, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.04)" }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "rgba(255,255,255,0.5)" }}>{member.initials}</span>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: 19, fontWeight: 400, color: "#ffffff", marginBottom: 5 }}>{member.name}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>{member.role}</div>
                </div>
                <div style={{ width: 24, height: 1, background: "rgba(255,255,255,0.1)" }} />
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.8, color: "#ffffff", opacity: 0.38 }}>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; }
          .team-grid  { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) { .stats-grid { grid-template-columns: 1fr 1fr !important; } }
        .team-card:hover { background: #111111 !important; }
      `}</style>
    </section>
  );
}
