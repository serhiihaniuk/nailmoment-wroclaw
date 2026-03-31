import { BattleSuccessSection } from "@/features/battle-success/ui/battle-success-section";
import { PageShell } from "@/shared/ui/layout/page-shell";

export default function BattleSuccessPage() {
  return (
    <PageShell className="min-h-[100dvh] text-brand-brown">
      <BattleSuccessSection />
    </PageShell>
  );
}
