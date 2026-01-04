"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface CalBookingProps {
  calLink?: string;
}

export function CalBooking({ calLink = "willie-studio/studio-buchung" }: CalBookingProps) {
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
    <div className="w-full min-h-[600px] bg-[#FAF7F2]">
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
    </div>
  );
}
