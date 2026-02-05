import React from "react";
import { cn } from "@/lib/utils";

interface BulletListProps {
  items: string[];
  className?: string;
  itemClassName?: string;
}

export default function BulletList({
  items,
  className,
  itemClassName,
}: BulletListProps) {
  return (
    <ul className={cn("flex flex-col gap-2", className)}>
      {items.map((item, index) => (
        <li
          key={index}
          className={cn(
            "text-xs md:text-sm text-text-secondary/70 leading-relaxed list-disc list-outside ml-4",
            itemClassName,
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
