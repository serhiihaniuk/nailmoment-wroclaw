import { Card, CardContent } from "@/shared/ui/card";
import { DecorativeImage } from "@/shared/ui/decorative-image";
import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { ListItem } from "@/shared/ui/list-item";
import { SectionHeader } from "@/shared/ui/section-header";
import { mergeUi } from "@/shared/lib/utils";
import { IMAGES } from "@/shared/config/const";
import { FESTIVAL_INFO_CONTENT } from "../model/content";

export function FestivalInfoSection() {
  return (
    <Section uiId="festival-info-section" density="compact">
      <Card uiId="festival-info" surface="subtle" spacing="none">
        <CardContent uiId="festival-info" className="py-6 md:py-8">
          <Stack uiId="festival-info-groups" gap="xl">
            <Stack uiId="festival-info-intro" gap="lg" className="items-center">
              <SectionHeader
                uiId="festival-info-title"
                tone="accent"
                title={FESTIVAL_INFO_CONTENT.introTitle}
              />

              <p className="text-base font-medium">
                Тільки ми:
              </p>

              <ul
                data-ui="festival-info-list"
                className="relative flex w-full flex-col gap-2.5 rounded-xl bg-surface-page p-4 md:p-5"
              >
                <>
                  {FESTIVAL_INFO_CONTENT.introBullets.map((text, index) => (
                    <ListItem
                      uiId={mergeUi("festival-info-item", index + 1)}
                      key={text}
                      text={text}
                    />
                  ))}
                  <DecorativeImage
                    uiId="festival-info-leaf"
                    src={IMAGES.DECORATIVE_LEAF_7}
                    className="-right-6 rotate-y-180 bottom-1/2 translate-y-1/2 size-[200px]"
                  />
                </>
              </ul>
            </Stack>

            <Stack uiId="festival-info-motto" gap="lg" className="items-center">
              <SectionHeader
                uiId="festival-info-motto-title"
                tone="accent"
                title={FESTIVAL_INFO_CONTENT.mottoTitle}
              />
              <ul
                data-ui="festival-info-motto-list"
                className="flex w-full flex-col gap-2.5 rounded-xl bg-surface-page p-4 md:p-5"
              >
                {FESTIVAL_INFO_CONTENT.mottoBullets.map((text, index) => (
                  <ListItem
                    uiId={mergeUi("festival-info-motto-item", index + 1)}
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
  );
}
