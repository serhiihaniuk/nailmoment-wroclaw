import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { SpeakerCard } from "@/blocks/ui/speaker-card";
import { Section } from "@/blocks/ui/section";

const shadowImageUrl =
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/speakers/soon-ubkgrDK0uFcyfGfF3ACeovMcT61QKZ.jpg";

const speakers = [
  {
    id: 1,
    imageUrl:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/speakers/kotenko-jVCGV9wuRb5htVCRhTz1S2iYGd3iFm.jpg",
    imageAlt: "Анастасія Котенко",
    name: "Анастасія Котенко",
    description: (
      <>
        <p>
          Власниця студії <strong>KOTENKO STUDIO</strong>,{" "}
          <strong>LUNAmoon Company</strong>, <strong>LUNAmoonschool</strong>.
        </p>
        <p>Заробила свій перший мільйон за перші пів року роботи студії.</p>
        <p>
          Ідеолог і двигун змін у ніші, яка формує стандарти якості та надихає
          нове покоління нейл-майстрів.
        </p>
      </>
    ),
  },
  {
    id: 2,
    imageUrl:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/speakers/zvarych-1U0jIkTijnXkHE2qVUdMy2lIj2X34w.jpg",
    imageAlt: "Юлія Зварич",
    name: "Юлія Зварич",
    description: (
      <>
        <p>
          Власниця бренду <strong>JZ NAILS GROUP</strong>, шкіл для майстрів
          манікюру та педикюру в Києві та Варшаві <strong>JZ School</strong>.
        </p>
        <p>
          Вже 10 років передає свій досвід, техніки та знання майстрам які
          вирішили нести місію <strong>Nail-інструктор</strong>.
        </p>
      </>
    ),
  },
  {
    id: 3,
    imageUrl:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/speakers/ragoza-bMjMeE9tpzi9EsVP6NOrFLgeGynAAd.jpg",
    imageAlt: "Ангеліна Рагоза",
    name: "Ангеліна Рагоза",
    description: (
      <>
        <p>
          Співорганізаторка фестивалів <strong>Nail Moment</strong>.
        </p>
        <p>
          Експертка наращування на верхні форми та амбасадорка руху{" "}
          <strong>«Швидко. Якісно. Дорого»</strong>.
        </p>
        <p>
          Завдяки її навчанням сотні майстрів навчилися цінувати себе, працювати
          легше і заробляти більше.
        </p>
      </>
    ),
  },
  {
    id: 4,
    imageUrl:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/speakers/belmas-bKSYjzBFKPc6Lm2oIr35Yz2yNoS1eJ.jpg",
    imageAlt: "Юлія Бельмас",
    name: "Юлія Бельмас",
    description: (
      <>
        <p>
          Співорганізаторка фестивалю <strong>NAIL MOMENT</strong>, спікерка та
          амбасадорка відомих нейл-брендів.
        </p>
        <p>
          Інструкторка <strong>без “рожевих окулярів”</strong>, яка допомагає
          майстрам вийти на новий рівень доходу.
        </p>
        <p>
          Її майстер-класи — для тих, хто втомився працювати на знос за копійки
          і готовий заробляти більше, оптимізувавши свою роботу.
        </p>
      </>
    ),
  },
  {
    id: 5,
    imageUrl:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/speakers/lishyna-KLR0qevEtP6SLUPKG4AWdiLR1NeVu6.jpg",
    imageAlt: "Яна Лішина",
    name: "Яна Лішина",
    description: (
      <>
        <p>
          <strong>Трушна блогерка без прикрас</strong>, яка довела: щирість у
          соцмережах працює краще за будь-які стратегії.
        </p>
        <p>
          Вона активно співпрацює з брендами й навчає як створювати живий і
          успішний контент в <strong>Instagram</strong>.
        </p>
      </>
    ),
  },
  {
    id: 6,
    imageUrl:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/speakers/dnk-F5Cvz29KcEzzOIYGjlA12RTfiglUHq.jpg",
    imageAlt: "Катерина Біляєва",
    name: "Катерина Біляєва",
    description: (
      <>
        <p>
          Директор навчального відділу та головний технолог бренду{" "}
          <strong>DNKa’</strong>.
        </p>
        <p>
          Вона створює системи, які змінюють ринок. Навчає експертів не просто
          викладати, а <strong>вести за собою</strong>.
        </p>
        <p>Будує освітні моделі, з яких народжуються особисті бренди.</p>
        <p>
          Її місія — підняти nail-індустрію до рівня справжньої професії з ім’ям
          та авторитетом.
        </p>
      </>
    ),
  },
  {
    id: 7,
    imageUrl:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/speakers/avdeeva-Y1iYdu9x6cE44qgJ3GGupYhoQFrWtE.jpg",
    imageAlt: "Вікторія Авдєєва",
    name: "Вікторія Авдєєва",
    description: (
      <>
        <p>
          Зірка нігтьової індустрії, що стоїть за понад 150 перемогами на
          українських та міжнародних чемпіонатах. 3-разова володарка{" "}
          <b>ГРАН ПРІ</b>, топ-10 майстрів України за версією{" "}
          <b>STELLA BEAUTY Awards</b>.
        </p>
        <p>
          Суддя, конкурсний тренер, автор авторських програм навчання та
          засновниця школи <b>Victoria Avdeeva</b> з понад 5000 випускників.
          Сертифікований викладач міжнародного рівня та власниця бренду
          професійної косметики.
        </p>
      </>
    ),
  },
  {
    id: 8,
    imageUrl: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/speakers/valentyna_kozlova.jpg",
    imageAlt: "Валентина Козлова",
    name: "Валентина Козлова",
    description: (
      <>
        <p>
          <strong>Народний спікер 2025</strong> - Експертка з 8-річним досвідом,
          Подологиня й викладачка.
        </p>
        <p>
          Вона пройшла шлях від майстрині з прасувальної дошки до експертки з чеком за навчання $650 і записом на 2 місяці вперед.
        </p>
      </>
    ),
  },
];

interface SpeakersSectionProps {
  className?: string;
}

export const SpeakersSection: React.FC<SpeakersSectionProps> = ({
  className,
}) => {
  return (
    <Section className={cn(className)}>
      <SectionHeader
        title="Спікери фестивалю"
        className="mb-8 md:mb-10 text-center"
      />
      <div className="flex flex-col items-center gap-4 md:gap-6">
        {speakers.map((speaker) => (
          <SpeakerCard
            key={speaker.id}
            imageUrl={speaker.imageUrl}
            imageAlt={speaker.imageAlt}
            name={speaker.name}
            description={speaker.description} // Pass the JSX description
          />
        ))}
      </div>
    </Section>
  );
};
