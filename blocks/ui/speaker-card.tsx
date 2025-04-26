import React from "react";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility

interface ProfileCardProps {
  /** The URL of the profile image */
  imageUrl: string;
  /** Alt text for the profile image */
  imageAlt: string;
  /** The name or title to display */
  name: string;
  /** The description text (can include newlines) */
  description: string;
  /** Optional additional CSS classes for the card container */
  className?: string;
}

export const SpeakerCard: React.FC<ProfileCardProps> = ({
  imageUrl,
  imageAlt,
  name,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-4 p-3 bg-white rounded-lg border border-gray-200 w-full max-w-2xl",
        className
      )}
    >
      <div className="flex-shrink-0">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-24 h-24 rounded-md object-cover"
        />
      </div>

      {/* Text Content Container */}
      <div className="flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-blue-foreground">{name}</h3>
        <p className="text-sm text-blue-foreground whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
};
