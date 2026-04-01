import { cn, mergeUi } from "@/shared/lib/utils";
import { CheckCircle } from "lucide-react";
import { FC } from "react";

export const ListItem: FC<{
  text: string | React.ReactNode;
  className?: string;
  iconClassName?: string;
  uiId?: string;
}> = ({ text, className, iconClassName, uiId }) => {
  return (
    <li
      data-ui={mergeUi(uiId ?? "list-item")}
      className={cn(
        "flex items-start gap-3 rounded-2xl px-4 py-4 text-left",
        className
      )}
    >
      <CheckCircle
        data-ui={mergeUi(uiId, "icon")}
        className={cn("mt-0.5 size-5 shrink-0", iconClassName)}
      />
      <p data-ui={mergeUi(uiId, "text")} className="leading-6">
        {text}
      </p>
    </li>
  );
};
