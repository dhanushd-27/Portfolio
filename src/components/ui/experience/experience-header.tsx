import React from "react";

interface ExperienceHeaderProps {
  role: string;
  company: string;
  location: string;
  period: string;
}

export default function ExperienceHeader({
  role,
  company,
  location,
  period,
}: ExperienceHeaderProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start gap-2 md:gap-4">
        <h3 className="text-text-primary font-semibold text-md md:text-lg leading-tight group-hover:text-brand transition-colors">
          {role}
        </h3>
        <span className="text-[10px] md:text-xs text-wrap uppercase tracking-widest text-text-muted/70 font-medium whitespace-nowrap pt-1">
          {period}
        </span>
      </div>
      <div className="flex items-center gap-2 text-text-secondary font-medium">
        <span>{company}</span>
        <span className="text-text-muted/30">•</span>
        <span className="text-xs text-text-muted font-normal">{location}</span>
      </div>
    </div>
  );
}
