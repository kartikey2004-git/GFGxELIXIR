import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Award, Sparkles } from "lucide-react";
import { Separator } from "../ui/separator";
import {
  animateSectionFadeIn,
  animateCardsStagger,
  cleanupScrollTriggers,
} from "@/lib/gsap-utils";

const Prizes = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    animateSectionFadeIn(sectionRef.current);
    animateCardsStagger(cardsRef.current);

    return () => cleanupScrollTriggers();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-24 bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <video
          src="https://res.cloudinary.com/djrs8vc5s/video/upload/f_auto,q_auto:good/v1730902345/1106_2_-1_ltl6d2.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black" />
      </div>

        <div className="relative z-10 container mx-auto px-3 sm:px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-5xl font-light tracking-tight mb-3 sm:mb-4">
            Prize Pool
          </h2>
          <p className="text-sm sm:text-lg text-gray-400 px-2">
            The spoils of victory await the bravest coders
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12">
          {[
            {
              emoji: "🥇",
              place: "1st Place",
              amount: "₹50,000",
              perks: ["Mentorship + Certificate", "Internship opportunities"],
            },
            {
              emoji: "🥈",
              place: "2nd Place",
              amount: "₹30,000",
              perks: ["Mentorship + Certificate", "Interview prep sessions"],
            },
            {
              emoji: "🥉",
              place: "3rd Place",
              amount: "₹20,000",
              perks: ["Mentorship + Certificate", "Exclusive swag pack"],
            },
          ].map((p, i) => (
            <Card
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="
                bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl 
                transition-all duration-500 hover:bg-white/10 hover:scale-105
                w-full
              "
            >
              <CardHeader className="text-center py-5 sm:py-8">
                <div className="text-3xl sm:text-5xl md:text-6xl mb-2 sm:mb-3">{p.emoji}</div>

                <CardTitle className="text-lg sm:text-2xl md:text-3xl text-white mb-1 sm:mb-2">
                  {p.place}
                </CardTitle>

                <div className="text-xl sm:text-3xl md:text-4xl font-semibold text-white mt-1 sm:mt-2">
                  {p.amount}
                </div>
              </CardHeader>

              <CardContent className="text-center space-y-1.5 sm:space-y-2 pb-5 sm:pb-6">
                <Separator className="bg-white/10 mb-2 sm:mb-3" />
                {p.perks.map((perk, j) => (
                  <p key={j} className="text-gray-400 text-[11px] sm:text-sm md:text-base px-2">
                    {perk}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <Card
            ref={(el) => (cardsRef.current[3] = el)}
            className="
              bg-white/5 backdrop-blur-md border border-white/10 shadow-xl 
              hover:bg-white/10 hover:scale-105 
              transition-all duration-500 w-full
            "
          >
            <CardHeader className="flex flex-col items-center py-5 sm:py-6">
              <Award className="w-7 h-7 sm:w-10 sm:h-10 text-yellow-400 mb-2" />
              <CardTitle className="text-white text-base sm:text-xl">
                Track Winners
              </CardTitle>
            </CardHeader>

            <CardContent className="text-center pb-5 sm:pb-6">
              <p className="text-lg sm:text-2xl font-semibold text-white">
                ₹10,000 × 5
              </p>
              <p className="text-gray-400 mt-1 text-[11px] sm:text-sm px-2">
                Top project in each track
              </p>
            </CardContent>
          </Card>

          <Card
            ref={(el) => (cardsRef.current[4] = el)}
            className="
              bg-white/5 backdrop-blur-md border border-white/10 shadow-xl 
              hover:bg-white/10 hover:scale-105 
              transition-all duration-500 w-full
            "
          >
            <CardHeader className="flex flex-col items-center py-5 sm:py-6">
              <Sparkles className="w-7 h-7 sm:w-10 sm:h-10 text-blue-400 mb-2" />
              <CardTitle className="text-white text-base sm:text-xl">
                Special Awards
              </CardTitle>
            </CardHeader>

            <CardContent className="text-center pb-5 sm:pb-6">
              <p className="text-lg sm:text-2xl font-semibold text-white">
                ₹5,000 × 10
              </p>
              <p className="text-gray-400 mt-1 text-[11px] sm:text-sm px-2">
                Most innovative, best design, etc.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
