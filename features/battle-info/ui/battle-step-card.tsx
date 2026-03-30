import { ReactNode } from "react";
import { Card, CardContent } from "@/shared/ui/card";
import { mergeUi } from "@/shared/lib/utils";
import { TypographyTitle } from "@/shared/ui/typography";

type BattleStepCardProps = {
  stepNumber: number;
  title: string;
  children: ReactNode;
};

export function BattleStepCard({ stepNumber, title, children }: BattleStepCardProps) {
  return (
    <Card
      uiId={mergeUi("battle-step", stepNumber)}
      surface="subtle"
      spacing="none"
      className="rounded-[2rem]"
    >
      <CardContent
        uiId={mergeUi("battle-step", stepNumber)}
        className="flex flex-col gap-5 px-5 py-5 md:px-6 md:py-6"
      >
        <div
          data-ui={mergeUi("battle-step", stepNumber, "header")}
          className="flex items-start gap-4"
        >
          <TypographyTitle
            as="h3"
            uiId={mergeUi("battle-step", stepNumber, "title")}
            order="order4"
            tone="accent"
            align="left"
            className="normal-case"
          >
            <span data-ui={mergeUi("battle-step", stepNumber, "number")}>{stepNumber}.</span>{" "}
            {title}
          </TypographyTitle>
        </div>

        {children}
      </CardContent>
    </Card>
  );
}
