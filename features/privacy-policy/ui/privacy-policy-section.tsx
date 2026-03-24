import { FooterInfoSection } from "@/features/footer-info/ui/footer-info-section";
import { PRIVACY_POLICY_CONTENT } from "@/features/privacy-policy/model/content";
import {
  ArticleSection,
  ArticleSubheading,
  ArticleText,
} from "@/shared/ui/article";
import { BackLink } from "@/shared/ui/back-link";
import { Card, CardContent } from "@/shared/ui/card";
import { DecorativeImage } from "@/shared/ui/decorative-image";
import { IMAGES } from "@/shared/config/const";
import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { SectionHeader } from "@/shared/ui/section-header";

function PrivacyPolicyArticle() {
  return (
    <Card
      uiId="privacy-policy-article"
      surface="subtle"
      spacing="none"
      className="rounded-[2rem]"
    >
      <CardContent
        uiId="privacy-policy-article"
        className="px-5 py-6 md:px-8 md:py-8"
      >
        <Stack uiId="privacy-policy-article-content" gap="xl">
          <ArticleSubheading as="h2" uiId="privacy-policy-article-title">
            {PRIVACY_POLICY_CONTENT.title}
          </ArticleSubheading>

          <ArticleText as="p" uiId="privacy-policy-article-intro">
            {PRIVACY_POLICY_CONTENT.intro}
          </ArticleText>

          {PRIVACY_POLICY_CONTENT.sections.map((section) => (
            <ArticleSection key={section.id} uiId={`privacy-policy-${section.id}`}>
              <Stack uiId={`privacy-policy-${section.id}-content`} gap="default">
                <ArticleSubheading as="h3" uiId={`privacy-policy-${section.id}-title`}>
                  {section.title}
                </ArticleSubheading>
                {section.paragraphs.map((paragraph, index) => (
                  <ArticleText
                    key={`${section.id}-${index + 1}`}
                    as="p"
                    uiId={`privacy-policy-${section.id}-paragraph-${index + 1}`}
                  >
                    {paragraph}
                  </ArticleText>
                ))}
              </Stack>
            </ArticleSection>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export function PrivacyPolicySection() {
  return (
    <>
      <Section
        uiId="privacy-policy-hero"
        density="compact"
        className="relative overflow-hidden px-0 pt-14 md:pt-16"
        innerClassName="max-w-none"
      >
        <div
          data-ui="privacy-policy-hero-shell"
          className="relative isolate overflow-hidden rounded-[2rem] bg-surface-page px-5 pb-6 pt-10 md:px-8 md:pb-8"
        >
          <img
            data-ui="privacy-policy-hero-background"
            src={IMAGES.DECORATIVE_BG_1}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-40"
          />
          <DecorativeImage
            uiId="privacy-policy-hero-leaf-left"
            src={IMAGES.DECORATIVE_LEAF_7}
            className="-left-10 top-8 h-40 w-52"
          />
          <DecorativeImage
            uiId="privacy-policy-hero-leaf-right"
            src={IMAGES.DECORATIVE_LEAF_1}
            className="-right-10 top-6 h-44 w-36"
          />

          <Stack
            uiId="privacy-policy-hero-content"
            gap="lg"
            className="relative z-[1] items-center"
          >
            <SectionHeader
              uiId="privacy-policy-header"
              title={PRIVACY_POLICY_CONTENT.title}
              description={PRIVACY_POLICY_CONTENT.description}
              tone="accent"
              descriptionClassName="max-w-3xl text-brand-brown text-base md:text-lg md:leading-8"
            />
          </Stack>
        </div>
      </Section>

      <Section uiId="privacy-policy-content-section" density="compact">
        <Stack
          uiId="privacy-policy-content"
          gap="lg"
          className="mx-auto w-full max-w-4xl"
        >
          <PrivacyPolicyArticle />

          <BackLink uiId="privacy-policy-back-link" href="/">
            Повернутися на головну
          </BackLink>
        </Stack>
      </Section>

      <FooterInfoSection />
    </>
  );
}
