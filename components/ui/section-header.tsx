import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  className,
}) => {
  return (
    <h2
      className={cn(
        "text-blue-foreground text-2xl font-semibold text-center",
        className
      )}
    >
      {title}
    </h2>
  );
};
