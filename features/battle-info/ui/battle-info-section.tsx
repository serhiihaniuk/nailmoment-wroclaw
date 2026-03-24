import Link from "next/link";
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
      "Уважно прочитай повні умови участі. Подавши заявку, ти підтверджуєш, що погоджуєшся з усіма правилами.",
    actionText: "Прочитати умови",
    actionHref: "/battle/regulamin",
  },
  {
    stepNumber: 2,
    title: "Придбай квиток на фестиваль Nail Moment",
    description:
      "Щоб взяти участь у «Битві Майстрів», потрібно бути учасником фестивалю. Підійде квиток Standard або VIP.",
    actionText: "Придбати квиток",
    actionHref: "/#ticket-section",
  },
  {
    stepNumber: 3,
    title: "Придбай квиток учасника конкурсу",
    description:
      "1 квиток = 1 номінація.\n\nЯкщо хочеш взяти участь у двох чи більше номінаціях, потрібно купити окремий квиток на кожну з них. На кожну наступну номінацію діє знижка учасника.",
    additionalInfo: "Продажі ще не розпочато.",
  },
  {
    stepNumber: 4,
    title: "Візьми участь у відбірковому турі",
    description:
      "Обери свою номінацію та надішли 1–3 фотографії своєї роботи. 20 найкращих робіт з кожної номінації потраплять у публічне голосування.",
    actionText: "Вислати свою роботу",
    actionHref: INFO_URL.TELEGRAM,
    isExternal: true,
  },
  {
    stepNumber: 5,
    title: "Фінальний тур",
    description:
      "Якщо ти став фіналістом, приїжджай на фестиваль Nail Moment 7 червня у Варшаву, де відбудеться фінал конкурсу.\n\nНа фіналі тобі нададуть:\n• модель\n• стіл\n• два стільці\n• 2 години 30 хвилин для створення повного перевтілення однієї руки моделі за власним баченням\n\nПісля цього у тебе буде:\n• 30 хвилин на фото- та відеозйомку своєї роботи\n• 30 хвилин для підготовки фото- та відеопрезентації для фінального голосування",
  },
  {
    stepNumber: 6,
    title: "Забери головний приз 2000 зл та кубок переможця",
    description:
      "За підсумками фінального голосування 7 червня 2026 року буде визначено переможця конкурсу «Битва Майстрів». Якщо це будеш ти, отримаєш головний приз 2000 зл та кубок переможця.",
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
              «Битва Майстрів» — це конкурс для майстрів манікюру, де головне не
              титули та не популярність.
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
              Роботи оцінюють самі майстри nail-індустрії, тому перемагає не ім&apos;я,
              а робота, яка дійсно вражає.
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

                {step.stepNumber !== 3 && step.additionalInfo ? (
                  <TypographyText
                    as="p"
                    uiId={mergeUi("battle-step", step.stepNumber, "note")}
                    align="left"
                    size="body"
                    tone="default"
                    className="rounded-2xl bg-surface-page px-4 py-3 italic text-brand-brown"
                  >
                    {step.additionalInfo}
                  </TypographyText>
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
                    className="w-full border-2 border-brand-brown text-brand-brown font-black hover:bg-brand-brown/5 sm:ml-auto sm:w-auto"
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
