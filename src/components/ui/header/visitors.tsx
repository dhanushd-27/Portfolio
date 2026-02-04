import { prisma } from "@/lib/prisma";

export default async function Visitors() {
  const visitorRecord = await prisma.visitors.findUnique({
    where: { id: 1 },
  });
  const visitors = visitorRecord?.count ?? 0;

  if (!visitors && visitors !== 0) {
    return <p className="text-xs font-medium text-dim-gray md:text-sm">--,--- visitors</p>;
  }

  return (
    <>
      <p className="text-xs font-medium text-dim-gray md:text-sm">
        {visitors.toLocaleString()} visitors
      </p>
    </>
  );
}
