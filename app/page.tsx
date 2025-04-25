import { CompetitionSection } from "@/features/competition-section";
import { HeroSection } from "@/features/hero-section";
import { InfoSection } from "@/features/info-section";
import { FestivalScheduleSection } from "@/features/schedule-section";
import { SpeakersSection } from "@/features/speaker-section";
import { TicketSection } from "@/features/tickets-section";
import { AfterpartyCard } from "@/widgets/afterparty-card";

export default function Home() {
  return (
    <div className="w-full min-h-[100svh]">
      <main className="w-full max-w-[390px] space-y-14 mx-auto border border-black pb-22">
        <HeroSection />
        <InfoSection />
        <CompetitionSection />
        <SpeakersSection />
        <AfterpartyCard />
        <TicketSection />
        <FestivalScheduleSection />
      </main>
    </div>
  );
}
