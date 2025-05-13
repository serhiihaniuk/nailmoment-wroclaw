import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

const cardVariants = cva(
  "w-full max-w-sm flex flex-col overflow-hidden rounded-xl p-0",
  {
    variants: {
      variant: {
        guest: "bg-white border border-gray-200",
        standard: "bg-yellow-background",
        vip: "gradient-pink",
      },
    },
    defaultVariants: {
      variant: "guest",
    },
  }
);

const titlePriceVariants = cva("font-bold", {
  variants: {
    variant: {
      guest: "text-green-foreground",
      standard: "text-yellow-foreground",
      vip: "text-white",
    },
  },
  defaultVariants: {
    variant: "guest",
  },
});

const featureTextVariants = cva("w-full text-lg", {
  variants: {
    variant: {
      guest: "text-green-foreground",
      standard: "text-yellow-foreground",
      vip: "text-white",
    },
  },
  defaultVariants: {
    variant: "guest",
  },
});

const featureBorderVariants = cva("", {
  variants: {
    variant: {
      guest: "border-b border-gray-300 last:border-b-0",
      standard: "border-b border-yellow-foreground/30 last:border-b-0",
      vip: "border-b border-white/30 last:border-b-0",
    },
  },
  defaultVariants: {
    variant: "guest",
  },
});

const buttonVariants = cva("w-full font-semibold uppercase", {
  variants: {
    variant: {
      guest: "bg-green-foreground text-white hover:bg-green-foreground/80",
      standard: "bg-accent-orange text-white hover:bg-accent-orange/80",
      vip: "bg-white text-accent-pink hover:bg-white/90",
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
    className={cn("inline-block mr-2 flex-shrink-0", className)}
  >
    <circle cx="12" cy="12" r="10" fill="white" stroke="none" />
    <g stroke="currentColor">
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </g>
  </svg>
);

type TicketVariant = NonNullable<VariantProps<typeof cardVariants>["variant"]>;
type Feature = { value: string; isVip: boolean };

interface TicketCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  imageUrl: string;
  imageAlt: string;
  features: Feature[];
  price: string;
  priceIncreaseDate?: string;
  newPrice?: string;
  buttonText: string;
  href: string;
}

const capitalize = (s: string = ""): string => {
  if (!s) return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export type TicketInfo = {
  id: string;
  variant: TicketVariant;
  imageUrl: string;
  imageAlt: string;
  title: string;
  features: Feature[];
  price: string;
  priceIncreaseDate?: string;
  newPrice: string;
  buttonText: string;
  href: string;
};

export const TicketCard: React.FC<TicketCardProps> = ({
  imageUrl,
  imageAlt,
  features,
  price,
  buttonText,
  variant = "guest",
  href,
  className,
  ...props
}) => {
  const titleSvgPath = `/svg/${capitalize(variant || "")}.svg`;
  const titleSvgAlt = `${capitalize(variant || "")} Ticket Logo`;

  return (
    <Card className={cn(cardVariants({ variant }), className)} {...props}>
      <CardContent
        className={cn(
          "flex flex-col items-center text-center p-6 flex-grow",
          featureTextVariants({ variant })
        )}
      >
        <img src={imageUrl} alt={imageAlt} className="w-[160px]" />
        <img
          src={titleSvgPath}
          alt={titleSvgAlt}
          className="mt-5 mb-6 h-8 w-auto"
        />

        <div className={cn("mb-6 text-lg w-full")}>
          {features.map((feature, index) => (
            <div
              key={`${variant}-${index}`}
              className={cn(
                "py-2.5 flex items-center justify-center space-x-2",
                featureBorderVariants({ variant })
              )}
            >
              {feature.isVip && variant === "vip" && (
                <PlusIcon className="w-4 h-4 text-yellow-foreground flex-shrink-0" />
              )}
              <span>{feature.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto w-full">
          <div
            className={cn(
              "text-5xl font-bold uppercase mb-5",
              titlePriceVariants({ variant })
            )}
          >
            {price}
            <span className="lowercase">zł</span>
          </div>
        </div>

        <Button className={buttonVariants({ variant })} asChild>
          <Link target="_blank" href={href}>
            {buttonText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
