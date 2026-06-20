import type { VVPATPoint } from "@/types";

export const vvpatPoints: VVPATPoint[] = [
  {
    id: "what",
    title: "What VVPAT is",
    description:
      "VVPAT stands for Voter Verifiable Paper Audit Trail. It is a printer-based unit attached to the EVM that produces a paper slip for every vote cast, independent of the electronic count.",
  },
  {
    id: "why",
    title: "Why it exists",
    description:
      "VVPAT gives voters a way to see, with their own eyes, that their vote was recorded for the candidate they chose — adding a physical, human-verifiable layer on top of the electronic record.",
  },
  {
    id: "verification",
    title: "How verification works",
    description:
      "After a vote is cast, the VVPAT slip is displayed behind a glass panel for about seven seconds, showing the candidate's serial number, name, and symbol, before dropping into a sealed box.",
  },
  {
    id: "transparency",
    title: "Transparency benefits",
    description:
      "On counting day, VVPAT slips from five randomly selected polling stations in every assembly constituency are manually counted and matched against the Control Unit's electronic tally, as directed by the Supreme Court in 2019.",
  },
];

export const vvpatViewingSeconds = 7;
