import { motion } from "framer-motion";
import { votingImportancePoints, votingStats } from "@/data/votingImportance";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatCounter } from "@/components/ui/StatCounter";
import { getIcon } from "@/utils/icons";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ImportanceOfVoting() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const reducedMotion = useReducedMotion();

  return (
    <Section id="importance" tone="indigo">
      <SectionHeader
        eyebrow="Why Voting Matters"
        title="Every vote shapes who represents you"
        description="Elections decide who makes decisions on education, healthcare, infrastructure, and employment policy for the next term. Participation is what gives that decision its legitimacy."
        tone="light"
      />

      <div
        ref={ref}
        className="mt-10 grid grid-cols-2 gap-6 rounded-2xl border border-indigo-700 bg-indigo-800/40 p-6 lg:grid-cols-4 lg:p-8"
      >
        {votingStats.map((stat) => (
          <StatCounter key={stat.label} value={stat.value} label={stat.label} caption={stat.caption} start={isInView} tone="light" />
        ))}
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {votingImportancePoints.map((point, index) => {
          const Icon = getIcon(point.icon);
          return (
            <motion.div
              key={point.id}
              initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className="h-full rounded-2xl border border-indigo-700 bg-indigo-950/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 lg:p-7">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-saffron-500 text-indigo-950">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-medium text-paper">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-indigo-100">{point.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
