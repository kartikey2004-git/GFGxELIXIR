"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { communityPartnersData } from "@/lib/data/data";

gsap.registerPlugin(ScrollTrigger);

const CommunityPartners = () => {
  const sectionRef = useRef(null);

useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-[#030303] text-white overflow-hidden"
    >
      {/* Section header */}
      <div className="relative z-10 text-center flex flex-col items-center mb-14 px-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-blue-500/50" />
          <span className="text-blue-400 font-mono text-xs sm:text-sm tracking-[0.5em] uppercase">
            Sector Gamma // Community
          </span>
          <div className="h-[1px] w-12 bg-blue-500/50" />
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-extralight tracking-tighter uppercase italic">
          Community{" "}
          <span className="font-bold bg-gradient-to-r from-[#0080FF] via-[#0D52BD] to-[#1C05B3] bg-clip-text text-transparent">
            Partners
          </span>
        </h2>
        <p className="text-white/40 text-sm mt-4 max-w-xl">
          Backed by communities powering our mission
        </p>
      </div>

      {/* Single infinite carousel */}
      <div className="relative z-10">
        <div className="carousel-container">
          <div className="carousel-track">
            {/* Repeat partners many times for seamless fill */}
            {Array.from({ length: 12 }).map((_, dupeIndex) =>
              communityPartnersData.map((partner, i) => (
                <a
                  key={`${dupeIndex}-${i}`}
                  href={partner.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="carousel-card"
                >
                  <div className="carousel-card-inner">
                    <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 flex-shrink-0">
                      <Image
                        fill
                        src={partner.image}
                        alt={partner.alt}
                        className="object-contain"
                        sizes="(max-width: 640px) 192px, 224px"
                      />
                    </div>
                    <span className="text-[11px] sm:text-sm md:text-base font-mono tracking-[0.2em] uppercase text-white/50 mt-4 text-center leading-tight whitespace-nowrap">
                      {partner.name}
                    </span>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20" />
                </a>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="relative z-10 mt-16 flex justify-center">
        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>
    </section>
  );
};

export default CommunityPartners;
