"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface CalBookingProps {
  calLink?: string;
}

export function CalBooking({
  calLink = process.env.NEXT_PUBLIC_CAL_LINK ??
    "willie-studio/studio-buchung",
}: CalBookingProps) {
  const bookingUrl = `https://cal.com/${calLink}`;

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: {
          branding: {
            brandColor: "#C4A35A",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="w-full bg-[#FAF7F2]">
      <Cal
        calLink={calLink}
        style={{
          width: "100%",
          height: "100%",
          minHeight: "600px",
        }}
        config={{
          layout: "month_view",
          theme: "light",
        }}
      />
      <div className="border-t border-[#E8E3DB] bg-[#FAF7F2] px-4 py-4 text-center">
        <p className="font-[family-name:var(--font-cormorant)] text-[#8B7355] text-sm">
          Buchungsfenster lädt nicht?{" "}
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C4A35A] transition-colors hover:text-[#1A1A1A]"
          >
            Direkt bei Cal.com öffnen
          </a>
        </p>
      </div>
    </div>
  );
}
