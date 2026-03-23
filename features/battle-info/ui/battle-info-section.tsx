import { Section } from "@/shared/ui/layout/section";
import { SectionHeader } from "@/shared/ui/section-header";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from "@/shared/ui/card"; // Assuming this is the correct path to your card components
import Link from "next/link";
import { INFO_URL } from "@/shared/config/const";

const BATTLE_STEPS_DATA = [
  {
    stepNumber: 1,
    title: "Ознайомся з умовами конкурсу",
    description:
      "Уважно прочитай повні умови участі. Подавши заявку, ти підтверджуєш, що згоден з усіма правилами.",
    actionText: "Прочитати умови",
    actionHref: "/battle/regulamin",
  },
  {
    stepNumber: 2,
    title: "Придбай квиток на фестиваль Nail Moment (Standard або VIP)",
    description:
      "Для того щоб прийняти участь у конкурсі «Битва Майстрів», треба буди учасником фестивалю.",
    actionText: "Придбати квиток",
    actionHref: "/#ticket-section",
  },
  {
    stepNumber: 3,
    title: "Придбай квиток учасника конкурсу",
    description:
      "1 квиток = 1 номінація\n\nЯкщо хочеш взяти участь у двох та більше номінаціях треба купити додатковий квиток на кожну номінацію окремо.\nНа кожну наступну номінацію отримуєш знижку учасника ❗️",
    additionalInfo: "Продажі закінчено.",
  },
  {
    stepNumber: 4,
    title: "Візьми участь у відбірковому турі",
    description:
      "Обери свою номінацію та надішли 1–3 фотографії своєї роботи до 20 червня. 20 найкращих робіт з кожної номінації потраплять на публічне голосування.",
    actionText: "Вислати свою роботу",
    actionHref: INFO_URL.TELEGRAM,
    isExternal: true,
  },
  {
    stepNumber: 5,
    title: "Фінальний тур",
    description:
      "Якщо ти став фіналістом, приїжджай на фестиваль Nail Moment 7 червня у Варшаву, де відбудеться фінал конкурсу.\n\n" +
      "На фіналі тобі нададуть:\n" +
      "• Модель\n" +
      "• Стіл\n" +
      "• Два стільці\n" +
      "• 2 години 30 хвилин (дві з половиною години) для створення повного ПЕРЕВТІЛЕННЯ однієї руки моделі за власним баченням.\n\n" +
      "Після цього у тебе буде:\n" +
      "• 30 хвилин на фото та відео зйомку своєї роботи.\n" +
      "• 30 хвилин для підготовки фото- та відеопрезентації, яка буде представлена для фінального голосування.",
  },
  {
    stepNumber: 6,
    title:
      "Забери головний приз 2000 зл та кубок переможця «Битви Майстрів» 🏆",
    description:
      'За підсумками фінального голосування 7 червня 2026 року буде визначено переможця конкурсу "Битва майстрів", і якщо це будеш ти, ти отримаєш головний приз переможця 2000 зл та кубок «Битви Майстрів» 🏆',
  },
];

const HEADINGS = {
  BATTLE_TITLE: "Етапи участі",
};

export const BattleInfoSection = () => {
  return (
    <Section>
      <SectionHeader
        title={HEADINGS.BATTLE_TITLE}
        className="mb-12 text-center text-blue-foreground"
      />

      <div className="max-w-xl mx-auto space-y-8">
        {BATTLE_STEPS_DATA.map((step) => (
          <Card
            key={step.stepNumber}
            className="bg-white/80 text-blue-foreground shadow-xl overflow-hidden"
          >
            <CardHeader>
              <div className="flex items-start gap-x-4">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <span
                    className="flex items-center justify-center size-8 
                               bg-gradient-to-br from-pink-400 to-pink-500 
                               text-white font-bold text-lg rounded-full shadow-md"
                  >
                    {step.stepNumber}
                  </span>
                </div>
                {/* Title */}
                <div className="flex-1">
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <p className="whitespace-pre-line text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
              {step.additionalInfo && (
                <p className="mt-4 text-xs md:text-sm italic whitespace-pre-line bg-blue-background p-3 rounded-md border">
                  {step.additionalInfo}
                </p>
              )}
            </CardContent>

            {step.actionText && step.actionHref && (
              <CardFooter className="pt-4">
                <Button
                  variant="secondary"
                  asChild
                  className="w-auto text-center ml-auto"
                >
                  <Link
                    href={step.actionHref}
                    target={step.isExternal ? "_blank" : undefined}
                    rel={step.isExternal ? "noopener noreferrer" : undefined}
                  >
                    {step.actionText}
                  </Link>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
};
