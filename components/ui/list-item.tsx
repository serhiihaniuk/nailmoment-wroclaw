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
      className={cn(
        "flex items-start gap-3 rounded-2xl px-4 py-4 text-left",
        className
      )}
    >
      <CheckCircle
        className={cn("mt-0.5 size-5 shrink-0 text-text-primary", iconClassName)}
      />
      <p className="leading-6 text-text-primary">{text}</p>
    </li>
  );
};
