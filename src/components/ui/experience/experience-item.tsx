"use client";

import React, { useState } from "react";
import Badge from "@/components/common/badge";
import BulletList from "@/components/common/bullet-list";
import ExperienceHeader from "./experience-header";
import ExperienceDescription from "./experience-description";
import { TbChevronDown } from "react-icons/tb";
import { cn } from "@/lib/utils";
import Separator from "@/components/common/separator";

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  location: string;
  shortDescription: string;
  bulletPoints: string[];
  skills: string[];
}

import ExpandableItemWrapper from "@/components/common/expandable-item-wrapper";

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

      <ExpandableItemWrapper
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
        toggleLabelClosed="Know more"
      >
        <div className="flex flex-col gap-4">
          <Separator className="mt-2" />
          <div className="pt-2">
            <BulletList items={bulletPoints} />
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      </ExpandableItemWrapper>
    </div>
  );
}
