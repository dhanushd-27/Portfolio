import React from "react";

interface ExperienceDescriptionProps {
  description: string;
}

export default function ExperienceDescription({
  description,
}: ExperienceDescriptionProps) {
  return (
    <p className="text-sm text-text-secondary font-medium leading-relaxed italic border-l-2 border-border/50 pl-3">
      {description}
    </p>
  );
}
