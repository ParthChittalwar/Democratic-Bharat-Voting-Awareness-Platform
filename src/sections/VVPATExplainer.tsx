import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { vvpatPoints, vvpatViewingSeconds } from "@/data/vvpat";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { PrinterCheck, RotateCcw } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function VVPATExplainer() {
  const [demoOpen, setDemoOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <Section id="vvpat" tone="dim">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="VVPAT"
            title="A paper record you can see with your own eyes"
            description="Voter Verifiable Paper Audit Trail (VVPAT) adds a physical, human-readable check on top of the electronic vote."
          />
          <dl className="mt-8 space-y-6">
            {vvpatPoints.map((point) => (
              <div key={point.id}>
                <dt className="font-display text-lg font-medium text-ink">{point.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-slate-700">{point.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Animated demo */}
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-300/70 bg-white p-8 shadow-card">
          <div className="relative h-64 w-48 overflow-hidden rounded-xl border-4 border-indigo-900 bg-indigo-950">
            <div className="absolute inset-x-2 top-2 h-3 rounded-full bg-indigo-800" aria-hidden="true" />
            <AnimatePresence>
              {demoOpen && (
                <motion.div
                  initial={reducedMotion ? undefined : { y: -120 }}
                  animate={reducedMotion ? undefined : { y: 0 }}
                  exit={reducedMotion ? undefined : { y: 220 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-x-3 top-8 rounded-md bg-paper p-3 shadow-card"
                >
                  <p className="font-mono text-[0.6rem] text-slate-500">Serial No. 0427</p>
                  <p className="mt-1 font-display text-sm font-medium text-ink">Candidate B</p>
                  <p className="text-[0.65rem] text-slate-500">Fictional Party — Example Only</p>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-indigo-300">
              <PrinterCheck size={20} aria-hidden="true" />
            </div>
          </div>

          <p className="mt-5 text-center text-sm text-slate-600">
            The slip stays visible for about {vvpatViewingSeconds} seconds before dropping into a sealed box.
          </p>

          <Button
            className="mt-4"
            variant="secondary"
            icon={demoOpen ? <RotateCcw size={16} /> : <PrinterCheck size={16} />}
            onClick={() => setDemoOpen((open) => !open)}
          >
            {demoOpen ? "Reset demo" : "Show me a VVPAT slip"}
          </Button>
        </div>
      </div>
    </Section>
  );
}
