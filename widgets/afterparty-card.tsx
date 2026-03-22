import React from "react";
import { Image } from "@/components/ui/image";
import { AccentCard } from "@/blocks/ui/accent-card";
import { IMAGES } from "@/shared/const";

export const AfterpartyCard = () => {
  return (
    <AccentCard
      title={
        <span className="font-semibold text-2xl flex flex-col">
          Afterparty на даху
        </span>
      }
      className="[&_.ac-content]:px-4 slide-in-view"
      imageUrl={IMAGES.HERO_LOGO_1}
    >
      <>
        <p>
          це буде спекотний літній вечір, в якому ти зможеш відпочити від
          насичених подій, від роботи та потусуватися в двіжухі на даху з
          НЕЙМОВІРНИМ краєвидом на цілу Варшаву
        </p>
        <Image
          url={IMAGES.WARSAW_PHOTO}
          className="w-full"
          width={900}
          alt="Warsaw location"
        />
      </>
    </AccentCard>
  );
};
