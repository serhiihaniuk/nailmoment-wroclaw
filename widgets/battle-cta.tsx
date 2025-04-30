"use client";

import { Section } from "@/blocks/ui/section";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const battleOfMastersLink = "/battle";

export function BattleCTA() {
  const searchParams = useSearchParams();
  const showBattle = searchParams?.get("showBattle") === "true";

  if (!showBattle) return null;

  return (
    <Section className="text-center text-blue-foreground mt-5 space-y-4 bg-blue-foreground/10 py-4 flex flex-col items-center justify-center gap-1 mb-3">
      <SectionHeader title="🔥 Битва Майстрів!" className="p-0 m-0" />
      <p className="text-lg leading-relaxed max-w-sm mx-auto">
        Маєте хист до змагань? Після придбання цього квитка ви отримуєте
        ексклюзивну можливість взяти участь у конкурсі&nbsp;
        <strong>«Битва Майстрів»</strong>! Для участі необхідно додатково
        придбати окремий квиток конкурсанта.
      </p>

      <Button
        asChild
        className="text-yellow-foreground bg-yellow-background uppercase"
      >
        <Link href={battleOfMastersLink}>Дізнатися більше</Link>
      </Button>
    </Section>
  );
}
