"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

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
    <div className="rounded-md border border-line bg-white p-7">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-crimson-soft text-crimson">
          <Clock className="h-5 w-5" />
        </span>
        <h2 className="font-display text-lg font-semibold text-ink">{label}</h2>
      </div>
      <p className="tabular mt-4 font-display text-3xl font-semibold text-ink">
        {time}
      </p>
      <p className="mt-1 text-xs uppercase tracking-widest text-muted">
        Ulaanbaatar, Mongolia
      </p>
    </div>
  );
}
