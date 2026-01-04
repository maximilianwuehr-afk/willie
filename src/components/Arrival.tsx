"use client";

import { useEffect, useRef, useState } from "react";

export function Arrival() {
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
      className="relative bg-[#1A1A1A] text-[#FAF7F2] py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="font-[family-name:var(--font-cormorant)] text-[#C4A35A] text-sm tracking-[0.2em] uppercase">
              Anfahrt
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant-garamond)] text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
              So findest du
              <br />
              <span className="italic">zu uns</span>
            </h2>

            {/* Address */}
            <div className="mt-12">
              <h3 className="font-[family-name:var(--font-cormorant)] text-[#FAF7F2]/60 text-sm tracking-[0.1em] uppercase mb-4">
                Adresse
              </h3>
              <p className="font-[family-name:var(--font-cormorant-garamond)] text-xl leading-relaxed">
                Musterstraße 42
                <br />
                80796 München
                <br />
                Schwabing
              </p>
            </div>

            {/* Transport options */}
            <div className="mt-10 space-y-6">
              <div>
                <h4 className="font-[family-name:var(--font-cormorant)] text-[#C4A35A] text-sm tracking-[0.1em] uppercase mb-2">
                  U-Bahn
                </h4>
                <p className="font-[family-name:var(--font-cormorant)] text-[#FAF7F2]/80">
                  U3/U6 Münchner Freiheit – 5 Min Fußweg
                </p>
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-cormorant)] text-[#C4A35A] text-sm tracking-[0.1em] uppercase mb-2">
                  Parken
                </h4>
                <p className="font-[family-name:var(--font-cormorant)] text-[#FAF7F2]/80">
                  Parkhaus Münchner Freiheit (2 Min) oder Straßenparkplätze in
                  den Nebenstraßen
                </p>
              </div>
            </div>

            {/* Note */}
            <div className="mt-12 p-6 border border-[#FAF7F2]/10">
              <p className="font-[family-name:var(--font-cormorant)] text-[#FAF7F2]/70 text-base leading-relaxed">
                <span className="text-[#C4A35A]">Hinweis:</span> Das Studio
                befindet sich im 2. OG ohne Aufzug. Für schweres Equipment
                empfehlen wir Trolleys oder einen Helfer.
              </p>
            </div>
          </div>

          {/* Right: Map placeholder */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative aspect-square bg-[#FAF7F2]/5 flex items-center justify-center">
              {/* Decorative map placeholder */}
              <div className="absolute inset-0 opacity-10">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                >
                  {/* Grid lines */}
                  {[...Array(20)].map((_, i) => (
                    <g key={i}>
                      <line x1={i * 20} y1="0" x2={i * 20} y2="400" />
                      <line x1="0" y1={i * 20} x2="400" y2={i * 20} />
                    </g>
                  ))}
                </svg>
              </div>

              {/* Center marker */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-4 h-4 bg-[#C4A35A] rounded-full animate-pulse" />
                <div className="mt-4 font-[family-name:var(--font-cormorant-garamond)] text-lg text-center">
                  Willie Studio
                  <span className="block text-[#FAF7F2]/50 text-sm mt-1">
                    München Schwabing
                  </span>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-[#C4A35A]/30" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-[#C4A35A]/30" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-[#C4A35A]/30" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-[#C4A35A]/30" />
            </div>

            {/* Link to maps */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-cormorant)] text-[#C4A35A] text-sm tracking-[0.1em] uppercase hover:opacity-70 transition-opacity"
            >
              In Google Maps öffnen
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
