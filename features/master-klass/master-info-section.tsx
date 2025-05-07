import { Section } from "@/blocks/ui/section";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { ListItem } from "@/components/ui/list-item";
import { cn } from "@/lib/utils";
import { IMAGES } from "@/shared/const";

const bulletPoints = [
  "4 години практичних міні-лекцій і демонстрацій",
  "Виступи топових інструкторів брендів: як працювати з матеріалами, уникати відслойок, покращити укріплення, наращування, манікюр",
  "Можливість задати питання напряму: розбір конкретних кейсів і проблем з практики",
  "Тільки жива демонстрація — ніякої “води”, лише робота руками",
  "Тематичний Nail Market після кожного МК — купуй матеріали, які щойно побачив у роботі, зі знижками та акціями",
];

export const MasterInfoSection = () => {
  return (
    <Section>
      <ul className="flex relative flex-col gap-1.5 self-stretch">
        {bulletPoints.map((text, i) => (
          <ListItem
            className={cn("capitalize bg-white w-[90%]", {
              "w-[95%]": i === 0 || i === 4,
              "w-[85%]": i === 1,
              "w-[80%]": i === 2 || i === 3,
            })}
            key={i}
            text={text}
          />
        ))}
        <DecorativeImage
          src={IMAGES.LIME_URL}
          className="right-0 translate-1/2 bottom-1/2 size-[180px] slide-in-view"
        />
        <DecorativeImage
          src={IMAGES.LIME_URL}
          className="right-0 translate-1/2 bottom-1/2 size-[180px]"
        />
      </ul>
    </Section>
  );
};
