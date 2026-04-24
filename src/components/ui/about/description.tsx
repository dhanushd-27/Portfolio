import ExternalLink from "@/components/common/external-link";

export default function Description() {
  return (
    <div className="flex flex-col gap-4 text-text-secondary/75 leading-relaxed text-sm md:text-base">
      {/* Introduction */}
      <p>
        I build{" "}
        <span className="text-text-primary font-medium">
          full-stack applications
        </span>{" "}
        leveraging{" "}
        <span className="text-text-primary font-medium">AI assisted coding </span>
        to code and ship projects faster. I focus on building systems that work
        well and writing clean code.
      </p>
      {/* Previous Experience */}
      <p>
        I am currently{" "}
        <span className="text-text-primary font-medium">open for work</span>.
        Previously, I worked at{" "}
        <span className="text-text-primary font-medium">Zentor</span> as a Full
        Stack Developer. I built a dashboard to manage orders and helped make
        the platform run better.
      </p>
      {/* Main Tech Stack */}
      <p>
        I mostly build with{" "}
        <span className="text-text-primary font-medium">
          Next.js and TypeScript
        </span>
        . For the backend, I use{" "}
        <span className="text-text-primary font-medium">
          FastAPI, Express, and Prisma
        </span>{" "}
        to handle data and build APIs.
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
