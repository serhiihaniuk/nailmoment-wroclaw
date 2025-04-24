import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="flex items-center justify-center flex-col px-2 pt-28 pb-11">
      <div className="grid grid-cols-2 gap-2 mb-5">
        <Badge>20 липня</Badge>
        <Badge>Вроцлав</Badge>
      </div>
      <h1 className="flex flex-col gap-7 text-center items-center justify-center mb-8">
        <span className="uppercase text-[26px] text-blue-foreground font-semibold leading-[120%]">
          Головний nail-фестиваль Польщі
        </span>
        <span className="text-[56px] flex gap-3.5 flex-col items-center justify-center text-white font-extrabold leading-12">
          <span className="bg-accent-orange block rounded-[10px] py-2 px-3.5">
            NAIL
          </span>
          <span>MOMENT</span>
        </span>
      </h1>

      <Button className="uppercase self-stretch text-yellow-foreground bg-yellow-background">
        Придбати квиток
      </Button>

      <div className="grid grid-cols-2 gap-2 pt-2.5">
        <Button variant="secondary" className="text-blue-foreground" size="sm">
          Конкурс «Битва Майстрів»
        </Button>
        <Button className="text-blue-foreground" variant="secondary" size="sm">
          Народний Спікер
        </Button>
      </div>
    </section>
  );
};
