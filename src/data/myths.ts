import type { Myth } from "@/types";

export const myths: Myth[] = [
  {
    id: "internet-connection",
    myth: "EVMs are connected to the internet.",
    fact: "EVMs are standalone devices with no networking hardware at all.",
    explanation:
      "An EVM has no Wi-Fi chip, Bluetooth radio, SIM slot, or any other wireless or wired networking hardware. It cannot connect to the internet, to another EVM, or to any server — not before, during, or after voting.",
  },
  {
    id: "remote-control",
    myth: "EVMs can be controlled or hacked remotely.",
    fact: "Remote control would require a network connection that does not exist on these devices.",
    explanation:
      "Because EVMs have no wireless or wired connectivity, there is no transmission path for a remote command to reach the device. Physical, numbered, tamper-evident seals are also checked at every handling stage so any physical interference would be visible.",
  },
  {
    id: "automatic-change",
    myth: "EVMs can be programmed in advance to favor a particular candidate.",
    fact: "Candidate order on the Ballot Unit is finalized only shortly before polling, and votes can be independently checked through VVPAT.",
    explanation:
      "Candidate names and symbols are loaded onto the Ballot Unit only after the candidate list for a constituency is finalized — close to the election itself. The VVPAT slip gives every voter a way to see their vote was recorded for their intended choice, and randomly selected slips are matched against electronic totals on counting day as an independent check.",
  },
  {
    id: "ordinary-computer",
    myth: "EVMs are ordinary computers, similar to a laptop or smartphone.",
    fact: "EVMs are purpose-built, single-function devices, not general-purpose computers.",
    explanation:
      "An EVM cannot run new software, browse the internet, or be repurposed for any task beyond recording and storing a vote. Its firmware is fixed at the time of manufacture and checked through certification processes before deployment.",
  },
  {
    id: "vote-count-mismatch",
    myth: "If EVM results don't match expectations, the machine must be faulty.",
    fact: "Election outcomes are shaped by many real factors — turnout, local issues, alliances — and a surprising result is not, by itself, evidence of a malfunction.",
    explanation:
      "Any specific, credible concern about a particular machine or constituency can be raised through established legal and procedural channels — including candidate agents present at counting, and the courts. VVPAT slip verification exists precisely to provide an independent check on outcomes.",
  },
  {
    id: "battery-tampering",
    myth: "EVMs can be tampered with through their battery or charging process.",
    fact: "EVMs use a sealed, one-way primary battery rather than a rechargeable, network-connected power system.",
    explanation:
      "The battery exists only to power the device for the duration of polling — it has no data interface, and replacing it does not provide any pathway to alter stored vote data, which is separately protected by the device's secure memory and seals.",
  },
  {
    id: "no-paper-trail",
    myth: "EVMs leave no record of individual votes, so nothing can ever be verified.",
    fact: "VVPAT exists specifically to create a voter-visible, physical record for every single vote.",
    explanation:
      "Since the 2019 general election, every polling station in the country has used VVPAT, which prints and briefly displays a paper slip for each vote. These slips are preserved and used for cross-verification against electronic totals.",
  },
];
