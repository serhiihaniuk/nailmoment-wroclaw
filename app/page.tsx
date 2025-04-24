import { HeroSection } from "@/features/hero";

export default function Home() {
  return (
    <div className="w-full min-h-[100svh]">
      <main className="w-[390px] mx-auto border border-black px-4">
        <HeroSection />
      </main>
    </div>
  );
}
