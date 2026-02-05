"use client";

import { useState, useEffect } from "react";

export default function Time() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const istString = time
    ? time.toLocaleTimeString("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
    : "HH:MM:SS";

  return (
    <div className="text-xs font-medium text-dim-gray md:text-sm">
      {istString} GMT +5:30
    </div>
  );
}
