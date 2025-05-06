import { Section } from "@/blocks/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import Image from "next/image"; // Import Next.js Image component

const images = {
  n1: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/nails/n1-hFuSrP2kac5NPVHGhnDggxN9AUksTw.jpg", // Long blue (Extra Length)
  n2: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/nails/n2-RlnJfo5lmKAWPS70QyOiu2Rk4E8h7i.jpg", // Teal (Solid Color)
  n3: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/nails/n3-RYvDpnKhqAS2nFULlymSxqZS3f1NkE.jpg", // Pink/Green Neon (Neon)
  n4: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/nails/n4-aNJOfZ6JCQa6N3RTOPEXS452M6mse2.jpg", // Light blue/white 3D (3D/Korean)
  n5: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/nails/n5-1PdOyhwwxRnsvFyyi1vchTE2GeJqlY.jpg", // Orange/blue gradient (Gradient)
  n6: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/images/nails/n6-07STkcqyAFGfns5IT9CoBJO5gjqsLo.jpg", // Classic French (French)
};

const NOMINATIONS_DATA = [
  { id: 1, title: "Французький манікюр", imageUrl: images.n6 },
  { id: 2, title: "Градієнт", imageUrl: images.n5 },
  { id: 3, title: "3D / корейський дизайн", imageUrl: images.n4 },
  { id: 4, title: "Неоновий манікюр", imageUrl: images.n3 },
  { id: 5, title: "Однотонний манікюр", imageUrl: images.n2 },
  { id: 6, title: "Екстра довжина", imageUrl: images.n1 },
];

const FIRST_ROUND_CRITERIA_DATA = [
  <span key={1}>
    Робота має відповідати <span className="font-bold">номінації</span>
  </span>,
  "Робота має бути чистою, акуратною і красивою",
  "Фото мають бути чіткі та високої якості",
];

const FINAL_ROUND_CRITERIA_DATA = [
  "БЕЗ НОМІНАЦІЙ та рамок, тільки твоя фантазія!",
  "Роби на нігтях що хочеш, підготуйся та прояви максимум креативу.",
  "Має бути фото ДО, ПІСЛЯ, колаж з ДО та ПІСЛЯ, а також короткий відеоролик роботи (до 15 секунд).",
];
// ---------------------------------

const SECTION_HEADINGS = {
  NOMINATIONS_TITLE: "Номінації у відбірковому турі",
  FIRST_ROUND_CRITERIA_TITLE: "Критерії відбору робіт у першому турі",
  FINAL_ROUND_CRITERIA_TITLE: "Критерії відбору робіт у фінальному турі",
};

export const CriteriaSection = () => {
  return (
    <Section className="relative">
      <SectionHeader
        title={SECTION_HEADINGS.NOMINATIONS_TITLE}
        className="mb-10 md:mb-12 text-center text-blue-foreground"
      />
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10 mb-12 md:mb-16">
        {NOMINATIONS_DATA.map((nomination) => (
          <div
            key={nomination.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl"
          >
            <div className="w-full">
              <Image
                src={nomination.imageUrl}
                alt={nomination.title}
                width={640}
                height={640}
                className="rounded-t-xl object-cover w-full h-auto aspect-square transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 text-center bg-white rounded-b-xl">
              <p className="text-sm font-semibold text-blue-foreground">
                {nomination.id}. {nomination.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <SectionHeader
        title={SECTION_HEADINGS.FIRST_ROUND_CRITERIA_TITLE}
        className="mb-8 md:mb-10 text-center text-blue-foreground"
      />
      <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg border border-gray-200/50">
        <ul className="space-y-3 text-blue-foreground">
          {FIRST_ROUND_CRITERIA_DATA.map((criterion, index) => (
            <li key={index} className="flex items-start text-sm md:text-base">
              <span
                className="flex-shrink-0 flex items-center justify-center mr-3 size-6 
                           bg-gradient-to-br from-yellow-400 to-orange-500 
                           text-white font-semibold text-xs rounded-full shadow-sm"
              >
                {index + 1}
              </span>
              <span>{criterion}</span>
            </li>
          ))}
        </ul>
      </div>
      <SectionHeader
        title={SECTION_HEADINGS.FINAL_ROUND_CRITERIA_TITLE}
        className="mb-8 md:mb-10 mt-10 text-center text-blue-foreground"
      />

      <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg border border-gray-200/50">
        <ul className="space-y-3 text-blue-foreground">
          {FINAL_ROUND_CRITERIA_DATA.map((criterion, index) => (
            <li key={index} className="flex items-start text-sm md:text-base">
              <span
                className="flex-shrink-0 flex items-center justify-center mr-3 size-6 
                           bg-gradient-to-br from-yellow-400 to-orange-500 
                           text-white font-semibold text-xs rounded-full shadow-sm"
              >
                {index + 1}
              </span>
              <span>{criterion}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
