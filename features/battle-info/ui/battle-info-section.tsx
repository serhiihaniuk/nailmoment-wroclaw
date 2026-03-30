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

type BattlePrizeGroup = {
  icon: string;
  title: string;
  lines: string[];
};

type BattleStepBlock =
  | {
      type: "text";
      text: string;
    }
  | {
      type: "callout";
      text: string;
      tone: "warning" | "subtle" | "danger";
    }
  | {
      type: "linkNote";
      text: string;
      href: string;
    }
  | {
      type: "subsection";
      title: string;
      text: string;
      emphasized?: boolean;
    }
  | {
      type: "prizes";
      title?: string;
      groups: BattlePrizeGroup[];
      note?: string;
    };

type BattleStepAction =
  | {
      kind: "button";
      label: string;
      href: string;
      external?: boolean;
    }
  | {
      kind: "buyBattle";
      label: string;
    };

type BattleStep = {
  stepNumber: number;
  title: string;
  blocks: BattleStepBlock[];
  actions?: BattleStepAction[];
};

const BATTLE_PRIZE_GROUPS: BattlePrizeGroup[] = [
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

const BATTLE_STEPS_DATA: BattleStep[] = [
  {
    stepNumber: 1,
    title: "Ознайомся з умовами конкурсу",
    blocks: [
      {
        type: "text",
        text: "Уважно прочитай повні умови участі у конкурсі.\nПодавши заявку, ти підтверджуєш, що ознайомився та погоджуєшся з усіма правилами конкурсу.",
      },
    ],
    actions: [
      {
        kind: "button",
        label: "Прочитати умови",
        href: "/battle/regulamin",
      },
    ],
  },
  {
    stepNumber: 2,
    title: "Придбай квиток на фестиваль Nail Moment (Standard або VIP)",
    blocks: [
      {
        type: "text",
        text: "Для того щоб прийняти участь у конкурсі «Битва Майстрів», треба бути учасником фестивалю.",
      },
    ],
    actions: [
      {
        kind: "button",
        label: "Придбати квиток",
        href: "/#ticket-section",
      },
    ],
  },
  {
    stepNumber: 3,
    title: "Придбай квиток учасника",
    blocks: [
      {
        type: "text",
        text: "Щоб взяти участь у «Битві Майстрів», потрібно придбати квиток на обрану номінацію.\n\n📌 1 номінація = 1 квиток\n\nЯкщо ти хочеш брати участь у кількох номінаціях, потрібно придбати окремий квиток на кожну номінацію.\n\n✨ При участі у кількох номінаціях діє знижка для учасників.\n\nНаприклад:\n\n• 1 номінація — 199 zł\n• 2 номінації — 159 zł\n• 3 номінації — 119 zł\n• 4 номінації — 99 zł\n• 5 номінацій — 79 zł",
      },
      {
        type: "linkNote",
        text: "Додаткові номінації можна купити через дірект в Instagram.",
        href: "https://www.instagram.com/nail_moment_pl?igsh=YWZpY2JjOTFueXc5",
      },
    ],
    actions: [
      {
        kind: "buyBattle",
        label: "Взяти участь у конкурсі",
      },
    ],
  },
  {
    stepNumber: 4,
    title: "Візьми участь у відбірковому турі",
    blocks: [
      {
        type: "text",
        text: "Обери свою номінацію та надішли 1-3 фотографії своєї ОДНІЄЇ роботи.\n\nУсі роботи, які відповідають умовам конкурсу, будуть опубліковані для онлайн-голосування.\n\nЗа результатами голосування 3 (три) майстри з кожної номінації проходять у фінал конкурсу.",
      },
      {
        type: "callout",
        text: "10 травня",
        tone: "danger",
      },
    ],
    actions: [
      {
        kind: "button",
        label: "Вислати свою роботу",
        href: INFO_URL.TELEGRAM,
        external: true,
      },
    ],
  },
  {
    stepNumber: 5,
    title: "Фінальний тур",
    blocks: [
      {
        type: "text",
        text: "Якщо ти став фіналістом, приїжджай на фінал конкурсу «Битва Майстрів» у Варшаві.",
      },
      {
        type: "callout",
        text: "⚠️ УВАГА! Фінальний тур проходить за день до фестивалю Nail Moment.\n\n• 6 липня — фінал конкурсу «Битва Майстрів»\n• 7 липня — фестиваль Nail Moment",
        tone: "warning",
      },
      {
        type: "subsection",
        title: "Що ти отримаєш на фіналі",
        text: "Тобі нададуть:\n• одну руку моделі для роботи\n• стіл\n• 2 стільці",
      },
      {
        type: "subsection",
        title: "Час для створення роботи",
        text: "У фіналі тобі буде надано:\n• 3 години для створення повного перевтілення однієї руки моделі за власним баченням\nПісля завершення роботи:\n• 30 хвилин на фото та відеозйомку роботи\n• 30 хвилин на підготовку фото- та відеопрезентації для фінального голосування",
      },
      {
        type: "subsection",
        title: "Важливо для фіналістів",
        text: "Якщо ти потрапив у фінал, обов’язково ознайомся з правилами участі у фінальному турі.\n\nУ правилах описано:\n• що дозволено використовувати під час фіналу\n• які матеріали можна приносити\n• що заборонено під час створення роботи",
        emphasized: true,
      },
    ],
    actions: [
      {
        kind: "button",
        label: "Ознайомитись з правилами фіналу",
        href: "/battle/regulamin#final-rules",
      },
    ],
  },
  {
    stepNumber: 6,
    title: "Забери головний приз 2000 зл та кубок переможця",
    blocks: [
      {
        type: "text",
        text: "Результати конкурсу будуть оголошені 7 липня на сцені фестивалю Nail Moment у Варшаві.\n\nСаме там стане відомо, хто стане переможцем «Битви Майстрів».",
      },
      {
        type: "prizes",
        title: "Переможці отримують",
        groups: BATTLE_PRIZE_GROUPS,
        note: "✨ Список подарунків буде доповнюватися після підтвердження партнерів.",
      },
    ],
  },
];

function BattlePrizeList({
  uiId,
  tone = "default",
  groups,
  note,
}: {
  uiId: string;
  tone?: "default" | "inverse";
  groups: BattlePrizeGroup[];
  note?: string;
}) {
  const isInverse = tone === "inverse";

  return (
    <>
      <div data-ui={uiId} className="flex w-full flex-col gap-3">
        {groups.map((item, index) => (
          <div
            key={`${item.icon}-${index}`}
            data-ui={mergeUi(uiId, "group", index + 1)}
            className={
              isInverse
                ? "rounded-xl bg-white/10 px-4 py-3 text-left text-text-inverse"
                : "rounded-xl bg-surface-page px-4 py-3 text-left"
            }
          >
            <TypographyTitle
              as="p"
              uiId={mergeUi(uiId, "title", index + 1)}
              order="order4"
              tone={isInverse ? "inverse" : "accent"}
              align="left"
              className={isInverse ? "normal-case text-text-inverse" : "normal-case"}
            >
              <span data-ui={mergeUi(uiId, "icon", index + 1)}>{item.icon} </span>
              {item.title}
            </TypographyTitle>

            <div data-ui={mergeUi(uiId, "lines", index + 1)} className="mt-2 space-y-1">
              {item.lines.map((line, lineIndex) => (
                <TypographyText
                  key={lineIndex}
                  as="p"
                  uiId={mergeUi(uiId, "line", index + 1, lineIndex + 1)}
                  size="body"
                  tone={isInverse ? "inverse" : "default"}
                  align="left"
                  className={isInverse ? "text-text-inverse" : "text-brand-brown"}
                >
                  {line}
                </TypographyText>
              ))}
            </div>
          </div>
        ))}
      </div>

      {note ? (
        <TypographyText
          as="p"
          uiId={mergeUi(uiId, "note")}
          size="body"
          tone={isInverse ? "inverse" : "default"}
          className={isInverse ? "italic text-text-inverse" : "italic text-brand-brown"}
        >
          {note}
        </TypographyText>
      ) : null}
    </>
  );
}

function BattleStepActionView({
  stepNumber,
  action,
}: {
  stepNumber: number;
  action: BattleStepAction;
}) {
  if (action.kind === "buyBattle") {
    return (
      <BuyBattleTicketButton className="ml-auto w-auto self-end">
        {action.label}
      </BuyBattleTicketButton>
    );
  }

  return (
    <Button
      uiId={mergeUi("battle-step", stepNumber, "action")}
      variant="secondary"
      size="sm"
      asChild
      className="w-full border-2 border-brand-brown font-black text-brand-brown hover:bg-brand-brown/5 sm:ml-auto sm:w-auto"
    >
      <Link
        href={action.href}
        target={action.external ? "_blank" : undefined}
        rel={action.external ? "noopener noreferrer" : undefined}
      >
        {action.label}
      </Link>
    </Button>
  );
}

function BattleStepBlockView({
  stepNumber,
  block,
}: {
  stepNumber: number;
  block: BattleStepBlock;
}) {
  switch (block.type) {
    case "text":
      return (
        <TypographyText
          as="p"
          uiId={mergeUi("battle-step", stepNumber, "text")}
          align="left"
          size="body"
          tone="default"
          className="whitespace-pre-line text-brand-brown"
        >
          {block.text}
        </TypographyText>
      );

    case "callout":
      return (
        <TypographyText
          as="p"
          uiId={mergeUi("battle-step", stepNumber, "callout")}
          align="left"
          size="body"
          tone="default"
          className={
            block.tone === "warning"
              ? "whitespace-pre-line rounded-2xl border border-yellow-200 bg-yellow-50 px-4 py-3 font-semibold text-brand-brown"
              : block.tone === "subtle"
                ? "rounded-2xl bg-surface-page px-4 py-3 font-semibold text-brand-brown"
                : "font-black text-red-600"
          }
        >
          {block.text}
        </TypographyText>
      );

    case "linkNote":
      return (
        <TypographyText
          as="p"
          uiId={mergeUi("battle-step", stepNumber, "link-note")}
          align="left"
          size="body"
          tone="default"
          className="italic text-brand-brown"
        >
          <a
            href={block.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-brand-brown/40 underline-offset-2"
          >
            {block.text}
          </a>
        </TypographyText>
      );

    case "subsection":
      return (
        <div
          data-ui={mergeUi("battle-step", stepNumber, "subsection")}
          className="flex flex-col gap-2"
        >
          <TypographyTitle
            as="p"
            uiId={mergeUi("battle-step", stepNumber, "subsection-title")}
            order="order4"
            tone="accent"
            align="left"
            className={block.emphasized ? "normal-case font-black" : "normal-case"}
          >
            {block.title}
          </TypographyTitle>

          <TypographyText
            as="p"
            uiId={mergeUi("battle-step", stepNumber, "subsection-body")}
            align="left"
            size="body"
            tone="default"
            className="whitespace-pre-line text-brand-brown"
          >
            {block.text}
          </TypographyText>
        </div>
      );

    case "prizes":
      return (
        <div
          data-ui={mergeUi("battle-step", stepNumber, "prizes")}
          className="flex flex-col gap-3"
        >
          {block.title ? (
            <TypographyText
              as="p"
              uiId={mergeUi("battle-step", stepNumber, "prizes-heading")}
              align="left"
              size="body"
              tone="default"
              className="rounded-2xl bg-surface-page px-4 py-3 font-semibold text-brand-brown"
            >
              {block.title}
            </TypographyText>
          ) : null}

          <BattlePrizeList
            uiId={mergeUi("battle-step", stepNumber, "prize-list") ?? `battle-step-${stepNumber}-prize-list`}
            groups={block.groups}
            note={block.note}
          />
        </div>
      );
  }
}

function BattleStepCard({ step }: { step: BattleStep }) {
  return (
    <Card
      uiId={mergeUi("battle-step", step.stepNumber)}
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

        {step.blocks.map((block, index) => (
          <BattleStepBlockView
            key={`${step.stepNumber}-${block.type}-${index}`}
            stepNumber={step.stepNumber}
            block={block}
          />
        ))}

        {step.actions?.map((action, index) => (
          <BattleStepActionView
            key={`${step.stepNumber}-action-${action.kind}-${index}`}
            stepNumber={step.stepNumber}
            action={action}
          />
        ))}
      </CardContent>
    </Card>
  );
}

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

            <BattlePrizeList
              uiId="battle-intro-prizes"
              tone="inverse"
              groups={BATTLE_PRIZE_GROUPS}
              note="✨ Список подарунків буде доповнюватися після підтвердження партнерів."
            />

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
            <BattleStepCard key={step.stepNumber} step={step} />
          ))}
        </Stack>
      </Stack>
    </Section>
  );
}
