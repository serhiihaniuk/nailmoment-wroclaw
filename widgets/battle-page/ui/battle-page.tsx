import { BattleFaqSection } from "@/features/battle-faq/ui/battle-faq-section";
import { BattleSection } from "@/features/battle-hero/ui/battle-section";
import { BattleInfoSection } from "@/features/battle-info/ui/battle-info-section";
import { CriteriaSection } from "@/features/battle-criteria/ui/criteria-section";
import { FooterInfoSection } from "@/features/footer-info/ui/footer-info-section";
import { PageShell } from "@/shared/ui/layout/page-shell";

export function BattlePage() {
  return (
    <PageShell className="flex min-h-[100dvh] flex-col space-y-14 bg-blue-background md:space-y-28">
      <BattleSection />
      <BattleInfoSection />
      <CriteriaSection />
      <BattleFaqSection />
      <FooterInfoSection />
    </PageShell>
  );
}
