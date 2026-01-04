"use client";

import { useEffect, useRef, useState } from "react";

export function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FAF7F2] py-32 md:py-48 lg:py-64"
    >
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#E8E3DB] to-transparent" />

      <div className="max-w-4xl mx-auto px-8 md:px-12">
        {/* Large pullquote style */}
        <blockquote
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Decorative quotation mark */}
          <span className="block font-[family-name:var(--font-cormorant-garamond)] text-[#C4A35A] text-8xl md:text-9xl leading-none opacity-30 -mb-8 md:-mb-12">
            "
          </span>

          <p className="font-[family-name:var(--font-cormorant-garamond)] text-[#1A1A1A] text-3xl md:text-4xl lg:text-5xl font-light leading-[1.4] max-w-[22ch]">
            Ein Ort, an dem Kreativität Raum zum Atmen hat.
          </p>

          <p
            className={`mt-8 md:mt-12 font-[family-name:var(--font-cormorant)] text-[#8B7355] text-lg md:text-xl leading-relaxed max-w-[45ch] transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Willie ist mehr als ein Studio – es ist ein Rückzugsort. Hier
            entstehen Bilder, die authentisch sind, weil der Raum es erlaubt,
            sich wohlzufühlen.
          </p>
        </blockquote>

        {/* Three pillars */}
        <div
          className={`mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {[
            {
              title: "Warm",
              description:
                "Natürliches Licht, warme Materialien, eine Atmosphäre zum Ankommen.",
            },
            {
              title: "Classy",
              description:
                "Schwabing Altbau-Charme trifft auf zeitlose Eleganz. Premium, nicht protzig.",
            },
            {
              title: "Echt",
              description:
                "Kein kaltes Studio-Gefühl. Hier entstehen Bilder mit Seele.",
            },
          ].map((pillar, index) => (
            <div
              key={pillar.title}
              className="text-center md:text-left"
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <h3 className="font-[family-name:var(--font-cormorant-garamond)] text-[#1A1A1A] text-2xl font-light italic mb-4">
                {pillar.title}
              </h3>
              <p className="font-[family-name:var(--font-cormorant)] text-[#8B7355] text-base leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
