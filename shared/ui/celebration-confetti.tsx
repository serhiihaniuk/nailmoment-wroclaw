"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export function CelebrationConfetti() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const fire = confetti.create(canvas, {
      resize: true,
      useWorker: true,
    });

    const bursts = [
      window.setTimeout(() => {
        fire({
          particleCount: 120,
          spread: 75,
          startVelocity: 40,
          origin: { x: 0.5, y: 0.22 },
          colors: ["#f6cf69", "#466300", "#6a312a", "#fffdf4"],
        });
      }, 2000),
      window.setTimeout(() => {
        fire({
          particleCount: 60,
          spread: 50,
          startVelocity: 30,
          scalar: 0.9,
          origin: { x: 0.2, y: 0.28 },
          colors: ["#f6cf69", "#466300", "#fffdf4"],
        });
      }, 5000),
      window.setTimeout(() => {
        fire({
          particleCount: 60,
          spread: 50,
          startVelocity: 30,
          scalar: 0.9,
          origin: { x: 0.8, y: 0.28 },
          colors: ["#f6cf69", "#6a312a", "#fffdf4"],
        });
      }, 10000),
    ];

    return () => {
      bursts.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-ui="celebration-confetti"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] h-full w-full"
    />
  );
}
