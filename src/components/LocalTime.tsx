"use client";

import { useEffect, useState } from "react";

export default function LocalTime({ label }: { label: string }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const time = now
    ? new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Ulaanbaatar",
      }).format(now)
    : "--:--:--";

  return (
    <div className="text-white">
      <h2 className="font-display text-2xl font-semibold">{label}</h2>
      <p className="mt-4 font-display text-6xl font-bold tabular-nums tracking-tight sm:text-7xl">
        {time}
      </p>
    </div>
  );
}
