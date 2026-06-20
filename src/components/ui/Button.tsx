import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-indigo-900 text-paper hover:bg-indigo-800 active:bg-indigo-950 shadow-card",
  secondary:
    "bg-paper text-indigo-900 border border-indigo-900/20 hover:border-indigo-900/40 hover:bg-indigo-50",
  ghost: "bg-transparent text-indigo-900 hover:bg-indigo-50",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200",
        "focus-visible:outline-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...rest}
    >
      {icon && iconPosition === "left" && <span aria-hidden="true">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span aria-hidden="true">{icon}</span>}
    </button>
  );
}
