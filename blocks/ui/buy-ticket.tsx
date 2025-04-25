import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FC } from "react";

export const BuyTicketButton: FC<{ className?: string }> = ({ className }) => {
  return (
    <Button
      className={cn(
        "uppercase text-yellow-foreground bg-yellow-background",
        className
      )}
    >
      Придбати квиток
    </Button>
  );
};
