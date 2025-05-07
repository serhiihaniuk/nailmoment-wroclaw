import { BuyTicketButton } from "@/blocks/ui/buy-ticket";
import { Section } from "@/blocks/ui/section";
import { SpeakerScheduleCard } from "@/blocks/ui/speaker-schedule-card";
import { SectionHeader } from "@/components/ui/section-header";
import { shadowImageUrl } from "@/shared/const";

const PARTNER_LOGO_URL = {
  DNKA: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/partners-logo/dnka-elaL7GNGeHjbZeM3REUXOUomQAINON.png",
  EDLEN:
    "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/partners-logo/elden-3LnfjHFXYtYTaE96P6HrDSV8zWrp5E.png",
  JZ: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/partners-logo/jz-sZ57HGRTtTFNtFoNbSa7i870bCnZxb.png",
  LUNA: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/partners-logo/luna-black-jod9iRG6CybaeQnbWLcFA83x9RniRY.png",
};

const speakers = [
  {
    id: 1,
    imageUrl:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/speakers/boyko-vns7bfpEshQeyLLESGruZZGEVZUOgv.JPG",
    imageAlt: "Аліна Бойко",
    name: "Аліна Бойко",
    time: "10:00",
    topic: "Зміцнення нігтів. Комбо - гель желе та бази",
    description: (
      <p>
        інструктор <b>JZ NAILS GROUP</b> м.Цешин
      </p>
    ),
    logo: PARTNER_LOGO_URL.JZ,
    logoSize: {
      w: 150,
    },
  },
  {
    id: 2,
    imageUrl: shadowImageUrl,
    imageAlt: "Спікер від бренду EDLEN",
    name: "Спікер від бренду EDLEN",
    time: "11:00",
    topic: "Coming soon..",
    description: (
      <p>
        Спікер від бренду <b>EDLEN</b>
      </p>
    ),
    logo: PARTNER_LOGO_URL.EDLEN,
  },
  {
    id: 3,
    imageUrl:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/speakers/dnk-F5Cvz29KcEzzOIYGjlA12RTfiglUHq.jpg",
    imageAlt: "Катерина Біляєва",
    name: "Катерина Біляєва",
    time: "12:00",
    topic: "3D дизайн в моделюванні та укріплені нігтів.",
    description: (
      <div className="pt-2">
        <p>
          Директор навчального відділу та головний технолог бренду{" "}
          <strong>DNKa’</strong>.
        </p>
        <p>
          Вона створює системи, які змінюють ринок. Навчає експертів не просто
          викладати, а <strong>вести за собою</strong>.
        </p>
        <p>Будує освітні моделі, з яких народжуються особисті бренди.</p>
        <p>
          Її місія — підняти nail-індустрію до рівня справжньої професії з ім’ям
          та авторитетом.
        </p>
      </div>
    ),
    logo: PARTNER_LOGO_URL.DNKA,
  },
  {
    id: 4,
    imageUrl: shadowImageUrl,
    imageAlt: "Лора Шейдерова",
    name: "Лора Шейдерова",
    time: "13:00",
    topic: "Робота з верхніми формами LUNAmoon та Premium gel",
    description: <p></p>,
    logo: PARTNER_LOGO_URL.LUNA,
  },
];

export const MasterSchedule = () => {
  return (
    <Section>
      <SectionHeader
        title="РОЗКЛАД МАЙСТЕР-КЛАСІВ (10:00 – 14:00)"
        className="mb-4"
      />
      <div className="flex flex-col items-center gap-4 md:gap-12">
        {speakers.map((speaker) => (
          <SpeakerScheduleCard
            key={speaker.id}
            imageUrl={speaker.imageUrl}
            imageAlt={speaker.imageAlt}
            time={speaker.time}
            name={speaker.name}
            topic={speaker.topic}
            logo={speaker.logo}
            logoSize={speaker.logoSize}
            description={speaker.description} // Pass the JSX description
          />
        ))}
      </div>

      <BuyTicketButton className="my-10 max-w-md mx-auto" />
    </Section>
  );
};
