import BattleSuccessPage from "@/widgets/battle-success-page/ui/battle-success-page";
import { createPageMetadata } from "@/shared/config/seo";

export const metadata = createPageMetadata({
  title: "Заявку на конкурс отримано",
  description: "Сторінка підтвердження заявки на конкурс «Битва Майстрів».",
  path: "/battle/success",
  robots: {
    index: false,
    follow: false,
  },
});

export default function Page() {
  return <BattleSuccessPage />;
}
