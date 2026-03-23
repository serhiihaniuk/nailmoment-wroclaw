import { BuyTicketButton } from "@/entities/ticket/ui/buy-ticket-button";
import { Section } from "@/shared/ui/layout/section";
import { SpeakerScheduleCard } from "@/entities/speaker/ui/speaker-schedule-card";
import { shadowImageUrl } from "@/shared/config/const";

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
      <div className="space-y-2">
        <p>
          Інструктор і експертка у сфері нігтьового сервісу, діючий інструктор{" "}
          <b>JZ Nails Group.</b>
        </p>
        <p>
          Авторка програми наставництва, що базується на техніках коучингу та
          психології.
        </p>
        <p>
          «Моя мета — не лише вдосконалення технічних навичок, а й допомога
          майстрам у розкритті потенціалу через роботу з мисленням і внутрішніми
          установками»
        </p>
      </div>
    ),
    logo: PARTNER_LOGO_URL.JZ,
    logoSize: {
      w: 150,
    },
  },
  {
    id: 2,
    imageUrl: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/speakers/anna_petrenko.jpg",
    imageAlt: "Анна Петренко",
    name: "Анна Петренко",
    time: "11:00",
    topic: "Швидкісне укріплення Builder gel Edlen і обʼємний дизайн. Як поєднати носибельність і мистецтво?",
    description: (
      <div className="space-y-2">
        <p>
          📚 60+ перекладених наукових книг про гелі, лампи, полімери
        </p>
        <p>
          🧪 Може ночами читати дослідження, щоб знайти відповідь на питання, чому база жовтіє або як діоди впливають на гель
        </p>
        <p>
          👩‍🔬 Протестила майже ВСІ ГЕЛІ на ринку — і знає, який справді працює
        </p>
        <p>
          📲 Блогер із характером — пояснює складне просто, а нудне робить захопливим
        </p>
      </div>
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
    imageUrl:
      "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/speakers/lora-kIQzxc3GJCQGoEHwokQBQrkkly15kl.jpg",
    imageAlt: "Лора Шейдерова",
    name: "Лора Шейдерова",
    time: "13:00",
    topic: "Робота з верхніми формами LUNAmoon та Premium gel",
    description: (
      <div>
        <p>
          Для мене верхні форми — це не просто «шльопнути». Це сучасний
          інструмент, який відкриває зовсім інші можливості:
        </p>
        <ul>
          <li>швидкість</li>
          <li>точність архітектури</li>
          <li>зменшення опилу</li>
          <li>ідеальна симетрія навіть у найпроблемніших нігтях.</li>
        </ul>
      </div>
    ),
    logo: PARTNER_LOGO_URL.LUNA,
  },
];

export const MasterSchedule = () => {
  return (
    <Section>
      <h3 className="gradient-orange flex flex-col gap-1 max-w-md font-bold mx-auto text-center mb-6 py-2 text-2xl text-shadow-md px-4 rounded-xl text-white">
        РОЗКЛАД МАЙСТЕР-КЛАСІВ{" "}
        <span className="font-bold text-3xl">10:00 – 14:00</span>
      </h3>
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
