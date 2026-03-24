import Image from "next/image";
import { Card, CardContent } from "@/shared/ui/card";
import { mergeUi } from "@/shared/lib/utils";
import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { SectionHeader } from "@/shared/ui/section-header";
import { TypographyText, TypographyTitle } from "@/shared/ui/typography";

const images = {
  n1: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/nails/n1-hFuSrP2kac5NPVHGhnDggxN9AUksTw.jpg",
  n2: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/nails/n2-RlnJfo5lmKAWPS70QyOiu2Rk4E8h7i.jpg",
  n3: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/nails/n3-RYvDpnKhqAS2nFULlymSxqZS3f1NkE.jpg",
  n4: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/nails/n4-aNJOfZ6JCQa6N3RTOPEXS452M6mse2.jpg",
  n5: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/nails/n5-1PdOyhwwxRnsvFyyi1vchTE2GeJqlY.jpg",
  n6: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/nails/n6-07STkcqyAFGfns5IT9CoBJO5gjqsLo.jpg",
};

const NOMINATIONS_DATA = [
  { id: 1, title: "Французький манікюр", imageUrl: images.n6 },
  { id: 2, title: "Градієнт", imageUrl: images.n5 },
  { id: 3, title: "3D / корейський дизайн", imageUrl: images.n4 },
  { id: 4, title: "Неоновий манікюр", imageUrl: images.n3 },
  { id: 5, title: "Однотонний манікюр", imageUrl: images.n2 },
  { id: 6, title: "Екстра довжина", imageUrl: images.n1 },
];

const FIRST_ROUND_CRITERIA_DATA = [
  "Робота має відповідати номінації.",
  "Робота має бути чистою, акуратною і візуально сильною.",
  "Фотографії мають бути чіткі та високої якості.",
];

const FINAL_ROUND_CRITERIA_DATA = [
  "У фіналі немає номінацій — тільки твоя ідея, техніка та подача.",
  "Можна нарощувати, ліпити, малювати, створювати складні дизайни й перевтілення.",
  "Потрібно підготувати фото «до», «після», колаж та короткий відеоролик роботи.",
];

function CriteriaList({
  uiId,
  items,
}: {
  uiId: string;
  items: string[];
}) {
  return (
    <Card uiId={uiId} surface="subtle" spacing="none" className="rounded-[2rem]">
      <CardContent uiId={uiId} className="px-5 py-5 md:px-6 md:py-6">
        <Stack uiId={mergeUi(uiId, "items")} gap="default">
          {items.map((criterion, index) => (
            <div
              key={criterion}
              data-ui={mergeUi(uiId, "item", index + 1)}
              className="flex items-start gap-3"
            >
              <span
                data-ui={mergeUi(uiId, "item", index + 1, "number")}
                className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-olive text-xs font-bold text-white"
              >
                {index + 1}
              </span>
              <TypographyText
                as="p"
                uiId={mergeUi(uiId, "item", index + 1, "text")}
                align="left"
                size="body"
                tone="default"
                className="text-brand-brown"
              >
                {criterion}
              </TypographyText>
            </div>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export function CriteriaSection() {
  return (
    <Section uiId="battle-criteria-section" density="compact">
      <Stack uiId="battle-criteria-content" gap="xl" className="items-center">
        <Stack uiId="battle-nominations" gap="lg" className="w-full items-center">
          <SectionHeader
            uiId="battle-nominations-header"
            title="Номінації у відбірковому турі"
            tone="accent"
            description="Обери категорію, у якій хочеш подати свою роботу на перший етап."
            descriptionClassName="text-brand-brown"
          />

          <div
            data-ui="battle-nominations-list"
            className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {NOMINATIONS_DATA.map((nomination) => (
              <Card
                uiId={mergeUi("battle-nomination", nomination.id)}
                key={nomination.id}
                surface="subtle"
                spacing="none"
                className="rounded-[2rem]"
              >
                <div
                  data-ui={mergeUi("battle-nomination", nomination.id, "media")}
                  className="overflow-hidden rounded-t-[2rem]"
                >
                  <Image
                    src={nomination.imageUrl}
                    alt={nomination.title}
                    width={960}
                    height={720}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <CardContent
                  uiId={mergeUi("battle-nomination", nomination.id)}
                  className="px-5 py-5 text-center md:px-6"
                >
                  <TypographyTitle
                    as="h3"
                    uiId={mergeUi("battle-nomination", nomination.id, "title")}
                    size="card"
                    tone="accent"
                    className="normal-case"
                  >
                    {nomination.id}. {nomination.title}
                  </TypographyTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </Stack>

        <Stack uiId="battle-first-round-criteria" gap="lg" className="w-full items-center">
          <SectionHeader
            uiId="battle-first-round-criteria-header"
            title="Критерії відбору у першому турі"
            tone="accent"
            description="Саме на ці речі звертатимуть увагу під час оцінювання робіт."
            descriptionClassName="text-brand-brown"
          />
          <div data-ui="battle-first-round-criteria-shell" className="w-full max-w-4xl">
            <CriteriaList uiId="battle-first-round-criteria-card" items={FIRST_ROUND_CRITERIA_DATA} />
          </div>
        </Stack>

        <Stack uiId="battle-final-round-criteria" gap="lg" className="w-full items-center">
          <SectionHeader
            uiId="battle-final-round-criteria-header"
            title="Критерії фінального туру"
            tone="accent"
            description="Фінал оцінює не номінацію, а цілісне перевтілення та силу твоєї подачі."
            descriptionClassName="text-brand-brown"
          />
          <div data-ui="battle-final-round-criteria-shell" className="w-full max-w-4xl">
            <CriteriaList uiId="battle-final-round-criteria-card" items={FINAL_ROUND_CRITERIA_DATA} />
          </div>
        </Stack>
      </Stack>
    </Section>
  );
}
