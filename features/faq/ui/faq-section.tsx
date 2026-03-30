import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";
import { IconLink as Link } from "@/shared/ui/icon-link";
import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { cn } from "@/shared/lib/utils";
import { SectionHeader } from "@/shared/ui/section-header";

export type FaqEntry = {
  id: string;
  question: string;
  answer: ReactNode;
};

const InstagramLink = ({ handle }: { handle: string }) => (
  <Link href={`https://www.instagram.com/${handle}/`} icon target="_blank">
    @{handle}
  </Link>
);

const faqData: FaqEntry[] = [
  {
    id: "faq-1",
    question: "Як купити квиток?",
    answer: (
      <>
        Ви можете купити квиток через сайт або написавши нам в Instagram <InstagramLink handle="nail_moment_pl" />.
      </>
    ),
  },
  {
    id: "faq-2",
    question: "Як отримати фактуру?",
    answer: (
      <>
        Щоб отримати фактуру, напишіть нам NIP фірми та ваш e-mail у дірект на сторінку{" "}
        <InstagramLink handle="nail_moment_pl" />.
      </>
    ),
  },
  {
    id: "faq-3",
    question: "Чи є розстрочка?",
    answer: (
      <>
        Так, є можливість придбати квиток у розстрочку. Щоб дізнатися детальні умови, напишіть нам на сторінку{" "}
        <InstagramLink handle="nail_moment_pl" />.
      </>
    ),
  },
  {
    id: "faq-4",
    question: "Як взяти участь у розіграші БОКСОПАДУ?",
    answer: (
      <>
        Деталі щодо участі у розіграші БОКСОПАДУ будуть оголошені ближче до дати фестивалю. Слідкуйте за оновленнями на
        нашій сторінці <InstagramLink handle="nail_moment_pl" />.
      </>
    ),
  },
  {
    id: "faq-5",
    question: "Чи можна буде поїсти на фестивалі?",
    answer: <>Так, на локації буде можливість перекусити. Також поруч є багато ресторанів та кафе.</>,
  },
  {
    id: "faq-6",
    question: "Де та до котрої буде afterparty?",
    answer: (
      <>
        Деталі щодо afterparty ми повідомимо окремо ближче до дати фестивалю. Слідкуйте за оновленнями на сторінці{" "}
        <InstagramLink handle="nail_moment_pl" />.
      </>
    ),
  },
  {
    id: "faq-7",
    question: "Я купив(ла) квиток, але змінилися плани і я хочу повернути кошти",
    answer: (
      <>
        Повернення квитка можливе не пізніше, ніж за 14 днів до дати проведення заходу.
        <br />
        Якщо до події залишилося менше 14 днів:
        <br />- повернення коштів можливе лише за умови повного розпродажу всіх квитків;
        <br />- ви також маєте право самостійно перепродати свій квиток.
      </>
    ),
  },
];

type FaqSectionProps = {
  className?: string;
};

export function FaqSection({ className }: FaqSectionProps) {
  return (
    <Section uiId="faq-section" density="compact" className={cn(className)}>
      <Stack uiId="faq-content" gap="lg" className="items-center">
        <SectionHeader
          title="Відповіді на часті питання"
          description="Зібрали основні організаційні моменти, щоб не доводилося шукати їх у чатах чи соцмережах."
        />
        <div
          data-ui="faq-shell"
          className="w-full max-w-4xl rounded-3xl border border-border-subtle bg-surface-card px-4 py-2 shadow-[0_18px_48px_rgba(57,85,0,0.08)] md:px-6"
        >
          <Accordion uiId="faq-accordion" type="single" collapsible className="w-full">
            {faqData.map((item) => (
              <AccordionItem
                uiId={item.id}
                value={item.id}
                key={item.id}
                className="border-b border-border-subtle last:border-b-0"
              >
                <AccordionTrigger
                  uiId={item.id}
                  className="px-2 py-5 text-left text-base font-medium text-text-primary hover:no-underline md:text-lg"
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent
                  uiId={item.id}
                  className="px-2 pb-5 pt-0 text-sm leading-7 text-text-muted md:text-base"
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Stack>
    </Section>
  );
}
