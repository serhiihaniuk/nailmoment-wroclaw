import Link from "next/link";
import { BattleAtmosphereSection } from "@/features/battle-atmosphere/ui/battle-atmosphere-section";
import { BuyBattleTicketButton } from "@/entities/ticket/ui/buy-battle-ticket-button";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { IMAGES, INFO_URL } from "@/shared/config/const";
import { mergeUi } from "@/shared/lib/utils";
import { Image } from "@/shared/ui/image";
import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { SectionHeader } from "@/shared/ui/section-header";
import { TypographyText, TypographyTitle } from "@/shared/ui/typography";

const BATTLE_STEPS_DATA = [
  {
    stepNumber: 1,
    title: "Ознайомся з умовами конкурсу",
    description:
      "Уважно прочитай повні умови участі у конкурсі.\nПодавши заявку, ти підтверджуєш, що ознайомився та погоджуєшся з усіма правилами конкурсу.",
    actionText: "Прочитати умови",
    actionHref: "/battle/regulamin",
  },
  {
    stepNumber: 2,
    title: "Придбай квиток на фестиваль Nail Moment",
    description:
      "Для того щоб прийняти участь у конкурсі «Битва Майстрів», треба бути учасником фестивалю.",
    actionText: "Придбати квиток",
    actionHref: "/#ticket-section",
  },
  {
    stepNumber: 3,
    title: "Придбай квиток учасника",
    description:
      "Щоб взяти участь у «Битві Майстрів», потрібно придбати квиток на обрану номінацію.\n\n📌 1 номінація = 1 квиток\n\nЯкщо ти хочеш брати участь у кількох номінаціях, потрібно придбати окремий квиток на кожну номінацію.\n\n✨ При участі у кількох номінаціях діє знижка для учасників.\n\nНаприклад:\n\n• 1 номінація — 199 zł\n• 2 номінації — 159 zł\n• 3 номінації — 119 zł\n• 4 номінації — 99 zł\n• 5 номінацій — 79 zł",
    note: "*додаткові номінації можна купити через дірект (ссилка на instagram https://www.instagram.com/nail_moment_pl?igsh=YWZpY2JjOTFueXc5)*",
  },
  {
    stepNumber: 4,
    title: "Візьми участь у відбірковому турі",
    description:
      "Обери свою номінацію та надішли 1-3 фотографії своєї ОДНІЄЇ роботи.\n\nОстанній день прийому робіт — 10 травня\n\nУсі роботи, які відповідають умовам конкурсу, будуть опубліковані для публічного голосування у телеграм-боті (посилання надамо в день першого голосування)\n\nЗа результатами голосування 3 (три) роботи з кожної номінації, які отримають найбільшу кількість голосів — пройдуть у фінальний тур конкурсу.",
    actionText: "Вислати свою роботу",
    actionHref: INFO_URL.TELEGRAM,
    isExternal: true,
    note: "10 травня",
  },
  {
    stepNumber: 5,
    title: "Фінальний тур",
    description:
      "Якщо ти став фіналістом, приїжджай на фінал конкурсу «Битва Майстрів» у Варшаві.\n\nЩо ти отримаєш на фіналі:\nТобі нададуть:\n• одну руку моделі для роботи\n• стіл\n• 2 стільці\n\nЧас для створення роботи:\nУ фіналі тобі буде надано:\n• 3 години для створення повного перевтілення однієї руки моделі за власним баченням\nПісля завершення роботи:\n• 30 хвилин на фото та відеозйомку роботи\n• 30 хвилин на підготовку фото- та відеопрезентації для фінального голосування",
    note:
      "⚠️ УВАГА! Фінальний тур проходить за день до фестивалю Nail Moment.\n\n• 6 липня — фінал конкурсу «Битва Майстрів»\n• 7 липня — фестиваль Nail Moment",
    actionText: "Ознайомитись з правилами фіналу",
    actionHref: "/battle/regulamin#final-rules",
  },
  {
    stepNumber: 6,
    title: "Забери головний приз 2000 зл та кубок переможця",
    description:
      "Результати конкурсу будуть оголошені 7 липня на сцені фестивалю Nail Moment у Варшаві.\n\nСаме там стане відомо, хто стане переможцем «Битви Майстрів».",
    note: "Переможці отримують",
  },
];

const BATTLE_INTRO_PRIZES = [
  {
    icon: "🥇",
    title: "1 місце",
    lines: [
      "Грошову нагороду — 2000 zł",
      "Кубок переможця «Битви Майстрів»",
      "Цінні подарунки від головного спонсора",
      "Подарунки від партнерів фестивалю",
    ],
  },
  {
    icon: "🥈 🥉",
    title: "2 та 3 місце",
    lines: [
      "Сертифікати переможців",
      "Подарункові набори від партнерів конкурсу",
    ],
  },
  {
    icon: "🎁",
    title: "Фіналісти конкурсу",
    lines: [
      "Подарунки від партнерів фестивалю",
      "Сертифікат фіналіста",
    ],
  },
];

