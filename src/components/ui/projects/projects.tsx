"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/common/section-header";
import ProjectItem from "./project-item";
import projectsData from "@/assets/projects.json";
import ShowMoreButton from "@/components/common/show-more-button";

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
        <ShowMoreButton
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
          totalItems={projectsData.length}
          visibleItemsCount={3}
        />
      )}
    </section>
  );
}
