"use client";

import Link from "next/link";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-8 py-6 md:px-12 md:py-8">
        {/* Logo - simple, elegant text mark */}
        <Link
          href="/"
          className="text-[#FAF7F2] font-[family-name:var(--font-cormorant-garamond)] text-2xl md:text-3xl font-light tracking-[0.2em] uppercase hover:opacity-70 transition-opacity duration-500"
        >
          Willie
        </Link>

        {/* Single CTA - minimal */}
        <Link
          href="/buchen"
          className="text-[#FAF7F2] font-[family-name:var(--font-cormorant)] text-sm md:text-base tracking-[0.15em] uppercase hover:opacity-70 transition-opacity duration-500"
        >
          Buchen
        </Link>
      </div>
    </nav>
  );
}
