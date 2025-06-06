import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "@/blocks/ui/link";
import { Instagram, Send } from "lucide-react";
import { Section } from "@/blocks/ui/section";
import { INFO_URL } from "@/shared/const";

interface FooterInfoSectionProps {
  className?: string;
}

const companyName = "KATERYNA TARALA NAIL MOMENT";
const nip = "8943258555";
const privacyPolicyUrl = "/polityka";

export const FooterInfoSection: React.FC<FooterInfoSectionProps> = ({
  className,
}) => {
  return (
    <Section
      className={cn(
        "bg-white flex flex-col gap-10 rounded-t-2xl py-8 text-center",
        className
      )}
    >
      <div className="flex flex-col gap-1 justify-center items-center">
        <h3 className="text-xl font-semibold uppercase text-blue-foreground">
          ДАНІ КОМПАНІЇ
        </h3>
        <div className="text-base text-blue-foreground/90 space-y-0.5">
          <p>{companyName}</p>
          <p>NIP: {nip}</p>
          {/* REGON line removed */}
        </div>
      </div>

      <div className="flex flex-col gap-1 justify-center items-center">
        <h3 className="text-xl font-semibold uppercase text-blue-foreground ">
          КОНТАКТНА ТОЧКА
        </h3>
        <Link href={`mailto:${INFO_URL.EMAIL}`} icon>
          {INFO_URL.EMAIL}
        </Link>
      </div>

      <div className="flex flex-col gap-1 justify-center items-center">
        <h3 className="text-xl font-semibold uppercase text-blue-foreground">
          ВІДДІЛ ТУРБОТИ
        </h3>
        <p className="text-sm text-blue-foreground/90 ">
          Якщо виникли питання, пишіть на:
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <Link
            href={INFO_URL.INSTAGRAM}
            target="_blank"
            aria-label="Instagram"
          >
            <Instagram className="size-8 text-blue-foreground hover:opacity-80 transition-opacity" />
          </Link>
          <Link href={INFO_URL.TELEGRAM} target="_blank" aria-label="Telegram">
            <Send className="size-8 text-blue-foreground hover:opacity-80 transition-opacity" />
          </Link>
        </div>
      </div>

      <div className="text-sm text-blue-foreground/70 space-y-1">
        <p>
          <Link
            target="_self"
            href={privacyPolicyUrl}
            className="hover:underline"
          >
            Polityka prywatnosci
          </Link>
        </p>
        <p>©{new Date().getFullYear()} Всі права захищено</p>
      </div>
    </Section>
  );
};
