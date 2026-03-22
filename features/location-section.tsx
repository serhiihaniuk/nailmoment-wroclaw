import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { Link } from "@/blocks/ui/link";
import { Section } from "@/blocks/ui/section";

interface LocationSectionProps {
  className?: string;
  mapIframeSrc?: string;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  className,
  // Added &zoom=16 to the default URL to make it slightly more zoomed out
  mapIframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.7!2d20.9519!3d52.2156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471933180e7e1c11%3A0x2e2c4a0b65e2e4f0!2sAl.%20Jerozolimskie%20133A%2C%2002-304%20Warszawa!5e0!3m2!1spl!2spl",
}) => {
  const title = "Місце проведення";
  const description =
    'Uczelnia Biznesu i Nauk Stosowanych \u201EVarsovia\u201D\nНедалеко Варшави Заходя';
  const address = "Al. Jerozolimskie 133A, 02-304 Warszawa";

  return (
    <Section className={cn(className)}>
      <div className="flex flex-col items-center space-y-3 text-center">
        <SectionHeader title={title} className="mb-4 text-blue-foreground" />
        <p className="text-lg text-blue-foreground/90 font-medium whitespace-pre-line">
          {description}
        </p>
        <Link
          href="https://maps.app.goo.gl/WarsawVarsovia"
          className="font-medium"
          icon
        >
          {address}
        </Link>
        <div className="w-full max-w-xl overflow-hidden rounded-lg shadow-md">
          {mapIframeSrc && (
            <iframe
              src={mapIframeSrc}
              className="w-full aspect-video border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта місця проведення"
            ></iframe>
          )}
        </div>
      </div>
    </Section>
  );
};
