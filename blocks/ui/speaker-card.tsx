import React from "react";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility

interface ProfileCardProps {
  imageUrl: string;
  imageAlt: string;
  name: string;
  description: React.ReactNode; // <-- Changed from string to React.ReactNode
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
        "flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 w-full max-w-2xl shadow-sm", // Slightly adjusted padding/shadow, items-start
        className
      )}
    >
      <div className="flex-shrink-0 pt-1">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-32 md:w-48 aspect-auto rounded-md object-cover" // Slightly smaller image on mobile
        />
      </div>

      <div className="flex flex-col justify-center flex-grow">
        <h3 className="text-lg font-semibold text-blue-foreground mb-1">
          {name}
        </h3>
        <div className="text-sm text-blue-foreground/90 space-y-2">
          {description}
        </div>
      </div>
    </div>
  );
};
