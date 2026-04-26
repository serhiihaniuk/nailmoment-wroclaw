import PrivacyPage from "@/widgets/privacy-page/ui/privacy-page";
import { createPageMetadata } from "@/shared/config/seo";

export const metadata = createPageMetadata({
  title: "Polityka prywatności",
  description:
    "Polityka prywatności serwisu Nail Moment: informacje o administratorze danych, celach przetwarzania, odbiorcach danych i prawach użytkownika.",
  path: "/polityka",
});

export default function Page() {
  return <PrivacyPage />;
}
