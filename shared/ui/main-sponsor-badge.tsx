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
        "relative isolate inline-flex w-full max-w-xs flex-col items-center gap-2 overflow-visible rounded-[1.35rem] px-4 py-3 text-center text-current",
        className
      )}
    >
      <div
        aria-hidden="true"
        data-ui={mergeUi(uiId, "glow")}
        className={cn(
          "pointer-events-none absolute inset-[-18px] -z-10 rounded-[1.9rem] opacity-100 blur-2xl",
          inverse
            ? "bg-[radial-gradient(circle_at_16%_28%,rgba(255,196,223,0.42),transparent_30%),radial-gradient(circle_at_84%_22%,rgba(190,247,211,0.34),transparent_32%),radial-gradient(circle_at_50%_86%,rgba(178,209,255,0.3),transparent_38%)]"
            : "bg-[radial-gradient(circle_at_15%_28%,rgba(255,128,198,1),transparent_25%),radial-gradient(circle_at_85%_24%,rgba(173,255,118,0.94),transparent_28%),radial-gradient(circle_at_52%_88%,rgba(108,176,255,0.9),transparent_34%)]"
        )}
      />
      <div
        aria-hidden="true"
        data-ui={mergeUi(uiId, "glow-ring")}
        className={cn(
          "pointer-events-none absolute inset-[-6px] -z-10 rounded-[1.55rem] opacity-95 blur-md",
          inverse
            ? "bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,180,210,0.3),rgba(194,240,210,0.24),rgba(171,205,255,0.22),rgba(255,180,210,0.3))]"
            : "bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,122,193,0.78),rgba(179,255,126,0.66),rgba(114,180,255,0.62),rgba(255,122,193,0.78))]"
        )}
      />
      <div
        aria-hidden="true"
        data-ui={mergeUi(uiId, "panel")}
        className={cn(
          "absolute inset-0 -z-0 rounded-[1.35rem] border shadow-[0_12px_28px_rgba(57,85,0,0.08)]",
          inverse
            ? "border-white/20 bg-white/10"
            : "border-border-subtle bg-[#ffffffa8]"
        )}
      />
      <img
        data-ui={mergeUi(uiId, "logo")}
        src={inverse ? IMAGES.DNKA_WHITE : IMAGES.DNKA_BLACK}
        alt="DNKa"
        className="relative z-10 h-auto w-[150px] object-contain"
      />
      <p
        data-ui={mergeUi(uiId, "eyebrow")}
        className={cn(
          "relative z-10 text-xs font-semibold uppercase tracking-[0.18em]",
          inverse ? "text-white/75" : "text-text-muted"
        )}
      >
        Генеральний партнер фестивалю
      </p>
    </div>
  );
}
