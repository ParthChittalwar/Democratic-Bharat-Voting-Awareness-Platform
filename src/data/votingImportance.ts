import type { VotingImportancePoint, StatHighlight } from "@/types";

export const votingImportancePoints: VotingImportancePoint[] = [
  {
    id: "representation",
    title: "Your vote chooses your representative",
    description:
      "Every Member of Parliament and Member of the Legislative Assembly is elected directly by voters in their constituency. Choosing not to vote means leaving that choice entirely to others.",
    icon: "landmark",
  },
  {
    id: "constitutional-right",
    title: "It is a constitutional right and duty",
    description:
      "Every Indian citizen aged 18 or above can register and vote, regardless of caste, religion, gender, or economic status — one of the founding promises of the Indian Constitution.",
    icon: "scale",
  },
  {
    id: "collective-voice",
    title: "Elections are a collective decision",
    description:
      "A single constituency can be decided by a small margin of votes. Local and national policy on education, healthcare, infrastructure, and employment is shaped by who turns out to vote.",
    icon: "users",
  },
  {
    id: "accountability",
    title: "Voting sustains accountability",
    description:
      "Regular, free elections are how citizens hold elected representatives accountable. Consistent voter turnout signals an engaged electorate that representatives must answer to.",
    icon: "shield-check",
  },
  {
    id: "informed-participation",
    title: "An informed vote is a stronger vote",
    description:
      "Understanding how candidates are chosen, how constituencies work, and how your vote is recorded and counted helps you participate with confidence rather than uncertainty.",
    icon: "book-open-check",
  },
  {
    id: "every-voice-counts",
    title: "Every voice adds to the count",
    description:
      "India's electorate is the largest in the world. That scale can make a single vote feel small — but every vote is recorded individually and counted in full.",
    icon: "vote",
  },
];

export const votingStats: StatHighlight[] = [
  {
    value: "~98 crore",
    label: "registered electors",
    caption: "Nearly 98 crore electors were registered for the 2024 general election — the largest electorate of any democracy in the world.",
  },
  {
    value: "10.5 lakh+",
    label: "polling stations",
    caption: "Set up across India during a general election, including remote and high-altitude areas.",
  },
  {
    value: "543",
    label: "Lok Sabha constituencies",
    caption: "Each electing one Member of Parliament directly.",
  },
  {
    value: "18 years",
    label: "minimum voting age",
    caption: "Set by the 61st Constitutional Amendment, 1988.",
  },
];
