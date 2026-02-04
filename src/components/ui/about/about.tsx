import React from "react";
import Description from "./description";
import Headline from "./headline";
import SocialLinks from "./social-links";

export default function About() {
  return (
    <section className="flex flex-col gap-8 text-start w-full">
      {/* Header: Name and Role */}
      <div className="flex w-full justify-between pt-8">
        <Headline />
        <SocialLinks />
      </div>

      {/* About Section */}
      <div className="flex flex-col gap-6 text-start">
        <Description />
      </div>
    </section>
  );
}
