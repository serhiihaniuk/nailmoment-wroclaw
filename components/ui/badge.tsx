import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  className?: string;
  children: ReactNode;
}

export const Badge: FC<BadgeProps> = ({ children, className }) => (
  <div
    className={cn(
      "border text-center px-5 py-2.5 border-blue-foreground rounded-4xl text-blue-foreground font-bold",
      className
    )}
  >
    {children}
  </div>
);
