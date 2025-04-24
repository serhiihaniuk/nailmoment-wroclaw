import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "gap-2 rounded-md text-lg transition-all disabled:pointer-events-none cursor-pointer disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-white",
        secondary: "border-1 border-blue-foreground",
      },
      font: {
        default: "font-semibold leading-[150%]",
        regular: "font-regular",
      },
      size: {
        default: "px-4 py-4 has-[>svg]:px-3",
        sm: "px-2 py-2 rounded-md gap-1.5 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
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
      className={cn(buttonVariants({ variant, size, className, font }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
