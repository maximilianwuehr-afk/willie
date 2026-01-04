"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E8E3DB]">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-cormorant-garamond)] text-[#1A1A1A] text-2xl tracking-[0.15em] uppercase hover:opacity-70 transition-opacity"
            >
              Willie
            </Link>
            <p className="mt-4 font-[family-name:var(--font-cormorant)] text-[#8B7355] text-base leading-relaxed max-w-xs">
              Content Creation Studio in München Schwabing. Warm, classy,
              unpretentious.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-cormorant)] text-[#1A1A1A] text-sm tracking-[0.15em] uppercase mb-4">
              Kontakt
            </h4>
            <div className="space-y-2 font-[family-name:var(--font-cormorant)] text-[#8B7355]">
              <a
                href="mailto:hello@willie-studio.de"
                className="block hover:text-[#1A1A1A] transition-colors"
              >
                hello@willie-studio.de
              </a>
              <a
                href="tel:+4989123456"
                className="block hover:text-[#1A1A1A] transition-colors"
              >
                +49 89 123 456
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-[family-name:var(--font-cormorant)] text-[#1A1A1A] text-sm tracking-[0.15em] uppercase mb-4">
              Folge uns
            </h4>
            <div className="flex gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B7355] hover:text-[#1A1A1A] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B7355] hover:text-[#1A1A1A] transition-colors"
                aria-label="Pinterest"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#E8E3DB] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-cormorant)] text-[#8B7355] text-sm">
            © {currentYear} Willie Studio. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 font-[family-name:var(--font-cormorant)] text-[#8B7355] text-sm">
            <Link href="/impressum" className="hover:text-[#1A1A1A] transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-[#1A1A1A] transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
