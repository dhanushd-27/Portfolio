import React from "react";
import Quote from "@/components/common/quote";

interface ExperienceDescriptionProps {
  description: string;
}

export default function ExperienceDescription({
  description,
}: ExperienceDescriptionProps) {
  return <Quote text={description} />;
}
