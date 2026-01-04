import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Space } from "@/components/Space";
import { UseCase } from "@/components/UseCase";
import { Included } from "@/components/Included";
import { Pricing } from "@/components/Pricing";
import { Arrival } from "@/components/Arrival";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Philosophy />
        <Space />

        {/* Use case: Photographers */}
        <UseCase
          subtitle="Für Fotografen"
          title="Natürliches Licht, echte Momente"
          description="Ob Portraits, Personal Branding oder kreative Projekte – das weiche Tageslicht und die warme Atmosphäre schaffen die perfekte Grundlage für authentische Bilder."
          features={[
            "Ganztägig natürliches Licht",
            "Südwest-Ausrichtung für warmes Abendlicht",
            "Flexible Möbel und Hintergründe",
            "Ruhige Arbeitsatmosphäre",
          ]}
          imageSrc="/photographer-usecase.jpg"
          imageAlt="Portrait-Shooting im Willie Studio mit natürlichem Licht"
        />

        {/* Use case: Workshops */}
        <UseCase
          subtitle="Für Workshops"
          title="Raum für Transformation"
          description="Yoga, Breathwork, Coaching – die Altbau-Atmosphäre schafft einen geschützten Rahmen für intensive Gruppenerlebnisse und persönliche Entwicklung."
          features={[
            "85 m² offener Raum",
            "Hohe Decken für gute Energie",
            "Ruhige Lage in Schwabing",
            "Flexible Bestuhlung und Matten",
          ]}
          imageSrc="/workshop-usecase.jpg"
          imageAlt="Workshop-Setting im Willie Studio"
          reversed
        />

        <Included />
        <Pricing />
        <Arrival />
      </main>
      <Footer />
    </>
  );
}
