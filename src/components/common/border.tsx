import React from "react";
import { cn } from "@/lib/utils";

interface BorderProps {
  side: "left" | "right";
  className?: string;
}

export default function Border({ side, className }: BorderProps) {
  const isLeft = side === "left";

  return (
    <div
      className={cn(
        "w-6 border-dim-gray opacity-30",
        isLeft ? "border-r lg:border-x" : "border-l lg:border-x",
        className,
      )}
      style={{
        background: `repeating-linear-gradient(${
          isLeft ? "45" : "135"
        }deg, var(--color-border), var(--color-border) 1px, transparent 2px, transparent 8px)`,
      }}
    />
  );
}
