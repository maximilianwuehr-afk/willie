import { Navigation } from "@/components/Navigation";
import { CalBooking } from "@/components/CalBooking";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Buchen | Willie Studio",
  description:
    "Buche dein Shooting oder deinen Workshop im Willie Studio München. Stündlich, halbtags oder ganztags verfügbar.",
};

export default function BookingPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#FAF7F2] min-h-screen">
        {/* Header */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-8 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-cormorant)] text-[#8B7355] text-sm tracking-[0.1em] uppercase hover:text-[#1A1A1A] transition-colors mb-8"
            >
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Zurück
            </Link>

            <h1 className="font-[family-name:var(--font-cormorant-garamond)] text-[#1A1A1A] text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Dein Termin im
              <br />
              <span className="italic">Willie Studio</span>
            </h1>

            <p className="mt-6 font-[family-name:var(--font-cormorant)] text-[#8B7355] text-lg max-w-md mx-auto">
              Wähle dein Paket und deinen Wunschtermin. Bei Fragen sind wir
              jederzeit für dich da.
            </p>
          </div>
        </section>

        {/* Booking info */}
        <section className="pb-8 px-8 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Stündlich",
                  price: "€65/h",
                  desc: "Min. 1 Stunde",
                },
                {
                  title: "Halbtag",
                  price: "€220",
                  desc: "4 Stunden",
                },
                {
                  title: "Ganztag",
                  price: "€380",
                  desc: "8 Stunden",
                },
              ].map((pkg) => (
                <div
                  key={pkg.title}
                  className="text-center p-6 border border-[#E8E3DB]"
                >
                  <h3 className="font-[family-name:var(--font-cormorant-garamond)] text-[#1A1A1A] text-xl">
                    {pkg.title}
                  </h3>
                  <p className="mt-2 font-[family-name:var(--font-cormorant-garamond)] text-[#C4A35A] text-2xl">
                    {pkg.price}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-cormorant)] text-[#8B7355] text-sm">
                    {pkg.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cal.com embed */}
        <section className="pb-24 px-8 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="border border-[#E8E3DB] p-4 md:p-8 bg-white/50">
              <CalBooking />
            </div>

            {/* Additional info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
              <div>
                <h4 className="font-[family-name:var(--font-cormorant)] text-[#1A1A1A] text-sm tracking-[0.15em] uppercase mb-3">
                  Bezahlung
                </h4>
                <p className="font-[family-name:var(--font-cormorant)] text-[#8B7355] text-base">
                  50% Anzahlung bei Buchung. Restzahlung vor Ort oder per
                  Überweisung an Willie UG (haftungsbeschränkt).
                </p>
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-cormorant)] text-[#1A1A1A] text-sm tracking-[0.15em] uppercase mb-3">
                  Stornierung
                </h4>
                <p className="font-[family-name:var(--font-cormorant)] text-[#8B7355] text-base">
                  Bis 24h vorher: €25 Gebühr. Innerhalb 24h: Anzahlung verfällt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact fallback */}
        <section className="pb-24 px-8 md:px-12 lg:px-16">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-[family-name:var(--font-cormorant)] text-[#8B7355] text-base">
              Kein passender Termin dabei? Schreib uns an{" "}
              <a
                href="mailto:hello@willie-studio.de"
                className="text-[#C4A35A] hover:text-[#1A1A1A] transition-colors"
              >
                hello@willie-studio.de
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
