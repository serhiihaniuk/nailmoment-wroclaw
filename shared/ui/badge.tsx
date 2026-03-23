import { FC, ReactNode } from "react";
import { cn, mergeUi } from "@/shared/lib/utils";

interface BadgeProps {
  className?: string;
  children: ReactNode;
  uiId?: string;
}

export const Badge: FC<BadgeProps> = ({ children, className, uiId }) => (
  <div
    data-ui={mergeUi(uiId ?? "badge")}
    className={cn(
      "inline-flex min-h-10 items-center justify-center rounded-full border border-border-subtle bg-surface-card px-4 py-2 text-center text-sm font-semibold uppercase tracking-[0.08em] text-text-primary shadow-sm",
      className
    )}
  >
    {children}
  </div>
);
