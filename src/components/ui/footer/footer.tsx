"use client";

import React, { useEffect, useState } from "react";
import Separator from "@/components/common/separator";
import FeaturedQuote from "@/components/ui/about/featured-quote";

export default function Footer() {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    // Remove the comma after the day if necessary, or match the user format: "Wed, Feb 4, 2026"
    // toLocaleDateString with these options usually gives "Wed, Feb 4, 2026"
    setDate(formatted);
  }, []);

  return (
    <footer className="flex flex-col gap-8 pb-16 pt-8">
      <Separator />

      <div className="flex flex-col gap-6">
        <FeaturedQuote className="opacity-50 hover:opacity-100 transition-opacity duration-300 hover:cursor-pointer select-none" />

        <div className="flex justify-between items-center text-[10px] md:text-xs font-medium uppercase tracking-widest text-text-muted/60">
          <span>{date}</span>
          <span>Asia / Bengaluru</span>
        </div>
      </div>
    </footer>
  );
}
