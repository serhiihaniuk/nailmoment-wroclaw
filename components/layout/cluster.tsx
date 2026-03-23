import { cn, mergeUi } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

const clusterVariants = cva("flex flex-wrap items-center", {
  variants: {
    gap: {
      xs: "gap-2",
      sm: "gap-3",
      default: "gap-4",
      lg: "gap-6",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      between: "justify-between",
    },
  },
  defaultVariants: {
    gap: "default",
    justify: "start",
  },
});

type ClusterProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof clusterVariants> & {
    uiId?: string;
  };

export function Cluster({
  className,
  gap,
  justify,
  uiId,
  ...props
}: ClusterProps) {
  return (
    <div
      data-ui={mergeUi(uiId ?? "cluster")}
      className={cn(clusterVariants({ gap, justify }), className)}
      {...props}
    />
  );
}
