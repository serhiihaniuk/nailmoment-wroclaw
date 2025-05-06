import { Section } from "@/blocks/ui/section";
import { Badge } from "@/components/ui/badge";
import { DecorativeImage } from "@/components/ui/decorative-image";
import { IMAGES } from "@/shared/const";
import { MomentIcon, NailIcon } from "@/shared/icons";

export const BattleSection = () => {
  return (
    <Section className="flex grow relative items-center justify-center flex-col pt-28">
      <DecorativeImage
        src={IMAGES.ORANGES_URL}
        className="-left-14 -top-5 md:-left-6 md:-top-5 rotate-[30deg] size-[200px] z-0"
      />
      <DecorativeImage
        src={IMAGES.LEMONS_URL}
        className="-right-8 md:-right-2 -top-8 size-[180px]"
      />
      <div className="grid grid-cols-2 gap-2 mb-5 relative z-1">
        <Badge>27 липня</Badge>
        <Badge>Вроцлав</Badge>
      </div>
      <h1 className="flex flex-col gap-7 text-center items-center justify-center mb-8">
        <span className="flex w-[358px] h-[117px] gap-3.5 flex-col items-center justify-center">
          <NailIcon />
          <span className="relative block">
            <MomentIcon />
            <img
              src={IMAGES.LEMON_URL}
              alt="O"
              className="absolute left-[67px] top-[-12px] size-[62px] object-cover inline-block"
            />
          </span>
        </span>
      </h1>
      <h2 className="uppercase my-10 text-[36px] text-blue-foreground font-semibold leading-[120%]">
        Конкурс «Битва Майстрів»
      </h2>
      <p className="text-center max-w-md items-center flex flex-col justify-center text-white bg-accent-pink p-10 rounded-lg font-semibold text-lg">
        <img
          src={IMAGES.FINGER_URL}
          alt="Finger pointing up"
          className="w-18 block mb-10"
        />
        «Битва Майстрів» — це унікальний конкурс для майстрів манікюру, де
        головними критеріями є твоя креативність, професіоналізм та результат.
        Жодних строгих технік, відомих суддів чи жорстких таймінгів❗️
        <br />
        Оцінювати роботи будуть самі майстри! Конкурс в якому майстер може
        заробити 2000 зл та забрати кубок переможця «Битви Майстрів»🏆
        <br />
      </p>
    </Section>
  );
};
