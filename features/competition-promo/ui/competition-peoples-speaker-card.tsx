import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { DecoratedOliveCard } from "@/shared/ui/decorated-olive-card";
import { TypographyText, TypographyTitle } from "@/shared/ui/typography";
import { mergeUi } from "@/shared/lib/utils";

type CompetitionPeoplesSpeakerCardProps = {
  id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  href: string;
  buttonText: string;
};

export function CompetitionPeoplesSpeakerCard({
  buttonText,
  description,
  href,
  id,
  imageAlt,
  imageUrl,
  title,
}: CompetitionPeoplesSpeakerCardProps) {
  const uiId = mergeUi("competition", id);

  return (
    <DecoratedOliveCard
      id={id}
      uiId={uiId}
      leafLayout="compact"
      className="scroll-mt-24 rounded-[1.4rem] bg-brand-olive text-text-inverse"
      contentClassName="flex flex-col items-center gap-4 px-4 pb-4 pt-6 text-center md:gap-5 md:px-6 md:pb-6"
    >
      <div data-ui={mergeUi(uiId, "content")} className="contents">
        <span
          aria-hidden="true"
          data-ui={mergeUi(uiId, "sparkle", 1)}
          className="absolute left-[22%] top-8 text-2xl leading-none text-brand-gold md:text-3xl"
        >
          ✦
        </span>
        <span
          aria-hidden="true"
          data-ui={mergeUi(uiId, "sparkle", 2)}
          className="absolute right-[19%] top-24 text-2xl leading-none text-brand-gold md:text-3xl"
        >
          ✦
        </span>
        <span
          aria-hidden="true"
          data-ui={mergeUi(uiId, "sparkle", 3)}
          className="absolute right-[28%] top-34 text-lg leading-none text-brand-gold md:text-xl"
        >
          ✦
        </span>

        <img
          data-ui={mergeUi(uiId, "image")}
          className="relative z-[1] h-60 w-auto object-contain md:h-72"
          src={imageUrl}
          alt={imageAlt}
        />

        <div
          data-ui={mergeUi(uiId, "copy")}
          className="flex w-full max-w-sm flex-col items-center gap-3"
        >
          <TypographyTitle
            as="h3"
            uiId={mergeUi(uiId, "title")}
            size="card"
            align="center"
            tone="inverse"
            className="leading-[1.12]"
          >
            {title}
          </TypographyTitle>
          <TypographyText
            as="p"
            uiId={mergeUi(uiId, "description")}
            size="body"
            align="center"
            tone="inverse"
            className="text-sm leading-7 text-text-inverse md:text-base"
          >
            {description}
          </TypographyText>
        </div>

        <Button
          uiId={mergeUi(uiId, "button")}
          asChild
          variant="default"
          className="mt-1 w-full uppercase text-brand-olive"
        >
          <Link href={href}>{buttonText}</Link>
        </Button>
      </div>
    </DecoratedOliveCard>
  );
}
