import { AccentCard } from "@/shared/ui/accent-card";
import { Section } from "@/shared/ui/layout/section";
import { Image } from "@/shared/ui/image";
import { HOME_AFTERPARTY_CONTENT } from "@/features/afterparty/model/content";

export function AfterpartySection() {
  return (
    <Section density="compact">
      <AccentCard title={HOME_AFTERPARTY_CONTENT.title} imageUrl={HOME_AFTERPARTY_CONTENT.decorUrl}>
        <p className="text-base leading-7 text-text-inverse/90 md:text-lg">
          {HOME_AFTERPARTY_CONTENT.description}
        </p>
        <Image
          url={HOME_AFTERPARTY_CONTENT.imageUrl}
          className="w-full"
          width={900}
          alt="Warsaw rooftop afterparty"
        />
      </AccentCard>
    </Section>
  );
}
