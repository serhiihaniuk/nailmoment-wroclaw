import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import { FC } from "react";

export const ListItem: FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  return (
    <li
      className={cn("flex items-center gap-4 px-3 rounded-sm py-3", className)}
    >
      <CheckCircle className=" shrink-0 text-accent-orange" />
      <p className="text-blue-foreground leading-snug">{text}</p>
    </li>
  );
};
