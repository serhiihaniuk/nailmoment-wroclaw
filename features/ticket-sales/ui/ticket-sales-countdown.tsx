"use client";

import { Card, CardContent } from "@/shared/ui/card";
import { TypographyDisplay, TypographyText, TypographyTitle } from "@/shared/ui/typography";

type TicketSalesCountdownProps = {
  mode: "start" | "price-increase" | "none";
  title: string;
  subtitle: string;
  targetAt?: string;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const COUNTDOWN_UNITS = [
  { key: "days", label: "днів" },
  { key: "hours", label: "год" },
  { key: "minutes", label: "хв" },
  { key: "seconds", label: "сек" },
] as const;

function formatUnit(value: number) {
  return value.toString().padStart(2, "0");
}

export function TicketSalesCountdown({
  mode,
  title,
  subtitle,
  targetAt,
  days,
  hours,
  minutes,
  seconds,
}: TicketSalesCountdownProps) {
  if (mode === "none") {
    return null;
  }

  const values = { days, hours, minutes, seconds };

  return (
    <Card
      uiId="ticket-sales-countdown"
      spacing="none"
      className="w-full max-w-3xl border border-brand-olive/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(245,243,231,0.94))] shadow-card"
    >
      <CardContent className="px-5 py-6 md:px-8 md:py-8">
        <div className="flex flex-col items-center gap-6 text-brand-brown">
          <div className="space-y-2 text-center">
            <TypographyText
              as="p"
              uiId="ticket-sales-countdown-eyebrow"
              size="lead"
              className="uppercase tracking-[0.22em] text-brand-olive/80"
            >
              {title}
            </TypographyText>
            <TypographyTitle
              as="h3"
              uiId="ticket-sales-countdown-title"
              order="order3"
              tone="accent"
            >
              {targetAt ? formatWarsawDateTime(targetAt) : ""}
            </TypographyTitle>
            <TypographyText
              as="p"
              uiId="ticket-sales-countdown-note"
              size="body"
              tone="accent"
              className="text-brand-brown/80"
            >
              {subtitle}
            </TypographyText>
          </div>

          <div
            data-ui="ticket-sales-countdown-grid"
            className="grid w-full max-w-2xl grid-cols-4 gap-3 md:gap-4"
          >
            {COUNTDOWN_UNITS.map((unit) => (
              <div
                key={unit.key}
                data-ui={`ticket-sales-countdown-${unit.key}`}
                className="rounded-2xl border border-brand-brown/10 bg-white/70 px-3 py-4 text-center shadow-sm"
              >
                <TypographyDisplay
                  as="div"
                  uiId={`ticket-sales-countdown-${unit.key}-value`}
                  tone="accent"
                  size="sm"
                  className="tabular-nums"
                >
                  {formatUnit(values[unit.key])}
                </TypographyDisplay>
                <TypographyText
                  as="div"
                  uiId={`ticket-sales-countdown-${unit.key}-label`}
                  size="sm"
                  tone="accent"
                  className="mt-1 uppercase tracking-[0.16em] text-brand-brown/70"
                >
                  {unit.label}
                </TypographyText>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function formatWarsawDateTime(value: string) {
  return new Intl.DateTimeFormat("uk-UA", {
    timeZone: "Europe/Warsaw",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}
