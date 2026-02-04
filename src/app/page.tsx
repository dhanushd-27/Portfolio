import About from "@/components/ui/about/about";
import Border from "@/components/common/border";
import Header from "@/components/ui/header/header";
import { prisma } from "@/lib/prisma";
import Experience from "@/components/ui/experience/experience";

export const dynamic = "force-dynamic";

export default async function Home() {
  await prisma.visitors.upsert({
    where: { id: 1 },
    update: { count: { increment: 1 } },
    create: { id: 1, count: 1 },
  });

  return (
    <main className="flex min-h-screen w-full justify-center">
      <Border side="left" />
      <div className="flex-1 lg:flex-none lg:w-200 gap-2 px-2 md:px-4">
        <Header />
        <section className="flex flex-col gap-12 px-4 sm:px-0">
          <About />
          <Experience />
        </section>
      </div>
      <Border side="right" />
    </main>
  );
}
