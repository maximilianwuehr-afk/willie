"use client";

import Image from "next/image";
import { useState } from "react";

interface FramedImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
}

export function FramedImage({
  src,
  alt,
  aspectRatio = "4/5",
  className = "",
}: FramedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <figure
      className={`relative group ${className}`}
      style={{ aspectRatio }}
    >
      {/* Outer frame - thick warm border like gallery print */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#E8E3DB] via-[#FAF7F2] to-[#E8E3DB] p-4 md:p-6 lg:p-8"
        style={{
          boxShadow: `
            0 2px 4px rgba(139, 115, 85, 0.04),
            0 8px 16px rgba(139, 115, 85, 0.06),
            0 24px 48px rgba(139, 115, 85, 0.08)
          `,
        }}
      >
        {/* Inner frame with subtle inset shadow */}
        <div
          className="relative w-full h-full overflow-hidden bg-[#E8E3DB]"
          style={{
            boxShadow: "inset 0 1px 3px rgba(139, 115, 85, 0.15)",
          }}
        >
          {/* Image or placeholder */}
          {hasError ? (
            // Elegant placeholder when no image
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#E8E3DB] to-[#FAF7F2]">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 opacity-20">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={0.5}
                    className="text-[#8B7355]"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
                <p className="font-[family-name:var(--font-cormorant)] text-[#8B7355] text-sm tracking-widest uppercase opacity-50">
                  Studio Image
                </p>
              </div>
            </div>
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              className={`object-cover transition-all duration-700 ease-out ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
              } group-hover:scale-[1.02]`}
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />
          )}

          {/* Subtle vignette overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 50%, rgba(139, 115, 85, 0.1) 100%)",
            }}
          />
        </div>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-[#C4A35A] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-2 -translate-y-2" />
      <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-[#C4A35A] opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-2 -translate-y-2" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-[#C4A35A] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-2 translate-y-2" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-[#C4A35A] opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-2 translate-y-2" />
    </figure>
  );
}
