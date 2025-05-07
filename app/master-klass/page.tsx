import { AccentCard } from "@/blocks/ui/accent-card";
import { Image } from "@/components/ui/image";
import { FooterInfoSection } from "@/features/footer-info-section";
import { MasterBuySection } from "@/features/master-klass/master-buy-section";
import { MasterInfoSection } from "@/features/master-klass/master-info-section";
import { MasterKlassSection } from "@/features/master-klass/master-klass-section";
import { MasterSchedule } from "@/features/master-klass/master-schedule";
import { IMAGES } from "@/shared/const";

export default function Home() {
  return (
    <main className="w-full max-w-4xl shadow-2xl overflow-hidden space-y-14 mx-auto bg-blue-background md:space-y-28 grow min-h-[100dvh] flex flex-col">
      <MasterKlassSection />
      <AccentCard title="" imageUrl={IMAGES.LEMON_URL}>
        <Image
          url="https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/img-5-hk2l7jPXRwcaBM3hKdBh9vqoUWjQSW.jpg"
          width={900}
          className="w-full"
          alt="image"
        />
        <p className="max-w-md mx-auto text-center text-lg pt-2">
          Це справжній концентрат технічної користі, створений для тих, хто хоче
          вдосконалити свою роботу з матеріалами, зрозуміти помилки, поставити
          запитання та отримати відповіді на живо.
        </p>
      </AccentCard>
      <MasterInfoSection />
      <MasterSchedule />
      <MasterBuySection />
      <FooterInfoSection />
    </main>
  );
}
