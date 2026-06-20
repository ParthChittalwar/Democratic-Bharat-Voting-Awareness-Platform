import type { FutureTopic } from "@/types";

export const futureTopics: FutureTopic[] = [
  {
    id: "paper-to-evm",
    title: "From paper ballots to EVMs",
    era: "1950s–2004",
    description:
      "India's earliest elections relied entirely on paper ballots and ballot boxes — a process that was logistically demanding at national scale and vulnerable to issues like booth capturing and invalid votes. EVMs were introduced specifically to address these challenges.",
  },
  {
    id: "vvpat-era",
    title: "Adding the VVPAT layer",
    era: "2013–2019",
    description:
      "As EVM use scaled nationally, the VVPAT was introduced to answer a reasonable public question: how can a voter independently confirm their vote was recorded correctly? VVPAT gave the system a human-readable, physical audit trail.",
  },
  {
    id: "ongoing-tech",
    title: "Ongoing technical evolution",
    era: "2019–present",
    description:
      "EVM hardware itself has gone through generations (often referred to as M1, M2, and M3), each adding security and reliability features such as improved tamper detection and self-diagnostics, reviewed by technical expert committees.",
  },
  {
    id: "open-questions",
    title: "Continuing scrutiny and debate",
    description:
      "Like any element of election administration, EVMs and VVPATs remain subject to legal challenges, audits, and public debate — including ongoing discussions about expanding VVPAT verification further. This kind of scrutiny is a normal, healthy part of a functioning democracy.",
  },
  {
    id: "innovation-opportunities",
    title: "Where innovation could go next",
    description:
      "Possible future directions discussed by election technologists and policy researchers include improved accessibility for voters with disabilities, better multilingual interfaces, and stronger software-independent verification — though any change of this kind would require new legal provisions, just as EVMs themselves once did.",
  },
];
