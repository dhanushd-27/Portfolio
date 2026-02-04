"use client";

import React from "react";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";
import { cn } from "@/lib/utils";

interface ShowMoreButtonProps {
  isExpanded: boolean;
  onClick: () => void;
  totalItems: number;
  visibleItemsCount: number;
}

export default function ShowMoreButton({
  isExpanded,
  onClick,
  totalItems,
  visibleItemsCount,
}: ShowMoreButtonProps) {
  const moreCount = totalItems - visibleItemsCount;

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={onClick}
        className={cn(
          "flex items-center gap-2 px-6 py-2.5 rounded-full border border-border bg-background hover:bg-muted/50 text-text-secondary text-sm font-medium transition-all duration-300 drop-shadow-sm hover:drop-shadow-md active:scale-95 group",
        )}
      >
        <span>
          {isExpanded ? "Show Less" : `Show More (${moreCount} more)`}
        </span>
        {isExpanded ? (
          <TbChevronUp className="text-lg transition-transform" />
        ) : (
          <TbChevronDown className="text-lg transition-transform group-hover:translate-y-0.5" />
        )}
      </button>
    </div>
  );
}
