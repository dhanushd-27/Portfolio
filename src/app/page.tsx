import Main from "@/components/Main";
import ProjectSection from "@/components/ProjectSection";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="mx-[120px] flex flex-col justify-start items-center">
      <Main />
      <TechStack />
      <ProjectSection />
    </main>
  );
}
