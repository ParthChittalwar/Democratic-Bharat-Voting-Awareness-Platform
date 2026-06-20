import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface LegalPageShellProps {
  eyebrow: string;
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}

export function LegalPageShell({ eyebrow, title, lastUpdated, children }: LegalPageShellProps) {
  const reducedMotion = useReducedMotion();

  return (
    <Section tone="paper" narrow className="pt-12 lg:pt-16">
      <motion.div
        initial={reducedMotion ? undefined : { opacity: 0, y: 12 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-saffron-600">{eyebrow}</p>
        <h1 className="font-display text-3xl font-medium text-ink lg:text-4xl">{title}</h1>
        {lastUpdated && <p className="mt-2 text-sm text-slate-500">Last updated: {lastUpdated}</p>}
        <div className="mt-10 space-y-8">{children}</div>
      </motion.div>
    </Section>
  );
}
