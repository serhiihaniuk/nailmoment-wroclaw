import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-transparent text-base font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-white text-text-primary shadow-sm hover:shadow-md hover:brightness-95",
        secondary:
          "border-border-subtle bg-transparent text-text-primary hover:bg-surface-muted",
        accent: "bg-brand-olive text-white hover:brightness-110 hover:shadow-md",
        warm: "bg-brand-brown text-white hover:brightness-110 hover:shadow-md",
      },
      font: {
        default: "",
        regular: "font-medium",
      },
      size: {
        default: "min-h-15 px-8 py-2.5",
        sm: "min-h-15 px-8 py-2.5",
        lg: "min-h-15 px-8 py-2.5 text-lg",
        icon: "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      font: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  font,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ font, size, variant }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
