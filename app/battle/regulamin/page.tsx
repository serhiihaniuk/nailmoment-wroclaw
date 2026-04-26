import BattleRulesPage from "@/widgets/battle-rules-page/ui/battle-rules-page";
import { createPageMetadata } from "@/shared/config/seo";

export const metadata = createPageMetadata({
  title: "Умови участі у конкурсі «Битва Майстрів»",
  description:
    "Актуальний регламент конкурсу «Битва Майстрів»: правила участі, етапи, вимоги до робіт, фінальний тур і призи.",
  path: "/battle/regulamin",
});

export default function Page() {
  return <BattleRulesPage />;
}
