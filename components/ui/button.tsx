import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-transparent text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-white text-text-primary shadow-sm hover:bg-white/90",
        secondary:
          "border-border-subtle bg-transparent text-text-primary hover:bg-surface-muted/70",
        accent: "bg-brand-olive text-white hover:bg-brand-olive/90",
        warm: "bg-brand-brown text-white hover:bg-brand-brown/90",
      },
      font: {
        default: "",
        regular: "font-medium",
      },
      size: {
        default: "min-h-12 px-5 py-3",
        sm: "min-h-10 px-4 py-2.5 text-sm",
        lg: "min-h-14 px-6 py-4 text-base",
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
