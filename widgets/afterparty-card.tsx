import React from "react";
import { Image } from "@/components/ui/image";
import { AccentCard } from "@/blocks/ui/accent-card";
import { IMAGES } from "@/shared/const";

export const AfterpartyCard = () => {
  return (
    <AccentCard
      title={
        <span className="font-semibold text-2xl flex flex-col">
          Afterparty на терасі
        </span>
      }
      className="[&_.ac-content]:px-4"
      imageUrl={IMAGES.LIME_URL}
    >
      <>
        <p>
          це буде спекотний літній вечір, в якому ти зможеш відпочити від
          насичених подій, від роботи та потусуватися в двіжухі на терасі з
          НЕЙМОВІРНИМ краєвидом на цілий Вроцлав
        </p>
        <Image
          url="https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/placeholder-img-C7NSLnrtqDD9dUPfNxOqAZKQC3CEOT"
          className="w-full"
          alt="Concordia Design Wrocław location"
        />
      </>
    </AccentCard>
  );
};
