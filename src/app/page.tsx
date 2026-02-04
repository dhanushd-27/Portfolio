import { ThemeHandler } from "@/components/theme/theme-handler";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div
        className="h-full w-6 border-r lg:border-x border-dim-gray opacity-30"
        style={{
          background:
            "repeating-linear-gradient(45deg, var(--color-border), var(--color-border) 1px, transparent 2px, transparent 8px)",
        }}
      />
      <div className="flex-1 lg:flex-none lg:w-200 items-center justify-center gap-2">
        <ThemeHandler />
      </div>
      <div
        className="h-full w-6 border-l lg:border-x border-dim-gray opacity-30"
        style={{
          background:
            "repeating-linear-gradient(135deg, var(--color-border), var(--color-border) 1px, transparent 2px, transparent 8px)",
        }}
      />
    </main>
  );
}
