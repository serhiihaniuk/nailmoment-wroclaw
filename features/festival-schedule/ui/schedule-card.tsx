import { Card, CardContent } from "@/shared/ui/card";
import { cn, mergeUi } from "@/shared/lib/utils";
import { type ScheduleItem as HomeScheduleItem } from "@/features/festival-schedule/model/content";

export type ScheduleEntry = HomeScheduleItem;

type ScheduleProps = {
  items: ScheduleEntry[];
  className?: string;
  uiId?: string;
};

function ScheduleItem({
  time,
  title,
  description,
  uiId,
}: Omit<ScheduleEntry, "id"> & { uiId?: string }) {
  return (
    <div
      data-ui={mergeUi(uiId, "item")}
      className="grid items-start gap-3 grid-cols-[72px_minmax(0,1fr)]"
    >
      <div
        data-ui={mergeUi(uiId, "time")}
        className="inline-flex min-h-9 items-center justify-center rounded-full bg-surface-muted px-3 text-sm font-semibold text-text-primary"
      >
        {time}
      </div>
      <div data-ui={mergeUi(uiId, "content")} className="space-y-1">
        <p data-ui={mergeUi(uiId, "title")} className="text-lg font-semibold leading-7 text-text-primary">{title}</p>
        {description ? (
          <p data-ui={mergeUi(uiId, "description")} className="text-sm leading-6 text-text-muted md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function Schedule({ className, items, uiId }: ScheduleProps) {
  return (
    <Card uiId={mergeUi(uiId, "card")} className={cn("w-full", className)}>
      <CardContent uiId={mergeUi(uiId, "content")} className="flex flex-col gap-6">
        {items.map((item, index) => (
          <ScheduleItem
            key={item.id}
            time={item.time}
            title={item.title}
            description={item.description}
            uiId={mergeUi(uiId, item.id || `item-${index + 1}`)}
          />
        ))}
      </CardContent>
    </Card>
  );
}
