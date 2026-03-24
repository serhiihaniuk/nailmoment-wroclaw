import { BattleRulesSection } from "@/features/battle-rules/ui/battle-rules-section";
import { PageShell } from "@/shared/ui/layout/page-shell";

export default function BattleRulesPage() {
  return (
    <PageShell className="min-h-[100dvh]">
      <BattleRulesSection />
    </PageShell>
  );
}
