import type { VoteJourneyStep, SimulationCandidate } from "@/types";

export const voteJourneySteps: VoteJourneyStep[] = [
  {
    id: "vote-cast",
    title: "Vote Cast",
    description: "Voter presses the blue button beside their chosen candidate on the Ballot Unit.",
    icon: "vote",
  },
  {
    id: "ballot-unit",
    title: "Ballot Unit",
    description: "The press is registered and a confirmation beep sounds. The button cannot be used again for this voter.",
    icon: "ticket-check",
  },
  {
    id: "control-unit",
    title: "Control Unit",
    description: "The Control Unit, held by the presiding officer, receives and securely records the vote.",
    icon: "cpu",
  },
  {
    id: "secure-storage",
    title: "Secure Memory",
    description: "The vote is written to tamper-resistant internal memory, with no network connection of any kind.",
    icon: "database",
  },
  {
    id: "vvpat-verification",
    title: "VVPAT Verification",
    description: "A printed slip appears for about seven seconds so the voter can independently verify their choice.",
    icon: "printer-check",
  },
  {
    id: "counting-center",
    title: "Counting Center",
    description: "On counting day, the Control Unit's stored tally is read out and matched against VVPAT slips from randomly selected polling stations.",
    icon: "check-circle-2",
  },
];

/**
 * Entirely fictional candidates used for the interactive EVM simulation.
 * No resemblance to any real political party, candidate, or symbol is
 * intended — see the simulation's own in-UI disclaimer as well.
 */
export const simulationCandidates: SimulationCandidate[] = [
  { id: "candidate-a", label: "Candidate A", party: "Fictional Party — Example Only", symbol: "sparkles" },
  { id: "candidate-b", label: "Candidate B", party: "Fictional Party — Example Only", symbol: "flag" },
  { id: "candidate-c", label: "Candidate C", party: "Fictional Party — Example Only", symbol: "globe" },
];
