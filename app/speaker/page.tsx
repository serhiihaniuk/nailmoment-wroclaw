import { PeopleSpeakerPage } from "@/widgets/people-speaker-page/ui/people-speaker-page";
import { createPageMetadata } from "@/shared/config/seo";

export const metadata = createPageMetadata({
  title: "Народний спікер 2026",
  description:
    "Конкурс «Народний спікер» завершено. Переможниця 2026 — Маріна Морозівська, яка виступить на сцені Nail Moment у Варшаві.",
  path: "/speaker",
});

export default function Page() {
  return <PeopleSpeakerPage />;
}
