import { cn, mergeUi } from "@/lib/utils";
import { SquareArrowOutUpRight } from "lucide-react";
import NextLink from "next/link";
import { ReactNode } from "react";

type IconLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  icon?: boolean;
  uiId?: string;
};

export function IconLink({
  children,
  className,
  href,
  icon,
  target = "_blank",
  uiId,
}: IconLinkProps) {
  return (
    <NextLink
      data-ui={mergeUi(uiId ?? "link")}
      className={cn(
        "inline-flex items-center gap-1 rounded-md text-text-primary underline underline-offset-2 outline-none transition-opacity hover:opacity-80 focus-visible:ring-[3px] focus-visible:ring-ring/30",
        className
      )}
      href={href}
      rel="noopener noreferrer"
      target={target}
    >
      {children}
      {icon ? <SquareArrowOutUpRight data-ui={mergeUi(uiId, "icon")} size={12} /> : null}
    </NextLink>
  );
}
