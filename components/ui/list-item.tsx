import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import { FC } from "react";

export const ListItem: FC<{
  text: string | React.ReactNode;
  className?: string;
  iconClassName?: string;
}> = ({ text, className, iconClassName }) => {
  return (
    <li
      className={cn("flex items-center gap-4 px-3 rounded-sm py-3", className)}
    >
      <CheckCircle
        className={cn("text-accent-pink size-[24px] shrink-0", iconClassName)}
      />
      <p className="text-blue-foreground leading-snug">{text}</p>
    </li>
  );
};
