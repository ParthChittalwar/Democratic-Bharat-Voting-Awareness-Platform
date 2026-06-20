import { useState } from "react";
import { CircleX, CheckCircle2 } from "lucide-react";
import { cn } from "@/utils/cn";
import type { Myth } from "@/types";

interface FlipCardProps {
  myth: Myth;
}

export function FlipCard({ myth }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((value) => !value)}
      aria-pressed={flipped}
      aria-label={flipped ? `Showing fact for: ${myth.myth}. Press to show myth again.` : `Showing myth: ${myth.myth}. Press to reveal the fact.`}
      className="group h-full w-full text-left [perspective:1400px]"
    >
      <div
        className={cn(
          "relative h-full min-h-[220px] w-full transition-transform duration-500 [transform-style:preserve-3d]",
          flipped && "[transform:rotateY(180deg)]"
        )}
      >
        {/* Myth face */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col gap-3 rounded-2xl border border-caution-500/30 bg-caution-100 p-6 [backface-visibility:hidden]",
            "shadow-card transition-shadow group-hover:shadow-card-hover"
          )}
        >
          <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wide text-caution-600">
            <CircleX size={16} aria-hidden="true" />
            Myth
          </div>
          <p className="text-lg font-medium leading-snug text-ink">{myth.myth}</p>
          <span className="mt-auto text-xs font-medium text-caution-600/80">Tap to see the fact →</span>
        </div>

        {/* Fact face */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col gap-3 rounded-2xl border border-verified-500/30 bg-verified-100 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]",
            "shadow-card transition-shadow group-hover:shadow-card-hover"
          )}
        >
          <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wide text-verified-700">
            <CheckCircle2 size={16} aria-hidden="true" />
            Fact
          </div>
          <p className="text-lg font-medium leading-snug text-ink">{myth.fact}</p>
          <p className="text-sm leading-relaxed text-slate-700">{myth.explanation}</p>
          <span className="mt-auto text-xs font-medium text-verified-700/80">← Tap to see the myth again</span>
        </div>
      </div>
    </button>
  );
}
