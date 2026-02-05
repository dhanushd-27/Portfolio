"use client";

import React from "react";
import SectionHeader from "@/components/common/section-header";
import ExternalLink from "@/components/common/external-link";
import {
  TbBrandX,
  TbBrandLinkedin,
  TbMail,
  TbBrandGithub,
} from "react-icons/tb";
import { SiPeerlist } from "react-icons/si";

import socials from "@/assets/socials.json";

export default function Connect() {
  const getIcon = (key: string) => {
    switch (key) {
      case "x":
        return <TbBrandX className="text-lg" />;
      case "linkedin":
        return <TbBrandLinkedin className="text-lg" />;
      case "email":
        return <TbMail className="text-lg" />;
      case "peerlist":
        return <SiPeerlist className="text-lg" />;
      case "github":
        return <TbBrandGithub className="text-lg" />;
      default:
        return null;
    }
  };

  return (
    <section className="flex flex-col gap-4" id="connect">
      <SectionHeader title="Connect" />

      <div className="flex flex-wrap gap-x-8 gap-y-4 pl-2">
        {Object.entries(socials).map(([key, social]) => (
          <ExternalLink
            key={key}
            href={social.link}
            label={social.name}
            className="flex items-center gap-2 text-sm font-medium"
          >
            {getIcon(key)}
            <span>{social.name}</span>
          </ExternalLink>
        ))}
      </div>
    </section>
  );
}
