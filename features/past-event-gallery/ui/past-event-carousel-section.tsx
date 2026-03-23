import { Section } from "@/shared/ui/layout/section";
import { Stack } from "@/shared/ui/layout/stack";
import { ImageCarousel } from "@/shared/ui/image-carousel";
import { SectionHeader } from "@/shared/ui/section-header";

const carouselImages = [
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/0978-min-Hp3AvzD2KoZbm9P8xDzVhBc80AV7Vb.JPG",
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/1121-min-uL3kucDKRjU6wzuiLrzCgt4hI5SBGq.JPG",
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/IMG_6971-min-uZfUdvtd0t2dOhfhppu2kCFRhay46a.JPG",
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/IMG_6972-min-N8r2jK2ptxExL47vRnwvxoQBPpxgAQ.JPG",
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/IMG_6974-min-lkkVzskm5wghgRkvJxEjKWhfbFxLFm.JPG",
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/IMG_6975-min-OMSaJ0ocB4YLNW4bjBRUIyKaJo9LkI.JPG",
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/IMG_6976-min-jdf35S1Zmw7HPPATGFxuxMUTasZjIq.JPG",
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/IMG_6977-min-r49SsQvFHtpODuM5S1HDoeQ7Dqprd8.JPG",
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/IMG_6978-min-sWo7fhk0Mq7sHzEY26p3TeRQPP97rA.JPG",
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/IMG_6979-min-rPoySzXao8uGcJRaQx9kJ4hcbqbOy8.JPG",
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/IMG_6980-min-LWHVKRALhGnVRK9JA5SMLvhhvn2loa.JPG",
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/IMG_6981-min-sxnHWM1yEPK4JlfGF0xGqrOkO07gqI.JPG",
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/IMG_6982-min-pvWcaE05o1bdLdC47QBtr4diM42rnB.JPG",
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/IMG_6983-min-kfpedzdaAUrTGaLjS7eLWDNMNcuLTz.JPG",
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/IMG_6984-min-sauJwj3eKLqXtljlpfg5Ms2LeMjqoN.JPG",
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/IMG_6985-min-FcQYgsBsScink6ovTRx7RD8fxst9Fv.JPG",
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/IMG_6986-min-IL2DgbCL15xVjxajTtEgHWqIP8g83p.JPG",
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/IMG_6987-min-tAcSvMHNfmApMTVqNp196LopfzyQH2.JPG",
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/IMG_6988-min-SL1eEmHL77I4UtVkXUJHmYGBicK6kM.JPG",
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/IMG_6989-min-haYeF7ZpXTXXuqFyQewLbb8PUcIHB5.JPG",
  "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/prev-event/IMG_6990-min-r2dSLZZQvDug7nEa0NfnaXt7vQSW4Q.JPG",
];

type PastEventCarouselSectionProps = {
  className?: string;
};

export function PastEventCarouselSection({
  className,
}: PastEventCarouselSectionProps) {
  return (
    <Section density="compact" className={className}>
      <Stack gap="lg" className="items-center">
        <SectionHeader
          title="Як це було на попередніх фестивалях"
          description="Кадри з атмосфери, нетворкінгу, виступів та маркету, заради яких люди повертаються на Nail Moment."
        />
        <ImageCarousel images={carouselImages} imageAlt="Past event photo" />
      </Stack>
    </Section>
  );
}
