import { ArticleCallout, ArticleList, ArticleListItem, ArticleText } from "@/shared/ui/article";
import { Stack } from "@/shared/ui/layout/stack";

type BattleFinalWarningCalloutProps = {
  uiId?: string;
};

export function BattleFinalWarningCallout({
  uiId = "battle-final-warning-callout",
}: BattleFinalWarningCalloutProps) {
  return (
    <ArticleCallout uiId={uiId} tone="warning">
      <Stack uiId={`${uiId}-content`} gap="xs">
        <ArticleText uiId={`${uiId}-text`} className="font-semibold">
          ⚠️ УВАГА! Фінальний тур проходить за день до фестивалю Nail Moment.
        </ArticleText>

        <ArticleList uiId={`${uiId}-list`}>
          <ArticleListItem uiId={`${uiId}-item-1`}>6 липня — фінал «Битви Майстрів»</ArticleListItem>
          <ArticleListItem uiId={`${uiId}-item-2`}>7 липня — фестиваль Nail Moment</ArticleListItem>
        </ArticleList>

        <ArticleText uiId={`${uiId}-city`}>Фінал відбудеться у Варшаві.</ArticleText>
      </Stack>
    </ArticleCallout>
  );
}
