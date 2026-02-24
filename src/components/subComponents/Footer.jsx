"use client";

import Link from "next/link";
import { Mail, Github, Twitter, Instagram, Globe } from "lucide-react";
import { IconBrandDiscord } from "@tabler/icons-react";
import { quickLinks } from "@/lib/data/data";
import { Hint, HintProvider } from "@/components/ui/hint";
import Image from "next/image";
import VisitorBadge from "@/components/visitor-badge";

export default function Footer() {
  return (
    <HintProvider>
      <footer className="w-full bg-black text-gray-300 pt-14 pb-8 border-t border-gray-800">
        <div className="max-w-full mx-5  px-2">
          <div className="flex md:flex-row flex-col justify-evenly gap-8 text-left text-base md:text-sm lg:text-lg">
            <div className="space-y-3">
              <Link
                href="#hero"
                className="inline-block hover:scale-105 transition-all duration-200"
              >
                <Image
                  src="/stellaris-logo.webp"
                  alt="Stellaris Logo"
                  width={120}
                  height={32}
                  className="rotate-90 scale-[5.5] md:scale-[5.0] ml-15 md:ml-15 h-6 md:h-8 w-auto object-contain cursor-pointer"
                  priority
                />
              </Link>

              <p className="text-gray-400 text-base md:text-sm lg:text-lg sm:-ml-4">
                Building the future with code and courage.
              </p>
            </div>

            {/* Event Info */}
            <div className="space-y-2">
              <h2 className="text-white font-semibold tracking-wider hover:text-blue-500 transition-all duration-200 hover:translate-y-[-2px] cursor-pointer text-lg md:text-base lg:text-xl">
                EVENT INFO
              </h2>
              <p className="text-gray-400 text-base md:text-sm lg:text-lg">
                March 28 - 29, 2026
              </p>
              <p className="text-gray-400 text-base md:text-lg font-semibold">
                24 Hours of Innovation
              </p>
            </div>

            {/* Quicklinks */}
            <div className="space-y-2">
              <h2 className="text-white font-semibold tracking-wider hover:text-blue-500 transition-all duration-200 hover:translate-y-[-2px] cursor-pointer text-lg md:text-base lg:text-xl">
                QUICKLINKS
              </h2>

              <ul className="flex flex-col gap-y-2 text-gray-400 text-base md:text-sm lg:text-lg">
                {quickLinks.map((item, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => {
                        const section = document.querySelector(item.href);
                        section?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="hover:underline transition-all duration-200 hover:translate-y-[-2px] hover:text-blue-400 hover:opacity-80"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-2">
              <h2 className="text-white font-semibold tracking-wider hover:text-blue-500 transition-all duration-200 hover:translate-y-[-2px] cursor-pointer text-lg md:text-base lg:text-xl">
                CONNECT
              </h2>
              <p className="text-gray-400 text-base md:text-sm lg:text-lg flex items-center gap-2">
                <Hint label="Email us">
                  <Mail
                    size={18}
                    className="hover:text-blue-400 transition-all duration-200 hover:scale-105"
                  />
                </Hint>
                <span className="hover:text-blue-400 transition-all duration-200 hover:translate-y-[-2px] cursor-pointer">
                  techcommunityelixir@gmail.com
                </span>
              </p>
              <div className="flex items-center gap-4 mt-1 text-gray-400">
                <Hint label="Visit our website">
                  <Link
                    href="https://www.elixircommunity.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-all duration-200 hover:scale-105  p-1 rounded"
                  >
                    <Globe size={20} />
                  </Link>
                </Hint>
                <Hint label="Follow us on GitHub">
                  <Link
                    href="https://github.com/ElixirTechCommunity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-all duration-200 hover:scale-105  p-1 rounded"
                  >
                    <Github size={20} />
                  </Link>
                </Hint>
                <Hint label="Follow us on Instagram">
                  <Link
                    href="https://www.instagram.com/geeksforgeeks_abesec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-all duration-200 hover:scale-105  p-1 rounded"
                  >
                    <Instagram size={20} />
                  </Link>
                </Hint>
                <Hint label="Join our Discord">
                  <Link
                    href="https://discord.gg/vkkBGt7eHY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-all duration-200 hover:scale-105  p-1 rounded"
                  >
                    <IconBrandDiscord />
                  </Link>
                </Hint>
                <Hint label="Follow us on X (Twitter)">
                  <Link
                    href="https://x.com/TheElixirTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-all duration-200 hover:scale-105  p-1 rounded"
                  >
                    <Twitter size={20} />
                  </Link>
                </Hint>
              </div>
            </div>
          </div>

          {/* Bottom text */}
          <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm md:text-xs lg:text-base space-y-1">
            <div className="flex justify-center items-center gap-4 mb-2">
              <VisitorBadge />
            </div>
            <p>© 2026 ELIXIR TECH COMMUNITY. ALL RIGHTS RESERVED.</p>
            <p>
              Built with <span className="text-red-500"></span> by GFG x ELIXIR
              Team.
            </p>
          </div>
        </div>
      </footer>
    </HintProvider>
  );
}
