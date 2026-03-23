import NextImage from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SpeakerCardProps {
  imageUrl: string;
  imageAlt: string;
  name: string;
  description: ReactNode;
  className?: string;
  blurDataURL?: string;
  sizes?: string;
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
}: SpeakerCardProps) {
  return (
    <Card spacing="none" className={cn("w-full max-w-4xl", className)}>
      <div className="grid gap-5 md:grid-cols-[208px_minmax(0,1fr)] md:gap-0">
        <div className="p-4 md:p-6">
          <NextImage
            src={imageUrl}
            alt={imageAlt}
            width={208}
            height={320}
            placeholder="blur"
            blurDataURL={blurDataURL}
            sizes={sizes}
            className="aspect-[13/20] h-auto w-full rounded-3xl object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 px-5 pb-6 md:px-8 md:py-8">
          <h3 className="text-xl font-semibold uppercase text-text-primary">
            {name}
          </h3>
          <div className="space-y-3 text-sm leading-7 text-text-muted md:text-base">
            {description}
          </div>
        </div>
      </div>
    </Card>
  );
}
