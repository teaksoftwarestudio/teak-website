import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhyTeak from "@/components/WhyTeak";
import Services from "@/components/Services";
import Work from "@/components/Work";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyTeak />
        <Services />
        <Work />
        <TrustBar />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
