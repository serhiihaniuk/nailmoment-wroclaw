import { cn, mergeUi } from "@/shared/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType } from "react";

const stackVariants = cva("flex flex-col", {
  variants: {
    gap: {
      xs: "gap-2",
      sm: "gap-3",
      default: "gap-5",
      lg: "gap-8",
      xl: "gap-12",
    },
  },
  defaultVariants: {
    gap: "default",
  },
});

type StackProps<T extends ElementType = "div"> = {
  as?: T;
  uiId?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as"> &
  VariantProps<typeof stackVariants>;

export function Stack<T extends ElementType = "div">({
  as,
  className,
  gap,
  uiId,
  ...props
}: StackProps<T>) {
  const Comp = as ?? "div";
  return (
    <Comp
      data-ui={mergeUi(uiId ?? "stack")}
      className={cn(stackVariants({ gap }), className)}
      {...props}
    />
  );
}
