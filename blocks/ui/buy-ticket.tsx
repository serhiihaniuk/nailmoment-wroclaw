import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TicketIcon } from "@/shared/icons";
import Link from "next/link";
import { FC } from "react";

export const BuyTicketButton: FC<{ className?: string }> = ({ className }) => {
  return (
    <Button className={cn(" bg-yellow-background", className)} asChild>
      <Link
        href="/#ticket-section"
        className="uppercase flex items-center justify-center gap-2 text-yellow-foreground"
      >
        Придбати квиток
        <TicketIcon className="size-7" />
      </Link>
    </Button>
  );
};
