import { useEffect, useRef } from "react";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { faqs } from "@/lib/data/data";
import {
  animateSectionFadeIn,
  animateCardsStagger,
  cleanupScrollTriggers,
} from "@/lib/gsap-utils";

const sectionHeadingFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const FAQ = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    animateSectionFadeIn(sectionRef.current);
    animateCardsStagger(itemsRef.current, {
      duration: 0.8,
      staggerDelay: 0.1,
    });

    return () => cleanupScrollTriggers();
  }, []);



  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-24 text-white overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video
          src="https://res.cloudinary.com/djrs8vc5s/video/upload/f_auto,q_auto:good/v1730902345/1106_2_-1_ltl6d2.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover opacity-25"
          style={{ pointerEvents: "none" }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/80 to-black/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2
            className={`${sectionHeadingFont.className} text-5xl tracking-[0.08em] uppercase mb-3`}
          >
            <span className="bg-gradient-to-r from-[#F8D47A] via-[#E0A743] to-[#C67824] bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className={`${bodyFont.className} text-lg text-gray-400`}>
            Everything you need to know
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              value={`item-${i}`}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <AccordionTrigger
                className={`${bodyFont.className} text-left font-normal text-white px-6 py-4 hover:text-gray-300 text-lg`}
              >
                {faq.q}
              </AccordionTrigger>
              <AccordionContent
                className={`${bodyFont.className} text-gray-400 px-6 pb-4 text-sm leading-relaxed`}
              >
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
