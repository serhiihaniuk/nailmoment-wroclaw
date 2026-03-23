import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  type TicketFeature,
  type TicketInfo,
} from "@/shared/content/home/tickets";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

const cardVariants = cva(
  "w-full max-w-sm overflow-hidden rounded-[2rem] border shadow-[0_18px_48px_rgba(57,85,0,0.08)]",
  {
    variants: {
      variant: {
        guest: "border-border-subtle bg-surface-card",
        standard: "border-transparent bg-surface-muted",
        maxi: "border-transparent bg-brand-olive text-text-inverse",
        vip: "border-transparent bg-text-primary text-text-inverse",
      },
    },
    defaultVariants: {
      variant: "guest",
    },
  }
);

const titlePriceVariants = cva("font-bold uppercase", {
  variants: {
    variant: {
      guest: "text-brand-olive",
      standard: "text-brand-olive",
      maxi: "text-brand-cream",
      vip: "text-brand-cream",
    },
  },
  defaultVariants: {
    variant: "guest",
  },
});

const featureTextVariants = cva("w-full", {
  variants: {
    variant: {
      guest: "text-text-primary",
      standard: "text-text-primary",
      maxi: "text-text-inverse",
      vip: "text-text-inverse",
    },
  },
  defaultVariants: {
    variant: "guest",
  },
});

const featureBorderVariants = cva("", {
  variants: {
    variant: {
      guest: "border-b border-border-subtle last:border-b-0",
      standard: "border-b border-border-subtle last:border-b-0",
      maxi: "border-b border-white/20 last:border-b-0",
      vip: "border-b border-white/20 last:border-b-0",
    },
  },
  defaultVariants: {
    variant: "guest",
  },
});

const buttonToneVariants = cva("", {
  variants: {
    variant: {
      guest: "bg-brand-olive text-white",
      standard: "bg-brand-olive text-white",
      maxi: "bg-brand-gold text-brand-brown",
      vip: "bg-white text-text-primary",
    },
  },
  defaultVariants: {
    variant: "guest",
  },
});

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("inline-block shrink-0", className)}
  >
    <circle cx="12" cy="12" r="10" fill="white" stroke="none" />
    <g stroke="currentColor">
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </g>
  </svg>
);

interface TicketCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  imageUrl: string;
  imageAlt: string;
  title: string;
  features: TicketFeature[];
  price: string;
  buttonText: string;
  href: string;
  soldOut?: boolean;
}

const capitalize = (value = "") => {
  if (!value) {
    return "";
  }

  return value.charAt(0).toUpperCase() + value.slice(1);
};

export type { TicketInfo };

export function TicketCard({
  buttonText,
  className,
  features,
  href,
  imageAlt,
  imageUrl,
  price,
  soldOut,
  title,
  variant = "guest",
  ...props
}: TicketCardProps) {
  const titleSvgPath = `/svg/${capitalize(variant || "")}.svg`;
  const titleSvgAlt = `${capitalize(variant || "")} Ticket Logo`;

  return (
    <Card
      spacing="none"
      className={cn(cardVariants({ variant }), className)}
      {...props}
    >
      <CardContent
        className={cn(
          "flex flex-col items-center gap-6 px-6 py-8 text-center",
          featureTextVariants({ variant })
        )}
      >
        <img src={imageUrl} alt={imageAlt} className="w-40" />
        {variant !== "maxi" ? (
          <img src={titleSvgPath} alt={titleSvgAlt} className="h-8 w-auto" />
        ) : (
          <div className="py-2 text-5xl font-black text-brand-gold">{title}</div>
        )}

        <div className="w-full">
          {features.map((feature, index) => (
            <div
              key={`${variant}-${index}`}
              className={cn(
                "flex items-center justify-center gap-2 py-3 text-base leading-6",
                featureBorderVariants({ variant })
              )}
            >
              {feature.isVip && variant === "vip" ? (
                <PlusIcon className="h-4 w-4 text-brand-gold" />
              ) : null}
              <span>{feature.value}</span>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "text-5xl leading-none",
            titlePriceVariants({ variant })
          )}
        >
          {price}
          <span className="ml-1 text-2xl lowercase">zł</span>
        </div>

        <Button
          disabled={soldOut}
          className={cn("w-full uppercase", buttonToneVariants({ variant }))}
          asChild
        >
          {soldOut ? (
            <span className="text-center">SOLD OUT</span>
          ) : (
            <Link target="_blank" href={href}>
              {buttonText}
            </Link>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
