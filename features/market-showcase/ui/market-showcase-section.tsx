import {
  MediaCard,
  MediaCardImage,
  MediaCardText,
  MediaCardTitle,
} from "@/shared/ui/media-card";
import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { SectionHeader } from "@/shared/ui/section-header";
import { TypographyDisplay } from "@/shared/ui/typography";
import { mergeUi } from "@/shared/lib/utils";
import { IMAGES } from "@/shared/config/const";
import { MARKET_SHOWCASE_CONTENT } from "../model/content";

export function MarketShowcaseSection() {
  return (
    <Section uiId="market-section" density="compact">
      <div data-ui="market-shell" className="relative">
        <img
          data-ui="market-gap-background"
          src={IMAGES.DECORATIVE_BG_1}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-6 top-[47%] z-0 h-72 w-44 -translate-y-1/2 object-cover opacity-40"
        />
        <Stack uiId="market-groups" gap="xl" className="relative z-[1]">
        <Stack uiId="market-block" gap="lg" className="items-center">
          <SectionHeader
            uiId="market-title"
            title={MARKET_SHOWCASE_CONTENT.title}
          />
          <div data-ui="market-cards" className="grid gap-8 md:gap-10">
            {MARKET_SHOWCASE_CONTENT.cards.map((card, index) => (
              <MediaCard
                uiId={mergeUi("market-card", index + 1)}
                key={card.url}
                surface="subtle"
              >
                <MediaCardImage
                  uiId={mergeUi("market-card", index + 1)}
                  url={card.url}
                  alt="Market card"
                  width={900}
                  className="aspect-[3/4]"
                  imageClassName={
                    index === 0 ? "object-[center_18%]" : "object-[center_28%]"
                  }
                />
                <MediaCardText uiId={mergeUi("market-card", index + 1)}>
                  {card.caption}
                </MediaCardText>
              </MediaCard>
            ))}
          </div>
          <MediaCard
            uiId="boxopad"
            surface="subtle"
            className="relative overflow-visible border-2 border-white/80 bg-[linear-gradient(241deg,rgba(255,211,143,0.98),rgba(245,240,210,0.99)_56%,rgba(75,114,5,0.71))] shadow-[0_22px_48px_rgba(159,127,43,0.16)]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-6 top-5 h-24 rounded-full bg-[radial-gradient(circle,rgba(255,177,94,0.42),rgba(255,177,94,0))] blur-2xl"
            />
            <Stack uiId="boxopad-copy" gap="sm" className="items-center text-center">
              <TypographyDisplay
                as="h3"
                uiId="boxopad-title"
                tone="accent"
                size="sm"
              >
                {MARKET_SHOWCASE_CONTENT.boxopad.title}
              </TypographyDisplay>
              <MediaCardText uiId="boxopad" className="opacity-[.78]">
                {MARKET_SHOWCASE_CONTENT.boxopad.description}
              </MediaCardText>
            </Stack>
            <div
              data-ui="boxopad-frame"
              className="relative rounded-[1.8rem] border-2 border-white/90 bg-white/70 p-0 shadow-[0_10px_26px_rgba(57,85,0,0.1)]"
            >
              <MediaCardImage
                uiId="boxopad"
                url={MARKET_SHOWCASE_CONTENT.boxopad.url}
                alt="Boxopad card"
                width={900}
                className="aspect-[3/4] md:aspect-square rounded-[1.65rem]"
                imageClassName="object-[center_18%]"
              />
            </div>
          </MediaCard>
        </Stack>

        <Stack uiId="why-attend-block" gap="lg" className="items-center">
          <SectionHeader
            uiId="why-attend-title"
            tone="accent"
            title={MARKET_SHOWCASE_CONTENT.whyAttendTitle}
          />
          <div data-ui="why-attend-cards" className="grid gap-8 md:gap-10">
            {MARKET_SHOWCASE_CONTENT.whyAttendItems.map((item, index) => (
              <MediaCard
                uiId={mergeUi("why-attend-card", index + 1)}
                key={item.url}
                surface="transparent"
              >
                <MediaCardImage
                  uiId={mergeUi("why-attend-card", index + 1)}
                  url={item.url}
                  alt="Why attend"
                  elevated
                  width={900}
                />
                <MediaCardTitle
                  uiId={mergeUi("why-attend-card", index + 1)}
                  className="mx-auto"
                >
                  {item.caption}
                </MediaCardTitle>
              </MediaCard>
            ))}
          </div>
        </Stack>
        </Stack>
      </div>
    </Section>
  );
}
