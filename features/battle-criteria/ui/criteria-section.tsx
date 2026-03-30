import {
  ArticleCallout,
  ArticleHeading,
  ArticleList,
  ArticleListItem,
  ArticleSubheading,
  ArticleText,
} from "@/shared/ui/article";
import { Card, CardContent } from "@/shared/ui/card";
import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { SectionHeader } from "@/shared/ui/section-header";

export function CriteriaSection() {
  return (
    <Section uiId="battle-criteria-section" density="compact">
      <Stack uiId="battle-criteria-content" gap="xl" className="items-center">
        <Stack uiId="battle-criteria-intro" gap="sm" className="items-center text-center">
          <SectionHeader
            uiId="battle-criteria-title"
            title="Як проходить конкурс «Битва Майстрів»"
            tone="accent"
          />
          <ArticleText uiId="battle-criteria-description" className="text-center">
            Конкурс складається з двох етапів.
          </ArticleText>
        </Stack>

        <Card uiId="battle-first-stage-card" surface="subtle" spacing="none" className="w-full rounded-3xl">
          <CardContent className="px-5 py-6 md:px-8 md:py-8">
            <Stack uiId="battle-first-stage" gap="default">
              <ArticleHeading uiId="battle-first-stage-title">
                Етап 1 — Онлайн відбірковий тур
              </ArticleHeading>

              <ArticleText uiId="battle-first-stage-text-1">
                На першому етапі ти обираєш номінацію та надсилаєш фотографії своєї роботи.
              </ArticleText>

              <ArticleText uiId="battle-first-stage-text-2">
                Усі роботи, що відповідають умовам конкурсу, публікуються для онлайн-голосування.
              </ArticleText>

              <ArticleText uiId="battle-first-stage-text-3">
                За результатами голосування 3 (три) майстри з кожної номінації проходять у фінал конкурсу.
              </ArticleText>

              <Stack uiId="battle-first-stage-requirements" gap="sm">
                <ArticleSubheading uiId="battle-first-stage-requirements-title">
                  Вимоги до роботи
                </ArticleSubheading>

                <ArticleText uiId="battle-first-stage-requirements-intro">
                  Щоб робота була прийнята до участі:
                </ArticleText>

                <ArticleList uiId="battle-first-stage-requirements-list">
                  <ArticleListItem uiId="battle-first-stage-requirements-item-1">
                    дизайн має відповідати обраній номінації
                  </ArticleListItem>
                  <ArticleListItem uiId="battle-first-stage-requirements-item-2">
                    фотографія повинна бути чіткою та хорошої якості
                  </ArticleListItem>
                  <ArticleListItem uiId="battle-first-stage-requirements-item-3">
                    робота повинна бути акуратною, без затікань та порізів
                  </ArticleListItem>
                  <ArticleListItem uiId="battle-first-stage-requirements-item-4">
                    можна надіслати фото однієї або двох рук (за бажанням)
                  </ArticleListItem>
                  <ArticleListItem uiId="battle-first-stage-requirements-item-5">
                    на фото має бути чітко видно дизайн та форму нігтів
                  </ArticleListItem>
                </ArticleList>
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Card uiId="battle-final-stage-card" surface="subtle" spacing="none" className="w-full rounded-3xl">
          <CardContent className="px-5 py-6 md:px-8 md:py-8">
            <Stack uiId="battle-final-stage" gap="default">
              <ArticleHeading uiId="battle-final-stage-title">
                Етап 2 — Фінальний тур
              </ArticleHeading>

              <ArticleCallout uiId="battle-final-stage-callout" tone="danger">
                {"⚠️ УВАГА! Фінал конкурсу проходить за день до фестивалю Nail Moment.\n\n• 6 липня — фінал «Битви Майстрів»\n• 7 липня — фестиваль Nail Moment\nФінал відбудеться у Варшаві."}
              </ArticleCallout>

              <Stack uiId="battle-final-stage-feature" gap="sm">
                <ArticleSubheading uiId="battle-final-stage-feature-title">
                  Особливість фінального туру
                </ArticleSubheading>

                <ArticleCallout uiId="battle-final-stage-feature-callout">
                  У фіналі немає номінацій.
                </ArticleCallout>

                <ArticleText uiId="battle-final-stage-feature-text-1">
                  Тут головне — твоя фантазія, креативність та рівень майстерності.
                </ArticleText>

                <ArticleText uiId="battle-final-stage-feature-text-2">
                  Ти можеш створити будь-який дизайн, який вважаєш найефектніший!
                </ArticleText>

                <ArticleText uiId="battle-final-stage-feature-text-3">
                  Твоя задача — зробити максимально яскраве перевтілення руки моделі.
                </ArticleText>
              </Stack>

              <Stack uiId="battle-final-stage-idea" gap="sm">
                <ArticleText uiId="battle-final-stage-idea-title" className="font-semibold">
                  ✨ Ідея фіналу проста:
                </ArticleText>

                <ArticleText uiId="battle-final-stage-idea-before-after">
                  рука ДО → рука ПІСЛЯ
                </ArticleText>

                <ArticleText uiId="battle-final-stage-idea-text" className="whitespace-pre-line">
                  {'Щоб глядачі подивилися на результат і сказали:\n“Вау! Я не вірю, що це одна і та сама рука.”'}
                </ArticleText>
              </Stack>

              <Stack uiId="battle-final-stage-scoring" gap="sm">
                <ArticleSubheading uiId="battle-final-stage-scoring-title">
                  Що буде оцінюватися:
                </ArticleSubheading>

                <ArticleText uiId="battle-final-stage-scoring-text">
                  Фінальні роботи оцінюють майстри та учасники фестивалю Nail Moment.
                </ArticleText>

                <ArticleText uiId="battle-final-stage-scoring-intro">
                  Тому важливо:
                </ArticleText>

                <ArticleList uiId="battle-final-stage-scoring-list">
                  <ArticleListItem uiId="battle-final-stage-scoring-item-1">
                    проявити креативність
                  </ArticleListItem>
                  <ArticleListItem uiId="battle-final-stage-scoring-item-2">
                    показати високу якість роботи
                  </ArticleListItem>
                  <ArticleListItem uiId="battle-final-stage-scoring-item-3">
                    створити яскраве та ефектне перевтілення
                  </ArticleListItem>
                </ArticleList>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Section>
  );
}
