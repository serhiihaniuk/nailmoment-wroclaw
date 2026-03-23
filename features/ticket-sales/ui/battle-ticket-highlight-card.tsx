import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { TypographyText, TypographyTitle } from "@/shared/ui/typography";
import { mergeUi } from "@/shared/lib/utils";

type BattleTicketHighlightCardProps = {
  imageUrl: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  highlights: Array<{ icon: string; text: string }>;
  notes: string[];
};

export function BattleTicketHighlightCard({
  description,
  eyebrow,
  highlights,
  imageAlt,
  imageUrl,
  notes,
  title,
}: BattleTicketHighlightCardProps) {
  const uiId = "ticket-highlight";

  return (
    <Card
      uiId={uiId}
      surface="accent"
      spacing="none"
      className="w-full max-w-xl rounded-[1.4rem] bg-brand-brown text-text-inverse"
    >
      <CardContent
        uiId={uiId}
        className="flex flex-col gap-5 px-5 py-5 text-center md:px-8 md:py-8"
      >
        <img
          data-ui={mergeUi(uiId, "image")}
          src={imageUrl}
          alt={imageAlt}
          className="mx-auto h-auto w-full max-w-[250px] object-contain"
        />

        <div
          data-ui={mergeUi(uiId, "copy")}
          className="flex flex-col items-center gap-2"
        >
          <TypographyText
            as="p"
            uiId={mergeUi(uiId, "eyebrow")}
            size="body"
            tone="inverse"
            align="center"
            className="text-text-inverse"
          >
            {eyebrow}
          </TypographyText>
          <TypographyTitle
            as="h3"
            uiId={mergeUi(uiId, "title")}
            size="section"
            tone="inverse"
            align="center"
            className="leading-[0.95]"
          >
            {title}
          </TypographyTitle>
          <TypographyText
            as="p"
            uiId={mergeUi(uiId, "description")}
            size="body"
            tone="inverse"
            align="center"
            className="text-text-inverse"
          >
            {description}
          </TypographyText>
        </div>

        <div data-ui={mergeUi(uiId, "highlights")} className="space-y-3">
          {highlights.map((item, index) => (
            <div
              key={`${item.icon}-${index}`}
              data-ui={mergeUi(uiId, "highlight", index + 1)}
              className="rounded-xl bg-white/10 px-4 py-3 text-center text-sm font-semibold leading-6 text-text-inverse md:text-base"
            >
              <span data-ui={mergeUi(uiId, "highlight-icon", index + 1)}>
                {item.icon}{" "}
              </span>
              <span data-ui={mergeUi(uiId, "highlight-text", index + 1)}>
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <div
          data-ui={mergeUi(uiId, "notes")}
          className="space-y-1 text-center text-xs leading-5 text-text-inverse/70 md:text-sm"
        >
          {notes.map((note, index) => (
            <p key={index} data-ui={mergeUi(uiId, "note", index + 1)}>
              {note}
            </p>
          ))}
        </div>

        <div data-ui={mergeUi(uiId, "actions")} className="grid gap-3">
          <Button
            uiId={mergeUi(uiId, "buy-button")}
            asChild
            className="w-full justify-between bg-[linear-gradient(115deg,#edc12b_0%,#fff8ad_34%,#f0d04e_64%,#dc9d25_100%)] text-brand-brown shadow-none hover:brightness-100"
          >
            <a href="#battle-of-masters">
              <span>ПРИДБАТИ КВИТОК УЧАСНИКА БИТВИ МАЙСТРІВ</span>
              <img
                data-ui={mergeUi(uiId, "buy-icon")}
                src="/images/2026/ticket-icon.svg"
                alt=""
                aria-hidden="true"
                className="h-6 w-6 shrink-0"
              />
            </a>
          </Button>
          <Button
            uiId={mergeUi(uiId, "details-button")}
            asChild
            variant="secondary"
            className="w-full border-white bg-transparent text-text-inverse hover:bg-white/8"
          >
            <Link href="/battle">ДІЗНАТИСЯ ПОДРОБИЦІ</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
