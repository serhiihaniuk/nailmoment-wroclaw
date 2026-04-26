import SuccessPage from "@/widgets/success-page/ui/success-page";
import { createPageMetadata } from "@/shared/config/seo";

export const metadata = createPageMetadata({
  title: "Квиток придбано",
  description: "Сторінка підтвердження покупки квитка Nail Moment.",
  path: "/success",
  robots: {
    index: false,
    follow: false,
  },
});

export default function Page() {
  return <SuccessPage />;
}
