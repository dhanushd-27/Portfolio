"use client";

import React from "react";
import { TbChevronDown } from "react-icons/tb";
import { cn } from "@/lib/utils";

interface ExpandableItemWrapperProps {
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  toggleLabelOpen?: string;
  toggleLabelClosed?: string;
}

export default function ExpandableItemWrapper({
  isExpanded,
  onToggle,
  children,
  toggleLabelOpen = "Show less",
  toggleLabelClosed = "Show more",
}: ExpandableItemWrapperProps) {
  return (
    <div className="flex flex-col gap-3">
      {/* Expanded Content */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isExpanded
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 overflow-hidden",
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="flex items-center gap-1.5 text-xs font-semibold text-text-muted hover:text-brand transition-colors w-fit group/btn"
      >
        <span>{isExpanded ? toggleLabelOpen : toggleLabelClosed}</span>
        <TbChevronDown
          className={cn(
            "text-base transition-transform duration-300",
            isExpanded ? "rotate-180" : "rotate-0",
          )}
        />
      </button>
    </div>
  );
}
