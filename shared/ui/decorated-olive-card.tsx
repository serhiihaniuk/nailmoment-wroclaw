import * as React from "react";
import { Card } from "@/shared/ui/card";
import { DecorativeImage } from "@/shared/ui/decorative-image";
import { IMAGES } from "@/shared/config/const";
import { cn, mergeUi } from "@/shared/lib/utils";

type LeafLayout = "default" | "compact" | "hero" | "footer" | "none";

const leafLayoutClasses: Record<
  Exclude<LeafLayout, "none">,
  { left: string; right: string }
> = {
  default: {
    left: "-left-5 top-8 h-40 w-52",
    right: "-right-10 bottom-6 h-44 w-44",
  },
  compact: {
    left: "-left-6 top-6 h-28 w-36",
    right: "-right-6 bottom-3 h-32 w-32",
  },
  hero: {
    left: "-left-8 top-2 h-44 w-40",
    right: "-right-8 -top-16 h-[19rem] w-[15rem]",
  },
  footer: {
    left: "-left-5 top-10 h-40 w-52",
    right: "-right-12 top-64 h-60 w-44",
  },
};

type DecoratedOliveCardProps = React.ComponentProps<"div"> & {
  uiId?: string;
  contentClassName?: string;
  patternOpacityClassName?: string;
  leafLayout?: LeafLayout;
  leftLeafSrc?: string;
  rightLeafSrc?: string;
};

export function DecoratedOliveCard({
  children,
  className,
  contentClassName,
  leafLayout = "default",
  leftLeafSrc = IMAGES.DECORATIVE_LEAF_7,
  patternOpacityClassName = "opacity-5",
  rightLeafSrc = IMAGES.DECORATIVE_LEAF_1,
  uiId,
  ...props
}: DecoratedOliveCardProps) {
  const layout = leafLayout === "none" ? null : leafLayoutClasses[leafLayout];

  return (
    <Card
      uiId={uiId}
      surface="accent"
      spacing="none"
      className={cn("relative isolate overflow-hidden border-transparent", className)}
      {...props}
    >
      <img
        data-ui={mergeUi(uiId, "background")}
        src={IMAGES.DECORATIVE_BG_1}
        alt=""
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 z-0 h-full w-full object-cover",
          patternOpacityClassName
        )}
      />
      {layout ? (
        <>
          <DecorativeImage
            uiId={mergeUi(uiId, "leaf-left")}
            src={leftLeafSrc}
            className={cn("z-0", layout.left)}
          />
          <DecorativeImage
            uiId={mergeUi(uiId, "leaf-right")}
            src={rightLeafSrc}
            className={cn("z-0", layout.right)}
          />
        </>
      ) : null}
      <div
        data-ui={mergeUi(uiId, "content")}
        className={cn("relative z-[1]", contentClassName)}
      >
        {children}
      </div>
    </Card>
  );
}
