import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "paper" | "dim" | "indigo";
  narrow?: boolean;
}

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  paper: "bg-paper",
  dim: "bg-paper-dim",
  indigo: "bg-indigo-900 text-paper",
};

export function Section({ id, children, className, tone = "paper", narrow = false }: SectionProps) {
  return (
    <section id={id} className={cn(toneClasses[tone], "py-16 lg:py-24")}>
      <div className={cn("mx-auto px-5 lg:px-10", narrow ? "max-w-3xl" : "max-w-[1440px]", className)}>
        {children}
      </div>
    </section>
  );
}
