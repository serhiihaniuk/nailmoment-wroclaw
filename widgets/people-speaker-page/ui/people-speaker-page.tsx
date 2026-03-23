import { FooterInfoSection } from "@/features/footer-info/ui/footer-info-section";
import { PeoplesSpeakerSection } from "@/features/people-speaker-hero/ui/peoples-speaker-section";
import { PageShell } from "@/shared/ui/layout/page-shell";

export function PeopleSpeakerPage() {
  return (
    <PageShell className="flex min-h-[100dvh] flex-col space-y-14 bg-blue-background md:space-y-28">
      <PeoplesSpeakerSection />
      <FooterInfoSection />
    </PageShell>
  );
}
