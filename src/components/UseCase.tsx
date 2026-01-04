"use client";

import { useEffect, useRef, useState } from "react";
import { FramedImage } from "./ui/FramedImage";

interface UseCaseProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

export function UseCase({
  title,
  subtitle,
  description,
  features,
  imageSrc,
  imageAlt,
  reversed = false,
}: UseCaseProps) {
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
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            reversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text content */}
          <div
            className={`${reversed ? "lg:order-2" : ""} ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            } transition-all duration-1000`}
          >
            <span className="font-[family-name:var(--font-cormorant)] text-[#C4A35A] text-sm tracking-[0.2em] uppercase">
              {subtitle}
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant-garamond)] text-[#1A1A1A] text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
              {title}
            </h2>
            <p className="mt-8 font-[family-name:var(--font-cormorant)] text-[#8B7355] text-lg leading-relaxed max-w-md">
              {description}
            </p>

            {/* Features list */}
            <ul className="mt-10 space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-4 transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#C4A35A] flex-shrink-0" />
                  <span className="font-[family-name:var(--font-cormorant)] text-[#1A1A1A] text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div
            className={`${reversed ? "lg:order-1" : ""} ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-[0.98]"
            } transition-all duration-1000 delay-200`}
          >
            <FramedImage
              src={imageSrc}
              alt={imageAlt}
              aspectRatio="4/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
