import React from "react";
import { cn } from "@/lib/utils";
import { Schedule, type ScheduleEntry } from "@/blocks/ui/schedule"; // Import the Schedule component and its type
import { SectionHeader } from "@/components/ui/section-header";
import { BuyTicketButton } from "@/blocks/ui/buy-ticket";

const scheduleData: ScheduleEntry[] = [
  {
    id: 1,
    time: "09:00",
    title: "Реєстрація для учасників конкурсу Битва Майстрів",
  },
  {
    id: 2,
    time: "09:30",
    title: "Початок конкурсу Битви Майстрів",
  },
  {
    id: 3,
    time: "15:00",
    title: "Відкриття фестивалю",
  },
  {
    id: 4,
    time: "15:10",
    title: "Спікер 1",
    description: "тема тема тема",
  },
  {
    id: 5,
    time: "15:40",
    title: "Спікер 2",
    description: "тема тема тема",
  },
  {
    id: 6,
    time: "16:10",
    title: "Спікер 3",
    description: "тема тема тема",
  },
  {
    id: 7,
    time: "16:40",
    title: "Спікер 4",
    description: "тема тема тема",
  },
  {
    id: 8,
    time: "17:10",
    title: "Перерва, шопінг та нетворкінг",
  },
  {
    id: 9,
    time: "18:10",
    title: "Спікер 5",
    description: "тема тема тема",
  },
  {
    id: 10,
    time: "18:40",
    title: "Спікер 6",
    description: "тема тема тема",
  },
  {
    id: 11,
    time: "19:10",
    title: "Спікер 7",
    description: "тема тема тема",
  },
  {
    id: 12,
    time: "19:40",
    title: "Спікер 8",
    description: "тема тема тема",
  },
  {
    id: 13,
    time: "20:10",
    title: "Оголошення переможця Битви Майстрів",
  },
  {
    id: 14,
    time: "20:30",
    title: "Afterparty на даху",
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
    <section className={cn("px-4 py-8 max-w-xl mx-auto", className)}>
      <SectionHeader
        title="Програма Фестивалю"
        className="mb-6 text-blue-foreground"
      />
      <Schedule
        items={scheduleData}
        className={cn(className)} // Pass className for potential overrides
      />

      <BuyTicketButton className="mt-6 w-full" />
    </section>
  );
};
