"use client";

import SpotlightNavbar from "@/components/subComponents/SpotlightNavbar";
import Hero from "@/components/subComponents/Hero";
import About from "@/components/subComponents/About";
import Cards from "@/components/subComponents/Card";
import Prizes from "@/components/subComponents/Prizes";
import FAQ from "@/components/subComponents/FAQ";
import CTA from "@/components/subComponents/CTA";
import Footer from "@/components/subComponents/Footer";
import MissionTimeline from "@/components/subComponents/MissionTimeline";
import GoldSponsors from "@/components/subComponents/GoldSponsor";
import SilverSponsors from "@/components/subComponents/SilverSponsers";
import BronzeSponsors from "@/components/subComponents/BronzeSponsors";
import Partners from "@/components/subComponents/Partners";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <SpotlightNavbar />

      <section id="hero" className="relative z-10 scroll-mt-20">
        <Hero />
      </section>

      <section id="mission-briefing" className="relative z-10 scroll-mt-20">
        <About />
      </section>

      <section id="tracks" className="relative z-10 scroll-mt-20">
        <Cards />
      </section>

      <section id="timeline" className="relative z-10 scroll-mt-20">
        <MissionTimeline />
      </section>

      <section id="sponsors" className="relative z-10 scroll-mt-20">
        <GoldSponsors />
      </section>

      <section id="sponsors" className="relative z-10 scroll-mt-20">
        <SilverSponsors />
      </section>

      <section id="sponsors" className="relative z-10 scroll-mt-20">
        <BronzeSponsors />
      </section>

      <section id="sponsors" className="relative z-10 scroll-mt-20">
        <Partners />
      </section>

      <section id="prizes" className="relative z-10 scroll-mt-20">
        <Prizes />
      </section>

      <section id="faq" className="relative z-10 scroll-mt-20">
        <FAQ />
      </section>

      <section id="contact" className="relative z-10 scroll-mt-20">
        <CTA />
      </section>

      <footer id="footer" className="relative z-20">
        <Footer />
      </footer>
    </div>
  );
}
