"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { SilverSponsorsData } from "@/lib/data/data";

gsap.registerPlugin(ScrollTrigger);

const SilverSponsors = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const particleContainersRef = useRef([]);
    const arrowsRef = useRef([]);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Section entry animation (Fade in)
            gsap.fromTo(sectionRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 90%",
                        end: "bottom 20%",
                        toggleActions: "play none none none", // Don't hide when scrolling away
                    }
                }
            );

            // Animate each card
            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                gsap.fromTo(card,
                    { opacity: 0, y: 30, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        }
                    }
                );

                // Arrow and Particle Path animation for each card
                const arrow = arrowsRef.current[index];
                const particleContainer = particleContainersRef.current[index];

                if (arrow) {
                    const arrowTimeline = gsap.timeline({
                        repeat: -1,
                        defaults: { ease: "none" }
                    });

                    arrowTimeline.to(arrow, {
                        left: "110%",
                        duration: 3, // Slightly faster for more intensity
                        onUpdate: function () {
                            // Generate multiple particles at once for "bulk" effect
                            for (let i = 0; i < 3; i++) {
                                if (Math.random() > 0.1) {
                                    createParticle(this.progress() * 110 - 10, particleContainer);
                                }
                            }
                        }
                    });
                }
            });

            const createParticle = (xPos, container) => {
                if (!container) return;
                const particle = document.createElement("div");
                // Variations in size - "Medium" size as requested
                const size = 2 + Math.random() * 4;
                particle.className = `absolute bg-white rounded-full pointer-events-none opacity-0 shadow-[0_0_8px_rgba(255,255,255,0.9)]`;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                container.appendChild(particle);

                const startY = 50 + (Math.random() - 0.5) * 20;
                const driftY = startY + (Math.random() - 0.5) * 30;

                gsap.set(particle, { left: `${xPos}%`, top: `${startY}%` });

                gsap.to(particle, {
                    top: `${driftY}%`,
                    left: `+=${(Math.random() - 0.5) * 5}%`,
                    opacity: 0.4 + Math.random() * 0.4,
                    duration: 1 + Math.random(),
                    scale: 0.5,
                    ease: "power1.out",
                    onComplete: () => {
                        gsap.to(particle, {
                            opacity: 0,
                            duration: 1,
                            onComplete: () => particle.remove()
                        });
                    }
                });
            };
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="silver-sponsors"
            className="relative pt-10 pb-20 bg-[#030303] text-white overflow-hidden"
        >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
                <div className="text-center mb-16">
                    <h2 className="text-lg md:text-xl font-thin tracking-[0.5em] uppercase text-white/90">
                        Silver Sponsors
                    </h2>
                    <p className="text-blue-400 font-mono text-[10px] mt-4 tracking-[0.3em] uppercase italic">
                        Linked to Mission Control
                    </p>
                </div>

                <div className="flex flex-row justify-center items-center gap-6 md:gap-10 py-8">
                    {SilverSponsorsData.map((sponsor, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="group relative w-xs md:w-sm aspect-square bg-[#12161d]/50 border-2 border-slate-500/30 shadow-2xl transition-all duration-700"
                            style={{
                                borderImage: "linear-gradient(to bottom right, #94a3b8 0%, #475569 50%, #94a3b8 100%) 1"
                            }}
                        >
                            <div ref={el => arrowsRef.current[index] = el} className="absolute left-[-10%] top-1/2 w-0 h-0 z-0" />
                            <div ref={el => particleContainersRef.current[index] = el} className="absolute inset-0 z-40 pointer-events-none overflow-hidden h-full top-0" />

                            {/* Metallic Shine Overlay */}
                            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-50 pointer-events-none">
                                <div className="absolute inset-0 border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.15)]" />
                                <div className="absolute top-0 left-[-100%] w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:left-[200%] transition-all duration-1500 ease-in-out" />
                            </div>

                            <div className="absolute -top-1 -left-1 w-8 h-8 bg-[#1a1f26] z-30 opacity-50" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
                            <div className="absolute -top-1 -right-1 w-8 h-8 bg-[#1a1f26] z-30 opacity-50" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} />
                            <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-[#1a1f26] z-30 opacity-50" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }} />
                            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#1a1f26] z-30 opacity-50" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />

                            <div className="relative w-full h-full flex flex-col items-center justify-center p-8 overflow-hidden bg-metallic-brushed">
                                <div className="absolute inset-2 border border-white/5 z-10 pointer-events-none" />

                                <div className="relative z-20 flex flex-col items-center space-y-8">
                                    <div className="relative w-36 h-36 md:w-44 md:h-44 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.05)]">
                                        <Image
                                            fill
                                            src={sponsor.image}
                                            alt={sponsor.alt}
                                            className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700"
                                        />
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-[10px] md:text-sm font-mono tracking-[0.4em] uppercase text-white/70 transition-all duration-700 group-hover:text-blue-400">
                                            <span className="relative">
                                                {sponsor.tier}
                                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-blue-500 transition-all duration-500 group-hover:w-full opacity-50"></span>
                                            </span>
                                        </h3>
                                    </div>
                                </div>

                                <div className="absolute bottom-3 right-4 w-10 h-10 opacity-5 border-r border-b border-white/30" />
                                <div className="absolute top-3 left-4 w-10 h-10 opacity-5 border-l border-t border-white/30" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SilverSponsors;
