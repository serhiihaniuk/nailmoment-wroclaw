"use client";

import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";
import { BackLink } from "@/shared/ui/back-link";
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
        Ні, для участі в конкурсі не обовʼязково вміти нарощувати.
        <br />
        <br />
        На відбірковому етапі важливо, щоб робота:
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>відповідала обраній номінації</li>
          <li>була чистою, акуратною і візуально сильною</li>
          <li>була добре сфотографована</li>
        </ul>
        <br />
        <em className="text-sm">
          *Навички нарощування потрібні лише для тих дизайнів, де це справді необхідно, але це не окрема вимога для участі
          в конкурсі.
        </em>
      </>
    ),
  },
  {
    id: "battle-faq-2",
    question: "У відбірковому турі є номінації, а які номінації будуть у фіналі?",
    answer: (
      <>
        У фіналі немає номінацій.
        <br />
        <br />
        Фінальний тур оцінює не окрему категорію, а цілісне перевтілення, креативність, техніку та силу твоєї подачі.
        <br />
        <br />
        У твоєму розпорядженні буде одна рука моделі, і ти зможеш створити будь-який дизайн, який вважаєш
        найефектнішим.
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
        Усі роботи, які відповідають умовам конкурсу, будуть опубліковані для публічного голосування у телеграм-боті.
        <br />
        <br />
        Посилання на бот ми надамо в день першого голосування.
        <br />
        <br />
        За результатами голосування 3 (три) роботи з кожної номінації, які отримають найбільшу кількість голосів,
        пройдуть у фінальний тур конкурсу.
      </>
    ),
  },
  {
    id: "battle-faq-5",
    question: "Якщо я купила один квиток учасника фестивалю, яка знижка діє на наступні квитки?",
    answer: (
      <>
        Щоб взяти участь у конкурсі, спочатку потрібно мати квиток на фестиваль Nail Moment: <strong>Standard</strong>{" "}
        або <strong>VIP</strong>.
        <br />
        <br />
        Квиток учасника конкурсу купується окремо на кожну номінацію.
        <br />
        <br />
        При участі у кількох номінаціях діє така ціна за квиток учасника:
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>1 номінація — 199 zł</li>
          <li>2 номінації — 159 zł</li>
          <li>3 номінації — 119 zł</li>
          <li>4 номінації — 99 zł</li>
          <li>5 номінацій — 79 zł</li>
        </ul>
      </>
    ),
  },
  {
    id: "battle-faq-6",
    question: "Як докупити наступний квиток учасника конкурсу?",
    answer: (
      <>
        Додаткові номінації можна купити через дірект в <InstagramLink handle="nail_moment_pl" />.
      </>
    ),
  },
  {
    id: "battle-faq-7",
    question: "Як отримати фактуру?",
    answer: (
      <>
        Щоб отримати фактуру, напишіть нам у <InstagramLink handle="nail_moment_pl" />.
      </>
    ),
  },
];

export function BattleFaqSection() {
  return (
    <Section uiId="battle-faq-section" density="compact">
      <Stack uiId="battle-faq-content" gap="lg" className="items-center">
        <Stack uiId="battle-faq-header" gap="sm" className="items-center text-center">
          <SectionHeader uiId="battle-faq-title" title="Битва Майстрів: часті питання" tone="accent" />
          <TypographyText uiId="battle-faq-description" size="body" tone="default" className="text-brand-brown">
            Зібрали найважливіші організаційні моменти, щоб участь у конкурсі була максимально зрозумілою.
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
          <BackLink uiId="battle-faq-home-link" href="/">
            Повернутися на головну
          </BackLink>

          <Stack uiId="battle-faq-contact" gap="xs" className="items-center text-center">
            <TypographyTitle
              as="h3"
              uiId="battle-faq-contact-title"
              order="order4"
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
