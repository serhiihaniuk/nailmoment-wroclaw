import { BuyTicketButton } from "@/blocks/ui/buy-ticket";
import Marquee from "@/blocks/ui/marquee";
import { Cluster } from "@/components/layout/cluster";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { SectionHeader } from "@/components/ui/section-header";
import { IMAGES } from "@/shared/const";
import { HOME_HERO_CONTENT } from "@/shared/content/home/hero";

export function HeroSection() {
  return (
    <Section density="hero" innerClassName="max-w-none">
      <div className="relative overflow-hidden rounded-[2rem] bg-surface-muted/50 px-4 py-10 md:px-8 md:py-14">
        <DecorativeImage
          src={IMAGES.DECORATIVE_BG_1}
          className="left-0 top-10 h-[32rem] w-full opacity-10"
        />
        <DecorativeImage
          src={IMAGES.DECORATIVE_LEAF_1}
          className="-right-8 -top-16 h-[21rem] w-[16rem] z-[2]"
        />
        <DecorativeImage
          src={IMAGES.DECORATIVE_LEAF_4}
          className="-left-8 top-1 h-48 w-44 z-[2]"
        />

        <Marquee
          texts={HOME_HERO_CONTENT.marquee}
          speed={150}
          direction="left"
          pauseOnHover
          textColorClass="text-text-primary"
          className="absolute inset-x-0 top-0 z-[3] self-stretch bg-surface-card font-medium"
        />

        <Stack gap="lg" className="relative z-[1] items-center pt-6 text-center">
          <Cluster gap="sm" justify="center" className="w-full">
            {HOME_HERO_CONTENT.badges.map((badge) => (
              <Badge
                key={badge}
                className="min-w-[9rem] border-0 bg-surface-card/90"
              >
                {badge}
              </Badge>
            ))}
          </Cluster>

          <SectionHeader
            as="h1"
            align="center"
            className="max-w-3xl"
            eyebrow={HOME_HERO_CONTENT.eyebrow}
            title={
              <span className="flex flex-col items-center gap-4">
                <span className="rounded-2xl bg-brand-brown px-8 py-3 font-display text-4xl leading-none text-brand-cream md:text-5xl">
                  {HOME_HERO_CONTENT.title.top}
                </span>
                <span className="font-display text-6xl leading-none text-brand-gold md:text-8xl">
                  {HOME_HERO_CONTENT.title.bottom}
                </span>
              </span>
            }
            titleClassName="normal-case"
            description="Подія для майстрів, які хочуть вчитися, масштабуватися, знайомитися з ринком і бути в центрі нейл-спільноти."
          />

          <Stack gap="sm" className="w-full max-w-2xl">
            <BuyTicketButton className="w-full" />
            <div className="grid gap-3 md:grid-cols-2">
              {HOME_HERO_CONTENT.shortcuts.map((shortcut) => (
                <Button
                  key={shortcut.href}
                  variant="secondary"
                  size="sm"
                  asChild
                  className="w-full"
                >
                  <a href={shortcut.href}>{shortcut.label}</a>
                </Button>
              ))}
            </div>
          </Stack>
        </Stack>

        <Marquee
          texts={HOME_HERO_CONTENT.marquee}
          speed={150}
          direction="right"
          pauseOnHover
          textColorClass="text-brand-brown"
          className="absolute inset-x-0 bottom-0 z-[3] self-stretch bg-surface-card font-medium"
        />
      </div>
    </Section>
  );
}
