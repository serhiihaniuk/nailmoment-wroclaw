import { HeroSection } from "@/features/hero-section";
import { InfoSection } from "@/features/info-section";

export default function Home() {
  return (
    <div className="w-full min-h-[100svh]">
      <main className="w-[390px] mx-auto border border-black pb-22">
        <HeroSection />
        <InfoSection />
      </main>
    </div>
  );
}
