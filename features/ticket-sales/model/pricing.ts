import { type TicketInfo } from "@/entities/ticket/model/types";

type TicketTier = "standard" | "maxi" | "vip";

type TicketBase = Omit<TicketInfo, "price" | "newPrice" | "buttonText" | "href" | "soldOut">;

type TicketOffer = {
  price: string;
  newPrice?: string;
  lowestPriceLabel?: string;
  href: string;
};

export type TicketSalesCountdown = {
  mode: "start" | "price-increase" | "none";
  title: string;
  subtitle: string;
  targetAt?: string;
  isLive: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export type TicketSalesState = {
  isLive: boolean;
  startsAt: string;
  tickets: TicketInfo[];
  countdown: TicketSalesCountdown;
};

type TicketPhase = {
  startsAt: string;
  endsAt?: string;
  offers: Record<TicketTier, TicketOffer>;
};

const CHECKOUT_LINKS = {
  VIP_854: "https://buy.stripe.com/aFaaEX3SL0RqaXSc9Zc7u0z",
  MAXI_531: "https://buy.stripe.com/3cI3cvdtleIgfe8a1Rc7u0E",
  MAXI_499: "https://buy.stripe.com/3cI4gzah9as03vqei7c7u0D",
  STANDARD_399: "https://buy.stripe.com/5kQcN5fBteIg8PK2zpc7u0C",
  STANDARD_359: "https://buy.stripe.com/6oUbJ174X9nWgic0rhc7u0B",
  STANDARD_349: "https://buy.stripe.com/dRmaEXbld57G2rmb5Vc7u0A",
  VIP_789: "https://buy.stripe.com/4gM14n3SL0Rq2rmfmbc7u0y",
  VIP_949: "https://buy.stripe.com/7sY14nexp43C5Dy3Dtc7u0x",
  MAXI_590: "https://buy.stripe.com/4gM4gz9d50Rq7LG7TJc7u0u",
} as const;

export const TICKET_SALES_MILESTONES = {
  startAt: "2026-04-04T08:00:00.000Z",
  firstPriceIncreaseAt: "2026-04-05T08:00:00.000Z",
  secondPriceIncreaseAt: "2026-04-21T08:00:00.000Z",
} as const;

function hasSalesStarted(now = new Date()) {
  return now.getTime() >= new Date(TICKET_SALES_MILESTONES.startAt).getTime();
}

const PHASES: TicketPhase[] = [
  {
    startsAt: TICKET_SALES_MILESTONES.startAt,
    endsAt: TICKET_SALES_MILESTONES.firstPriceIncreaseAt,
    offers: {
      standard: {
        price: "399",
        newPrice: "349",
        lowestPriceLabel: "Najniższa cena z 30 dni przed obniżką: 399 zł",
        href: CHECKOUT_LINKS.STANDARD_349,
      },
      maxi: {
        price: "590",
        newPrice: "499",
        lowestPriceLabel: "Najniższa cena z 30 dni przed obniżką: 590 zł",
        href: CHECKOUT_LINKS.MAXI_499,
      },
      vip: {
        price: "949",
        newPrice: "789",
        lowestPriceLabel: "Najniższa cena z 30 dni przed obniżką: 949 zł",
        href: CHECKOUT_LINKS.VIP_789,
      },
    },
  },
  {
    startsAt: TICKET_SALES_MILESTONES.firstPriceIncreaseAt,
    endsAt: TICKET_SALES_MILESTONES.secondPriceIncreaseAt,
    offers: {
      standard: {
        price: "399",
        newPrice: "359",
        lowestPriceLabel: "Najniższa cena z 30 dni przed obniżką: 349 zł",
        href: CHECKOUT_LINKS.STANDARD_359,
      },
      maxi: {
        price: "590",
        newPrice: "531",
        lowestPriceLabel: "Najniższa cena z 30 dni przed obniżką: 499 zł",
        href: CHECKOUT_LINKS.MAXI_531,
      },
      vip: {
        price: "949",
        newPrice: "854",
        lowestPriceLabel: "Najniższa cena z 30 dni przed obniżką: 789 zł",
        href: CHECKOUT_LINKS.VIP_854,
      },
    },
  },
  {
    startsAt: TICKET_SALES_MILESTONES.secondPriceIncreaseAt,
    offers: {
      standard: {
        price: "399",
        href: CHECKOUT_LINKS.STANDARD_399,
      },
      maxi: {
        price: "590",
        href: CHECKOUT_LINKS.MAXI_590,
      },
      vip: {
        price: "949",
        href: CHECKOUT_LINKS.VIP_949,
      },
    },
  },
];

function resolvePhase(now = new Date()) {
  const currentMs = now.getTime();

  return (
    PHASES.find((phase) => {
      const startsAtMs = new Date(phase.startsAt).getTime();
      const endsAtMs = phase.endsAt ? new Date(phase.endsAt).getTime() : Number.POSITIVE_INFINITY;
      return currentMs >= startsAtMs && currentMs < endsAtMs;
    }) ?? PHASES[0]
  );
}

export function resolveTicketOffers(tickets: TicketBase[], now = new Date()): TicketInfo[] {
  const phase = resolvePhase(now);
  const salesStarted = hasSalesStarted(now);

  return tickets.map((ticket) => {
    const offer = phase.offers[ticket.id as TicketTier];

    return {
      ...ticket,
      price: offer.price,
      newPrice: offer.newPrice,
      lowestPriceLabel: offer.lowestPriceLabel,
      buttonText: salesStarted ? "Придбати квиток" : "SOON",
      href: offer.href,
      soldOut: !salesStarted,
    };
  });
}

export function getTicketSalesCountdown(now = new Date()): TicketSalesCountdown {
  const nowMs = now.getTime();
  const startMs = new Date(TICKET_SALES_MILESTONES.startAt).getTime();
  const firstIncreaseMs = new Date(TICKET_SALES_MILESTONES.firstPriceIncreaseAt).getTime();
  const secondIncreaseMs = new Date(TICKET_SALES_MILESTONES.secondPriceIncreaseAt).getTime();

  let mode: TicketSalesCountdown["mode"] = "none";
  let title = "";
  let subtitle = "";
  let targetAt: string | undefined;
  let diff = 0;

  if (nowMs < startMs) {
    mode = "start";
    title = "Старт продажів";
    subtitle = "Знижки вже активні. Посилання на оплату відкриються 4 квітня о 10:00.";
    targetAt = TICKET_SALES_MILESTONES.startAt;
    diff = startMs - nowMs;
  } else if (nowMs < firstIncreaseMs) {
    mode = "price-increase";
    title = "До підвищення цін";
    subtitle = "Поточні акційні ціни діють до 5 квітня, 10:00.";
    targetAt = TICKET_SALES_MILESTONES.firstPriceIncreaseAt;
    diff = firstIncreaseMs - nowMs;
  } else if (nowMs < secondIncreaseMs) {
    mode = "price-increase";
    title = "До наступного підвищення цін";
    subtitle = "Поточні ціни діють до 21 квітня, 10:00.";
    targetAt = TICKET_SALES_MILESTONES.secondPriceIncreaseAt;
    diff = secondIncreaseMs - nowMs;
  }

  const totalSeconds = Math.max(0, Math.floor(diff / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    mode,
    title,
    subtitle,
    targetAt,
    isLive: hasSalesStarted(now),
    days,
    hours,
    minutes,
    seconds,
  };
}

export function resolveTicketSalesState(
  tickets: TicketBase[],
  now = new Date()
): TicketSalesState {
  const countdown = getTicketSalesCountdown(now);

  return {
    isLive: hasSalesStarted(now),
    startsAt: TICKET_SALES_MILESTONES.startAt,
    tickets: resolveTicketOffers(tickets, now),
    countdown,
  };
}
