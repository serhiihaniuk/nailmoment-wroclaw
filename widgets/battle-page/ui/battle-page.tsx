import { BattleFaqSection } from "@/features/battle-faq/ui/battle-faq-section";
import { BattleSection } from "@/features/battle-hero/ui/battle-section";
import { BattleInfoSection } from "@/features/battle-info/ui/battle-info-section";
import { FooterInfoSection } from "@/features/footer-info/ui/footer-info-section";
import { PageShell } from "@/shared/ui/layout/page-shell";

export function BattlePage() {
  return (
    <PageShell className="theme-brown">
      <BattleSection />
      <BattleInfoSection />
      <BattleFaqSection />
      <FooterInfoSection />
    </PageShell>
  );
}
