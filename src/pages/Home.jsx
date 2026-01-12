import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PartnerWithUs from "../components/PartnerWithUs";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import About from "../components/AboutSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home" className="scroll-mt-28">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-28">
        <About />
      </section>
      <section id="partner" className="scroll-mt-28">
        <PartnerWithUs />
      </section>
      <section className="scroll-mt-28">
        <Stats />
      </section>
      <section id="contact" className="scroll-mt-28">
        <Footer />
      </section>
    </>
  );
}
