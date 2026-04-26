"use client";

import { useEffect, useMemo, useState } from "react";
import { TicketCard } from "@/entities/ticket/ui/ticket-card";
import { HOME_TICKET_SECTION, HOME_TICKETS } from "@/features/ticket-sales/model/content";
import {
  resolveTicketSalesState,
  type TicketSalesState,
} from "@/features/ticket-sales/model/pricing";
import { BattleTicketHighlightCard } from "@/features/ticket-sales/ui/battle-ticket-highlight-card";
import { TicketSalesCountdown } from "@/features/ticket-sales/ui/ticket-sales-countdown";
import { mergeUi } from "@/shared/lib/utils";

type TicketSalesLiveContentProps = {
  initialState: TicketSalesState;
};

export function TicketSalesLiveContent({ initialState }: TicketSalesLiveContentProps) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTick((current) => current + 1);
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const salesState = useMemo(
    () => (tick === 0 ? initialState : resolveTicketSalesState(HOME_TICKETS, new Date())),
    [initialState, tick]
  );

  return (
    <>
      {salesState.countdown.mode !== "none" ? (
        <TicketSalesCountdown {...salesState.countdown} />
      ) : null}

      <BattleTicketHighlightCard {...HOME_TICKET_SECTION.battleCard} />

      <div data-ui="ticket-cards" className="grid w-full gap-6">
        {salesState.tickets.map((ticket, index) => (
          <TicketCard
            uiId={mergeUi("ticket-card", index + 1)}
            key={ticket.id}
            variant={ticket.variant}
            imageUrl={ticket.imageUrl}
            imageAlt={ticket.imageAlt}
            title={ticket.title}
            description={ticket.description}
            features={ticket.features}
            note={ticket.note}
            price={ticket.price}
            newPrice={ticket.newPrice}
            lowestPriceLabel={ticket.lowestPriceLabel}
            buttonText={ticket.buttonText}
            href={ticket.href}
            soldOut={ticket.soldOut}
          />
        ))}
      </div>
    </>
  );
}
