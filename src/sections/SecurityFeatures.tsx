import { motion } from "framer-motion";
import { securityFeatures } from "@/data/security";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getIcon } from "@/utils/icons";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function SecurityFeatures() {
  const reducedMotion = useReducedMotion();

  return (
    <Section id="security" tone="paper">
      <SectionHeader
        eyebrow="Security & Safeguards"
        title="Multiple, independent layers of protection"
        description="No single safeguard carries the whole burden. EVM security comes from overlapping physical, procedural, and legal checks — most of them visible to candidate representatives in real time."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {securityFeatures.map((feature, index) => {
          const Icon = getIcon(feature.icon);
          return (
            <motion.div
              key={feature.id}
              initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.07 }}
              className="group rounded-2xl border border-slate-300/70 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-verified-500/40 hover:shadow-card-hover"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-verified-100 text-verified-700 transition-colors group-hover:bg-verified-500 group-hover:text-paper">
                <Icon size={20} aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-medium text-ink">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
