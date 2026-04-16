"use client";

import { Card, CardContent } from "@/shared/ui/card";
import { Image } from "@/shared/ui/image";
import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { mergeUi } from "@/shared/lib/utils";
import { SectionHeader } from "@/shared/ui/section-header";
import { TypographyTitle } from "@/shared/ui/typography";

const NOMINATIONS = [
  {
    id: 1,
    title: "Французький манікюр",
    imageUrl:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/nails/n6-07STkcqyAFGfns5IT9CoBJO5gjqsLo.jpg",
  },
  {
    id: 2,
    title: "Градієнт",
    imageUrl:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/nails/n5-1PdOyhwwxRnsvFyyi1vchTE2GeJqlY.jpg",
  },
  {
    id: 3,
    title: "3D / Крейзі дизайн",
    imageUrl:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/nails/n4-aNJOfZ6JCQa6N3RTOPEXS452M6mse2.jpg",
  },
  {
    id: 4,
    title: "Дизайн у стилі XNail",
    subtitle: "переможців вибирає бренд XNail",
    imageUrl:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/nails/a.jpg",
  },
  {
    id: 5,
    title: "Однотонний манікюр",
    imageUrl:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/nails/n2-RlnJfo5lmKAWPS70QyOiu2Rk4E8h7i.jpg",
  },
  {
    id: 6,
    title: "Екстра довжина",
    imageUrl:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/nails/n1-hFuSrP2kac5NPVHGhnDggxN9AUksTw.jpg",
  },
];

export function BattleNominationsSection() {
  return (
    <Section uiId="battle-nominations-section" density="compact">
      <Stack
        uiId="battle-nominations-content"
        gap="lg"
        className="items-center"
      >
        <SectionHeader
          uiId="battle-nominations-header"
          title="Номінації у відбірковому турі"
          description="Обери категорію, у якій хочеш подати свою роботу на перший етап."
          tone="accent"
        />

        <div
          data-ui="battle-nominations-grid"
          className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {NOMINATIONS.map((nomination) => (
            <Card
              key={nomination.id}
              uiId={mergeUi("battle-nomination-card", nomination.id)}
              surface="subtle"
              spacing="none"
              className="rounded-[2rem]"
            >
              <CardContent
                uiId={mergeUi(
                  "battle-nomination-card",
                  nomination.id,
                  "content",
                )}
                className="px-5 py-5 text-center md:px-6"
              >
                <TypographyTitle
                  as="h3"
                  uiId={mergeUi(
                    "battle-nomination-card",
                    nomination.id,
                    "title",
                  )}
                  order="order4"
                  tone="accent"
                  className="normal-case"
                >
                  {nomination.id}. {nomination.title}
                </TypographyTitle>
                {nomination.subtitle ? (
                  <p
                    data-ui={mergeUi(
                      "battle-nomination-card",
                      nomination.id,
                      "subtitle",
                    )}
                    className="mt-1 text-sm opacity-70"
                  >
                    ({nomination.subtitle})
                  </p>
                ) : null}
              </CardContent>

              <div
                data-ui={mergeUi(
                  "battle-nomination-card",
                  nomination.id,
                  "media",
                )}
                className="overflow-hidden rounded-b-[2rem]"
              >
                <Image
                  uiId={mergeUi(
                    "battle-nomination-card",
                    nomination.id,
                    "image",
                  )}
                  url={nomination.imageUrl}
                  alt={nomination.title}
                  width={960}
                  height={1280}
                  className="aspect-[4/3] rounded-none"
                />
              </div>
            </Card>
          ))}
        </div>
      </Stack>
    </Section>
  );
}
