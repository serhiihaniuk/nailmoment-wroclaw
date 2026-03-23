import {
  MediaCard,
  MediaCardImage,
  MediaCardText,
  MediaCardTitle,
} from "@/shared/ui/media-card";
import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { SectionHeader } from "@/shared/ui/section-header";
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
                />
                <MediaCardText uiId={mergeUi("market-card", index + 1)}>
                  {card.caption}
                </MediaCardText>
              </MediaCard>
            ))}
          </div>
          <MediaCard uiId="boxopad" surface="subtle">
            <Stack uiId="boxopad-copy" gap="sm" className="items-center text-center">
              <MediaCardTitle uiId="boxopad">
                {MARKET_SHOWCASE_CONTENT.boxopad.title}
              </MediaCardTitle>
              <MediaCardText uiId="boxopad" className="text-text-muted">
                {MARKET_SHOWCASE_CONTENT.boxopad.description}
              </MediaCardText>
            </Stack>
            <MediaCardImage
              uiId="boxopad"
              url={MARKET_SHOWCASE_CONTENT.boxopad.url}
              alt="Boxopad card"
              width={900}
            />
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
