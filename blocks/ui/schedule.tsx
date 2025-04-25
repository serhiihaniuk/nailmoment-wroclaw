import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

// --- Individual Schedule Item Component ---
interface ScheduleItemProps {
  time: string;
  title: string;
  description?: string;
  className?: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  time,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        "grid justify-start justify-items-start grid-cols-[55px_1fr] gap-3",
        className
      )}
    >
      <div className="font-medium p-1 text-blue-foreground text-sm w-[50px] h-min flex justify-center items-center bg-[#F2F2F2] rounded-sm">
        {time}
      </div>
      <div className="flex-grow pt-0.5">
        <p className="text-blue-foreground font-semibold text-lg leading-tight">
          {title}
        </p>
        {description && (
          <p className="text-blue-foreground/70 text-base mt-0.5">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

// --- Schedule Data Type ---
export type ScheduleEntry = {
  id: string | number; // For React key
  time: string;
  title: string;
  description?: string;
};

// --- Full Schedule Section Component ---
interface ScheduleProps {
  items: ScheduleEntry[];
  className?: string;
}

export const Schedule: React.FC<ScheduleProps> = ({ items, className }) => {
  return (
    <Card>
      <CardContent className={cn("flex flex-col gap-4 bg-white", className)}>
        {items.map((item) => (
          <ScheduleItem
            key={item.id}
            time={item.time}
            title={item.title}
            description={item.description}
          />
        ))}
      </CardContent>
    </Card>
  );
};
