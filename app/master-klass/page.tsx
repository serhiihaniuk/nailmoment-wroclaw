import { MasterClassPage } from "@/widgets/master-class-page/ui/master-class-page";
import { createPageMetadata } from "@/shared/config/seo";

export const metadata = createPageMetadata({
  title: "Майстер-класи у Малому залі",
  description:
    "Майстер-класи від топових інструкторів та бренд-експертів у Малому залі Nail Moment у Варшаві.",
  path: "/master-klass",
});

export default function Page() {
  return <MasterClassPage />;
}
