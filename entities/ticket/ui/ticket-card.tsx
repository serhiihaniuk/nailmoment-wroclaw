import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { type TicketFeature, type TicketInfo } from "@/entities/ticket/model/types";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { DecoratedOliveCard } from "@/shared/ui/decorated-olive-card";
import { Image } from "@/shared/ui/image";
import { cn, mergeUi } from "@/shared/lib/utils";
import { TypographyDisplay } from "@/shared/ui/typography";

const cardVariants = cva(
  "mx-auto w-full max-w-xl overflow-hidden rounded-3xl border shadow-card",
  {
    variants: {
      variant: {
        guest: "border-border-subtle bg-surface-card",
        standard: "border-transparent bg-surface-muted",
        maxi:
          "border-2 border-white/80 bg-[linear-gradient(241deg,rgba(255,211,143,0.98),rgba(245,240,210,0.99)_56%,rgba(75,114,5,0.71))] text-brand-brown shadow-[0_22px_48px_rgba(159,127,43,0.16)]",
        vip: "border-transparent bg-text-primary text-text-inverse",
      },
    },
    defaultVariants: {
      variant: "guest",
    },
  }
);

const featureTextVariants = cva("w-full", {
  variants: {
    variant: {
      guest: "text-text-primary",
      standard: "text-text-primary",
      maxi: "text-brand-brown",
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
      maxi: "border-b border-brand-brown/10 last:border-b-0",
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
      maxi: "bg-brand-brown text-white",
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
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("inline-block shrink-0", className)}
  >
    <circle cx="10" cy="10" r="9.5" fill="#FFF9EC" />
    <path d="M10 6.5V13.5" stroke="#395500" strokeWidth="2" strokeLinecap="round" />
    <path d="M6.5 10H13.5" stroke="#395500" strokeWidth="2" strokeLinecap="round" />
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
  uiId?: string;
}

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
  uiId,
  variant = "guest",
  ...props
}: TicketCardProps) {
  const titleTone = variant === "maxi" ? "accent" : variant === "vip" ? "inverse" : undefined;
  const priceTone = variant === "maxi" ? "accent" : variant === "vip" ? "inverse" : "olive";
  const useDecoratedOliveCard = variant === "vip";

  const content = (
    <>
      <Image
        uiId={mergeUi(uiId, "image")}
        url={imageUrl}
        alt={imageAlt}
        width={320}
        height={320}
        className="aspect-square w-40 rounded-none"
        imageClassName="object-contain"
      />
      <TypographyDisplay as="div" uiId={mergeUi(uiId, "title")} tone={titleTone}>
        {title}
      </TypographyDisplay>

      <div data-ui={mergeUi(uiId, "features")} className="w-full">
        {features.map((feature, index) => (
          <div
            data-ui={mergeUi(uiId, "feature", index + 1)}
            key={`${variant}-${index}`}
            className={cn(
              "flex items-center gap-3 py-3 text-base leading-6",
              feature.isVip && variant === "vip"
                ? "justify-center text-left"
                : "justify-center text-center",
              featureBorderVariants({ variant })
            )}
          >
            {feature.isVip && variant === "vip" ? <PlusIcon className="size-5" /> : null}
            <span data-ui={mergeUi(uiId, "feature-text", index + 1)}>{feature.value}</span>
          </div>
        ))}
      </div>

      <TypographyDisplay as="div" uiId={mergeUi(uiId, "price")} tone={priceTone}>
        {price}
        <span className="ml-1 text-2xl lowercase">zł</span>
      </TypographyDisplay>

      {soldOut ? (
        <Button
          uiId={mergeUi(uiId, "button")}
          disabled
          className={cn("w-full uppercase", buttonToneVariants({ variant }))}
        >
          <span data-ui={mergeUi(uiId, "button-label")} className="text-center">
            {buttonText}
          </span>
        </Button>
      ) : (
        <Button
          uiId={mergeUi(uiId, "button")}
          className={cn("w-full uppercase", buttonToneVariants({ variant }))}
          asChild
        >
          <Link data-ui={mergeUi(uiId, "link")} target="_blank" href={href}>
            {buttonText}
          </Link>
        </Button>
      )}
    </>
  );

  if (useDecoratedOliveCard) {
    return (
      <DecoratedOliveCard
        uiId={mergeUi(uiId, "card")}
        leafLayout="compact"
        className={cn(cardVariants({ variant }), className)}
        contentClassName={cn(
          "flex flex-col items-center gap-6 px-6 py-8 text-center",
          featureTextVariants({ variant })
        )}
        {...props}
      >
        {content}
      </DecoratedOliveCard>
    );
  }

  return (
    <Card
      uiId={mergeUi(uiId, "card")}
      spacing="none"
      className={cn(cardVariants({ variant }), className)}
      {...props}
    >
      <CardContent
        uiId={mergeUi(uiId, "content")}
        className={cn(
          "flex flex-col items-center gap-6 px-6 py-8 text-center",
          featureTextVariants({ variant })
        )}
      >
        {content}
      </CardContent>
    </Card>
  );
}
