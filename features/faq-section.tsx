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
    question: "Як отримати фактуру (рахунок-фактуру)?", // Added clarification
    answer: (
      <>
        Щоб отримати фактуру, будь ласка, напишіть нам на сторінку{" "}
        <InstagramLink handle="nail_moment_pl" />.
      </>
    ),
  },
  {
    id: "faq-3",
    question: "Чи можна оплатити квиток частинами (розстрочка)?", // Rephrased question slightly
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
    // Rephrased question for better flow
    question: "Чи можна прийти раніше, до початку основної програми?",
    answer: (
      <>
        Так, звісно! Двері відчинені з 10:00. В Малому Залі проходитимуть
        майстер-класи від блогерів та відомих інструкторів. Також ви зможете
        завітати на наш Nail-Маркет та повболівати за учасниць Битви Майстрів.
      </>
    ),
  },
  {
    id: "faq-5",
    question: "Чи буде де поїсти на фестивалі?", // Slightly more natural question
    answer: (
      <>
        Так. На першому поверсі працює ресторан, а на терасі є бар.
        <br />
        Окрім того, локація знаходиться зовсім поруч зі Старим містом, де є
        великий вибір ресторанів та кафе.
      </>
    ),
  },
  {
    id: "faq-6",
    question: "Де і до котрої години триватиме Afterparty?", // Combined question better
    answer: (
      <>
        Afterparty відбудеться на терасі одразу після завершення основної
        програми фестивалю Nail Moment і триватиме до 00:00.
      </>
    ),
  },
  {
    id: "faq-7",
    // Slightly rephrased question
    question:
      "Я купив(ла) квиток, але плани змінились. Чи можна повернути кошти?",
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
    <Section className={cn("py-12 md:py-16", className)}>
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
