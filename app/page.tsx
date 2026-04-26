import { HomePage } from "@/widgets/home-page/ui/home-page";
import { createPageMetadata } from "@/shared/config/seo";

export const revalidate = 900;

export const metadata = createPageMetadata({
  title: "Nail Moment 2026 | Nail-фестиваль у Варшаві",
  description:
    "Головний nail-фестиваль Польщі для майстрів манікюру: спікери, nail-маркет, нетворкінг, конкурси та квитки на подію 7 червня у Варшаві.",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
