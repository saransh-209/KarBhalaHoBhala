import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import DonateSection from "@/components/sections/DonateSection";
import Volunteer from "@/components/sections/Volunteer";
import Contact from "@/components/sections/Contact";
import Location from "@/components/sections/Location";
import Events from "@/components/sections/Events";
import FAQ from "@/components/sections/FAQ";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Events />
        <About />
        <Services />
        <Gallery />
        <HowItWorks />
        <Testimonials />
        <DonateSection />
        <Volunteer />
        <FAQ />
        <Contact />
        <Location />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}