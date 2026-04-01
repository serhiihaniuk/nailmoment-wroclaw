import { Card, CardContent } from "@/shared/ui/card";
import { cn, mergeUi } from "@/shared/lib/utils";
import { type ScheduleItem as HomeScheduleItem } from "@/features/festival-schedule/model/content";

export type ScheduleEntry = HomeScheduleItem;

type ScheduleProps = {
  items: ScheduleEntry[];
  className?: string;
  uiId?: string;
};

function ScheduleTimeBadge({
  time,
  uiId,
}: {
  time: string;
  uiId?: string;
}) {
  const [start, end] = time.split("–").map((part) => part.trim());
  const hasRange = Boolean(start && end);

  return (
    <div
      data-ui={mergeUi(uiId, "time")}
      className={cn(
        "inline-flex bg-surface-muted font-semibold",
        hasRange
          ? "h-[52px] w-[92px] flex-col items-center justify-center rounded-xl"
          : "min-h-10 min-w-[92px] items-center justify-center rounded-full px-3 text-center"
      )}
    >
      {hasRange ? (
        <>
          <span className="text-[15px] leading-none tabular-nums tracking-tight">
            {start}
          </span>
          <span className="my-[3px] h-px w-5 bg-current/15" />
          <span className="text-[15px] leading-none tabular-nums tracking-tight">
            {end}
          </span>
        </>
      ) : (
        <span className="whitespace-nowrap text-[1.05rem] leading-none tabular-nums tracking-tight">
          {time}
        </span>
      )}
    </div>
  );
}

function ScheduleItem({
  time,
  title,
  description,
  uiId,
}: Omit<ScheduleEntry, "id"> & { uiId?: string }) {
  return (
    <div
      data-ui={mergeUi(uiId, "item")}
      className="grid items-start gap-4 grid-cols-[92px_minmax(0,1fr)]"
    >
      <ScheduleTimeBadge time={time} uiId={uiId} />
      <div data-ui={mergeUi(uiId, "content")} className="space-y-1">
        <p data-ui={mergeUi(uiId, "title")} className="text-lg font-semibold leading-7">{title}</p>
        {description ? (
          <p data-ui={mergeUi(uiId, "description")} className="text-sm leading-6 opacity-[.78] md:text-base">
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
