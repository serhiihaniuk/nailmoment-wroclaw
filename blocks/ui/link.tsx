import React from "react";
import NextLink from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type LinkWithIconProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  icon?: boolean;
};

export const Link: React.FC<LinkWithIconProps> = ({
  href,
  children,
  className,
  target = "_blank",
  icon,
}) => {
  return (
    <NextLink
      target={target}
      rel="noopener noreferrer"
      className={cn(
        "underline text-blue-foreground inline-flex items-center gap-1 outline-0 focus-visible:ring-[3px] rounded-md focus-visible:border-ring focus-visible:ring-ring/50",
        className
      )}
      href={href}
    >
      {children}
      {icon && <SquareArrowOutUpRight size={12} />}
    </NextLink>
  );
};
