"use client";

import { useEffect, useRef, useState } from "react";

const baseIncludes = [
  { icon: "☕", label: "Kaffee & Tee" },
  { icon: "🔊", label: "Bluetooth Speaker" },
  { icon: "🔌", label: "Steckdosen überall" },
  { icon: "📶", label: "High-Speed WiFi" },
  { icon: "🧹", label: "Steamer" },
  { icon: "📍", label: "C-Stands" },
];

const addOns = [
  { label: "Blitzanlage", price: "ab 50€" },
  { label: "LED Panels", price: "ab 30€" },
  { label: "Hintergründe", price: "ab 20€" },
  { label: "Möbel & Props", price: "inkl." },
  { label: "Makeup-Ecke", price: "inkl." },
  { label: "Garderobe", price: "inkl." },
];

export function Included() {
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
      className="relative bg-[#E8E3DB] py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
        {/* Section header */}
        <div
          className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-[family-name:var(--font-cormorant)] text-[#C4A35A] text-sm tracking-[0.2em] uppercase">
            Ausstattung
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant-garamond)] text-[#1A1A1A] text-3xl md:text-4xl lg:text-5xl font-light">
            Alles für dein Shooting
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Base includes */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-[family-name:var(--font-cormorant-garamond)] text-[#1A1A1A] text-2xl font-light mb-8">
              Immer inklusive
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {baseIncludes.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-4 transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 50}ms` }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-[family-name:var(--font-cormorant)] text-[#1A1A1A] text-base">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-[family-name:var(--font-cormorant-garamond)] text-[#1A1A1A] text-2xl font-light mb-8">
              Optional dazu
            </h3>
            <div className="space-y-4">
              {addOns.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-baseline justify-between border-b border-[#1A1A1A]/10 pb-4 transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${500 + index * 50}ms` }}
                >
                  <span className="font-[family-name:var(--font-cormorant)] text-[#1A1A1A] text-base">
                    {item.label}
                  </span>
                  <span className="font-[family-name:var(--font-cormorant-garamond)] text-[#C4A35A] text-lg">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
