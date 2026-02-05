import React from "react";
import { cn } from "@/lib/utils";

interface QuoteProps {
  text: string;
  className?: string;
  author?: string;
}

export default function Quote({ text, className, author }: QuoteProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <p className="text-sm text-text-secondary font-medium leading-relaxed italic border-l-2 border-border/50 pl-3">
        "{text}"
      </p>
      {author && (
        <span className="text-[10px] md:text-xs text-text-muted font-medium pl-3 uppercase tracking-widest">
          — {author}
        </span>
      )}
    </div>
  );
}
