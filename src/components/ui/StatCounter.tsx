import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/utils/cn";

interface StatCounterProps {
  value: string;
  label: string;
  caption?: string;
  start: boolean;
  tone?: "dark" | "light";
}

export function StatCounter({ value, label, caption, start, tone = "dark" }: StatCounterProps) {
  const display = useCountUp(value, start);

  return (
    <div className="flex flex-col gap-1.5">
      <span
        className={cn(
          "font-display text-3xl font-medium tabular-nums lg:text-4xl",
          tone === "dark" ? "text-indigo-900" : "text-paper"
        )}
      >
        {display}
      </span>
      <span className={cn("text-sm font-semibold", tone === "dark" ? "text-ink" : "text-paper")}>{label}</span>
      {caption && (
        <span className={cn("text-sm leading-snug", tone === "dark" ? "text-slate-500" : "text-indigo-100")}>
          {caption}
        </span>
      )}
    </div>
  );
}
