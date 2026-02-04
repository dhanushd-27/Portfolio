"use client";

import React, { useState } from "react";
import Badge from "@/components/common/badge";
import BulletList from "@/components/common/bullet-list";
import ExperienceHeader from "./experience-header";
import ExperienceDescription from "./experience-description";
import { TbChevronDown } from "react-icons/tb";
import { cn } from "@/lib/utils";

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  location: string;
  shortDescription: string;
  bulletPoints: string[];
  skills: string[];
}

export default function ExperienceItem({
  company,
  role,
  period,
  location,
  shortDescription,
  bulletPoints,
  skills,
}: ExperienceItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-3 group">
      <div className="flex flex-col gap-3">
        <ExperienceHeader
          role={role}
          company={company}
          location={location}
          period={period}
        />

        <ExperienceDescription description={shortDescription} />
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-1.5 text-xs font-semibold text-text-muted hover:text-brand transition-colors w-fit group/btn"
      >
        <span>{isExpanded ? "Show less" : "Know more"}</span>
        <TbChevronDown
          className={cn(
            "text-base transition-transform duration-300",
            isExpanded ? "rotate-180" : "rotate-0",
          )}
        />
      </button>

      {/* Expanded Content */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isExpanded
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 overflow-hidden",
        )}
      >
        <div className="overflow-hidden flex flex-col gap-4">
          <div className="pt-2">
            <BulletList items={bulletPoints} />
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>

          <div className="w-full h-px bg-border/50"></div>
        </div>
      </div>
    </div>
  );
}
