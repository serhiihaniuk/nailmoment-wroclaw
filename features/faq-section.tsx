import React from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Use the specified path
import { SectionHeader } from "@/components/ui/section-header"; // Assuming path

// --- FAQ Data Type ---
export type FaqEntry = {
  id: string; // Unique ID for the accordion item value
  question: string;
  answer: React.ReactNode; // Allow JSX for answers with links etc.
};

// --- FAQ Data ---
// Based on the image provided
const faqData: FaqEntry[] = [
  {
    id: "faq-1",
    question: "Як купити квиток?",
    answer: "Відповідь на питання про купівлю квитка тут...", // Add actual answer
  },
  {
    id: "faq-2",
    question: "Як отримати фактуру?",
    answer: (
      <>
        Щоб отримати фактуру напишіть нам NIP фірми та ваш імейл в дірект на
        сторінку{" "}
        <a
          href="#" // Replace with actual link
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          @nail_moment_pl
        </a>{" "}
        (активная кнопка)
      </>
    ),
  },
  {
    id: "faq-3",
    question: "Чи є розстрочка?",
    answer: "Відповідь на питання про розстрочку тут...", // Add actual answer
  },
  {
    id: "faq-4",
    question:
      "Чи можу я приходити раніше до початку основної частини фестивалю?",
    answer: "Відповідь на питання про ранній прихід тут...", // Add actual answer
  },
  {
    id: "faq-5",
    question: "Чи можна буде поїсти на фестивалі?",
    answer: "Відповідь на питання про їжу тут...", // Add actual answer
  },
  {
    id: "faq-6",
    question: "Де та до котрої буде Afterparty?",
    answer: "Відповідь на питання про Afterparty тут...", // Add actual answer
  },
  {
    id: "faq-7",
    question:
      "Я купив(ла) квиток, але змінилися плани і я хочу повернути кошти",
    answer: "Відповідь на питання про повернення коштів тут...", // Add actual answer
  },
];

// --- FAQ Section Component ---
interface FaqSectionProps {
  className?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ className }) => {
  return (
    <section className={cn("px-4", className)}>
      <SectionHeader title="Відповіді на часті питання" className="mb-6" />
      <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
        {faqData.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="border-blue-foreground/20" // Style the border
          >
            <AccordionTrigger className="text-lg text-left text-blue-foreground hover:no-underline py-4">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-blue-foreground/80 pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
