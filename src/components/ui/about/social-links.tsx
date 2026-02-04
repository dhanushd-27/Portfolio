import React from "react";
import ExternalLink from "@/components/common/external-link";

import socials from "@/assets/socials.json";

export default function SocialLinks() {
  const displaySocials = [socials.github, socials.linkedin, socials.x];

  return (
    <div className="flex gap-4 h-full items-center justify-start sm:justify-center pr-2 underline">
      {displaySocials.map((social) => (
        <ExternalLink
          key={social.name}
          href={social.link}
          label={social.name}
          className="text-xs md:text-sm transition-colors hover:text-text-primary"
        >
          {social.name}
        </ExternalLink>
      ))}
    </div>
  );
}
