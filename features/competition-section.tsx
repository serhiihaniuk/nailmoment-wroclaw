import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";
import { HOME_COMPETITION_CONTENT } from "@/shared/content/home/competition";
import Link from "next/link";

type CompetitionCardProps = {
  id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
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
  surface,
  title,
}: CompetitionCardProps) {
  const accent = surface === "accent";

  return (
    <Card
      id={id}
      spacing="none"
      surface={surface === "accent" ? "accent" : "default"}
      className={cn("scroll-mt-24")}
    >
      <CardContent className="flex flex-col gap-5 px-5 py-5 text-center md:px-6 md:py-6">
        <img
          className="aspect-video w-full rounded-2xl object-cover"
          src={imageUrl}
          alt={imageAlt}
        />
        <Stack gap="sm" className="items-center">
          <SectionHeader
            align="center"
            size="sm"
            tone={accent ? "inverse" : "default"}
            title={title}
            titleClassName="max-w-[18ch]"
          />
          <div
            className={cn(
              "rounded-2xl px-4 py-3 text-sm leading-6 md:text-base",
              accent
                ? "bg-brand-gold/20 text-text-inverse"
                : "bg-surface-muted text-text-primary"
            )}
          >
            {description}
          </div>
        </Stack>
        <Button
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
    <Section density="compact">
      <div className="grid gap-6">
        <CompetitionCard {...HOME_COMPETITION_CONTENT.battle} />
        <CompetitionCard {...HOME_COMPETITION_CONTENT.peoplesSpeaker} />
      </div>
    </Section>
  );
}
