import { FooterInfoSection } from "@/features/footer-info/ui/footer-info-section";
import { MasterKlassSection } from "@/features/master-class-hero/ui/master-klass-section";
import { MasterInfoSection } from "@/features/master-class-info/ui/master-info-section";
import { MasterBuySection } from "@/features/master-class-sales/ui/master-buy-section";
import { MasterSchedule } from "@/features/master-class-schedule/ui/master-schedule";
import { IMAGES } from "@/shared/config/const";
import { AccentCard } from "@/shared/ui/accent-card";
import { Image } from "@/shared/ui/image";
import { PageShell } from "@/shared/ui/layout/page-shell";

export function MasterClassPage() {
  return (
    <PageShell className="flex min-h-[100dvh] flex-col space-y-14 bg-blue-background md:space-y-28">
      <MasterKlassSection />
      <AccentCard title="" imageUrl={IMAGES.LEMON_URL}>
        <Image
          url="https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/img-5-hk2l7jPXRwcaBM3hKdBh9vqoUWjQSW.jpg"
          width={900}
          className="w-full"
          alt="image"
        />
        <p className="mx-auto max-w-md pt-2 text-center text-lg">
          Це справжній концентрат технічної користі, створений для тих, хто хоче
          вдосконалити свою роботу з матеріалами, зрозуміти помилки, поставити
          запитання та отримати відповіді на живо.
        </p>
      </AccentCard>
      <MasterInfoSection />
      <MasterSchedule />
      <MasterBuySection />
      <FooterInfoSection />
    </PageShell>
  );
}
