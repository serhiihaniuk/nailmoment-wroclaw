import { Image } from "@/components/ui/image";
import { ListItem } from "@/components/ui/list-item";
import { HeroSection } from "@/features/hero-section";
import { cn } from "@/lib/utils";
import { AccentCard } from "@/blocks/ui/accent-card";
import { ImageCard } from "@/blocks/ui/image-card";
import { Button } from "@/components/ui/button";
import { InfoSection } from "@/features/info-section";

const bulletPoints = [
  "збираємо топів nail-індустрії в одному місці. Ніякої води, тільки АКТУАЛЬНІ ТЕМИ ТА МК!",
  "обʼєднуємо майстрів манікюру та педикюру з усієї Європи",
  "запалюємо нові зірки серед майстрів",
  "даємо доступ до ТОПових знань, інновацій та можливостей для зростання",
];

const bulletPoints2 = [
  "Ми підтримуємо нейл-майстрів, допомагаємо їм будувати успішний бізнес",
  "Ми створюємо середовище, де кожен може навчатися, надихатися та знайомитися з однодумцями",
  "Ми розвиваємо індустрію нігтьового сервісу в польщі та виводимо її на новий рівень",
];

export default function Home() {
  return (
    <div className="w-full min-h-[100svh]">
      <main className="w-[390px] mx-auto border border-black pb-22">
        <HeroSection />
        <InfoSection />
      </main>
    </div>
  );
}
