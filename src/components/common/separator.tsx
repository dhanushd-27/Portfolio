import React from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps {
  className?: string;
}

export default function Separator({ className }: SeparatorProps) {
  return <div className={cn("w-full h-px bg-border/50", className)} />;
}
