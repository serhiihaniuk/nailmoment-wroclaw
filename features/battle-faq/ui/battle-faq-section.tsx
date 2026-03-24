import type { ReactNode } from "react";
import NextLink from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";
import { Button } from "@/shared/ui/button";
import { INFO_URL } from "@/shared/config/const";
import { IconLink } from "@/shared/ui/icon-link";
import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { SectionHeader } from "@/shared/ui/section-header";
import { TypographyText, TypographyTitle } from "@/shared/ui/typography";

type FaqEntry = {
  id: string;
  question: string;
  answer: ReactNode;
};

const InstagramLink = ({ handle }: { handle: string }) => (
  <IconLink href={`https://www.instagram.com/${handle}/`} icon target="_blank">
    @{handle}
  </IconLink>
);

const TelegramLink = ({ href, text }: { href: string; text: string }) => (
  <IconLink href={href} icon target="_blank">
    {text}
  </IconLink>
);

const battleFaqData: FaqEntry[] = [
  {
    id: "battle-faq-1",
    question: "Чи мушу я вміти нарощувати, щоб прийняти участь у конкурсі?",
    answer: (
      <>
        Ні, вам не потрібно вміти нарощувати. Головні критерії для відбіркового туру: робота має
        відповідати номінації, бути чистою, акуратною і візуально сильною, а фотографії — чіткими та
        якісними.
        <br />
        <br />
        Це все. Більше нічого не потрібно.
        <br />
        <br />
        <em className="text-sm">
          *Вміння нарощувати потрібне лише для номінації «Екстра довжина».
        </em>
      </>
    ),
  },
  {
    id: "battle-faq-2",
    question: "У відбірковому турі є номінації, а які номінації будуть у фіналі?",
    answer: (
      <>
        У фіналі не буде номінацій. У твоєму розпорядженні буде одна рука моделі, і ти зможеш
        зробити будь-яке перевтілення на власний розсуд.
        <br />
        <br />
        Можна нарощувати, ліпити, малювати, створювати складні дизайни чи глибокі переходи. Головне —
        показати максимум краси, техніки та креативу.
        <br />
        <br />
        Більш детально можна ознайомитися тут:{" "}
        <IconLink href="/battle/regulamin" icon={false}>
          повні умови конкурсу
        </IconLink>
        .
      </>
    ),
  },
  {
    id: "battle-faq-3",
    question: "Чи можу я зробити один манікюр та вислати його у кілька номінацій?",
    answer: <>Ні, для кожної номінації потрібно підготувати окрему роботу.</>,
  },
  {
    id: "battle-faq-4",
    question: "Як проходить голосування у відбірковому турі?",
    answer: (
      <>
        У кожній номінації буде обрано 20 найкращих робіт. Голосування пройде у чат-боті «Nail
        Moment. Битва Майстрів», посилання на який буде опубліковано в Instagram у день старту
        голосування.
        <br />
        <br />
        Кожен охочий зможе проголосувати за одну вподобану роботу в кожній номінації. Три роботи з
        найбільшою кількістю голосів пройдуть у фінал.
      </>
    ),
  },
  {
    id: "battle-faq-5",
    question:
      "Якщо я купила один квиток учасника фестивалю, яка знижка діє на наступні квитки?",
    answer: (
      <>
        Перший квиток учасника конкурсу «Битва Майстрів» коштує 150 зл.
        <br />
        <br />
        На наступні квитки учасника діють знижки:
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>другий квиток — 109 зл</li>
          <li>третій квиток — 99 зл</li>
          <li>четвертий квиток — 79 зл</li>
          <li>п’ятий квиток — 50 зл</li>
        </ul>
        <p className="mt-3 text-sm text-brand-brown">
          Ціна вказана саме за квиток учасника конкурсу, а не за вхід на фестиваль.
        </p>
      </>
    ),
  },
  {
    id: "battle-faq-6",
    question: "Як докупити наступний квиток учасника конкурсу?",
    answer: (
      <>
        Щоб купити наступний квиток учасника конкурсу зі знижкою, напишіть нам у{" "}
        <InstagramLink handle="nail_moment_pl" />.
      </>
    ),
  },
  {
    id: "battle-faq-7",
    question: "Як отримати фактуру?",
    answer: (
      <>
        Щоб отримати фактуру за квиток учасника конкурсу, напишіть нам у{" "}
        <InstagramLink handle="nail_moment_pl" />.
      </>
    ),
  },
];

export function BattleFaqSection() {
  return (
    <Section uiId="battle-faq-section" density="compact">
      <Stack uiId="battle-faq-content" gap="lg" className="items-center">
        <Stack uiId="battle-faq-header" gap="sm" className="items-center text-center">
          <SectionHeader
            uiId="battle-faq-title"
            title="Битва Майстрів: часті питання"
            tone="accent"
          />
          <TypographyText uiId="battle-faq-description" size="body" tone="default" className="text-brand-brown">
            Зібрали найважливіші організаційні моменти, щоб участь у конкурсі була максимально
            зрозумілою.
          </TypographyText>
        </Stack>

        <div
          data-ui="battle-faq-shell"
          className="w-full max-w-4xl rounded-3xl border border-border-subtle bg-surface-card px-4 py-2 shadow-card md:px-6"
        >
          <Accordion uiId="battle-faq-accordion" type="single" collapsible className="w-full">
            {battleFaqData.map((item) => (
              <AccordionItem
                uiId={item.id}
                value={item.id}
                key={item.id}
                className="border-b border-border-subtle last:border-b-0"
              >
                <AccordionTrigger
                  uiId={item.id}
                  className="px-2 py-5 text-left text-base font-medium text-brand-brown hover:no-underline md:text-lg"
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent
                  uiId={item.id}
                  className="px-2 pb-5 pt-0 text-sm leading-7 text-brand-brown md:text-base"
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <Stack uiId="battle-faq-actions" gap="default" className="w-full max-w-3xl items-center">
          <Button
            uiId="battle-faq-home-link"
            variant="secondary"
            asChild
            className="w-full border-2 border-brand-brown text-brand-brown font-black hover:bg-brand-brown/5 sm:max-w-xs"
          >
            <NextLink href="/">Повернутися на головну</NextLink>
          </Button>

          <Stack uiId="battle-faq-contact" gap="xs" className="items-center text-center">
            <TypographyTitle
              as="h3"
              uiId="battle-faq-contact-title"
              size="card"
              tone="accent"
              className="normal-case"
            >
              Потрібна допомога?
            </TypographyTitle>
            <TypographyText uiId="battle-faq-contact-copy" size="body" tone="default" className="text-brand-brown">
              Якщо виникли додаткові питання, напиши нашому відділу турботи.
            </TypographyText>
            <TelegramLink href={INFO_URL.TELEGRAM} text="Написати в Telegram" />
          </Stack>
        </Stack>
      </Stack>
    </Section>
  );
}
