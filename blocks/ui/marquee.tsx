"use client";
import { useRef, useEffect, useState, FC } from "react";

interface MarqueeProps {
  /** Array of text strings to display in the marquee */
  texts?: string[];
  /** Speed of the marquee (lower = faster) */
  speed?: number;
  /** Direction of movement */
  direction?: "left" | "right";
  /** Whether to pause animation on hover */
  pauseOnHover?: boolean;
  /** Gap before and after separators (in pixels) */
  spacingGap?: number;
  /** Additional CSS classes */
  className?: string;
}

const Marquee: FC<MarqueeProps> = ({
  texts = ["This is a seamless", "multi-text", "scrolling marquee component"],
  speed = 50,
  direction = "left",
  pauseOnHover = true,
  spacingGap = 16,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentWidth, setContentWidth] = useState<number>(0);
  const [copies, setCopies] = useState<number>(2);

  useEffect(() => {
    const updateMeasurements = (): void => {
      const container = containerRef.current;
      const content = contentRef.current;

      if (!container || !content) return;

      // Get accurate width measurements
      const containerRect = container.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();

      const containerWidth = containerRect.width;
      const contentWidth = contentRect.width;

      // Calculate how many copies we need to fill the container twice
      // Add 1 for safety to ensure no gaps
      const neededCopies = Math.ceil((containerWidth * 2) / contentWidth) + 1;

      setContentWidth(contentWidth);
      setCopies(neededCopies);
    };

    // Initial measurement
    updateMeasurements();

    // Update on resize
    window.addEventListener("resize", updateMeasurements);
    return () => window.removeEventListener("resize", updateMeasurements);
  }, [texts, spacingGap]);

  // Calculate animation duration based on content width and speed
  // Lower speed = faster animation
  const duration = contentWidth > 0 ? contentWidth / (speed * 0.1) : 10;

  // Create a single sequence of elements with alternating emojis
  const createSequence = () => {
    const sequence: React.ReactNode[] = [];

    texts.forEach((text, index) => {
      // Add emoji before text
      sequence.push(
        <span
          key={`emoji-${index}`}
          className="inline-block mx-2"
          style={{ padding: `0 ${spacingGap}px` }}
        >
          {index % 2 === 0 ? "🍋" : "🍊"}
        </span>
      );

      // Add text
      sequence.push(
        <span key={`text-${index}`} className="inline-block whitespace-nowrap">
          {text}
        </span>
      );
    });

    return sequence;
  };

  // Generate complete sequence once
  const completeSequence = createSequence();

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden h-8 text-blue-foreground flex items-center justify-center font-semibold ${className}`}
    >
      <div
        className={`whitespace-nowrap ${
          pauseOnHover ? "hover:animate-pause" : ""
        }`}
        style={{
          width: "100000px", // Very large width to prevent issues
          animation: `scroll-${direction} ${duration}s linear infinite`,
          display: "inline-block",
        }}
      >
        {/* First copy for measurement that will also be displayed */}
        <div ref={contentRef} className="inline-flex items-center">
          {completeSequence}
        </div>

        {/* Additional copies to ensure continuous scrolling */}
        {Array.from({ length: copies }).map((_, i) => (
          <div key={`copy-${i}`} className="inline-flex items-center">
            {completeSequence}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-${contentWidth}px);
          }
        }

        @keyframes scroll-right {
          from {
            transform: translateX(-${contentWidth}px);
          }
          to {
            transform: translateX(0);
          }
        }

        .hover\\:animate-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
