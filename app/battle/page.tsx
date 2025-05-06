import { BattleFaqSection } from "@/features/battle/battle-faq-section";
import { BattleInfoSection } from "@/features/battle/battle-info-section";
import { BattleSection } from "@/features/battle/battle-section";
import { CriteriaSection } from "@/features/battle/criteria-section";
import { FooterInfoSection } from "@/features/footer-info-section";

export default function Home() {
  return (
    <main className="w-full max-w-4xl shadow-2xl overflow-hidden space-y-14 mx-auto bg-blue-background md:space-y-28 min-h-[100dvh] flex flex-col">
      <BattleSection />
      <BattleInfoSection />
      <CriteriaSection />
      <BattleFaqSection />
      <FooterInfoSection />
    </main>
  );
}
