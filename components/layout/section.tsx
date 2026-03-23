import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

const sectionVariants = cva("relative px-4 md:px-8 xl:px-12", {
  variants: {
    density: {
      hero: "py-10 md:py-14",
      default: "py-8 md:py-12",
      compact: "py-6 md:py-10",
    },
    surface: {
      transparent: "bg-transparent",
      subtle: "bg-surface-muted/40",
      accent: "bg-brand-olive text-text-inverse",
    },
  },
  defaultVariants: {
    density: "default",
    surface: "transparent",
  },
});

const innerVariants = cva("mx-auto w-full", {
  variants: {
    container: {
      narrow: "max-w-3xl",
      default: "max-w-5xl",
      wide: "max-w-6xl",
      full: "max-w-none",
    },
  },
  defaultVariants: {
    container: "default",
  },
});

export type SectionProps = ComponentPropsWithoutRef<"section"> &
  VariantProps<typeof sectionVariants> &
  VariantProps<typeof innerVariants> & {
    innerClassName?: string;
  };

export function Section({
  className,
  children,
  container,
  density,
  innerClassName,
  surface,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(sectionVariants({ density, surface }), className)}
      {...props}
    >
      <div className={cn(innerVariants({ container }), innerClassName)}>
        {children}
      </div>
    </section>
  );
}
