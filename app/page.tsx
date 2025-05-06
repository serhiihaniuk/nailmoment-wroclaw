import { CompetitionSection } from "@/features/competition-section";
import { FaqSection } from "@/features/faq-section";
import { FooterInfoSection } from "@/features/footer-info-section";
import { HeroSection } from "@/features/main/hero-section";
import { InfoSection } from "@/features/main/info-section";
import { LocationSection } from "@/features/location-section";
import { PastEventCarouselSection } from "@/features/main/past-event-section";
import { FestivalScheduleSection } from "@/features/main/schedule-section";
import { SpeakersSection } from "@/features/main/speaker-section";
import { TicketSection } from "@/features/main/tickets-section";
import { AfterpartyCard } from "@/widgets/afterparty-card";

export default function Home() {
  return (
    <main className="w-full max-w-4xl shadow-2xl overflow-hidden space-y-14 mx-auto bg-blue-background md:space-y-28">
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
  );
}
