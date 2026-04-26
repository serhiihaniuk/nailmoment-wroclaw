import { BattlePage } from "@/widgets/battle-page/ui/battle-page";
import { createPageMetadata } from "@/shared/config/seo";

export const metadata = createPageMetadata({
  title: "Битва Майстрів 2026",
  description:
    "Конкурс для майстрів манікюру у рамках Nail Moment: номінації, онлайн-відбір, фінал у Варшаві та головний приз 2000 zł.",
  path: "/battle",
});

export default function Page() {
  return <BattlePage />;
}
