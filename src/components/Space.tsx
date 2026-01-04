"use client";

import { useEffect, useRef, useState } from "react";
import { FramedImage } from "./ui/FramedImage";

const specs = [
  { label: "Fläche", value: "85 m²" },
  { label: "Deckenhöhe", value: "3,40 m" },
  { label: "Fenster", value: "Süd-West" },
  { label: "Tageslicht", value: "Ganztägig" },
  { label: "Etage", value: "2. OG" },
  { label: "Aufzug", value: "Keiner" },
];

export function Space() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1A1A1A] text-[#FAF7F2] py-24 md:py-32 lg:py-48 overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        {/* Section header */}
        <div
          className={`mb-16 md:mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-[family-name:var(--font-cormorant)] text-[#C4A35A] text-sm tracking-[0.2em] uppercase">
            Der Raum
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant-garamond)] text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Altbau-Charme in
            <br />
            <span className="italic">Schwabing</span>
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Image */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <FramedImage
              src="/studio-space.jpg"
              alt="Willie Studio Innenraum - Hohe Decken, große Fenster, natürliches Licht"
              aspectRatio="16/10"
            />
          </div>

          {/* Specs */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div
              className={`space-y-6 transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {specs.map((spec, index) => (
                <div
                  key={spec.label}
                  className="flex items-baseline justify-between border-b border-[#FAF7F2]/10 pb-4"
                  style={{ transitionDelay: `${500 + index * 50}ms` }}
                >
                  <span className="font-[family-name:var(--font-cormorant)] text-[#FAF7F2]/60 text-sm tracking-[0.1em] uppercase">
                    {spec.label}
                  </span>
                  <span className="font-[family-name:var(--font-cormorant-garamond)] text-xl">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Note about access */}
            <p
              className={`mt-12 font-[family-name:var(--font-cormorant)] text-[#FAF7F2]/50 text-sm leading-relaxed max-w-md transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              * Der Zugang erfolgt über das Treppenhaus. Für Equipment-Transport
              empfehlen wir leichtes Setup oder zusätzliche Hilfe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
