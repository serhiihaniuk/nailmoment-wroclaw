import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TicketIcon } from "@/shared/icons";
import { FC } from "react";

export const BuyTicketButton: FC<{ className?: string }> = ({ className }) => {
  return (
    <Button
      className={cn(
        "uppercase flex items-center justify-center gap-2 text-yellow-foreground bg-yellow-background",
        className
      )}
    >
      Придбати квиток
      <TicketIcon className="size-7" />
    </Button>
  );
};
