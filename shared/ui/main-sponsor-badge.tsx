import { IMAGES } from "@/shared/config/const";
import { cn, mergeUi } from "@/shared/lib/utils";

type MainSponsorBadgeProps = {
  uiId?: string;
  inverse?: boolean;
  className?: string;
};

export function MainSponsorBadge({
  className,
  inverse = false,
  uiId = "main-sponsor-badge",
}: MainSponsorBadgeProps) {
  return (
    <div
      data-ui={mergeUi(uiId, "shell")}
      className={cn(
        "inline-flex w-full max-w-xs flex-col items-center gap-3 text-center text-current",
        className,
      )}
    >
      <img
        data-ui={mergeUi(uiId, "logo")}
        src={inverse ? IMAGES.DNKA_WHITE : IMAGES.DNKA_BLACK}
        alt="DNKa"
        width={100}
        height={65}
        className="h-[65px] w-[100px] object-contain"
      />
      <p
        data-ui={mergeUi(uiId, "eyebrow")}
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.18em]",
          inverse ? "text-white/75" : "text-text-muted",
        )}
      >
        Генеральний партнер фестивалю
      </p>
    </div>
  );
}
