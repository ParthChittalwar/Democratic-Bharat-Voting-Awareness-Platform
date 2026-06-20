import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { getIcon } from "@/utils/icons";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { VoteJourneyStep } from "@/types";

interface FlowRailProps {
  steps: VoteJourneyStep[];
  activeIndex?: number;
}

/**
 * The "Ledger Rail" — this project's signature device. A perforated,
 * ballot-stub-style rail that a vote travels along, rendered horizontally
 * on desktop (per the desktop-first brief) and as a vertical stepper on
 * small screens.
 */
export function FlowRail({ steps, activeIndex }: FlowRailProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-0 lg:flex-row lg:items-stretch lg:gap-0">
      {steps.map((step, index) => {
        const Icon = getIcon(step.icon);
        const isActive = activeIndex !== undefined && index <= activeIndex;
        const isLast = index === steps.length - 1;

        return (
          <div key={step.id} className="flex flex-1 flex-col lg:flex-row lg:items-stretch">
            <motion.div
              initial={reducedMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              className={[
                "flex flex-1 flex-col gap-3 rounded-2xl border p-5 transition-colors duration-500 lg:p-6",
                isActive
                  ? "border-saffron-500/60 bg-saffron-100"
                  : "border-slate-300/70 bg-white",
              ].join(" ")}
            >
              <div
                className={[
                  "flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-500",
                  isActive ? "bg-saffron-500 text-indigo-950" : "bg-indigo-900 text-paper",
                ].join(" ")}
              >
                <Icon size={20} aria-hidden="true" />
              </div>
              <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-wide text-slate-500">
                Step {index + 1}
              </p>
              <h3 className="font-display text-lg font-medium text-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-700">{step.description}</p>
            </motion.div>

            {!isLast && (
              <div className="flex items-center justify-center py-1 lg:px-2">
                <ArrowDown size={20} className="text-saffron-500 lg:hidden" aria-hidden="true" />
                <div className="hidden h-full w-6 items-center justify-center lg:flex">
                  <ArrowRight size={20} className="text-saffron-500" aria-hidden="true" />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
