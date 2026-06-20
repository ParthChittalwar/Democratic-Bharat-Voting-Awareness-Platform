import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padded?: boolean;
  hoverable?: boolean;
}

export function Card({ children, padded = true, hoverable = false, className, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-300/70 bg-white shadow-card",
        padded && "p-6 lg:p-7",
        hoverable && "transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
