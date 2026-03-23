import { CompetitionSection } from "@/features/competition-section";
import { FaqSection } from "@/features/faq-section";
import { FooterInfoSection } from "@/features/footer-info-section";
import { PageShell } from "@/components/layout/page-shell";
import { AfterpartySection } from "@/features/main/afterparty-section";
import { HeroSection } from "@/features/main/hero-section";
import { InfoSection } from "@/features/main/info-section";
import { LocationSection } from "@/features/location-section";
import { PastEventCarouselSection } from "@/features/main/past-event-section";
import { FestivalScheduleSection } from "@/features/main/schedule-section";
import { SpeakersSection } from "@/features/main/speaker-section";
import { TicketSection } from "@/features/main/tickets-section";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <InfoSection />
      <CompetitionSection />
      <SpeakersSection />
      <AfterpartySection />
      <TicketSection />
      <FestivalScheduleSection />
      <PastEventCarouselSection />
      <LocationSection />
      <FaqSection />
      <FooterInfoSection />
    </PageShell>
  );
}
