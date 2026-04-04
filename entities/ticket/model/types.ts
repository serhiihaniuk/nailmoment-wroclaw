export type TicketFeature = {
  value: string;
  isVip: boolean;
};

export type TicketVariant = "guest" | "standard" | "maxi" | "vip";

export type TicketInfo = {
  id: string;
  variant: TicketVariant;
  imageUrl: string;
  imageAlt: string;
  title: string;
  features: TicketFeature[];
  price: string;
  newPrice?: string;
  buttonText: string;
  href: string;
  soldOut?: boolean;
};
