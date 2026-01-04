"use client";

import { useEffect, useState } from "react";
import { FramedImage } from "./ui/FramedImage";
import { DaylightIndicator } from "./ui/DaylightIndicator";
import { Button } from "./ui/Button";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Staggered reveal on mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#FAF7F2] overflow-hidden">
      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Spacer for nav */}
        <div className="h-24 md:h-32" />

        {/* Hero content - asymmetric grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 px-8 md:px-12 lg:px-16">
          {/* Left column - Typography */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:py-20">
            {/* Headline with staggered reveal */}
            <h1
              className={`font-[family-name:var(--font-cormorant-garamond)] text-[#1A1A1A] font-light leading-[0.95] tracking-[-0.02em] transition-all duration-1000 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block text-[clamp(3rem,8vw,7rem)]">Ein Studio,</span>
              <span
                className="block text-[clamp(3rem,8vw,7rem)] mt-2"
                style={{ transitionDelay: "100ms" }}
              >
                das sich wie
              </span>
              <span
                className="block text-[clamp(3rem,8vw,7rem)] mt-2 italic"
                style={{ transitionDelay: "200ms" }}
              >
                Zuhause
              </span>
              <span
                className="block text-[clamp(3rem,8vw,7rem)] mt-2"
                style={{ transitionDelay: "300ms" }}
              >
                anfühlt.
              </span>
            </h1>

            {/* Subtext - very restrained */}
            <p
              className={`mt-12 md:mt-16 font-[family-name:var(--font-cormorant)] text-[#8B7355] text-lg md:text-xl max-w-[28ch] leading-relaxed transition-all duration-1000 ease-out delay-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Natural-light content creation studio in Munich Schwabing. Warm.
              Classy. Unpretentious.
            </p>

            {/* CTA with warm glow */}
            <div
              className={`mt-10 md:mt-12 transition-all duration-1000 ease-out delay-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <Button href="/buchen">Jetzt buchen</Button>
            </div>
          </div>

          {/* Right column - Framed Image */}
          <div className="lg:col-span-7 flex items-center justify-center lg:justify-end py-8 lg:py-16">
            <div
              className={`w-full max-w-xl lg:max-w-none lg:w-[90%] transition-all duration-1200 ease-out delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-[0.98]"
              }`}
            >
              <FramedImage
                src="/studio-hero.jpg"
                alt="Willie Studio - Ein lichtdurchfluteter Raum in einem Münchner Altbau"
                aspectRatio="4/5"
              />
            </div>
          </div>
        </div>

        {/* Bottom section with daylight indicator */}
        <div className="px-8 md:px-12 lg:px-16 pb-8 md:pb-12">
          <div
            className={`flex items-end justify-between transition-all duration-1000 ease-out delay-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {/* Daylight indicator - like a gallery placard */}
            <DaylightIndicator />

            {/* Scroll hint */}
            <div className="hidden md:flex items-center gap-3 text-[#8B7355]">
              <span className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.1em] uppercase">
                Entdecken
              </span>
              <svg
                className="w-4 h-4 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
