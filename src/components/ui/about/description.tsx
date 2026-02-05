import React from "react";
import ExternalLink from "@/components/common/external-link";

export default function Description() {
  return (
    <div className="flex flex-col gap-4 text-text-secondary/75 leading-relaxed text-sm md:text-base">
      {/* Introduction */}
      <p>
        I build{" "}
        <span className="text-text-primary font-medium">
          full-stack, AI-powered applications
        </span>{" "}
        with a strong focus on{" "}
        <span className="text-text-primary font-medium">Applied AI</span>. I
        care deeply about clean and readable code.
      </p>
      {/* Previous Experience */}
      <p>
        Previously, I worked as a frontend developer at{" "}
        <ExternalLink
          href="https://www.linkedin.com/company/sereno-ai/"
          label="Sereno Volante"
          className="text-text-primary font-medium underline"
        />{" "}
        building an AI Chatbot for a well-known brand.
      </p>
      {/* Main Tech Stack */}
      <p>
        I work most days with{" "}
        <span className="text-text-primary font-medium">
          Next.js and Express.js using TypeScript
        </span>
        , and I'm currently building applications with{" "}
        <span className="text-text-primary font-medium">
          Python, FastAPI, and LangGraph
        </span>
        .
      </p>
      {/* Collaboration */}
      <p>
        Open to{" "}
        <span className="text-text-primary font-medium">collaborations</span>{" "}
        and <span className="text-text-primary font-medium">opportunities</span>
        . Feel free to drop a{" "}
        <ExternalLink
          href="https://twitter.com/messages/compose?recipient_id=1719705300888920064&text=Hi%20Dhanush%2C%20I%20came%20across%20your%20portfolio%20and%20"
          label="DM"
          className="text-text-primary font-medium underline"
        />
        .
      </p>
    </div>
  );
}
