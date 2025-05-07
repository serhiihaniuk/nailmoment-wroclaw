import React from "react";
import NextImage from "next/image";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

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

const genericBlurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0nZycgeDE9JzAlJyB5MT0nMCUnIHgyPScwJScgeTI9JzEwMCUnPjxzdG9wIG9mZnNldD0nMCUnIHN0b3AtY29sb3I9JyNmMGYwZjAnLz48c3RvcCBvZmZzZXQ9JzEwMCUnIHN0b3AtY29sb3I9JyNkOWQ5ZDknLz48L2xpbmVhckdyYWRpZW50PjxmaWx0ZXIgaWQ9J2InPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9JzgnIGhlaWdodD0nNScgZmlsbD0ndXJsKCNnKScgZmlsdGVyPSd1cmwoI2IpJy8+PC9zdmc+";

const defaultImageSizes = "(max-width: 767px) 100vw, 192px";

export const SpeakerScheduleCard: React.FC<ProfileCardProps> = ({
  imageUrl,
  imageAlt,
  name,
  topic,
  time,
  description,
  className,
  blurDataURL = genericBlurDataURL,
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
      <NextImage
        src={imageUrl}
        alt={imageAlt}
        width={192}
        height={320}
        placeholder="blur"
        blurDataURL={blurDataURL}
        sizes={sizes}
        className="w-full h-auto rounded-md object-cover"
      />
      <span className="py-1 absolute bottom-2 bg-blue-foreground text-white px-4 font-bold text-2xl w-full inline-flex justify-center items-center gap-2 rounded-sm">
        <Clock size={18} />
        {time}
      </span>
    </div>

    {/* Text Content */}
    <div className="flex flex-col items-center text-center gap-2 w-full p-4">
      <h3 className="uppercase text-xl font-black">{name}</h3>
      <h4 className="uppercase text-2xl font-black leading-tight bg-accent-pink w-full text-white p-4 rounded-md">
        {topic}
      </h4>

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
