import React from "react";
import NextImage from "next/image";
import { cn } from "@/shared/lib/utils";
import { Clock } from "lucide-react";
import { TypographyTitle } from "@/shared/ui/typography";
import { Image } from "@/shared/ui/image";

interface ProfileCardProps {
  imageUrl: string;
  imageAlt: string;
  name: string;
  description: React.ReactNode;
  topic: string;
  time: string;
  className?: string;
  blurDataURL?: string;
  sizes?: string;
  logo: string;
  logoSize?: { w?: number; h?: number };
  logoBg?: "dark" | "light";
}

const defaultImageSizes = "(max-width: 767px) 100vw, 192px";

export const SpeakerScheduleCard: React.FC<ProfileCardProps> = ({
  imageUrl,
  imageAlt,
  name,
  topic,
  time,
  description,
  className,
  sizes = defaultImageSizes,
  logo,
  logoSize,
  logoBg,
}) => (
  <div
    className={cn(
      "flex flex-col items-center gap-6 text-blue-foreground bg-white rounded-lg border border-gray-200 w-full max-w-md shadow-sm",
      className
    )}
  >
    {/* Photo */}
    <div className="relative w-full">
      <Image
        url={imageUrl}
        alt={imageAlt}
        width={192}
        height={320}
        sizes={sizes}
        className="aspect-[3/5] w-full rounded-md"
      />
      <span className="py-1 absolute bottom-2 bg-blue-foreground text-white px-4 font-bold text-2xl w-full inline-flex justify-center items-center gap-2 rounded-sm">
        <Clock size={18} />
        {time}
      </span>
    </div>

    {/* Text Content */}
    <div className="flex flex-col items-center text-center gap-2 w-full p-4">
      <TypographyTitle as="h3" order="order4" className="w-full">
        {name}
      </TypographyTitle>
      <TypographyTitle
        as="h4"
        order="order3"
        tone="inverse"
        className="w-full rounded-md bg-accent-pink p-4 leading-tight"
      >
        {topic}
      </TypographyTitle>

      <div className="text-sm text-blue-foreground space-y-2">
        {description}
      </div>
    </div>
    <div
      className={cn(
        "relative p-4 w-full rounded-md flex items-center justify-center",
        { "bg-gray-900": logoBg === "dark" }
      )}
    >
      <NextImage
        src={logo}
        alt="logo"
        width={250}
        height={250}
        className="w-full"
        style={{ width: logoSize?.w || undefined }}
      />
    </div>
  </div>
);
