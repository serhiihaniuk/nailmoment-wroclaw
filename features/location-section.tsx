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
  mapIframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d744.6195886633093!2d17.03969065694884!3d51.115991692696234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9d955a31883%3A0xe8473c13af04dfb3!2sConcordia%20Design%20Wroc%C5%82aw%20I%20Wynajem%20biur%20I%20Centrum%20Konferencyjno%20-%20Eventowe!5e0!3m2!1spl!2spl!4v1745597368362!5m2!1spl!2spl",
}) => {
  const title = "Місце проведення";
  const description =
    "Concordia Design Wrocław на Wyspa Słodowej\nу центрі міста Вроцлав (біля Старого міста)";
  const address = "Wyspa Słodowa 7, 50-266 Wrocław";

  return (
    <Section className={cn(className)}>
      <div className="flex flex-col items-center space-y-3 text-center">
        <SectionHeader title={title} className="mb-4 text-blue-foreground" />
        <p className="text-lg text-blue-foreground/90 font-medium whitespace-pre-line">
          {description}
        </p>
        <Link
          href="https://maps.app.goo.gl/vTADxtWByJw4j6Gd6"
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
