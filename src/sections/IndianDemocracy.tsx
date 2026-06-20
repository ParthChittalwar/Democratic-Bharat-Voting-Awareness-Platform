import { motion } from "framer-motion";
import { democracyTopics } from "@/data/democracy";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { getIcon } from "@/utils/icons";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function IndianDemocracy() {
  const reducedMotion = useReducedMotion();

  return (
    <Section id="democracy" tone="paper">
      <SectionHeader
        eyebrow="Indian Democracy"
        title="How representation works in India"
        description="A quick, factual primer on the institutions and rules that turn millions of individual votes into a functioning government — kept strictly non-partisan."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-6">
        {democracyTopics.map((topic, index) => {
          const Icon = getIcon(topic.icon);
          return (
            <motion.div
              key={topic.id}
              initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
            >
              <Card className="h-full" hoverable>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-900">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-ink lg:text-xl">{topic.title}</h3>
                    <p className="mt-1.5 text-sm font-medium text-saffron-600">{topic.summary}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2.5 border-t border-slate-300/60 pt-4">
                  {topic.details.map((detail) => (
                    <li key={detail} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-900/40" aria-hidden="true" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
