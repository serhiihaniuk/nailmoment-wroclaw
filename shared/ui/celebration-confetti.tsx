"use client";

import { useEffect, useRef } from "react";
import confetti, { type Options } from "canvas-confetti";

export const CELEBRATION_CONFETTI_EVENT = "celebration-confetti:burst";

const ULTRA_SEQUENCE_MAX_ACTIVE = 10;
const ULTRA_SEQUENCE_RELEASE_MS = 1800;

export function CelebrationConfetti() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const activeUltraSequencesRef = useRef(0);

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

    const burstConfigs: Options[] = [
      {
        particleCount: 120,
        spread: 75,
        startVelocity: 40,
        origin: { x: 0.5, y: 0.22 },
        colors: ["#f6cf69", "#466300", "#6a312a", "#fffdf4"],
      },
      {
        particleCount: 60,
        spread: 50,
        startVelocity: 30,
        scalar: 0.9,
        origin: { x: 0.2, y: 0.28 },
        colors: ["#f6cf69", "#466300", "#fffdf4"],
      },
      {
        particleCount: 60,
        spread: 50,
        startVelocity: 30,
        scalar: 0.9,
        origin: { x: 0.8, y: 0.28 },
        colors: ["#f6cf69", "#6a312a", "#fffdf4"],
      },
    ];

    const sequenceStarts = [1000, 6000];
    const bursts = sequenceStarts.flatMap((sequenceStart) =>
      burstConfigs.map((config, index) =>
        window.setTimeout(() => {
          fire(config);
        }, sequenceStart + index * 1000)
      )
    );

    const cleanupTimeouts: number[] = [];

    const fireUltraConfetti = () => {
      if (activeUltraSequencesRef.current >= ULTRA_SEQUENCE_MAX_ACTIVE) {
        return;
      }

      activeUltraSequencesRef.current += 1;

      fire({
        particleCount: 180,
        spread: 90,
        startVelocity: 48,
        origin: { x: 0.5, y: 0.28 },
        colors: ["#f6cf69", "#466300", "#6a312a", "#fffdf4"],
      });

      cleanupTimeouts.push(window.setTimeout(() => {
        fire({
          particleCount: 90,
          spread: 72,
          startVelocity: 36,
          scalar: 0.95,
          origin: { x: 0.18, y: 0.32 },
          colors: ["#f6cf69", "#466300", "#fffdf4"],
        });
      }, 180));

      cleanupTimeouts.push(window.setTimeout(() => {
        fire({
          particleCount: 90,
          spread: 72,
          startVelocity: 36,
          scalar: 0.95,
          origin: { x: 0.82, y: 0.32 },
          colors: ["#f6cf69", "#6a312a", "#fffdf4"],
        });
      }, 320));

      cleanupTimeouts.push(window.setTimeout(() => {
        activeUltraSequencesRef.current = Math.max(0, activeUltraSequencesRef.current - 1);
      }, ULTRA_SEQUENCE_RELEASE_MS));
    };

    window.addEventListener(CELEBRATION_CONFETTI_EVENT, fireUltraConfetti);

    return () => {
      bursts.forEach((timeoutId) => window.clearTimeout(timeoutId));
      cleanupTimeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
      window.removeEventListener(CELEBRATION_CONFETTI_EVENT, fireUltraConfetti);
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
