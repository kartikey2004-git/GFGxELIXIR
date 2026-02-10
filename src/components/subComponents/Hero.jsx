import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Code, Target } from "lucide-react";
import { animatePinnedSection, cleanupScrollTriggers } from "@/lib/gsap-utils";

const Hero = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    animatePinnedSection(sectionRef.current, videoRef.current, contentRef.current);

    return () => cleanupScrollTriggers();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white"
    >
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/djrs8vc5s/video/upload/f_auto,q_auto:good/v1730851634/1106-1_ure0wq.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ pointerEvents: "none" }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-3 space-y-3 sm:space-y-5"
      >
        <Badge className="px-2.5 py-1.5 text-[9px] sm:text-sm bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-lg max-w-[95vw] text-center leading-snug">
          COMMAND BRANCH: GEEKSFORGEEKS X ELIXIR
        </Badge>

        <h1 className="text-2xl sm:text-6xl md:text-8xl font-extralight tracking-tight leading-[1.1] px-2">
          BREAK THROUGH
        </h1>

        <h2 className="text-base sm:text-3xl md:text-5xl text-white/90 tracking-wide leading-tight px-2">
          THE WALLS OF INNOVATION
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-4 w-full sm:w-auto px-3 max-w-md sm:max-w-none">
          <Button
            size="lg"
            className="bg-black/80 text-white hover:bg-black px-4 sm:px-10 py-3 sm:py-7 text-xs sm:text-lg font-semibold tracking-wide w-full sm:w-auto"
          >
            <Target className="mr-1.5 w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
            <span className="text-[11px] sm:text-lg">Join The Scout Regiment</span>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black px-4 sm:px-10 py-3 sm:py-6 text-xs sm:text-lg font-semibold tracking-wide w-full sm:w-auto"
          >
            <Code className="mr-1.5 w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
            <span className="text-[11px] sm:text-lg">Mission Briefing</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;