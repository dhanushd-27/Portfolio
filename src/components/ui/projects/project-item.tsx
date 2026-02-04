"use client";

import React, { useState } from "react";
import Badge from "@/components/common/badge";
import BulletList from "@/components/common/bullet-list";
import {
  TbChevronDown,
  TbBrandGithub,
  TbExternalLink,
  TbPlayerPlay,
} from "react-icons/tb";
import { cn } from "@/lib/utils";

interface ProjectItemProps {
  projectName: string;
  projectDescription: string;
  projectFeatures: string[];
  techStack: string[];
  deployed: boolean;
  link: string;
  video: string;
  repo: string;
}

import ExpandableItemWrapper from "@/components/common/expandable-item-wrapper";

export default function ProjectItem({
  projectName,
  projectDescription,
  projectFeatures,
  techStack,
  deployed,
  link,
  video,
  repo,
}: ProjectItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const mainLink = deployed ? link : video;
  const linkLabel = deployed ? "Link" : "Video";
  const LinkIcon = deployed ? TbExternalLink : TbPlayerPlay;
  const showMainLink = deployed ? mainLink !== "#" : true;

  return (
    <div className="flex flex-col gap-3 group">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row justify-between items-start gap-2 md:gap-4">
          <h3 className="text-text-primary font-semibold text-md md:text-lg leading-tight group-hover:text-brand transition-colors">
            {projectName}
          </h3>
          <div className="flex gap-4 items-center pt-1">
            {repo !== "#" && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-medium text-text-muted hover:text-text-primary transition-colors"
              >
                <TbBrandGithub className="text-sm" />
                <span>Repo</span>
              </a>
            )}
            {showMainLink && (
              <a
                href={mainLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-medium text-text-muted hover:text-text-primary transition-colors"
              >
                <LinkIcon className="text-sm" />
                <span>{linkLabel}</span>
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-text-secondary/85 leading-relaxed">
          {projectDescription}
        </p>
      </div>

      <ExpandableItemWrapper
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
        toggleLabelClosed="Project Details"
      >
        <div className="flex flex-col gap-4">
          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted/60 mb-2">
              Key Features
            </h4>
            <BulletList items={projectFeatures} />
          </div>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="w-full h-px bg-border/50"></div>
        </div>
      </ExpandableItemWrapper>
    </div>
  );
}
