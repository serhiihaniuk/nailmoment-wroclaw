import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { TicketCard } from "@/entities/ticket/ui/ticket-card";
import { SectionHeader } from "@/shared/ui/section-header";
import { mergeUi } from "@/shared/lib/utils";
import { HOME_TICKET_SECTION, HOME_TICKETS } from "@/features/ticket-sales/model/content";
import { BattleTicketHighlightCard } from "@/features/ticket-sales/ui/battle-ticket-highlight-card";

type TicketSectionProps = {
  className?: string;
};

export function TicketSection({ className }: TicketSectionProps) {
  return (
    <Section uiId="ticket-section" id="ticket-section" density="compact" className={className}>
      <Stack uiId="ticket-content" gap="lg" className="items-center">
        <SectionHeader uiId="ticket-title" title={HOME_TICKET_SECTION.title} />

        <BattleTicketHighlightCard {...HOME_TICKET_SECTION.battleCard} />

        <div data-ui="ticket-cards" className="grid w-full gap-6">
          {HOME_TICKETS.map((ticket, index) => (
            <TicketCard
              uiId={mergeUi("ticket-card", index + 1)}
              key={ticket.id}
              variant={ticket.variant}
              imageUrl={ticket.imageUrl}
              imageAlt={ticket.imageAlt}
              title={ticket.title}
              features={ticket.features}
              price={ticket.newPrice}
              buttonText={ticket.buttonText}
              href={ticket.href}
              soldOut={ticket.soldOut}
            />
          ))}
        </div>
      </Stack>
    </Section>
  );
}
