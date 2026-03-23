"use client";
import { useEffect, useRef } from "react";
import { Card, CardContent } from "../ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const PoweredBy = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-48 bg-[#050505] text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center">
        
        <div className="text-center flex flex-col items-center mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-blue-500/50" />
            <span className="text-blue-400 font-mono text-[14px] tracking-[0.5em] uppercase">
              Core Protocol // Power
            </span>
            <div className="h-[1px] w-12 bg-blue-500/50" />
          </div>
          <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter uppercase italic">
            Powered{" "}
            <span className="font-bold bg-gradient-to-r from-[#0080FF] via-[#0D52BD] to-[#1C05B3] bg-clip-text text-transparent">
              By
            </span>
          </h2>
        </div>

        <div className="relative group">
          <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/40 to-transparent group-hover:via-blue-400 transition-all duration-700" />
          <div className="absolute -right-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/40 to-transparent group-hover:via-blue-400 transition-all duration-700" />

          <Card className="relative w-[300px] sm:w-[500px] border-none bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-2xl rounded-none transition-all duration-700">
            <CardContent className="p-16 flex flex-col items-center justify-center">
              
              <div className="relative w-56 h-32 mb-8 transition-transform duration-700 group-hover:scale-110">
                <a href="https://mlh.io/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/mlh.webp"
                  alt="MLH Logo"
                  fill
                  className="object-contain"
                  />
                  </a>
              </div>

              <div className="w-full text-center relative z-10">
                <div className="h-px w-16 bg-blue-500 mx-auto mb-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                <h3 className="text-sm font-light tracking-[0.6em] uppercase text-zinc-500 group-hover:text-white transition-colors">
                  Major League Hacking
                </h3>
                <p className="text-[12px] font-mono text-zinc-800 group-hover:text-blue-400/60 mt-4 tracking-[0.3em] uppercase">
                  Global Mission Partner
                </p>
              </div>

              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20 group-hover:border-blue-500 transition-colors" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 group-hover:border-blue-500 transition-colors" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20 group-hover:border-blue-500 transition-colors" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20 group-hover:border-blue-500 transition-colors" />
            </CardContent>
          </Card>
        </div>

        <p className="mt-10 text-[10px] tracking-[0.4em] text-gray-300 uppercase italic">
          Connection Secure // Mission Control Link Established
        </p>
      </div>
    </section>
  );
};

export default PoweredBy;