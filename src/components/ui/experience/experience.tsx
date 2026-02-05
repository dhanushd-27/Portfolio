"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/common/section-header";
import ExperienceItem from "./experience-item";
import experienceData from "@/assets/experience.json";
import ShowMoreButton from "@/components/common/show-more-button";

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayData = isExpanded ? experienceData : experienceData.slice(0, 3);
  const hasMore = experienceData.length > 3;

  return (
    <section className="flex flex-col gap-4" id="experience">
      <SectionHeader title="Experience" />

      <div className="flex flex-col gap-4 md:gap-6 pl-2">
        {displayData.map((exp: any, index: number) => (
          <ExperienceItem
            key={index}
            company={exp.company}
            role={exp.role}
            period={exp.period}
            shortDescription={exp.shortDescription}
            bulletPoints={exp.bulletPoints}
            skills={exp.skills}
            location={exp.location}
          />
        ))}
      </div>

      {hasMore && (
        <ShowMoreButton
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
          totalItems={experienceData.length}
          visibleItemsCount={3}
        />
      )}
    </section>
  );
}
