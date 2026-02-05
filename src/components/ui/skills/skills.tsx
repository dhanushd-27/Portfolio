"use client";

import React from "react";
import SectionHeader from "@/components/common/section-header";
import Badge from "@/components/common/badge";
import skillsData from "@/assets/skills_and_tools.json";

export default function Skills() {
  return (
    <section className="flex flex-col gap-4" id="skills">
      <SectionHeader title="Skills & Tools" />

      <div className="flex flex-col gap-6 pl-2">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="flex flex-col gap-3 group">
            <h3 className="text-text-primary font-semibold text-md md:text-lg leading-tight group-hover:text-brand transition-colors">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
