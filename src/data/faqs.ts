import type { FAQ } from "@/types";

export const faqs: FAQ[] = [
  {
    id: "how-evm-works",
    question: "How does an EVM work, in simple terms?",
    answer:
      "A voter presses a button beside their chosen candidate's name on the Ballot Unit. The Control Unit, operated by a polling officer, records that vote securely. If VVPAT is attached (as it always is today), a paper slip briefly appears so the voter can confirm their choice before it's stored in a sealed box.",
  },
  {
    id: "what-is-vvpat-faq",
    question: "What is VVPAT?",
    answer:
      "VVPAT stands for Voter Verifiable Paper Audit Trail. It's a printer attached to the EVM that produces a paper slip for every vote, shown to the voter for about seven seconds, giving an independent, physical way to verify the vote was recorded correctly.",
  },
  {
    id: "can-votes-be-modified",
    question: "Can votes be modified after they're cast?",
    answer:
      "EVMs have no networking hardware, so there is no remote pathway to alter stored votes. Physical seals make undetected tampering with the device itself difficult, and VVPAT slips provide an independent paper record that can be checked against the electronic count.",
  },
  {
    id: "how-counted",
    question: "How are votes counted?",
    answer:
      "On counting day, Control Units are opened in a counting hall under observation from candidate representatives and officials. Vote totals are read out for each EVM, and VVPAT slips from five randomly selected polling stations per assembly constituency are manually counted and matched against the electronic totals.",
  },
  {
    id: "why-introduced",
    question: "Why was the EVM introduced in the first place?",
    answer:
      "Paper ballots at India's scale were logistically demanding to print, transport, and count, and were vulnerable to specific problems like ballot-box capturing and a high rate of invalid votes. EVMs were introduced to address these issues, after a legal framework for their use was established in 1989.",
  },
  {
    id: "first-time-voter",
    question: "I'm voting for the first time — what should I expect at the polling station?",
    answer:
      "You'll be checked against the electoral roll and asked for ID, directed to the EVM, and shown where to press the button for your chosen candidate. A polling agent or officer will guide you if needed, and you'll see a VVPAT slip appear briefly to confirm your vote before it drops into a sealed box.",
  },
  {
    id: "evm-malfunction",
    question: "What happens if an EVM malfunctions during voting?",
    answer:
      "Polling staff are trained to identify malfunctions, and a backup EVM is kept at every polling station precisely for this situation. If a unit needs to be replaced, votes already cast on the previous unit remain securely stored on it and are included during counting.",
  },
  {
    id: "secret-ballot",
    question: "Does anyone know who I voted for?",
    answer:
      "No. The Control Unit records that a vote was cast and for which candidate, but it does not record any information that links a specific vote to a specific voter's identity, preserving the secrecy of the ballot.",
  },
];
