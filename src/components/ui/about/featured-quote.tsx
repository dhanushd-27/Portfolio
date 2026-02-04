"use client";

import React from "react";
import Quote from "@/components/common/quote";
import quotesData from "@/assets/quotes.json";

export default function FeaturedQuote({ className }: { className?: string }) {
  if (!quotesData.quote) return null;

  return (
    <div className={className}>
      <Quote text={quotesData.quote} author={quotesData.author} />
    </div>
  );
}
