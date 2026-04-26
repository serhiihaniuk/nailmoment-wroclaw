export type TicketFeature = {
  value: string;
  isVip: boolean;
  icon?: string;
};

export type TicketVariant = "guest" | "standard" | "maxi" | "vip";

export type TicketInfo = {
  id: string;
  variant: TicketVariant;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description?: string;
  features: TicketFeature[];
  note?: string;
  price: string;
  newPrice?: string;
  lowestPriceLabel?: string;
  buttonText: string;
  href: string;
  soldOut?: boolean;
};
