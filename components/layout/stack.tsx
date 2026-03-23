import { cn } from "@/lib/utils";
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
} & Omit<ComponentPropsWithoutRef<T>, "as"> &
  VariantProps<typeof stackVariants>;

export function Stack<T extends ElementType = "div">({
  as,
  className,
  gap,
  ...props
}: StackProps<T>) {
  const Comp = as ?? "div";
  return <Comp className={cn(stackVariants({ gap }), className)} {...props} />;
}
