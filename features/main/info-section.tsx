import {
  MediaCard,
  MediaCardImage,
  MediaCardTitle,
  MediaCardText,
} from "@/components/patterns/media-card";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { Card, CardContent } from "@/components/ui/card";
import { ListItem } from "@/components/ui/list-item";
import { SectionHeader } from "@/components/ui/section-header";
import { TypographyText } from "@/components/ui/typography";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { mergeUi } from "@/lib/utils";
import { IMAGES } from "@/shared/const";
import { HOME_INFO_CONTENT } from "@/shared/content/home/info";

export function InfoSection() {
  return (
    <>
      <Section uiId="info-intro-section" density="compact">
        <Card uiId="info-intro" surface="subtle" spacing="none">
          <CardContent uiId="info-intro" className="py-6 md:py-8">
            <Stack uiId="info-intro-groups" gap="xl">
              <Stack uiId="info-intro-block" gap="lg" className="items-center">
                <SectionHeader
                  uiId="info-intro-title"
                  tone="accent"
                  className="max-w-4xl"
                  title={HOME_INFO_CONTENT.introTitle}
                />

                <p className="text-base font-medium text-text-primary">
                  Тільки ми:
                </p>

                <ul data-ui="info-intro-list" className="relative flex w-full flex-col gap-2.5 rounded-xl bg-surface-page p-4 md:p-5">
                  {HOME_INFO_CONTENT.introBullets.map((text, index) => (
                    <ListItem
                      uiId={mergeUi("info-intro-item", index + 1)}
                      key={text}
                      text={text}
                    />
                  ))}
                  <DecorativeImage
                    uiId="info-intro-leaf"
                    src={IMAGES.DECORATIVE_LEAF_5}
                    className="-right-8 bottom-6 h-44 w-44"
                  />
                </ul>
              </Stack>

              <Stack uiId="info-motto-block" gap="lg" className="items-center">
                <SectionHeader
                  uiId="info-motto-title"
                  tone="accent"
                  className="max-w-3xl"
                  title={HOME_INFO_CONTENT.mottoTitle}
                />
                <ul data-ui="info-motto-list" className="flex w-full flex-col gap-2.5 rounded-xl bg-surface-page p-4 md:p-5">
                  {HOME_INFO_CONTENT.mottoBullets.map((text, index) => (
                    <ListItem
                      uiId={mergeUi("info-motto-item", index + 1)}
                      key={text}
                      text={text}
                    />
                  ))}
                </ul>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Section>

      <Section uiId="warsaw-section" density="compact">
        <SectionHeader
          uiId="warsaw-title"
          className="max-w-4xl"
          title={`${HOME_INFO_CONTENT.warsawCard.title[0]} ${HOME_INFO_CONTENT.warsawCard.title[1]}`}
        />
        <TypographyText
          uiId="warsaw-text"
          size="lead"
          align="center"
          className="mx-auto mt-4 max-w-[32ch]"
        >
          {HOME_INFO_CONTENT.warsawCard.description}
        </TypographyText>
        <MediaCard
          uiId="warsaw"
          surface="transparent"
          className="mx-auto mt-5 w-full max-w-4xl"
        >
          <MediaCardImage
            uiId="warsaw"
            url={HOME_INFO_CONTENT.warsawCard.imageUrl}
            alt="Warsaw skyline"
            width={900}
            className="aspect-[4/5]"
          />
        </MediaCard>
      </Section>

      <Section uiId="market-section" density="compact">
        <Stack uiId="market-groups" gap="xl">
          <Stack uiId="market-block" gap="lg" className="items-center">
            <SectionHeader
              uiId="market-title"
              className="max-w-4xl"
              title={HOME_INFO_CONTENT.marketTitle}
            />
            <div data-ui="market-cards" className="grid gap-8 md:gap-10">
              {HOME_INFO_CONTENT.marketCards.map((card, index) => (
                <MediaCard uiId={mergeUi("market-card", index + 1)} key={card.url}>
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
            <MediaCard uiId="boxopad">
              <Stack uiId="boxopad-copy" gap="sm" className="items-center text-center">
                <MediaCardTitle uiId="boxopad">{HOME_INFO_CONTENT.boxopad.title}</MediaCardTitle>
                <MediaCardText uiId="boxopad" className="text-text-muted">
                  {HOME_INFO_CONTENT.boxopad.description}
                </MediaCardText>
              </Stack>
              <MediaCardImage
                uiId="boxopad"
                url={HOME_INFO_CONTENT.boxopad.url}
                alt="Boxopad card"
                width={900}
              />
            </MediaCard>
          </Stack>

          <Stack uiId="why-attend-block" gap="lg" className="items-center">
            <SectionHeader
              uiId="why-attend-title"
              tone="accent"
              title={HOME_INFO_CONTENT.whyAttendTitle}
            />
            <div data-ui="why-attend-cards" className="grid gap-8 md:gap-10">
              {HOME_INFO_CONTENT.whyAttendItems.map((item, index) => (
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
                  <MediaCardText
                    uiId={mergeUi("why-attend-card", index + 1)}
                    className="mx-auto max-w-[30ch] font-medium"
                  >
                    {item.caption}
                  </MediaCardText>
                </MediaCard>
              ))}
            </div>
          </Stack>
        </Stack>
      </Section>
    </>
  );
}
