import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  className?: string;
  children: ReactNode;
}

export const Badge: FC<BadgeProps> = ({ children, className }) => (
  <div
    className={cn(
      "inline-flex min-h-10 items-center justify-center rounded-full border border-border-subtle bg-surface-card px-4 py-2 text-center text-sm font-semibold uppercase tracking-[0.08em] text-text-primary shadow-sm",
      className
    )}
  >
    {children}
  </div>
);
