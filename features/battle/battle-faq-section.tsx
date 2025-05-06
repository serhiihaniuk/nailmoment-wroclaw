import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { Section } from "@/blocks/ui/section";
import { Link as UiLink } from "@/blocks/ui/link"; // Renamed to avoid conflict with Next/Link
import NextLink from "next/link"; // For the "Back to main page" button
import { Button } from "@/components/ui/button"; // For the "Back to main page" button
import { StepBack } from "lucide-react"; // For the "Back to main page" button
import { INFO_URL } from "@/shared/const";

// --- FAQ Data Type (can be reused) ---
export type FaqEntry = {
  id: string;
  question: string;
  answer: React.ReactNode;
};

// --- Link Components ---
const InstagramLink: React.FC<{ handle: string }> = ({ handle }) => (
  <UiLink
    href={`https://www.instagram.com/${handle}/`}
    icon={true}
    target="_blank"
  >
    @{handle}
  </UiLink>
);

const TelegramLink: React.FC<{ href: string; text: string }> = ({
  href,
  text,
}) => (
  <UiLink href={href} icon={true} target="_blank">
    {text}
  </UiLink>
);

// --- Battle FAQ Data ---
const battleFaqData: FaqEntry[] = [
  {
    id: "battle-faq-1",
    question: "Чи мушу я вміти нарощувати щоб прийняти участь у конкурсі?",
    answer: (
      <>
        Ні, вам не потрібно вміти нарощувати. Головні критерії для відбіркового
        туру: робота має відповідати номінації, робота має бути чистою,
        акуратною і красивою, та що не менш важливо, фотографії мають бути чіткі
        та високої якості.
        <br />
        BCЕ! Більше дійсно нічого не потрібно ☺️
        <br />
        <br />
        <em className="text-sm">
          *вміти нарощувати треба тільки для номінації «Екстра довжина»
        </em>
      </>
    ),
  },
  {
    id: "battle-faq-2",
    question:
      "У відбірковому турі є намінації, а які номінації будуть у фіналі?",
    answer: (
      <>
        У фіналі НЕ БУДЕ номінацій! У вашому розпорядженні буде одна рука моделі
        і ви можете робити що завгодно на її нігтях 🤩. Найголовніше показати
        максимум краси та креативу, щоб ті хто подивляться на ДО та ПІСЛЯ не
        повірили що це одна й та сама рука.
        <br />
        Можна нарощувати, ліпити, малювати, створювати картини чи глибокі
        переходи. Проявити свій креатив та фантазію 💛
        <br />
        Більш детально ознайомитися з умовами:{" "}
        <UiLink href="/regulamin-konkursu" icon={false}>
          повні умови конкурсу
        </UiLink>
        .
      </>
    ),
  },
  {
    id: "battle-faq-3",
    question: "Можу я зробити один манікюр та вислати його у кілька номінацій?",
    answer: <>Ні, на кожну номінацію треба робити нову роботу.</>,
  },
  {
    id: "battle-faq-4",
    question: "Як проходить голосування у відбірковому турі?",
    answer: (
      <>
        У кожній номінації буде обрано 20 найкращих робіт. Голосування пройде в
        чат-боті „Nail Moment. Битва майстрів” (посилання буде надано в
        інстаграмі в день номінацій), в якому кожен охочий зможе проголосувати
        за 1 (одну) вподобану роботу в номінації. 3 (три) роботи, що набрали
        більшість голосів, пройдуть у фінал конкурсу.
        <br />
        Більш детально ознайомитися з умовами:{" "}
        <UiLink href="/regulamin-konkursu" icon={false}>
          повні умови конкурсу
        </UiLink>
        .
      </>
    ),
  },
  {
    id: "battle-faq-5",
    question:
      "Якщо я купила один квиток учасника фестивалю, яка знижка діє на наступні квитки?",
    answer: (
      <>
        Перший квиток учасника конкурсу &quot;Битва Майстрів&quot; коштує 150
        зл.
        <br />
        На наступні квитки учасника діють знижки:
        <ul className="list-disc pl-5 mt-2">
          <li>Другий квиток: 109 зл</li>
          <li>Третій квиток: 99 зл</li>
          <li>Четвертий квиток: 79 зл</li>
          <li>Пʼятий квиток: 50 зл</li>
        </ul>
        <p className="mt-2 text-sm">
          (Ціна вказана за квиток учасника конкурсу, не за квиток на сам
          фестиваль).
        </p>
      </>
    ),
  },
  {
    id: "battle-faq-6",
    question: "Як докупити наступний квиток учасника конкурсу?",
    answer: (
      <>
        Щоб купити наступний квиток учасника конкурсу &quot;Битва Майстрів&quot;
        зі знижкою, будь ласка, напишіть нам на сторінку
        <InstagramLink handle="nail_moment_pl" />.
      </>
    ),
  },
  {
    id: "battle-faq-7",
    question: "Як отримати фактуру (рахунок-фактуру)?",
    answer: (
      <>
        Щоб отримати фактуру за квиток учасника конкурсу, будь ласка, напишіть
        нам на сторінку <InstagramLink handle="nail_moment_pl" />.
      </>
    ),
  },
];

// --- Battle FAQ Section Component ---

export const BattleFaqSection: React.FC = () => {
  return (
    <Section>
      <SectionHeader
        title="Битва Майстрів: Часті питання"
        className="mb-8 md:mb-10 text-center"
      />
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {battleFaqData.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="border-b border-blue-foreground/20 last:border-b-0"
          >
            <AccordionTrigger className="text-lg text-left font-medium text-blue-foreground hover:no-underline py-4 px-2 md:px-4">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-blue-foreground/90 pb-4 pt-2 px-2 md:px-4 leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-12 text-center max-w-3xl mx-auto space-y-6">
        <Button
          className="text-blue-foreground w-full max-w-xs mx-auto flex gap-2 items-center"
          asChild
        >
          <NextLink href="/">
            <StepBack />
            Повернутися на головну сторінку
          </NextLink>
        </Button>

        <div className="text-blue-foreground/90">
          <h3 className="text-xl font-semibold mb-2">Зв’язок</h3>
          <p>
            Якщо у тебе виникли питання, звертайся до нашого відділу турботи ☺️
            <br />
            <TelegramLink href={INFO_URL.TELEGRAM} text="Написати в Telegram" />
          </p>
        </div>
      </div>
    </Section>
  );
};
