import Age from "./age";

export default function Headline() {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-xl text-text-primary font-bold tracking-tight">
          Dhanush Draksharapu
        </h2>
        <p className="text-sm flex-col md:flex-row md:text-base text-text-muted font-medium flex items-start md:items-center gap-1">
          Full Stack Developer
          <span className="hidden md:inline"> | </span>
          <Age />
        </p>
      </div>
    </>
  );
}
