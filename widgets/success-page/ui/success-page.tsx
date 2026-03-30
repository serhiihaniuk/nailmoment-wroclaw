import { SuccessSection } from "@/features/success/ui/success-section";
import { PageShell } from "@/shared/ui/layout/page-shell";

export default function SuccessPage() {
  return (
    <PageShell className="min-h-[100dvh]">
      <SuccessSection />
    </PageShell>
  );
}
