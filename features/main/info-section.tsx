import { AccentCard } from "@/components/patterns/accent-card";
import { ImageCaption } from "@/components/patterns/image-caption";
import { ImageCard } from "@/components/patterns/image-card";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { Image } from "@/components/ui/image";
import { ListItem } from "@/components/ui/list-item";
import { SectionHeader } from "@/components/ui/section-header";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { IMAGES } from "@/shared/const";
import { HOME_INFO_CONTENT } from "@/shared/content/home/info";

export function InfoSection() {
  return (
    <>
      <Section density="compact">
        <Stack gap="xl">
          <Stack gap="lg" className="items-center">
            <SectionHeader
              className="max-w-4xl"
              title={HOME_INFO_CONTENT.introTitle}
            />
            <ul className="relative flex w-full max-w-4xl flex-col gap-3">
              {HOME_INFO_CONTENT.introBullets.map((text) => (
                <ListItem
                  key={text}
                  className="bg-surface-muted"
                  text={text}
                />
              ))}
              <DecorativeImage
                src={IMAGES.DECORATIVE_LEAF_5}
                className="-right-8 bottom-6 h-44 w-44"
              />
            </ul>
          </Stack>

          <Stack gap="lg" className="items-center">
            <SectionHeader
              className="max-w-3xl"
              title={HOME_INFO_CONTENT.mottoTitle}
            />
            <div className="w-full max-w-4xl rounded-[2rem] bg-surface-card p-5 md:p-8">
              <ul className="flex flex-col gap-3">
                {HOME_INFO_CONTENT.mottoBullets.map((text) => (
                  <ListItem key={text} className="bg-surface-muted/65" text={text} />
                ))}
              </ul>
            </div>
            <Image
              url={HOME_INFO_CONTENT.heroImage}
              width={900}
              className="w-full max-w-4xl"
              alt="Festival mood"
            />
          </Stack>
        </Stack>
      </Section>

      <Section density="compact">
        <AccentCard
          title={
            <span className="flex flex-col gap-1">
              {HOME_INFO_CONTENT.warsawCard.title.map((part) => (
                <span key={part}>{part}</span>
              ))}
            </span>
          }
          imageUrl={HOME_INFO_CONTENT.warsawCard.decorUrl}
        >
          <p className="max-w-2xl text-base leading-7 text-text-inverse/90 md:text-lg">
            {HOME_INFO_CONTENT.warsawCard.description}
          </p>
          <Image
            url={HOME_INFO_CONTENT.warsawCard.imageUrl}
            className="w-full"
            width={900}
            alt="Warsaw location"
          />
        </AccentCard>
      </Section>

      <Section density="compact">
        <Stack gap="xl">
          <Stack gap="lg" className="items-center">
            <SectionHeader
              className="max-w-4xl"
              title={HOME_INFO_CONTENT.marketTitle}
            />
            <div className="grid gap-5 md:grid-cols-2">
              {HOME_INFO_CONTENT.marketCards.map((card) => (
                <ImageCard
                  key={card.url}
                  url={card.url}
                  caption={card.caption}
                />
              ))}
            </div>
            <ImageCard url={HOME_INFO_CONTENT.boxopad.url} caption="">
              <Stack gap="sm" className="items-center text-center">
                <h3 className="text-2xl font-semibold uppercase text-text-primary">
                  {HOME_INFO_CONTENT.boxopad.title}
                </h3>
                <p className="text-base leading-7 text-text-muted">
                  {HOME_INFO_CONTENT.boxopad.description}
                </p>
              </Stack>
            </ImageCard>
          </Stack>

          <Stack gap="lg" className="items-center">
            <SectionHeader
              tone="accent"
              title={HOME_INFO_CONTENT.whyAttendTitle}
            />
            <div className="grid gap-6 md:grid-cols-3">
              {HOME_INFO_CONTENT.whyAttendItems.map((item) => (
                <ImageCaption
                  key={item.url}
                  url={item.url}
                  caption={item.caption}
                />
              ))}
            </div>
          </Stack>
        </Stack>
      </Section>
    </>
  );
}
