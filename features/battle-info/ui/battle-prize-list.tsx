import { mergeUi } from "@/shared/lib/utils";
import { TypographyText, TypographyTitle } from "@/shared/ui/typography";

export type BattlePrizeGroup = {
  icon: string;
  title: string;
  lines: string[];
};

type BattlePrizeListProps = {
  uiId: string;
  tone?: "default" | "inverse";
  groups: BattlePrizeGroup[];
  note?: string;
};

export function BattlePrizeList({
  uiId,
  tone = "default",
  groups,
  note,
}: BattlePrizeListProps) {
  const isInverse = tone === "inverse";

  return (
    <div data-ui={uiId} className="flex flex-col gap-3">
      {groups.map((item, index) => (
        <div
          key={`${item.title}-${index}`}
          data-ui={mergeUi(uiId, "group", index + 1)}
          className={
            isInverse
              ? "rounded-xl bg-white/10 px-4 py-3 text-left text-text-inverse"
              : "rounded-xl bg-surface-page px-4 py-3 text-left"
          }
        >
          <TypographyTitle
            as="p"
            uiId={mergeUi(uiId, "title", index + 1)}
            order="order4"
            tone={isInverse ? "inverse" : "accent"}
            align="left"
            className={isInverse ? "normal-case text-text-inverse" : "normal-case"}
          >
            <span data-ui={mergeUi(uiId, "icon", index + 1)}>{item.icon} </span>
            {item.title}
          </TypographyTitle>

          <div data-ui={mergeUi(uiId, "lines", index + 1)} className="mt-2 space-y-1">
            {item.lines.map((line, lineIndex) => (
              <TypographyText
                key={lineIndex}
                as="p"
                uiId={mergeUi(uiId, "line", index + 1, lineIndex + 1)}
                size="body"
                tone={isInverse ? "inverse" : "default"}
                align="left"
                className={isInverse ? "text-text-inverse" : undefined}
              >
                {line}
              </TypographyText>
            ))}
          </div>
        </div>
      ))}

      {note ? (
        <TypographyText
          as="p"
          uiId={mergeUi(uiId, "note")}
          size="body"
          tone={isInverse ? "inverse" : "default"}
          className={isInverse ? "italic text-text-inverse" : "italic"}
        >
          {note}
        </TypographyText>
      ) : null}
    </div>
  );
}
