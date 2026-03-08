// For Big Sponsors

"use client";
import { useEffect, useRef } from "react";
import { Card, CardContent } from "../ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateSectionFadeIn, animateCardsStagger } from "@/lib/gsap-utils";
import Image from "next/image";
import { GoldSponsorsData } from "@/lib/data/data";

gsap.registerPlugin(ScrollTrigger);

const GoldSponsors = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      animateSectionFadeIn(sectionRef.current);
      animateCardsStagger(cardsRef.current);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-36 bg-[#050505] text-white overflow-hidden"
    >
      {/* background */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(20,20,50,0.4)_0%,transparent_70%)]" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center flex flex-col items-center mb-15">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-blue-500/50" />
            <span className="text-blue-400 font-mono text-[16px] tracking-[0.5em] uppercase">
              Sector Alpha // Sponsors
            </span>
            <div className="h-[1px] w-12 bg-blue-500/50" />
          </div>
          <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter uppercase italic">
            Our{" "}
            <span className="font-bold bg-gradient-to-r from-[#0080FF] via-[#0D52BD] to-[#1C05B3] bg-clip-text text-transparent">
              Sponsors
            </span>
          </h2>
        </div>

        <div className="text-center mb-14">
          <h2 className="text-xl md:text-2xl font-thin tracking-[0.5em] uppercase text-white/90">
            Gold Sponsors
          </h2>
          <p className="text-blue-400 font-mono text-xs mt-4 tracking-[0.3em] uppercase italic">
            Linked to Mission Control
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-35 justify-center items-center"> */}
        <div className="flex flex-wrap flex-col md:flex-row justify-center items-center gap-14">
          {GoldSponsorsData.map((sponsor, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`relative group ${i >= 3 ? "lg:translate-x-[50%]" : ""}`}
            >
              <div className="absolute -left-2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent" />
              <div className="absolute -right-2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent" />

              <Card className="relative w-[270px] sm:w-[360px] aspect-square overflow-hidden border-none bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-xl rounded-none transition-all duration-500 group-hover:from-white/[0.12]">
                <CardContent className="p-12 flex flex-col items-center justify-center min-h-[320px]">
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${sponsor.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  />

                  <a href={sponsor.link || "#"} target="_blank" rel="noopener noreferrer" className="absolute z-10 w-50 h-27 mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 block">
                    {sponsor.image ? (
                      <Image
                        fill
                        src={sponsor.image}
                        alt={sponsor.alt}
                        className="object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center border border-dashed border-white/20 uppercase text-[10px] tracking-widest text-white/40">
                        {sponsor.alt}
                      </div>
                    )}
                  </a>

                  <div className="w-full text-center">
                    <div className="h-px w-12 bg-blue-500 mx-auto mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    <h3 className="text-[12px] font-bold tracking-[0.3em] uppercase mt-45 text-slate-400 group-hover:text-white transition-colors">
                      {sponsor.tier}
                    </h3>
                  </div>

                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoldSponsors;
