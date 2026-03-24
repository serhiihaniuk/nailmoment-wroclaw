import { ReactNode } from "react";
import { TicketIcon } from "@/shared/assets/icons";
import { Button } from "@/shared/ui/button";
import { cn, mergeUi } from "@/shared/lib/utils";

type BattleTicketBuyButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  uiId?: string;
};

export function BattleTicketBuyButton({
  children,
  className,
  href,
  uiId = "battle-ticket-buy-button",
}: BattleTicketBuyButtonProps) {
  return (
    <Button
      uiId={uiId}
      asChild
      className={cn(
        "w-full justify-center gap-3 bg-[linear-gradient(115deg,#edc12b_0%,#fff8ad_34%,#f0d04e_64%,#dc9d25_100%)] text-brand-brown shadow-none hover:brightness-100",
        className
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-ui={mergeUi(uiId, "link")}
      >
        <span data-ui={mergeUi(uiId, "label")}>{children}</span>
        <TicketIcon
          data-ui={mergeUi(uiId, "icon")}
          color="currentColor"
          aria-hidden="true"
          className="h-[1.8rem] w-[1.8rem] shrink-0"
        />
      </a>
    </Button>
  );
}
