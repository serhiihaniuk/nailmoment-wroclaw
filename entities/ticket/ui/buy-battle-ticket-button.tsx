import { FC, ReactNode } from "react";
import { cn } from "@/shared/lib/utils";
import { BattleTicketBuyButton } from "@/shared/ui/battle-ticket-buy-button";

export const BuyBattleTicketButton: FC<{
  className?: string;
  children?: ReactNode;
}> = ({ className, children }) => {
  return (
    <BattleTicketBuyButton
      uiId="buy-battle-ticket-button"
      href="https://buy.stripe.com/9AQcMSb5T0l4ehW14x"
      className={cn(className)}
    >
      {children ?? "Взяти участь у конкурсі"}
    </BattleTicketBuyButton>
  );
};
