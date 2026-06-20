import { cn } from "@/utils/cn";
import { IconGlyph } from "@/components/ui/IconGlyph";
import type { IconName } from "@/types";

interface SealBadgeProps {
  icon?: IconName;
  label: string;
  tone?: "verified" | "caution" | "neutral";
  className?: string;
}

const toneClasses: Record<NonNullable<SealBadgeProps["tone"]>, string> = {
  verified: "border-verified-500/40 bg-verified-100 text-verified-700",
  caution: "border-caution-500/40 bg-caution-100 text-caution-600",
  neutral: "border-indigo-900/20 bg-indigo-50 text-indigo-900",
};

/**
 * A perforated-edge "seal" chip — the project's recurring civic-document
 * motif, used wherever something is being marked verified, secure, or
 * checked.
 */
export function SealBadge({ icon, label, tone = "neutral", className }: SealBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-wide",
        toneClasses[tone],
        className
      )}
    >
      {icon && <IconGlyph icon={icon} size={13} strokeWidth={2.25} aria-hidden="true" />}
      {label}
    </span>
  );
}
