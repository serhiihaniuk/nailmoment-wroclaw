import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { SectionHeader } from "@/shared/ui/section-header";
import { IconLink as Link } from "@/shared/ui/icon-link";
import { cn } from "@/shared/lib/utils";

type LocationSectionProps = {
  className?: string;
  mapIframeSrc?: string;
};

export function LocationSection({
  className,
  mapIframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!2d2443.7!2d20.9519!3d52.2156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471933180e7e1c11%3A0x2e2c4a0b65e2e4f0!2sAl.%20Jerozolimskie%20133A%2C%2002-304%20Warszawa!5e0!3m2!1spl!2spl",
}: LocationSectionProps) {
  return (
    <Section uiId="location-section" density="compact" className={cn(className)}>
      <Stack uiId="location-content" gap="lg" className="items-center text-center">
        <SectionHeader
          title="Місце проведення"
          description="Uczelnia Biznesu i Nauk Stosowanych „Varsovia”. Недалеко від Варшави Заходня."
        />
        <Link
          uiId="location-link"
          href="https://www.google.com/maps?cid=4675373632790545280&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA&hl=en-US&source=embed"
          className="font-medium"
          icon
        >
          Al. Jerozolimskie 133A, 02-304 Warszawa
        </Link>
        <div data-ui="location-map-shell" className="w-full max-w-4xl overflow-hidden rounded-3xl border border-border-subtle bg-surface-card shadow-[0_18px_48px_rgba(57,85,0,0.08)]">
          <iframe
            data-ui="location-map"
            src={mapIframeSrc}
            className="aspect-video w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта місця проведення"
          />
        </div>
      </Stack>
    </Section>
  );
}
