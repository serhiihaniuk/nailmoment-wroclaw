import React from "react";
import { cn } from "@/lib/utils";
import { Schedule, type ScheduleEntry } from "@/blocks/ui/schedule";
import { SectionHeader } from "@/components/ui/section-header";
import { BuyTicketButton } from "@/blocks/ui/buy-ticket";
import { Section } from "@/blocks/ui/section";

const scheduleData: ScheduleEntry[] = [
  {
    id: 1,
    time: "08:30",
    title: "Реєстрація на конкурс “Битва Майстрів”",
  },
  {
    id: 2,
    time: "09:30",
    title: "Початок конкурсу “Битва Майстрів”",
  },
  {
    id: 3,
    time: "10:00",
    title: "Показ МК в малій залі (програма)",
  },
  {
    id: 4,
    time: "14:00",
    title: "Відкриття фестивалю",
  },
  {
    id: 5,
    time: "14:10",
    title: "Вікторія Авдєєва",
    description: "Як почати інструкторство. Перші головні кроки",
  },
  {
    id: 6,
    time: "14:50",
    title: "Яна Лішина",
    description: "Успішний успіх: як не втратити себе, будуючи особистий бренд",
  },
  {
    id: 7,
    time: "15:30",
    title: "Катерина Біляєва",
    description:
      "Заборона TPO та обмеження HEMA в ЄС: що має знати кожен майстер",
  },
  {
    id: 8,
    time: "16:10",
    title: "Юлія Бельмас",
    description:
      "Upgrade твого педикюру: матеріали, техніки та лайфхаки для збільшення доходу",
  },
  {
    id: 9,
    time: "16:40",
    title: "Arkada",
  },
  {
    id: 10,
    time: "16:50",
    title: "Перерва, шопінг та нетворкінг 🛍️",
  },
  {
    id: 11,
    time: "18:00",
    title: "Юлія Зварич",
    description: "Інструктор в довгу: як викладати і не вигорати",
  },
  {
    id: 12,
    time: "18:40",
    title: "Ангеліна Рагоза",
    description:
      "Нарощування без стресу: чиста відпечатка і трендовий літній дизайн за 1 хвилину",
  },
  {
    id: 13,
    time: "19:20",
    title: "Валентина Козлова",
    description:
      "5 кроків до педикюру без \"мертвого сезону\". Як вбудувати педикюр у стабільну систему і не залежати від календаря",
  },
  {
    id: 14,
    time: "20:00",
    title: "Анастасія Котенко",
    description:
      "Успішна команда: що потрібно зробити, щоб майстри працювали довго",
  },
  {
    id: 15,
    time: "20:30",
    title: "Оголошення переможців конкурсу “Битва Майстрів”",
  },
  {
    id: 16,
    time: "21:00–00:00",
    title: "Afterparty на даху",
  },
];

interface FestivalScheduleSectionProps {
  className?: string;
}

export const FestivalScheduleSection: React.FC<
  FestivalScheduleSectionProps
> = ({ className }) => {
  return (
    <Section className={cn("md:py-2", className)}>
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
