import Border from "@/components/common/border";
import Header from "@/components/header/header";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  await prisma.visitors.upsert({
    where: { id: 1 },
    update: { count: { increment: 1 } },
    create: { id: 1, count: 1 },
  });

  return (
    <main className="flex h-screen w-screen justify-center">
      <Border side="left" />
      <div className="flex-1 lg:flex-none lg:w-200 items-center justify-center gap-2 relative">
        <Header />
      </div>
      <Border side="right" />
    </main>
  );
}
