import type { ReactNode } from "react";
import { Info, ShieldAlert } from "lucide-react";
import { cn } from "@/utils/cn";

interface CalloutProps {
  tone?: "info" | "notice";
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Callout({ tone = "info", title, children, className }: CalloutProps) {
  const Icon = tone === "notice" ? ShieldAlert : Info;
  return (
    <div
      role="note"
      className={cn(
        "flex gap-3 rounded-xl border px-5 py-4 text-sm leading-relaxed",
        tone === "info" && "border-indigo-900/15 bg-indigo-50 text-indigo-900",
        tone === "notice" && "border-saffron-500/30 bg-saffron-100 text-ink",
        className
      )}
    >
      <Icon size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
      <div>
        {title && <p className="mb-1 font-semibold">{title}</p>}
        <div className="text-current/90">{children}</div>
      </div>
    </div>
  );
}
