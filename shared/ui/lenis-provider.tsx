"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotionQuery.matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.08,
      anchors: true,
      stopInertiaOnNavigate: true,
    });

    const handlePause = () => {
      lenis.stop();
    };

    const handleResume = () => {
      lenis.start();
    };

    window.addEventListener("image-viewer:open", handlePause);
    window.addEventListener("image-viewer:close", handleResume);

    return () => {
      window.removeEventListener("image-viewer:open", handlePause);
      window.removeEventListener("image-viewer:close", handleResume);
      lenis.destroy();
    };
  }, []);

  return children;
}
