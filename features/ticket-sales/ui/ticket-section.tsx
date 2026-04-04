import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { SectionHeader } from "@/shared/ui/section-header";
import { HOME_TICKET_SECTION, HOME_TICKETS } from "@/features/ticket-sales/model/content";
import { resolveTicketSalesState } from "@/features/ticket-sales/model/pricing";
import { TicketSalesLiveContent } from "@/features/ticket-sales/ui/ticket-sales-live-content";

type TicketSectionProps = {
  className?: string;
};

export function TicketSection({ className }: TicketSectionProps) {
  const initialState = resolveTicketSalesState(HOME_TICKETS);

  return (
    <Section uiId="ticket-section" id="ticket-section" density="compact" className={className}>
      <Stack uiId="ticket-content" gap="lg" className="items-center">
        <SectionHeader uiId="ticket-title" title={HOME_TICKET_SECTION.title} />
        <TicketSalesLiveContent initialState={initialState} />
      </Stack>
    </Section>
  );
}
