"use client";

import { useEffect, useState } from "react";

// Munich coordinates
const MUNICH_LAT = 48.1351;
const MUNICH_LNG = 11.582;

interface SunTimes {
  sunrise: Date;
  sunset: Date;
  goldenHourMorning: Date;
  goldenHourEvening: Date;
}

function calculateSunTimes(date: Date): SunTimes {
  // Simplified sun calculation for Munich
  const dayOfYear = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) /
      (1000 * 60 * 60 * 24)
  );

  // Approximate declination angle
  const declination = 23.45 * Math.sin((360 / 365) * (dayOfYear - 81) * (Math.PI / 180));
  const latRad = MUNICH_LAT * (Math.PI / 180);
  const decRad = declination * (Math.PI / 180);

  // Hour angle at sunrise/sunset
  const hourAngle =
    Math.acos(-Math.tan(latRad) * Math.tan(decRad)) * (180 / Math.PI);
  const solarNoon = 12 - MUNICH_LNG / 15 + 1; // +1 for CET

  const sunriseHour = solarNoon - hourAngle / 15;
  const sunsetHour = solarNoon + hourAngle / 15;

  const sunrise = new Date(date);
  sunrise.setHours(Math.floor(sunriseHour), (sunriseHour % 1) * 60, 0);

  const sunset = new Date(date);
  sunset.setHours(Math.floor(sunsetHour), (sunsetHour % 1) * 60, 0);

  // Golden hours: ~1 hour after sunrise and ~1 hour before sunset
  const goldenHourMorning = new Date(sunrise.getTime() + 60 * 60 * 1000);
  const goldenHourEvening = new Date(sunset.getTime() - 60 * 60 * 1000);

  return { sunrise, sunset, goldenHourMorning, goldenHourEvening };
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function DaylightIndicator() {
  const [sunTimes, setSunTimes] = useState<SunTimes | null>(null);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    const now = new Date();
    setSunTimes(calculateSunTimes(now));
    setCurrentTime(now);

    const interval = setInterval(() => {
      const now = new Date();
      setSunTimes(calculateSunTimes(now));
      setCurrentTime(now);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!sunTimes || !currentTime) {
    return null;
  }

  const isDaylight =
    currentTime >= sunTimes.sunrise && currentTime <= sunTimes.sunset;
  const isGoldenHour =
    (currentTime >= sunTimes.sunrise &&
      currentTime <= sunTimes.goldenHourMorning) ||
    (currentTime >= sunTimes.goldenHourEvening &&
      currentTime <= sunTimes.sunset);

  const daylightHours =
    (sunTimes.sunset.getTime() - sunTimes.sunrise.getTime()) / (1000 * 60 * 60);

  return (
    <div className="flex items-center gap-6 text-[#8B7355]">
      {/* Sun icon with glow during daylight */}
      <div className="relative">
        <div
          className={`w-3 h-3 rounded-full transition-all duration-500 ${
            isDaylight ? "bg-[#C4A35A]" : "bg-[#8B7355] opacity-40"
          }`}
          style={{
            boxShadow: isGoldenHour
              ? "0 0 20px rgba(196, 163, 90, 0.6)"
              : isDaylight
              ? "0 0 10px rgba(196, 163, 90, 0.3)"
              : "none",
          }}
        />
        {isGoldenHour && (
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#C4A35A] animate-ping opacity-30" />
        )}
      </div>

      {/* Daylight info - like a gallery placard */}
      <div className="flex flex-col">
        <span className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.2em] uppercase opacity-60">
          München Tageslicht
        </span>
        <span className="font-[family-name:var(--font-cormorant-garamond)] text-sm mt-0.5">
          {formatTime(sunTimes.sunrise)} – {formatTime(sunTimes.sunset)}
          <span className="opacity-50 ml-2">
            ({daylightHours.toFixed(1)}h)
          </span>
        </span>
      </div>

      {/* Golden hour indicator */}
      {isGoldenHour && (
        <span className="hidden md:inline-flex items-center gap-2 px-3 py-1 bg-[#C4A35A]/10 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C4A35A] animate-pulse" />
          <span className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.15em] uppercase text-[#C4A35A]">
            Golden Hour
          </span>
        </span>
      )}
    </div>
  );
}
