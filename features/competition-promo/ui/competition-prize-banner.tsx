import { IMAGES } from "@/shared/config/const";
import { mergeUi } from "@/shared/lib/utils";
import { TypographyTitle } from "@/shared/ui/typography";

type CompetitionPrizeBannerProps = {
  title: string;
  subtitle: string;
  uiId?: string;
};

export function CompetitionPrizeBanner({
  subtitle,
  title,
  uiId = "competition-prize-banner",
}: CompetitionPrizeBannerProps) {
  return (
    <div
      data-ui={mergeUi(uiId, "shell")}
      className="relative w-full self-stretch overflow-hidden rounded-[1.4rem] px-4 py-4 md:px-10 md:py-6"
      style={{
        background:
          "linear-gradient(115deg, #edc12b 0%, #fff8ad 34%, #f0d04e 64%, #dc9d25 100%)",
      }}
    >
      <div
        aria-hidden="true"
        data-ui={mergeUi(uiId, "highlight")}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_48%_14%,rgba(255,255,255,0.65),transparent_32%),radial-gradient(circle_at_50%_75%,rgba(255,255,255,0.18),transparent_42%)]"
      />
      <img
        data-ui={mergeUi(uiId, "left", "stack")}
        src={IMAGES.MONEY_STACK}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 z-10 h-24 w-auto -translate-x-[18%] -translate-y-1/2 scale-x-[-1] mix-blend-multiply saturate-[1.5] sepia-[0.85] hue-rotate-[350deg] brightness-[1.02] contrast-[1.02] sm:h-28 sm:-translate-x-[14%] md:h-34 md:-translate-x-[10%] lg:h-44"
      />
      <img
        data-ui={mergeUi(uiId, "right", "stack")}
        src={IMAGES.MONEY_STACK}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 z-10 h-24 w-auto translate-x-[18%] -translate-y-1/2 mix-blend-multiply saturate-[1.5] sepia-[0.85] hue-rotate-[350deg] brightness-[1.02] contrast-[1.02] sm:h-28 sm:translate-x-[14%] md:h-34 md:translate-x-[10%] lg:h-44"
      />

      <div
        data-ui={mergeUi(uiId, "content")}
        className="relative z-20 flex min-h-24 w-full flex-col items-center justify-center gap-2 text-center md:min-h-36 md:gap-3"
      >
        <TypographyTitle
          as="p"
          uiId={mergeUi(uiId, "title")}
          tone="accent"
          align="center"
          className="w-full font-black normal-case text-brand-brown text-[clamp(1.35rem,3vw,2.35rem)] leading-[0.95]"
        >
          {title}
        </TypographyTitle>
        <TypographyTitle
          as="p"
          uiId={mergeUi(uiId, "subtitle")}
          tone="accent"
          align="center"
          className="w-full font-black normal-case text-brand-brown text-[clamp(1.2rem,2.6vw,2.15rem)] leading-[0.98]"
        >
          {subtitle}
        </TypographyTitle>
      </div>
    </div>
  );
}
