import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function zeroedDisplay(target: string): string {
  return target.replace(/[\d,]+(\.\d+)?/, "0");
}

/**
 * Animates a numeric value counting up from 0 once `start` is true.
 * Non-numeric characters in the target (e.g. "543", "~98 crore") are
 * preserved by only animating the leading numeric portion.
 *
 * When animation isn't applicable (not started yet, no numeric portion,
 * or the user prefers reduced motion), the display value is derived
 * directly from props during render rather than via an effect.
 */
export function useCountUp(target: string, start: boolean, durationMs = 1200) {
  const reducedMotion = useReducedMotion();
  const numericMatch = target.match(/[\d,]+(\.\d+)?/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0].replace(/,/g, "")) : null;
  const shouldAnimate = start && numericValue !== null && !reducedMotion;

  const [animatedDisplay, setAnimatedDisplay] = useState(() => zeroedDisplay(target));

  useEffect(() => {
    if (!shouldAnimate || numericValue === null) return;

    let frame: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numericValue * eased;
      const formatted = Number.isInteger(numericValue)
        ? Math.round(current).toLocaleString("en-IN")
        : current.toFixed(1);
      setAnimatedDisplay(target.replace(/[\d,]+(\.\d+)?/, formatted));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [shouldAnimate, numericValue, target, durationMs]);

  if (!shouldAnimate) {
    return start ? target : zeroedDisplay(target);
  }
  return animatedDisplay;
}
