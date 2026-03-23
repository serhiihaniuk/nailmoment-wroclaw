import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { TypographyText, TypographyTitle } from "@/shared/ui/typography";
import { cn, mergeUi } from "@/shared/lib/utils";
import { HOME_COMPETITION_CONTENT } from "@/features/competition-promo/model/content";
import { CompetitionPrizeBanner } from "@/features/competition-promo/ui/competition-prize-banner";
import Link from "next/link";

type CompetitionCardProps = {
  id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  prizeTitle?: string;
  prizeSubtitle?: string;
  href: string;
  buttonText: string;
  surface: "accent" | "default";
};

function CompetitionCard({
  buttonText,
  description,
  href,
  id,
  imageAlt,
  imageUrl,
  prizeSubtitle,
  prizeTitle,
  surface,
  title,
}: CompetitionCardProps) {
  const accent = surface === "accent";
  const uiId = mergeUi("competition", id);

  return (
    <Card
      id={id}
      uiId={uiId}
      spacing="none"
      surface={surface === "accent" ? "accent" : "default"}
      className={cn(
        "scroll-mt-24",
        accent && "bg-brand-brown text-text-inverse"
      )}
    >
      <CardContent
        uiId={mergeUi(uiId, "content")}
        className="flex flex-col gap-4 p-4 text-center md:gap-5 md:p-5"
      >
        <img
          data-ui={mergeUi(uiId, "image")}
          className="aspect-video w-full rounded-[1.4rem] object-cover"
          src={imageUrl}
          alt={imageAlt}
        />
        <Stack uiId={mergeUi(uiId, "copy")} gap="sm" className="items-center">
          <TypographyTitle
            as="h3"
            uiId={mergeUi(uiId, "title")}
            size="card"
            align="center"
            tone={accent ? "inverse" : "default"}
          >
            {title}
          </TypographyTitle>
          {accent && prizeTitle && prizeSubtitle ? (
            <CompetitionPrizeBanner
              uiId={mergeUi(uiId, "prize")}
              title={prizeTitle}
              subtitle={prizeSubtitle}
            />
          ) : (
            <div
              data-ui={mergeUi(uiId, "description-shell")}
              className="w-full rounded-[1.4rem] bg-surface-muted px-4 py-3 text-text-primary"
            >
              <TypographyText
                as="p"
                uiId={mergeUi(uiId, "description")}
                size="body"
                align="center"
                tone="default"
                className="font-semibold"
              >
                {description}
              </TypographyText>
            </div>
          )}
        </Stack>
        <Button
          uiId={mergeUi(uiId, "button")}
          asChild
          variant={accent ? "default" : "accent"}
          className={cn("w-full uppercase", accent ? "text-brand-brown" : "")}
        >
          <Link href={href}>{buttonText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export function CompetitionSection() {
  return (
    <Section uiId="competition-section" density="compact">
      <div data-ui="competition-cards" className="grid gap-6">
        <CompetitionCard {...HOME_COMPETITION_CONTENT.battle} />
        <CompetitionCard {...HOME_COMPETITION_CONTENT.peoplesSpeaker} />
      </div>
    </Section>
  );
}
