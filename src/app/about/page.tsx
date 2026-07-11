import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Team from "@/components/Team";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutExpertise from "@/components/AboutExpertise";
import AboutCta from "@/components/AboutCta";

export const metadata: Metadata = {
  title: "About — Teak Software Studio",
  description:
    "Teak Software Studio is a boutique product engineering team of three, building polished SaaS, web, and mobile products for clients across the US and Europe.",
  openGraph: {
    title: "About — Teak Software Studio",
    description:
      "Meet the small, senior team behind Teak Software Studio.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <AboutHero />
        <About />
        <AboutStory />
        <AboutExpertise />
        <Team />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
