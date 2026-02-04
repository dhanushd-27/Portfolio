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
  const linkLabel = deployed ? "Live" : "Video";
  const LinkIcon = deployed ? TbExternalLink : TbPlayerPlay;

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
            {mainLink !== "#" && (
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
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-1.5 text-xs font-semibold text-text-muted hover:text-brand transition-colors w-fit group/btn"
      >
        <span>{isExpanded ? "Show less" : "Project Details"}</span>
        <TbChevronDown
          className={cn(
            "text-base transition-transform duration-300",
            isExpanded ? "rotate-180" : "rotate-0",
          )}
        />
      </button>
    </div>
  );
}
