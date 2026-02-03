import React from "react";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: IconType;
  className?: string;
  variant?: "contained" | "outlined" | "text" | "ghost"; // Added ghost to match ThemeHandler usage if needed, or I'll map it
  size?: "sm" | "md" | "lg" | "icon";
}

export default function IconButton({
  Icon,
  className,
  variant = "text",
  size = "md",
  ...props
}: IconButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

  const sizeStyles = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
    icon: "h-9 w-9",
  };

  const variantStyles = {
    contained:
      "bg-brand text-brand-foreground shadow hover:bg-brand/90",
    outlined:
      "border border-brand bg-transparent hover:bg-brand/10 text-brand",
    text: "bg-transparent text-brand hover:bg-brand/10",
    ghost:
      "bg-transparent hover:bg-brand/10 text-brand",
  };

  return (
    <button
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      <Icon size={size === "sm" ? 14 : size === "lg" ? 20 : 18} />
    </button>
  );
}
