import { cn, mergeUi } from "@/shared/lib/utils";
import { ArrowLeft } from "lucide-react";
import NextLink from "next/link";
import { ReactNode } from "react";

type BackLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  uiId?: string;
};

export function BackLink({
  href,
  children,
  className,
  uiId,
}: BackLinkProps) {
  return (
    <NextLink
      data-ui={mergeUi(uiId ?? "back-link")}
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-text-muted transition-all hover:gap-3 hover:text-text-primary",
        className
      )}
    >
      <ArrowLeft
        data-ui={mergeUi(uiId, "icon")}
        className="size-4 transition-transform group-hover:-translate-x-0.5"
      />
      {children}
    </NextLink>
  );
}
