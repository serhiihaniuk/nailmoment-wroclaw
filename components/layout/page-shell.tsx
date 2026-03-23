import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type PageShellProps = ComponentPropsWithoutRef<"main">;

export function PageShell({ className, ...props }: PageShellProps) {
  return (
    <main
      className={cn(
        "mx-auto w-full max-w-[960px] overflow-hidden bg-surface-page shadow-[0_24px_80px_rgba(57,85,0,0.12)]",
        className
      )}
      {...props}
    />
  );
}
