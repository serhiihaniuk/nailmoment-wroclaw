import React from "react";
import { cn } from "@/lib/utils";

export type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
  className?: string;
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, ...rest }, ref) => (
    <section ref={ref} className={cn("px-4 md:px-12", className)} {...rest}>
      {children}
    </section>
  )
);

Section.displayName = "Section";
