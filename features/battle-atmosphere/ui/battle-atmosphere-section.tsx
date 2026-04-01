import { BATTLE_ATMOSPHERE_CONTENT } from "@/features/battle-atmosphere/model/content";
import { Card, CardContent } from "@/shared/ui/card";
import { Image } from "@/shared/ui/image";
import { ImageCarousel } from "@/shared/ui/image-carousel";
import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { SectionHeader } from "@/shared/ui/section-header";
import { TypographyText, TypographyTitle } from "@/shared/ui/typography";

export function BattleAtmosphereSection() {
  return (
    <Section uiId="battle-atmosphere-section" density="compact">
      <Stack uiId="battle-atmosphere-content" gap="xl" className="items-center">
        <Stack uiId="battle-atmosphere-intro" gap="sm" className="items-center text-center">
          <SectionHeader
            uiId="battle-atmosphere-title"
            title={BATTLE_ATMOSPHERE_CONTENT.atmosphereTitle}
            tone="accent"
          />
          <TypographyText
            uiId="battle-atmosphere-description"
            size="body"
            tone="default"
          >
            {BATTLE_ATMOSPHERE_CONTENT.atmosphereDescription}
          </TypographyText>
        </Stack>

        <ImageCarousel
          images={BATTLE_ATMOSPHERE_CONTENT.atmosphereImages}
          imageAlt="Атмосфера Битви Майстрів 2025"
          className="max-w-4xl"
        />

        <Stack uiId="battle-winners" gap="lg" className="w-full max-w-4xl items-center">
          <SectionHeader
            uiId="battle-winners-title"
            title={BATTLE_ATMOSPHERE_CONTENT.winnersTitle}
            tone="accent"
          />

          <div data-ui="battle-winners-cards" className="grid w-full grid-cols-1 gap-5">
            {BATTLE_ATMOSPHERE_CONTENT.winners.map((winner, index) => (
              <Card
                key={winner.place}
                uiId={`battle-winner-${index + 1}`}
                surface="subtle"
                spacing="none"
                className="rounded-[2rem]"
              >
                <CardContent className="flex flex-col gap-4 p-4">
                  <Image
                    uiId={`battle-winner-${index + 1}`}
                    url={winner.imageUrl}
                    alt={winner.imageAlt}
                    className="w-full rounded-[1.4rem]"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                  <TypographyTitle
                    as="h3"
                    uiId={`battle-winner-${index + 1}`}
                    order="order4"
                    tone="accent"
                    className="normal-case"
                  >
                    {winner.place}
                  </TypographyTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </Stack>
      </Stack>
    </Section>
  );
}
