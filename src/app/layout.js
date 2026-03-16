import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GSAPProvider from "@/components/gsap-provider";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import StarFieldWrapper from "@/components/StarFieldWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stellaris 2026",
  description:
    "Join 1000+ developers, designers, and innovators for an epic 12-hour hackathon. Build cutting-edge projects and compete for amazing prizes.",
  icons: {
    icon: '/icon.webp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Analytics />

        <StarFieldWrapper />
        <GSAPProvider>{children}</GSAPProvider>
        <Script
          src="https://apply.devfolio.co/v2/sdk.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
