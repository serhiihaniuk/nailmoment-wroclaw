import { BackLink } from "@/shared/ui/back-link";
import { FooterInfoSection } from "@/features/footer-info/ui/footer-info-section";
import { BATTLE_RULES_CONTENT } from "@/features/battle-rules/model/content";
import { IMAGES } from "@/shared/config/const";
import { mergeUi } from "@/shared/lib/utils";
import {
  ArticleCallout,
  ArticleHeading,
  ArticleList,
  ArticleListItem,
  ArticleSection,
  ArticleSubheading,
  ArticleText,
} from "@/shared/ui/article";
import { DecorativeImage } from "@/shared/ui/decorative-image";
import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { SectionHeader } from "@/shared/ui/section-header";
import { Card, CardContent } from "@/shared/ui/card";

function RulesBlock({ section }: { section: (typeof BATTLE_RULES_CONTENT.sections)[number] }) {
  return (
    <ArticleSection uiId={mergeUi("battle-rules", section.id)}>
      <Stack uiId={mergeUi("battle-rules", section.id, "content")} gap="default">
        <ArticleSubheading
          uiId={mergeUi("battle-rules", section.id, "title")}
          as="h2"
        >
          {section.title}
        </ArticleSubheading>

        {section.blocks.map((block, index) => {
          if (block.type === "paragraph") {
            return (
              <ArticleText
                key={`${section.id}-paragraph-${index + 1}`}
                uiId={mergeUi("battle-rules", section.id, "paragraph", index + 1)}
                as="p"
              >
                {block.text}
              </ArticleText>
            );
          }

          if (block.type === "subheading") {
            return (
              <ArticleSubheading
                key={`${section.id}-subheading-${index + 1}`}
                as="h3"
                uiId={mergeUi("battle-rules", section.id, "subheading", index + 1)}
                id={
                  section.id === "stages" && block.text === "Фінальний конкурс «Битва Майстрів»"
                    ? "final-rules"
                    : undefined
                }
                className={
                  section.id === "stages" && block.text === "Фінальний конкурс «Битва Майстрів»"
                    ? "scroll-mt-24"
                    : undefined
                }
              >
                {block.text}
              </ArticleSubheading>
            );
          }

          if (block.type === "unordered-list") {
            return (
              <ArticleList
                key={`${section.id}-list-${index + 1}`}
                data-ui={mergeUi("battle-rules", section.id, "list", index + 1)}
                tone={block.tone}
              >
                {block.items.map((item, itemIndex) => (
                  <ArticleListItem
                    key={`${section.id}-bullet-${itemIndex + 1}`}
                    data-ui={mergeUi("battle-rules", section.id, "bullet", itemIndex + 1)}
                  >
                    {item}
                  </ArticleListItem>
                ))}
              </ArticleList>
            );
          }

          if (block.type === "ordered-list") {
            return (
              <ArticleList
                key={`${section.id}-ordered-${index + 1}`}
                as="ol"
                data-ui={mergeUi("battle-rules", section.id, "ordered-list", index + 1)}
              >
                {block.items.map((item, itemIndex) => (
                  <ArticleListItem
                    key={`${section.id}-ordered-item-${itemIndex + 1}`}
                    data-ui={mergeUi("battle-rules", section.id, "ordered-item", itemIndex + 1)}
                  >
                    {item}
                  </ArticleListItem>
                ))}
              </ArticleList>
            );
          }

          return (
            <ArticleCallout
              key={`${section.id}-highlight-${index + 1}`}
              uiId={mergeUi("battle-rules", section.id, "highlight", index + 1)}
              tone={block.tone}
            >
              {block.text}
            </ArticleCallout>
          );
        })}
      </Stack>
    </ArticleSection>
  );
}

function RulesArticle() {
  return (
    <Card
      uiId="battle-rules-article"
      surface="subtle"
      spacing="none"
      className="rounded-[2rem]"
    >
      <CardContent
        uiId="battle-rules-article"
        className="px-5 py-6 md:px-8 md:py-8"
      >
        <Stack uiId="battle-rules-article-content" gap="xl">
          <ArticleHeading
            as="h2"
            uiId="battle-rules-article-title"
          >
            {BATTLE_RULES_CONTENT.title}
          </ArticleHeading>
          <ArticleText
            uiId="battle-rules-article-intro"
          >
            {BATTLE_RULES_CONTENT.intro}
          </ArticleText>
          <ArticleCallout
            uiId="battle-rules-article-notice"
          >
            {BATTLE_RULES_CONTENT.notice}
          </ArticleCallout>
          {BATTLE_RULES_CONTENT.sections.map((section) => (
            <RulesBlock key={section.id} section={section} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export function BattleRulesSection() {
  return (
    <>
      <Section
        uiId="battle-rules-hero"
        density="compact"
        className="relative overflow-hidden px-0 pt-14 md:pt-16"
        innerClassName="max-w-none"
      >
        <div
          data-ui="battle-rules-hero-shell"
          className="relative isolate overflow-hidden rounded-[2rem] bg-surface-page px-5 pb-5 pt-10 md:px-8 md:pb-8"
        >
          <img
            data-ui="battle-rules-hero-background"
            src={IMAGES.DECORATIVE_BG_1}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-40"
          />
          <DecorativeImage
            uiId="battle-rules-hero-leaf-left"
            src={IMAGES.DECORATIVE_LEAF_7}
            className="-left-10 top-8 h-40 w-52"
          />
          <DecorativeImage
            uiId="battle-rules-hero-leaf-right"
            src={IMAGES.DECORATIVE_LEAF_1}
            className="-right-10 top-6 h-44 w-36"
          />

          <Stack
            uiId="battle-rules-hero-content"
            gap="lg"
            className="relative z-[1] items-center"
          >
            <SectionHeader
              uiId="battle-rules-header"
              title={BATTLE_RULES_CONTENT.title}
              tone="accent"
              titleClassName="max-w-[25ch]"
              descriptionClassName="max-w-3xl text-brand-brown text-base md:text-lg md:leading-8"
            />
            <img
              data-ui="battle-rules-hero-image"
              src={IMAGES.TICKET_BATTLE_DECOR}
              alt=""
              aria-hidden="true"
              className="mx-auto h-auto w-full max-w-[200px] object-contain"
            />
          </Stack>
        </div>
      </Section>

      <Section uiId="battle-rules-content-section" density="compact">
        <Stack uiId="battle-rules-content" gap="lg" className="mx-auto w-full max-w-4xl">
          <RulesArticle />

          <BackLink uiId="battle-rules-back-link" href="/battle">
            Повернутися на сторінку Битви Майстрів
          </BackLink>
        </Stack>
      </Section>

      <FooterInfoSection />
    </>
  );
}
