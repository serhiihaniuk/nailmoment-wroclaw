import { BuyTicketButton } from "@/entities/ticket/ui/buy-ticket-button";
import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { Schedule } from "@/features/festival-schedule/ui/schedule-card";
import { SectionHeader } from "@/shared/ui/section-header";
import {
  HOME_SCHEDULE,
  HOME_SCHEDULE_SECTION,
} from "@/features/festival-schedule/model/content";

type FestivalScheduleSectionProps = {
  className?: string;
};

export function FestivalScheduleSection({
  className,
}: FestivalScheduleSectionProps) {
  return (
    <Section uiId="schedule-section" density="compact" className={className}>
      <Stack uiId="schedule-content" gap="lg" className="items-center">
        <SectionHeader uiId="schedule-title" title={HOME_SCHEDULE_SECTION.title} />
        <div data-ui="schedule-wrap" className="w-full max-w-3xl">
          <Schedule uiId="schedule" items={HOME_SCHEDULE} />
        </div>
        <BuyTicketButton uiId="schedule-buy-ticket" className="w-full sm:max-w-xs" />
      </Stack>
    </Section>
  );
}
