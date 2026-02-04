import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "text-[10px] md:text-xs px-2.5 py-1 rounded-full bg-surface border border-border text-text-secondary font-medium hover:border-text-muted/50 transition-colors cursor-default",
        className,
      )}
    >
      {children}
    </span>
  );
}
