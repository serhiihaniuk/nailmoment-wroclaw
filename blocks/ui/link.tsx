import React from "react";
import { SquareArrowOutUpRight } from "lucide-react";

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
    <a
      target={target}
      rel="noopener noreferrer"
      className={`underline text-blue-foreground inline-flex items-center gap-1 ${className}`}
      href={href}
    >
      {children}
      {icon && <SquareArrowOutUpRight size={12} />}
    </a>
  );
};