export function BattleInfoSection() {
  return (
    <Section uiId="battle-info-section" density="compact">
      <Stack uiId="battle-info-content" gap="xl" className="items-center">
        <Card
          uiId="battle-intro"
          spacing="none"
          className="w-full max-w-4xl rounded-[2rem] border-transparent bg-brand-brown text-text-inverse"
        >
          <CardContent
            uiId="battle-intro"
            className="flex flex-col items-center gap-4 px-6 py-8 text-center md:px-10 md:py-10"
          >
            <TypographyTitle
              as="h2"
              uiId="battle-intro-title"
              order="order2"
              tone="inverse"
              className="max-w-[18ch] normal-case text-text-inverse"
            >
              Битва Майстрів — конкурс, де може перемогти саме твоя робота
            </TypographyTitle>

            <TypographyText
              uiId="battle-intro-text-1"
              size="lead"
              tone="inverse"
              className="max-w-3xl text-text-inverse"
            >
              «Битва Майстрів» — це конкурс для майстрів манікюру, де головне не титули та не
              популярність.
            </TypographyText>

            <Image
              uiId="battle-intro"
              url={IMAGES.BATTLE_INTRO_PHOTO}
              alt="Битва Майстрів"
              className="w-full rounded-[1.4rem]"
              sizes="(max-width: 768px) 100vw, 896px"
            />

            <TypographyTitle
              as="p"
              uiId="battle-intro-highlight"
              order="order3"
              tone="inverse"
              className="max-w-3xl normal-case text-text-inverse"
            >
              Головне — твій дизайн, твоя креативність та твоя майстерність.
            </TypographyTitle>

            <TypographyText
              uiId="battle-intro-text-2"
              size="lead"
              tone="inverse"
              className="max-w-3xl text-text-inverse"
            >
              Роботи оцінюють самі майстри nail-індустрії, тому перемагає не ім&apos;я, а робота,
              яка дійсно вражає.
            </TypographyText>

            <TypographyTitle
              as="p"
              uiId="battle-intro-prizes-heading"
              order="order4"
              tone="inverse"
              className="mt-2 normal-case text-text-inverse"
            >
              🏆 Переможці отримують
            </TypographyTitle>

            <div data-ui="battle-intro-prizes" className="mt-2 flex w-full max-w-3xl flex-col gap-3">
              {BATTLE_INTRO_PRIZES.map((item, index) => (
                <div
                  key={`${item.icon}-${index}`}
                  data-ui={mergeUi("battle-intro-prize", index + 1)}
                  className="rounded-xl bg-white/10 px-4 py-3 text-left text-text-inverse"
                >
                  <TypographyTitle
                    as="p"
                    uiId={mergeUi("battle-intro-prize-title", index + 1)}
                    order="order4"
                    tone="inverse"
                    align="left"
                    className="normal-case text-text-inverse"
                  >
                    <span data-ui={mergeUi("battle-intro-prize-icon", index + 1)}>{item.icon} </span>
                    {item.title}
                  </TypographyTitle>

                  <div
                    data-ui={mergeUi("battle-intro-prize-lines", index + 1)}
                    className="mt-2 space-y-1"
                  >
                    {item.lines.map((line, lineIndex) => (
                      <TypographyText
                        key={lineIndex}
                        as="p"
                        uiId={mergeUi("battle-intro-prize-line", index + 1, lineIndex + 1)}
                        size="body"
                        tone="inverse"
                        align="left"
                        className="text-text-inverse"
                      >
                        {line}
                      </TypographyText>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <TypographyText
              as="p"
              uiId="battle-intro-prizes-note"
              size="body"
              tone="inverse"
              className="max-w-3xl italic text-text-inverse"
            >
              ✨ Список подарунків буде доповнюватися після підтвердження партнерів.
            </TypographyText>

            <TypographyTitle
              as="p"
              uiId="battle-intro-promise"
              order="order3"
              tone="inverse"
              className="mt-2 max-w-3xl normal-case text-text-inverse"
            >
              Можливо, цього року переможе саме твоя робота
            </TypographyTitle>

            <BuyBattleTicketButton className="w-full">
              Взяти участь у конкурсі
            </BuyBattleTicketButton>
          </CardContent>
        </Card>

        <BattleAtmosphereSection />

        <Stack uiId="battle-steps-title" gap="sm" className="items-center text-center">
          <SectionHeader uiId="battle-steps-heading" title="Етапи участі" tone="accent" />
          <TypographyText
            uiId="battle-steps-description"
            size="body"
            tone="default"
            className="text-brand-brown"
          >
            Увесь шлях від ознайомлення з умовами до фіналу конкурсу.
          </TypographyText>
        </Stack>

        <Stack uiId="battle-steps" gap="lg" className="mx-auto w-full max-w-4xl">
          {BATTLE_STEPS_DATA.map((step) => (
            <Card
              uiId={mergeUi("battle-step", step.stepNumber)}
              key={step.stepNumber}
              surface="subtle"
              spacing="none"
              className="rounded-[2rem]"
            >
              <CardContent
                uiId={mergeUi("battle-step", step.stepNumber)}
                className="flex flex-col gap-5 px-5 py-5 md:px-6 md:py-6"
              >
                <div
                  data-ui={mergeUi("battle-step", step.stepNumber, "header")}
                  className="flex items-start gap-4"
                >
                  <TypographyTitle
                    as="h3"
                    uiId={mergeUi("battle-step", step.stepNumber, "title")}
                    order="order4"
                    tone="accent"
                    align="left"
                    className="normal-case"
                  >
                    <span data-ui={mergeUi("battle-step", step.stepNumber, "number")}>
                      {step.stepNumber}.
                    </span>{" "}
                    {step.title}
                  </TypographyTitle>
                </div>

                <TypographyText
                  as="p"
                  uiId={mergeUi("battle-step", step.stepNumber, "description")}
                  align="left"
                  size="body"
                  tone="default"
                  className="whitespace-pre-line text-brand-brown"
                >
                  {step.description}
                </TypographyText>

                {step.note ? (
                  <TypographyText
                    as="p"
                    uiId={mergeUi("battle-step", step.stepNumber, "note")}
                    align="left"
                    size="body"
                    tone="default"
                    className={
                      step.stepNumber === 3
                        ? "italic text-brand-brown"
                        : step.stepNumber === 5
                          ? "whitespace-pre-line rounded-2xl border border-yellow-200 bg-yellow-50 px-4 py-3 font-semibold text-brand-brown"
                          : step.stepNumber === 6
                            ? "rounded-2xl bg-surface-page px-4 py-3 font-semibold text-brand-brown"
                          : step.stepNumber === 4
                            ? "font-black text-red-600"
                            : "text-red-600"
                    }
                  >
                    {step.note}
                  </TypographyText>
                ) : null}

                {step.stepNumber === 6 ? (
                  <>
                    <div
                      data-ui="battle-step-6-prizes"
                      className="flex w-full flex-col gap-3"
                    >
                      {BATTLE_INTRO_PRIZES.map((item, index) => (
                        <div
                          key={`${item.icon}-${index}-step-6`}
                          data-ui={mergeUi("battle-step-6-prize", index + 1)}
                          className="rounded-xl bg-surface-page px-4 py-3 text-left"
                        >
                          <TypographyTitle
                            as="p"
                            uiId={mergeUi("battle-step-6-prize-title", index + 1)}
                            order="order4"
                            tone="accent"
                            align="left"
                            className="normal-case"
                          >
                            <span data-ui={mergeUi("battle-step-6-prize-icon", index + 1)}>
                              {item.icon}{" "}
                            </span>
                            {item.title}
                          </TypographyTitle>

                          <div
                            data-ui={mergeUi("battle-step-6-prize-lines", index + 1)}
                            className="mt-2 space-y-1"
                          >
                            {item.lines.map((line, lineIndex) => (
                              <TypographyText
                                key={lineIndex}
                                as="p"
                                uiId={mergeUi("battle-step-6-prize-line", index + 1, lineIndex + 1)}
                                size="body"
                                tone="default"
                                align="left"
                                className="text-brand-brown"
                              >
                                {line}
                              </TypographyText>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <TypographyText
                      as="p"
                      uiId="battle-step-6-prizes-note"
                      size="body"
                      tone="default"
                      className="italic text-brand-brown"
                    >
                      ✨ Список подарунків буде доповнюватися після підтвердження партнерів.
                    </TypographyText>
                  </>
                ) : null}

                {step.stepNumber === 3 ? (
                  <BuyBattleTicketButton className="ml-auto w-auto self-end">
                    Взяти участь у конкурсі
                  </BuyBattleTicketButton>
                ) : null}

                {step.actionText && step.actionHref ? (
                  <Button
                    uiId={mergeUi("battle-step", step.stepNumber, "action")}
                    variant="secondary"
                    size="sm"
                    asChild
                    className="w-full border-2 border-brand-brown font-black text-brand-brown hover:bg-brand-brown/5 sm:ml-auto sm:w-auto"
                  >
                    <Link
                      href={step.actionHref}
                      target={step.isExternal ? "_blank" : undefined}
                      rel={step.isExternal ? "noopener noreferrer" : undefined}
                    >
                      {step.actionText}
                    </Link>
                  </Button>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Section>
  );
}
