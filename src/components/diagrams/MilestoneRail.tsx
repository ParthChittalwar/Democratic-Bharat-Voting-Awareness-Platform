import { motion } from "framer-motion";
import { IconGlyph } from "@/components/ui/IconGlyph";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { IconName } from "@/types";

interface MilestoneItem {
  id: string;
  marker: string;
  title: string;
  description: string;
  icon?: IconName;
}

interface MilestoneRailProps {
  items: MilestoneItem[];
}

/**
 * Horizontal, scroll-snapped milestone timeline on desktop (per the
 * desktop-first brief), collapsing to a vertical stepper with a connecting
 * line on smaller screens. Used for the EVM history timeline and the
 * Election Day workflow.
 */
export function MilestoneRail({ items }: MilestoneRailProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative">
      {/* Mobile / tablet: vertical rail */}
      <ol className="relative flex flex-col gap-8 border-l-2 border-dashed border-indigo-900/20 pl-7 lg:hidden">
        {items.map((item, index) => {
          return (
            <motion.li
              key={item.id}
              initial={reducedMotion ? undefined : { opacity: 0, x: -12 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-[2.35rem] flex h-8 w-8 items-center justify-center rounded-full bg-indigo-900 text-paper">
                {item.icon && <IconGlyph icon={item.icon} size={15} aria-hidden="true" />}
              </span>
              <p className="font-mono text-xs font-semibold uppercase tracking-wide text-saffron-600">{item.marker}</p>
              <h3 className="mt-1 font-display text-lg font-medium text-ink">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{item.description}</p>
            </motion.li>
          );
        })}
      </ol>

      {/* Desktop: horizontal scroll-snap rail */}
      <div className="hidden lg:block">
        <div className="scrollbar-thin relative overflow-x-auto pb-4">
          <div className="relative flex min-w-max gap-0">
            <div
              className="perforated-edge absolute left-0 right-0 top-[2.35rem] h-[3px] bg-indigo-900/15"
              aria-hidden="true"
            />
            {items.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="relative flex w-[280px] shrink-0 flex-col gap-3 px-4"
                >
                  <span className="z-10 flex h-[2.7rem] w-[2.7rem] items-center justify-center rounded-full border-4 border-paper bg-indigo-900 text-paper shadow-card">
                    {item.icon && <IconGlyph icon={item.icon} size={18} aria-hidden="true" />}
                  </span>
                  <p className="font-mono text-xs font-semibold uppercase tracking-wide text-saffron-600">
                    {item.marker}
                  </p>
                  <h3 className="font-display text-lg font-medium text-ink">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-700">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
        <p className="mt-2 text-center text-xs text-slate-500">Scroll horizontally to see the full timeline →</p>
      </div>
    </div>
  );
}
