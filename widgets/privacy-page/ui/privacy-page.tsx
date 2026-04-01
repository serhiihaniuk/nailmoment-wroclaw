import { PrivacyPolicySection } from "@/features/privacy-policy/ui/privacy-policy-section";
import { PageShell } from "@/shared/ui/layout/page-shell";

export default function PrivacyPage() {
  return (
    <PageShell className="min-h-[100dvh] theme-brown">
      <PrivacyPolicySection />
    </PageShell>
  );
}
