import { IMAGES } from "@/shared/config/const";
import { cn, mergeUi } from "@/shared/lib/utils";
import { TypographyTitle } from "@/shared/ui/typography";

type CompetitionPrizeBannerProps = {
  title: string;
  uiId?: string;
  className?: string;
};

export function CompetitionPrizeBanner({
  className,
  title,
  uiId = "competition-prize-banner",
}: CompetitionPrizeBannerProps) {
  return (
    <div
      data-ui={mergeUi(uiId, "shell")}
      className={cn(
        "relative w-full self-stretch overflow-hidden rounded-[1.4rem] px-4 py-4 md:px-10 md:py-6",
        className
      )}
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

      <div
        data-ui={mergeUi(uiId, "content")}
        className="relative z-20 flex min-h-24 w-full flex-col items-center justify-center gap-2 py-4 text-center md:min-h-36 md:gap-3"
      >
        <TypographyTitle
          as="p"
          uiId={mergeUi(uiId, "title")}
          order="order2"
          tone="accent"
          align="center"
          className="w-full normal-case leading-[0.95]"
        >
          {title}
        </TypographyTitle>
        <TypographyTitle
          as="p"
          uiId={mergeUi(uiId, "subtitle")}
          order="order2"
          tone="accent"
          align="center"
          className="w-full normal-case leading-[0.98]"
        >
          від партнера конкурсу XNail
        </TypographyTitle>
        <img
          data-ui={mergeUi(uiId, "partner-logo")}
          src={IMAGES.XNAIL_BLACK}
          alt="XNAIL"
          className="h-auto w-[150px] object-contain"
        />
      </div>
    </div>
  );
}
