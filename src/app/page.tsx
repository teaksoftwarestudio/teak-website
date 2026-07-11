import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Team from "@/components/Team";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
        <TrustBar />
        <Process />
        <About />
        <Team variant="compact" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}