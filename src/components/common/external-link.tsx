import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

interface ExternalLinkProps extends React.ComponentPropsWithoutRef<
  typeof Link
> {
  label: string;
}

export default function ExternalLink({
  href,
  label,
  className,
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "text-text-secondary hover:text-text-primary transition-colors duration-200",
        className,
      )}
      {...props}
    >
      {children || label}
    </Link>
  );
}
