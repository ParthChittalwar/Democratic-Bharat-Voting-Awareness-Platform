import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, RotateCcw, Volume2 } from "lucide-react";
import { simulationCandidates } from "@/data/voteJourney";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Callout } from "@/components/ui/Callout";
import { SealBadge } from "@/components/ui/SealBadge";
import { getIcon } from "@/utils/icons";
import { cn } from "@/utils/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Stage = "select" | "casting" | "vvpat" | "stored";

export function EVMSimulation() {
  const [stage, setStage] = useState<Stage>("select");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [voteCount, setVoteCount] = useState(0);
  const reducedMotion = useReducedMotion();

  const selectedCandidate = simulationCandidates.find((c) => c.id === selectedId) ?? null;
  const serial = String(voteCount + 1).padStart(4, "0");

  function handleSelect(id: string) {
    if (stage !== "select") return;
    setSelectedId(id);
  }

  function handleCastVote() {
    if (!selectedId) return;
    setStage("casting");
    window.setTimeout(() => setStage("vvpat"), reducedMotion ? 200 : 900);
    window.setTimeout(() => setStage("stored"), reducedMotion ? 400 : 900 + 2600);
  }

  function handleReset() {
    setVoteCount((count) => (stage === "stored" ? count + 1 : count));
    setSelectedId(null);
    setStage("select");
  }

  return (
    <Section id="simulation" tone="dim">
      <SectionHeader
        eyebrow="Try It Yourself"
        title="A guided, fictional EVM simulation"
        description="Walk through casting a vote, step by step. Every name and symbol here is invented purely for this demonstration."
      />

      <Callout tone="notice" title="This is an educational simulation, not a real voting system" className="mt-6">
        Candidates A, B, and C are fictional examples with no connection to any real party or person. Nothing you do
        here is recorded, stored, or transmitted anywhere — the counter resets the moment you reload this page.
      </Callout>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
        {/* Ballot Unit replica */}
        <div className="rounded-2xl border border-slate-300/70 bg-white p-6 shadow-card lg:p-8">
          <div className="mb-5 flex items-center justify-between">
            <SealBadge icon="ticket-check" label="Ballot Unit · Simulation" tone="neutral" />
            <SealBadge icon="vote" label={`Votes cast: ${voteCount}`} tone="verified" />
          </div>

          <div className="space-y-3">
            {simulationCandidates.map((candidate) => {
              const Icon = getIcon(candidate.symbol);
              const isSelected = selectedId === candidate.id;
              return (
                <button
                  key={candidate.id}
                  onClick={() => handleSelect(candidate.id)}
                  disabled={stage !== "select"}
                  aria-pressed={isSelected}
                  className={cn(
                    "flex w-full items-center justify-between gap-4 rounded-xl border p-4 text-left transition-all duration-200",
                    isSelected ? "border-indigo-900 bg-indigo-50" : "border-slate-300/70 hover:border-indigo-900/40",
                    stage !== "select" && !isSelected && "opacity-50"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-900 text-paper">
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">{candidate.label}</span>
                      <span className="block text-xs text-slate-500">{candidate.party}</span>
                    </span>
                  </span>
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                      isSelected ? "border-indigo-900 bg-indigo-900" : "border-slate-300"
                    )}
                    aria-hidden="true"
                  >
                    {isSelected && <span className="h-3 w-3 rounded-full bg-saffron-500" />}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            onClick={handleCastVote}
            disabled={!selectedId || stage !== "select"}
            className={cn(
              "mt-6 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all",
              !selectedId || stage !== "select"
                ? "cursor-not-allowed bg-slate-300/60 text-slate-500"
                : "bg-indigo-900 text-paper hover:bg-indigo-800"
            )}
          >
            <Volume2 size={16} aria-hidden="true" />
            Press to Cast Vote
          </button>
          {stage === "select" && !selectedId && (
            <p className="mt-2 text-center text-xs text-slate-500">Select a fictional candidate above first.</p>
          )}
        </div>

        {/* Live process panel */}
        <div className="flex flex-col gap-4">
          <ProcessStep
            active={stage === "casting"}
            done={stage === "vvpat" || stage === "stored"}
            title="Recording the vote"
            description="The Control Unit receives and securely stores the press in its protected memory."
          />
          <AnimatePresence>
            {(stage === "vvpat" || stage === "stored") && selectedCandidate && (
              <motion.div
                initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
                animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                className="rounded-2xl border border-slate-300/70 bg-indigo-950 p-6 text-paper shadow-card"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-wide text-indigo-300">VVPAT · Verification Slip</p>
                <div className="mt-3 rounded-lg bg-paper p-4 text-ink">
                  <p className="font-mono text-xs text-slate-500">Serial No. {serial}</p>
                  <p className="mt-1 font-display text-lg font-medium">{selectedCandidate.label}</p>
                  <p className="text-xs text-slate-500">{selectedCandidate.party}</p>
                </div>
                <p className="mt-3 text-xs text-indigo-200">
                  {stage === "vvpat"
                    ? "Visible to the voter for about 7 seconds, then it drops into a sealed box."
                    : "Slip has dropped into the sealed VVPAT box."}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <ProcessStep
            active={stage === "vvpat"}
            done={stage === "stored"}
            title="VVPAT verification"
            description="A printed slip appears briefly so the voter can independently confirm their choice."
          />
          <ProcessStep
            active={false}
            done={stage === "stored"}
            title="Securely stored"
            description="The vote is now part of this machine's tally, to be read out on counting day."
          />

          {stage === "stored" && (
            <button
              onClick={handleReset}
              className="mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full border border-indigo-900/20 px-5 py-2.5 text-sm font-semibold text-indigo-900 transition-colors hover:bg-indigo-50"
            >
              <RotateCcw size={15} aria-hidden="true" />
              Simulate another voter
            </button>
          )}
        </div>
      </div>
    </Section>
  );
}

function ProcessStep({
  active,
  done,
  title,
  description,
}: {
  active: boolean;
  done: boolean;
  title: string;
  description: string;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border p-4 transition-colors duration-300",
        done
          ? "border-verified-500/40 bg-verified-100"
          : active
          ? "border-saffron-500/50 bg-saffron-100"
          : "border-slate-300/70 bg-white"
      )}
    >
      <span
        className={cn(
          "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
          done ? "bg-verified-500 text-paper" : active ? "bg-saffron-500 text-indigo-950" : "bg-slate-300 text-slate-500"
        )}
      >
        {done ? <CheckCircle2 size={14} aria-hidden="true" /> : <span className="h-2 w-2 rounded-full bg-current" />}
      </span>
      <div>
        <p className="text-sm font-semibold text-ink">{title}</p>
        <p className="text-xs leading-relaxed text-slate-600">{description}</p>
      </div>
    </div>
  );
}
