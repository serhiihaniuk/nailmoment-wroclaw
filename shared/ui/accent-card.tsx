import { DecorativeImage } from "@/shared/ui/decorative-image";
import { CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { DecoratedOliveCard } from "@/shared/ui/decorated-olive-card";
import { cn } from "@/shared/lib/utils";
import { ReactNode } from "react";

type AccentCardProps = {
  children: ReactNode;
  title: ReactNode;
  className?: string;
  contentClassName?: string;
  imageUrl?: string;
};

export function AccentCard({
  children,
  className,
  contentClassName,
  imageUrl,
  title,
}: AccentCardProps) {
  return (
    <DecoratedOliveCard
      className={cn("overflow-visible", className)}
      contentClassName="py-6 md:py-8"
    >
      <CardHeader className="relative z-[1]">
        <CardTitle className="text-3xl uppercase md:text-4xl">{title}</CardTitle>
      </CardHeader>
      <CardContent
        className={cn("relative z-[1] flex flex-col gap-6", contentClassName)}
      >
        {children}
      </CardContent>
      {imageUrl ? (
        <DecorativeImage
          src={imageUrl}
          className="-right-8 top-[-3.5rem] size-32 md:-right-4 md:size-40"
        />
      ) : null}
    </DecoratedOliveCard>
  );
}
