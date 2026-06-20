import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { evmComponents } from "@/data/evmComponents";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getIcon } from "@/utils/icons";
import { cn } from "@/utils/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function EVMComponents() {
  const [openId, setOpenId] = useState<string | null>(evmComponents[0]?.id ?? null);
  const reducedMotion = useReducedMotion();

  return (
    <Section id="evm-components" tone="paper">
      <SectionHeader
        eyebrow="Inside the Machine"
        title="Three components, one secure process"
        description="An EVM (with VVPAT) is made of three physically separate units. Select each one to see its purpose, functions, and internal workflow."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {evmComponents.map((component) => {
          const Icon = getIcon(component.icon);
          const isOpen = openId === component.id;
          return (
            <div
              key={component.id}
              className={cn(
                "flex flex-col rounded-2xl border bg-white shadow-card transition-all duration-300",
                isOpen ? "border-indigo-900/40 shadow-card-hover" : "border-slate-300/70"
              )}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : component.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-3 p-6 text-left"
              >
                <span className="flex items-center gap-3.5">
                  <span
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors",
                      isOpen ? "bg-indigo-900 text-paper" : "bg-indigo-50 text-indigo-900"
                    )}
                  >
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-mono text-[0.7rem] font-semibold uppercase tracking-wide text-saffron-600">
                      {component.shortName}
                    </span>
                    <span className="block font-display text-lg font-medium text-ink">{component.name}</span>
                  </span>
                </span>
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className={cn("shrink-0 text-indigo-900 transition-transform duration-300", isOpen && "rotate-180")}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={reducedMotion ? undefined : { height: 0, opacity: 0 }}
                    animate={reducedMotion ? undefined : { height: "auto", opacity: 1 }}
                    exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-5 px-6 pb-6">
                      <p className="text-sm leading-relaxed text-slate-700">{component.purpose}</p>

                      <div>
                        <p className="mb-2 font-mono text-[0.7rem] font-semibold uppercase tracking-wide text-slate-500">
                          Functions
                        </p>
                        <ul className="space-y-2">
                          {component.functions.map((fn) => (
                            <li key={fn} className="flex gap-2.5 text-sm leading-relaxed text-ink">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-500" aria-hidden="true" />
                              {fn}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-xl bg-indigo-50 p-4">
                        <p className="mb-2 font-mono text-[0.7rem] font-semibold uppercase tracking-wide text-indigo-900">
                          Internal workflow
                        </p>
                        <ol className="space-y-1.5">
                          {component.workflow.map((step, index) => (
                            <li key={step} className="flex gap-2.5 text-sm leading-relaxed text-indigo-900">
                              <span className="font-mono text-xs font-semibold">{index + 1}.</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
