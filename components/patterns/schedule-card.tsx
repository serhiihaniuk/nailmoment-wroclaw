import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { type ScheduleItem as HomeScheduleItem } from "@/shared/content/home/schedule";

export type ScheduleEntry = HomeScheduleItem;

type ScheduleProps = {
  items: ScheduleEntry[];
  className?: string;
};

function ScheduleItem({ time, title, description }: Omit<ScheduleEntry, "id">) {
  return (
    <div className="grid items-start gap-3 md:grid-cols-[72px_minmax(0,1fr)]">
      <div className="inline-flex min-h-9 items-center justify-center rounded-full bg-surface-muted px-3 text-sm font-semibold text-text-primary">
        {time}
      </div>
      <div className="space-y-1">
        <p className="text-lg font-semibold leading-7 text-text-primary">{title}</p>
        {description ? (
          <p className="text-sm leading-6 text-text-muted md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function Schedule({ className, items }: ScheduleProps) {
  return (
    <Card className={cn("w-full", className)}>
      <CardContent className="flex flex-col gap-6">
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
}
