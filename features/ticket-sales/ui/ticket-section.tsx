import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { TicketCard } from "@/entities/ticket/ui/ticket-card";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { SectionHeader } from "@/shared/ui/section-header";
import { mergeUi } from "@/shared/lib/utils";
import { HOME_TICKET_SECTION, HOME_TICKETS } from "@/features/ticket-sales/model/content";
import Link from "next/link";

type TicketSectionProps = {
  className?: string;
};

export function TicketSection({ className }: TicketSectionProps) {
  return (
    <Section uiId="ticket-section" id="ticket-section" density="compact" className={className}>
      <Stack uiId="ticket-content" gap="xl" className="items-center">
        <SectionHeader uiId="ticket-title" title={HOME_TICKET_SECTION.title} />

        <Card uiId="ticket-highlight" surface="accent" spacing="none" className="w-full max-w-xl">
          <CardContent uiId="ticket-highlight" className="flex flex-col gap-5 px-5 py-5 text-center md:px-8 md:py-8">
            <img
              data-ui="ticket-highlight-image"
              src={HOME_TICKET_SECTION.battleCard.imageUrl}
              alt={HOME_TICKET_SECTION.battleCard.imageAlt}
              className="w-full rounded-2xl object-cover"
            />
            <Stack uiId="ticket-highlight-copy" gap="sm" className="items-center">
              <p data-ui="ticket-highlight-eyebrow" className="text-base text-text-inverse/80">
                {HOME_TICKET_SECTION.battleCard.eyebrow}
              </p>
              <SectionHeader
                uiId="ticket-highlight-title"
                size="sm"
                tone="inverse"
                title={HOME_TICKET_SECTION.battleCard.title}
                description={HOME_TICKET_SECTION.battleCard.description}
                descriptionClassName="text-text-inverse/80"
              />
            </Stack>
            <div className="space-y-2">
              {HOME_TICKET_SECTION.battleCard.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/12 px-4 py-3 text-left text-sm leading-6 text-text-inverse md:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-left text-xs leading-5 text-text-inverse/70">
              {HOME_TICKET_SECTION.battleCard.note}
            </p>
            <div className="grid gap-3">
              <Button asChild className="w-full bg-surface-page text-brand-brown">
                <a href="#battle-of-masters">Придбати квиток учасника</a>
              </Button>
              <Button asChild variant="secondary" className="w-full border-white text-white hover:bg-white/10">
                <Link href="/battle">Дізнатися подробиці</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

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
              soldOut={false}
            />
          ))}
        </div>
      </Stack>
    </Section>
  );
}
