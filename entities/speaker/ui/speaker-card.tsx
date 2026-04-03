import { Card } from "@/shared/ui/card";
import { cn, mergeUi } from "@/shared/lib/utils";
import { ReactNode } from "react";
import { TypographyTitle } from "@/shared/ui/typography";
import { Image } from "@/shared/ui/image";

interface SpeakerCardProps {
  imageUrl: string;
  imageAlt: string;
  name: string;
  description: ReactNode;
  className?: string;
  sizes?: string;
  uiId?: string;
}

export function SpeakerCard({
  className,
  description,
  imageAlt,
  imageUrl,
  name,
  sizes = "(max-width: 767px) 100vw, 208px",
  uiId,
}: SpeakerCardProps) {
  return (
    <Card
      uiId={mergeUi(uiId, "card")}
      spacing="none"
      surface="subtle"
      className={cn("w-full max-w-4xl", className)}
    >
      <div
        data-ui={mergeUi(uiId, "layout")}
        className="flex items-start gap-4 p-3 md:gap-5 md:p-4"
      >
        <div data-ui={mergeUi(uiId, "media")} className="shrink-0">
          <Image
            uiId={mergeUi(uiId, "image")}
            url={imageUrl}
            alt={imageAlt}
            width={192}
            height={256}
            sizes={sizes}
            className="aspect-[3/4] h-auto w-28 rounded-2xl sm:w-32 md:w-36"
          />
        </div>
        <div
          data-ui={mergeUi(uiId, "content")}
          className="flex min-w-0 flex-1 flex-col gap-2 pr-3 md:gap-3 md:pr-4"
        >
          <TypographyTitle
            as="h3"
            uiId={mergeUi(uiId, "title")}
            order="order4"
            align="left"
            className="normal-case"
          >
            {name}
          </TypographyTitle>
          <div
            data-ui={mergeUi(uiId, "text")}
            className="space-y-1 text-sm leading-6 opacity-[.78] md:text-base md:leading-7"
          >
            {description}
          </div>
        </div>
      </div>
    </Card>
  );
}
