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
        care deeply about architecting scalable systems and clean code.
      </p>
      {/* Previous Experience */}
      <p>
        Currently, I am a Full Stack Developer at{" "}
        <span className="text-text-primary font-medium">Zentor</span>, building
        internal order management systems and optimizing platform features.
      </p>
      {/* Main Tech Stack */}
      <p>
        I work most days with{" "}
        <span className="text-text-primary font-medium">
          Next.js, TypeScript, and Prisma
        </span>
        , and I&apos;m specialized in building AI-driven tools using{" "}
        <span className="text-text-primary font-medium">
          LangChain and Gemini API
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
