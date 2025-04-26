import { CompetitionSection } from "@/features/competition-section";
import { FaqSection } from "@/features/faq-section";
import { FooterInfoSection } from "@/features/footer-info-section";
import { HeroSection } from "@/features/hero-section";
import { InfoSection } from "@/features/info-section";
import { LocationSection } from "@/features/location-section";
import { PastEventCarouselSection } from "@/features/past-event-section";
import { FestivalScheduleSection } from "@/features/schedule-section";
import { SpeakersSection } from "@/features/speaker-section";
import { TicketSection } from "@/features/tickets-section";
import { AfterpartyCard } from "@/widgets/afterparty-card";

export default function Home() {
  return (
    <div className="w-full min-h-[100svh]">
      <main className="w-full max-w-[490px] overflow-hidden space-y-14 mx-auto bg-blue-background">
        <HeroSection />
        <InfoSection />
        <CompetitionSection />
        <SpeakersSection />
        <AfterpartyCard />
        <TicketSection />
        <FestivalScheduleSection />
        <PastEventCarouselSection />
        <LocationSection />
        <FaqSection />
        <FooterInfoSection />
      </main>
    </div>
  );
}
