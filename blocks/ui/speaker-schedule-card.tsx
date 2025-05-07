import React from "react";
import NextImage from "next/image"; // Import Next.js Image
import { cn } from "@/lib/utils"; // Assuming you have a cn utility
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
  logoSize: { w: number; h: number };
  logoBg?: string;
}

const genericBlurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0nZycgeDE9JzAlJyB5MT0nMCUnIHgyPScwJScgeTI9JzEwMCUnPjxzdG9wIG9mZnNldD0nMCUnIHN0b3AtY29sb3I9JyNmMGYwZjAnLz48c3RvcCBvZmZzZXQ9JzEwMCUnIHN0b3AtY29sb3I9JyNkOWQ5ZDknLz48L2xpbmVhckdyYWRpZW50PjxmaWx0ZXIgaWQ9J2InPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEnLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9JzgnIGhlaWdodD0nNScgZmlsbD0ndXJsKCNnKScgZmlsdGVyPSd1cmwoI2IpJy8+PC9zdmc+";

const imageBaseWidth = 192;
const imageBaseHeight = 320;

const defaultImageSizes = "(max-width: 767px) 128px, 192px";

export const SpeakerScheduleCard: React.FC<ProfileCardProps> = ({
  imageUrl,
  imageAlt,
  name,
  topic,
  time,
  description,
  className,
  blurDataURL = genericBlurDataURL, // Use generic blurDataURL as fallback
  sizes = defaultImageSizes, // Use calculated default sizes
  logo,
  logoSize,
  logoBg,
}) => {
  return (
    <div
      className={cn(
        "flex items-start gap-4 p-4 text-blue-foreground bg-white rounded-lg border border-gray-200 w-full max-w-2xl shadow-sm",
        className
      )}
    >
      <div className=" flex flex-col gap-2 flex-shrink-0 pt-1">
        <NextImage
          src={imageUrl}
          alt={imageAlt}
          width={imageBaseWidth} // Base width for aspect ratio calculation
          height={imageBaseHeight} // Base height for aspect ratio calculation
          placeholder="blur"
          blurDataURL={blurDataURL}
          sizes={sizes} // Pass sizes prop for optimization
          className="w-32 h-52 md:w-48 md:h-80 rounded-md object-cover"
        />
        <div
          className={cn(
            "relative p-2 w-32 md:w-48 border border-blue-foreground rounded-md flex items-center justify-center",
            {
              "bg-gray-900": logoBg === "dark",
            }
          )}
        >
          <NextImage
            src={logo}
            className="w-32 md:w-48"
            alt="logo"
            width={logoSize.w}
            height={logoSize.h}
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center self-stretch flex-grow gap-4">
        <h3 className="text-lg font-semibold mb-1 ">{name}</h3>
        <h4 className="flex flex-col gap-2  bg-blue-foreground/10 rounded-md p-2 mb-4 text-lg text-center">
          <span className="font-bold">{topic}</span>

          <div className="p-1 border border-blue-foreground text-blue-foreground font-bold text-sm h-min flex justify-center items-center gap-2 rounded-sm">
            <Clock size={12} />
            {time}
          </div>
        </h4>

        <div className="text-sm text-blue-foreground/80 space-y-2">
          {description}
        </div>
        <div className="grow flex flex-col justify-end"></div>
      </div>
    </div>
  );
};
