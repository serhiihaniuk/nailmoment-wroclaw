import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cva, type VariantProps } from "class-variance-authority";

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

// Removed imageVariants as size is directly applied

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
      guest: "text-green-foreground/80",
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

// Updated Feature type
type Feature = {
  value: string;
  isVip: boolean;
};

export type TicketInfo = {
  id: string;
  variant: TicketVariant;
  imageUrl: string;
  imageAlt: string;
  title: string;
  features: Feature[]; // Updated to use Feature type
  // vipFeatures removed
  price: string;
  buttonText: string;
};

interface TicketCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  imageUrl: string;
  imageAlt: string;
  title: string;
  features: Feature[]; // Updated to use Feature type
  // vipFeatures?: string[]; removed
  price: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const TicketCard: React.FC<TicketCardProps> = ({
  imageUrl,
  imageAlt,
  title,
  features,
  price,
  buttonText,
  variant,
  onButtonClick,
  className,
  ...props
}) => {
  return (
    <Card className={cn(cardVariants({ variant }), className)} {...props}>
      <CardContent className="flex flex-col items-center text-center p-6 flex-grow">
        <img src={imageUrl} alt={imageAlt} className="w-[160px]" />{" "}
        <h3
          className={cn(
            "text-3xl mt-5 uppercase mb-2 tracking-wider",
            titlePriceVariants({ variant })
          )}
        >
          {title}
        </h3>
        {/* Single map for all features */}
        <div className={cn(featureTextVariants({ variant }), "mb-6 text-lg")}>
          {features.map((feature, index) => (
            <div
              key={`${variant}-${index}`} // Use variant in key for potential edge cases
              className={cn("py-2.5", featureBorderVariants({ variant }))}
            >
              {feature.isVip && variant === "vip" && (
                <PlusIcon className="w-4 h-4 text-yellow-foreground" /> // Check if this color should be dynamic
              )}
              <span>{feature.value}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <div className={cn("text-5xl mb-6", titlePriceVariants({ variant }))}>
            {price}
          </div>
        </div>
        <Button className={buttonVariants({ variant })} onClick={onButtonClick}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};
