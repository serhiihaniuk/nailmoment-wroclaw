"use client";

import { Button } from "@/shared/ui/button";
import { CELEBRATION_CONFETTI_EVENT } from "@/shared/ui/celebration-confetti";

type CelebrationConfettiTriggerProps = {
  uiId?: string;
  className?: string;
};

export function CelebrationConfettiTrigger({
  uiId = "celebration-confetti-trigger",
  className,
}: CelebrationConfettiTriggerProps) {
  return (
    <Button
      uiId={uiId}
      type="button"
      variant="secondary"
      size="sm"
      className={className}
      onClick={() => {
        window.dispatchEvent(new Event(CELEBRATION_CONFETTI_EVENT));
      }}
    >
      Тиць
    </Button>
  );
}
