import { type TicketInfo } from "@/entities/ticket/model/types";

type TicketTier = "standard" | "maxi" | "vip";

type TicketBase = Omit<TicketInfo, "price" | "newPrice" | "buttonText" | "href" | "soldOut">;

type TicketOffer = {
  price: string;
  newPrice?: string;
  href: string;
};

type TicketPhase = {
  from: string;
  toExclusive?: string;
  offers: Record<TicketTier, TicketOffer>;
};

const CHECKOUT_VAULT = [
  "aHR0cHM6Ly9idXkuc3RyaXBlLmNvbS9hRmFhRVgzU0wwUnFhWFNjOVpjN3Uweg==",
  "aHR0cHM6Ly9idXkuc3RyaXBlLmNvbS8zY0kzY3ZkdGxlSWdmZThhMVJjN3UwRQ==",
  "aHR0cHM6Ly9idXkuc3RyaXBlLmNvbS8zY0k0Z3phaDlhczAzdnFlaTdjN3UwRA==",
  "aHR0cHM6Ly9idXkuc3RyaXBlLmNvbS81a1FjTjVmQnRlSWc4UEsyenBjN3UwQw==",
  "aHR0cHM6Ly9idXkuc3RyaXBlLmNvbS82b1ViSjE3NFg5bldnaWMwcmhjN3UwQg==",
  "aHR0cHM6Ly9idXkuc3RyaXBlLmNvbS9kUm1hRVhibGQ1N0cycm1iNVZjN3UwQQ==",
  "aHR0cHM6Ly9idXkuc3RyaXBlLmNvbS80Z00xNG4zU0wwUnEycm1mbWJjN3UweQ==",
  "aHR0cHM6Ly9idXkuc3RyaXBlLmNvbS83c1kxNG5leHA0M0M1RHkzRHRjN3UweA==",
  "aHR0cHM6Ly9idXkuc3RyaXBlLmNvbS80Z000Z3o5ZDUwUnE3TEc3VEpjN3UwdQ==",
] as const;

function decodeCheckout(value: string) {
  return Buffer.from(value, "base64").toString("utf8");
}

function warsawDateKey(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Warsaw",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

const PHASES: TicketPhase[] = [
  {
    from: "2026-04-04",
    toExclusive: "2026-04-06",
    offers: {
      standard: {
        price: "399",
        newPrice: "349",
        href: decodeCheckout(CHECKOUT_VAULT[5]),
      },
      maxi: {
        price: "590",
        newPrice: "499",
        href: decodeCheckout(CHECKOUT_VAULT[2]),
      },
      vip: {
        price: "949",
        newPrice: "789",
        href: decodeCheckout(CHECKOUT_VAULT[6]),
      },
    },
  },
  {
    from: "2026-04-06",
    toExclusive: "2026-04-21",
    offers: {
      standard: {
        price: "399",
        newPrice: "359",
        href: decodeCheckout(CHECKOUT_VAULT[4]),
      },
      maxi: {
        price: "590",
        newPrice: "531",
        href: decodeCheckout(CHECKOUT_VAULT[1]),
      },
      vip: {
        price: "949",
        newPrice: "854",
        href: decodeCheckout(CHECKOUT_VAULT[0]),
      },
    },
  },
  {
    from: "2026-04-21",
    offers: {
      standard: {
        price: "399",
        href: decodeCheckout(CHECKOUT_VAULT[3]),
      },
      maxi: {
        price: "590",
        href: decodeCheckout(CHECKOUT_VAULT[8]),
      },
      vip: {
        price: "949",
        href: decodeCheckout(CHECKOUT_VAULT[7]),
      },
    },
  },
];

function resolvePhase(now = new Date()) {
  const today = warsawDateKey(now);

  return (
    PHASES.find((phase) => today >= phase.from && (!phase.toExclusive || today < phase.toExclusive)) ??
    PHASES[PHASES.length - 1]
  );
}

export function resolveTicketOffers(tickets: TicketBase[], now = new Date()): TicketInfo[] {
  const phase = resolvePhase(now);

  return tickets.map((ticket) => {
    const offer = phase.offers[ticket.id as TicketTier];

    return {
      ...ticket,
      price: offer.price,
      newPrice: offer.newPrice,
      buttonText: "Придбати квиток",
      href: offer.href,
      soldOut: false,
    };
  });
}
