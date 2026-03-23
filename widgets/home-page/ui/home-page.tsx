import { AfterpartySection } from "@/features/afterparty/ui/afterparty-section";
import { CompetitionSection } from "@/features/competition-promo/ui/competition-section";
import { FaqSection } from "@/features/faq/ui/faq-section";
import { FestivalInfoSection } from "@/features/festival-info/ui/festival-info-section";
import { FestivalScheduleSection } from "@/features/festival-schedule/ui/festival-schedule-section";
import { SpeakersSection } from "@/features/festival-speakers/ui/speakers-section";
import { FooterInfoSection } from "@/features/footer-info/ui/footer-info-section";
import { HeroSection } from "@/features/hero/ui/hero-section";
import { LocationSection } from "@/features/location/ui/location-section";
import { MarketShowcaseSection } from "@/features/market-showcase/ui/market-showcase-section";
import { PastEventCarouselSection } from "@/features/past-event-gallery/ui/past-event-carousel-section";
import { TicketSection } from "@/features/ticket-sales/ui/ticket-section";
import { WarsawAnnouncementSection } from "@/features/warsaw-announcement/ui/warsaw-announcement-section";
import { PageShell } from "@/shared/ui/layout/page-shell";

export function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <FestivalInfoSection />
      <WarsawAnnouncementSection />
      <MarketShowcaseSection />
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
