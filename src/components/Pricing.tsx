"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/Button";

const packages = [
  {
    name: "Stündlich",
    price: "65",
    unit: "pro Stunde",
    description: "Flexibel für kurze Sessions",
    features: ["Mindestens 1 Stunde", "Volle Studionutzung", "Basis-Equipment"],
    highlight: false,
  },
  {
    name: "Halbtag",
    price: "220",
    unit: "4 Stunden",
    description: "Ideal für Portrait-Shootings",
    features: [
      "4 Stunden am Stück",
      "Volle Studionutzung",
      "Basis-Equipment",
      "15% Ersparnis",
    ],
    highlight: true,
  },
  {
    name: "Ganztag",
    price: "380",
    unit: "8 Stunden",
    description: "Für größere Produktionen",
    features: [
      "8 Stunden am Stück",
      "Volle Studionutzung",
      "Alle Equipment-Optionen",
      "25% Ersparnis",
    ],
    highlight: false,
  },
];

export function Pricing() {
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
      className="relative bg-[#FAF7F2] py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
        {/* Section header */}
        <div
          className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-[family-name:var(--font-cormorant)] text-[#C4A35A] text-sm tracking-[0.2em] uppercase">
            Preise
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant-garamond)] text-[#1A1A1A] text-3xl md:text-4xl lg:text-5xl font-light">
            Transparent & fair
          </h2>
          <p className="mt-6 font-[family-name:var(--font-cormorant)] text-[#8B7355] text-lg max-w-md mx-auto">
            50% Anzahlung bei Buchung. Überstunden werden pro angefangene Stunde
            berechnet.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative group transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div
                className={`h-full p-8 md:p-10 transition-all duration-500 ${
                  pkg.highlight
                    ? "bg-[#1A1A1A] text-[#FAF7F2]"
                    : "bg-[#E8E3DB]/50 text-[#1A1A1A] hover:bg-[#E8E3DB]"
                }`}
              >
                {/* Popular badge */}
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#C4A35A] text-[#1A1A1A] font-[family-name:var(--font-cormorant)] text-xs tracking-[0.15em] uppercase">
                    Beliebt
                  </span>
                )}

                {/* Package name */}
                <h3
                  className={`font-[family-name:var(--font-cormorant-garamond)] text-2xl font-light ${
                    pkg.highlight ? "text-[#FAF7F2]" : "text-[#1A1A1A]"
                  }`}
                >
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-2">
                  <span
                    className={`font-[family-name:var(--font-cormorant-garamond)] text-5xl font-light ${
                      pkg.highlight ? "text-[#FAF7F2]" : "text-[#1A1A1A]"
                    }`}
                  >
                    €{pkg.price}
                  </span>
                  <span
                    className={`font-[family-name:var(--font-cormorant)] text-sm ${
                      pkg.highlight ? "text-[#FAF7F2]/60" : "text-[#8B7355]"
                    }`}
                  >
                    {pkg.unit}
                  </span>
                </div>

                {/* Description */}
                <p
                  className={`mt-4 font-[family-name:var(--font-cormorant)] text-base ${
                    pkg.highlight ? "text-[#FAF7F2]/70" : "text-[#8B7355]"
                  }`}
                >
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="mt-8 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`w-1.5 h-1.5 mt-2 rounded-full flex-shrink-0 ${
                          pkg.highlight ? "bg-[#C4A35A]" : "bg-[#C4A35A]"
                        }`}
                      />
                      <span
                        className={`font-[family-name:var(--font-cormorant)] text-base ${
                          pkg.highlight ? "text-[#FAF7F2]/80" : "text-[#1A1A1A]"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-10">
                  <Button
                    href="/buchen"
                    variant={pkg.highlight ? "secondary" : "primary"}
                    className={`w-full justify-center ${
                      pkg.highlight
                        ? "!bg-[#FAF7F2] !text-[#1A1A1A] hover:!bg-[#E8E3DB]"
                        : ""
                    }`}
                  >
                    Jetzt buchen
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cancellation policy */}
        <p
          className={`mt-12 text-center font-[family-name:var(--font-cormorant)] text-[#8B7355] text-sm transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Stornierung bis 24h vorher: €25 Gebühr. Innerhalb 24h: Anzahlung
          verfällt.
        </p>
      </div>
    </section>
  );
}
