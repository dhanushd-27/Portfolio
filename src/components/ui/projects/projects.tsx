"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/common/section-header";
import ProjectItem from "./project-item";
import projectsData from "@/assets/projects.json";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayData = isExpanded ? projectsData : projectsData.slice(0, 3);
  const hasMore = projectsData.length > 3;

  return (
    <section className="flex flex-col gap-4" id="projects">
      <SectionHeader title="Projects" />

      <div className="flex flex-col gap-4 md:gap-6 pl-2">
        {displayData.map((project: any, index: number) => (
          <ProjectItem
            key={index}
            projectName={project.projectName}
            projectDescription={project.projectDescription}
            projectFeatures={project.projectFeatures}
            techStack={project.techStack}
            deployed={project.deployed}
            link={project.link}
            video={project.video}
            repo={project.repo}
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
                : `Show More (${projectsData.length - 3} more)`}
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
