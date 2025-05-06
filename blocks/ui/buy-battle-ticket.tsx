import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TicketIcon } from "@/shared/icons";
import { FC } from "react";

export const BuyBattleTicketButton: FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <Button className={cn("bg-accent-pink", className)} asChild>
      <a
        href="https://buy.stripe.com/9AQcMSb5T0l4ehW14x"
        target="_blank"
        rel="noopener noreferrer"
        className="uppercase bg-accent-pink flex items-center justify-center gap-2 text-white"
      >
        Придбати квиток участника Битви Майстрів
        <TicketIcon className="size-7" />
      </a>
    </Button>
  );
};
