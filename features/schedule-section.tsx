import React from "react";
import { cn } from "@/lib/utils";
import { Schedule, type ScheduleEntry } from "@/blocks/ui/schedule";
import { SectionHeader } from "@/components/ui/section-header";
import { BuyTicketButton } from "@/blocks/ui/buy-ticket";
import { Section } from "@/blocks/ui/section";
// Optional: Import your Link component if you want to make the MK program linkable later
// import { Link } from "@/blocks/ui/link";

const scheduleData: ScheduleEntry[] = [
  {
    id: 1,
    time: "08:30",
    title: "Реєстрація на конкурс “Битва Майстрів”",
    // description: undefined, // No separate description in the source for this item
  },
  {
    id: 2,
    time: "09:30",
    title: "Початок конкурсу “Битва Майстрів”",
    // description: undefined,
  },
  {
    id: 3,
    time: "10:00",
    title: "Показ МК в малій залі (програма)", // Using exact text, including notation about link
    // description: undefined, // Could potentially add a note about the link here if Schedule component allows
    // Example if Schedule allows ReactNode:
    // title: <>показ МК в малій залі <Link href="/program-link" icon>(програма)</Link></>
  },
  {
    id: 4,
    time: "14:00",
    title: "Відкриття фестивалю",
    // description: undefined,
  },
  {
    id: 5,
    time: "14:10",
    title: "Спікер coming soon", // Exact text
    // description: undefined,
  },
  {
    id: 6,
    time: "14:50",
    title:
      "Яна Лішина: “Успішний успіх: як не втратити себе, будуючи особистий бренд”", // Combined speaker and title as per source
    // description: undefined,
  },
  {
    id: 7,
    time: "15:30",
    title: "Катерина Біляєва (DNK)", // Exact text including colon
    // description: undefined, // No topic provided in source for this item
  },
  {
    id: 8,
    time: "16:10",
    title:
      "Юлія Бельмас: “Upgrade твого педикюру: матеріали, техніки та лайфхаки для збільшення доходу”", // Combined speaker and title as per source
    // description: undefined,
  },
  {
    id: 9,
    time: "16:40",
    title: "Arkada", // Exact text
    // description: undefined,
  },
  {
    id: 10,
    time: "16:50",
    title: "Перерва, шопінг та нетворкінг 🛍️", // Exact text with emoji
    // description: undefined,
  },
  {
    id: 11,
    time: "18:00",
    title: "Юлія Зварич: “Інструктор в довгу: як викладати і не вигорати”", // Combined speaker and title as per source
    // description: undefined,
  },
  {
    id: 12,
    time: "18:40",
    title:
      "Ангеліна Рагоза: “Нарощування без стресу: чиста відпечатка і трендовий літній дизайн за 1 хвилину”", // Combined speaker and title as per source
    // description: undefined,
  },
  {
    id: 13,
    time: "19:20",
    title: "Народний спікер", // Exact text
    // description: undefined,
  },
  {
    id: 14,
    time: "20:00",
    title:
      "Анастасія Котенко: “Успішна команда: що потрібно зробити, щоб майстри працювали довго”", // Combined speaker and title as per source
    // description: undefined,
  },
  {
    id: 15,
    time: "20:30",
    title: "Оголошення переможців конкурсу “Битва Майстрів”",
    // description: undefined,
  },
  {
    id: 16,
    time: "21:00–00:00", // Kept time range format
    title: "Afterparty на даху", // Exact text, reverting the 'terrace' change
    // description: undefined,
  },
];

// --- Component to Display the Schedule ---
interface FestivalScheduleSectionProps {
  className?: string;
}

export const FestivalScheduleSection: React.FC<
  FestivalScheduleSectionProps
> = ({ className }) => {
  return (
    <Section className={cn("md:py-16", className)}>
      <SectionHeader
        title="Програма Фестивалю"
        className="mb-8 md:mb-10 text-center text-blue-foreground"
      />
      <div className="max-w-2xl mx-auto">
        <Schedule items={scheduleData} />
        <BuyTicketButton className="mt-8 md:mt-10 w-full max-w-xs mx-auto flex" />
      </div>
    </Section>
  );
};
