import React from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { Section } from "@/blocks/ui/section";
import { Link } from "@/blocks/ui/link"; // Assuming path is correct

// --- FAQ Data Type ---
export type FaqEntry = {
  id: string;
  question: string;
  answer: React.ReactNode;
};

// --- Instagram Link Component ---
const InstagramLink: React.FC<{ handle: string }> = ({ handle }) => (
  <Link
    href={`https://www.instagram.com/${handle}/`}
    icon={true}
    target="_blank"
  >
    @{handle}
  </Link>
);

// --- REVISED FAQ Data ---
const faqData: FaqEntry[] = [
  {
    id: "faq-1",
    question: "Як купити квиток?",
    answer: (
      <>
        Ви можете купити квиток через сайт або написавши нам в Instagram{" "}
        <InstagramLink handle="nail_moment_pl" />.
      </>
    ),
  },
  {
    id: "faq-2",
    question: "Як отримати фактуру?",
    answer: (
      <>
        Щоб отримати фактуру напишіть нам NIP фірми та ваш імейл в дірект на
        сторінку <InstagramLink handle="nail_moment_pl" />.
      </>
    ),
  },
  {
    id: "faq-3",
    question: "Чи є розстрочка?",
    answer: (
      <>
        Так, є можливість придбати квиток у розстрочку. Щоб дізнатися детальні
        умови, напишіть нам на сторінку{" "}
        <InstagramLink handle="nail_moment_pl" />.
      </>
    ),
  },
  {
    id: "faq-4",
    question: "Як взяти участь у розіграші БОКСОПАДУ?",
    answer: (
      <>
        Деталі щодо участі у розіграші БОКСОПАДУ будуть оголошені ближче до
        дати фестивалю. Слідкуйте за оновленнями на нашій сторінці{" "}
        <InstagramLink handle="nail_moment_pl" />.
      </>
    ),
  },
  {
    id: "faq-5",
    question: "Чи можна буде поїсти на фестивалі?",
    answer: (
      <>
        Так, на локації буде можливість перекусити. Також поруч є багато
        ресторанів та кафе.
      </>
    ),
  },
  {
    id: "faq-6",
    question: "Де та до котрої буде Afterparty?",
    answer: (
      <>
        Afterparty відбудеться на даху одразу після завершення основної
        програми фестивалю Nail Moment.
      </>
    ),
  },
  {
    id: "faq-7",
    question:
      "Я купив(ла) квиток, але змінилися плани і я хочу повернути кошти",
    answer: (
      <>
        Повернення квитка можливе не пізніше, ніж за 14 днів до дати проведення
        заходу.
        <br />
        Якщо до події залишилося менше 14 днів:
        <br />
        - Повернення коштів можливе лише за умови повного розпродажу всіх
        квитків (включно з вашим).
        <br />- Ви також маєте право самостійно перепродати свій квиток.
      </>
    ),
  },
];

// --- FAQ Section Component (No changes needed here) ---
interface FaqSectionProps {
  className?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ className }) => {
  return (
    <Section className={cn(className)}>
      <SectionHeader
        title="Відповіді на часті питання"
        className="mb-8 md:mb-10 text-center"
      />
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqData.map((item) => (
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
    </Section>
  );
};
