import NextImage from "next/image";
import { Card } from "@/shared/ui/card";
import { cn, mergeUi } from "@/shared/lib/utils";
import { ReactNode } from "react";
import { TypographyTitle } from "@/shared/ui/typography";

interface SpeakerCardProps {
  imageUrl: string;
  imageAlt: string;
  name: string;
  description: ReactNode;
  className?: string;
  blurDataURL?: string;
  sizes?: string;
  uiId?: string;
}

const genericBlurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0nZycgeDE9JzAlJyB5MT0nMCUnIHgyPScwJScgeTI9JzEwMCUnPjxzdG9wIG9mZnNldD0nMCUnIHN0b3AtY29sb3I9JyNmMGYwZjAnLz48c3RvcCBvZmZzZXQ9JzEwMCUnIHN0b3AtY29sb3I9JyNkOWQ5ZDknLz48L2xpbmVhckdyYWRpZW50PjxmaWx0ZXIgaWQ9J2InPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9JzgnIGhlaWdodD0nNScgZmlsbD0ndXJsKCNnKScgZmlsdGVyPSd1cmwoI2IpJy8+PC9zdmc+";

export function SpeakerCard({
  blurDataURL = genericBlurDataURL,
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
          <NextImage
            data-ui={mergeUi(uiId, "image")}
            src={imageUrl}
            alt={imageAlt}
            width={208}
            height={320}
            placeholder="blur"
            blurDataURL={blurDataURL}
            sizes={sizes}
            className="aspect-[13/20] h-auto w-28 rounded-2xl object-cover sm:w-32 md:w-36"
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
            className="space-y-1 text-sm leading-6 text-text-muted md:text-base md:leading-7"
          >
            {description}
          </div>
        </div>
      </div>
    </Card>
  );
}
