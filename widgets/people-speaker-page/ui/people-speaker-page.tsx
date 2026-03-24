import { PeoplesSpeakerSection } from "@/features/people-speaker-hero/ui/peoples-speaker-section";
import { PageShell } from "@/shared/ui/layout/page-shell";

export function PeopleSpeakerPage() {
  return (
    <PageShell className="min-h-[100dvh]">
      <PeoplesSpeakerSection />
    </PageShell>
  );
}
