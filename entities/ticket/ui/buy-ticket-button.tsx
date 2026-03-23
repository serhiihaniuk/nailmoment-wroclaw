import { Button } from "@/shared/ui/button";
import { cn, mergeUi } from "@/shared/lib/utils";
import { TicketIcon } from "@/shared/assets/icons";
import Link from "next/link";
import { FC } from "react";

export const BuyTicketButton: FC<{ className?: string; uiId?: string }> = ({
  className,
  uiId,
}) => {
  return (
    <Button
      uiId={mergeUi(uiId, "button")}
      variant="accent"
      className={cn(className)}
      asChild
    >
      <Link
        href="/#ticket-section"
        data-ui={mergeUi(uiId, "link")}
        className="flex items-center justify-center gap-2 uppercase"
      >
        Придбати квиток
        <TicketIcon data-ui={mergeUi(uiId, "icon")} className="size-7" />
      </Link>
    </Button>
  );
};
