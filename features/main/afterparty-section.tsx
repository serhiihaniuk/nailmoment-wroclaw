import { AccentCard } from "@/components/patterns/accent-card";
import { Section } from "@/components/layout/section";
import { Image } from "@/components/ui/image";
import { HOME_AFTERPARTY_CONTENT } from "@/shared/content/home/afterparty";

export function AfterpartySection() {
  return (
    <Section density="compact">
      <AccentCard title={HOME_AFTERPARTY_CONTENT.title} imageUrl={HOME_AFTERPARTY_CONTENT.decorUrl}>
        <p className="max-w-2xl text-base leading-7 text-text-inverse/90 md:text-lg">
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
