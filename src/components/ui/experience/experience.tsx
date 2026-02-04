"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/common/section-header";
import ExperienceItem from "./experience-item";
import experienceData from "@/assets/experience.json";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";
import { cn } from "@/lib/utils";

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
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              "flex items-center gap-2 px-6 py-2.5 rounded-full border border-border bg-background hover:bg-muted/50 text-text-secondary text-sm font-medium transition-all duration-300 drop-shadow-sm hover:drop-shadow-md active:scale-95 group",
            )}
          >
            <span>
              {isExpanded
                ? "Show Less"
                : `Show More (${experienceData.length - 3} more)`}
            </span>
            {isExpanded ? (
              <TbChevronUp className="text-lg transition-transform" />
            ) : (
              <TbChevronDown className="text-lg transition-transform group-hover:translate-y-0.5" />
            )}
          </button>
        </div>
      )}
    </section>
  );
}
