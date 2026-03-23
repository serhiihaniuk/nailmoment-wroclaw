import { BuyTicketButton } from "@/blocks/ui/buy-ticket";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { Schedule } from "@/components/patterns/schedule-card";
import { SectionHeader } from "@/components/ui/section-header";
import {
  HOME_SCHEDULE,
  HOME_SCHEDULE_SECTION,
} from "@/shared/content/home/schedule";

type FestivalScheduleSectionProps = {
  className?: string;
};

export function FestivalScheduleSection({
  className,
}: FestivalScheduleSectionProps) {
  return (
    <Section density="compact" className={className}>
      <Stack gap="lg" className="items-center">
        <SectionHeader title={HOME_SCHEDULE_SECTION.title} />
        <div className="w-full max-w-3xl">
          <Schedule items={HOME_SCHEDULE} />
        </div>
        <BuyTicketButton className="w-full max-w-xs" />
      </Stack>
    </Section>
  );
}
