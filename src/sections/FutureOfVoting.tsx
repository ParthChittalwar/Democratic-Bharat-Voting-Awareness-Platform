import { motion } from "framer-motion";
import { futureTopics } from "@/data/futureVoting";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function FutureOfVoting() {
  const reducedMotion = useReducedMotion();

  return (
    <Section id="future" tone="paper">
      <SectionHeader
        eyebrow="The Future of Voting"
        title="Where election technology has been — and where it could go"
        description="Election technology in India has changed gradually, always alongside legal and judicial scrutiny. Here's that arc, kept realistic and evidence-based."
      />

      <div className="mt-12 space-y-5">
        {futureTopics.map((topic, index) => (
          <motion.div
            key={topic.id}
            initial={reducedMotion ? undefined : { opacity: 0, x: -16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="flex flex-col gap-4 rounded-2xl border border-slate-300/70 bg-white p-6 lg:flex-row lg:items-start lg:gap-8 lg:p-7"
          >
            {topic.era && (
              <span className="inline-flex w-fit shrink-0 rounded-full bg-indigo-50 px-3.5 py-1 font-mono text-xs font-semibold text-indigo-900 lg:w-36 lg:justify-center">
                {topic.era}
              </span>
            )}
            <div>
              <h3 className="font-display text-lg font-medium text-ink lg:text-xl">{topic.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 lg:text-base">{topic.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
