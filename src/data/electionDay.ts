import type { ElectionDayStep } from "@/types";

export const electionDaySteps: ElectionDayStep[] = [
  {
    id: "poll-setup",
    order: 1,
    title: "Poll Setup",
    description:
      "Polling staff arrive early, set up the polling station, and prepare the EVM and VVPAT with candidate details already loaded during the candidate-setting process.",
    icon: "clipboard-list",
  },
  {
    id: "mock-poll",
    order: 2,
    title: "Mock Poll",
    description:
      "A test round of voting is conducted in front of polling agents from each candidate, who verify the result before the machine is cleared and sealed for the real vote.",
    icon: "clipboard-check",
  },
  {
    id: "voting-begins",
    order: 3,
    title: "Voting Begins",
    description:
      "Polling opens at the scheduled hour. Each voter is verified against the electoral roll and identity documents before being allowed to cast a vote.",
    icon: "vote",
  },
  {
    id: "voting-ends",
    order: 4,
    title: "Voting Ends",
    description:
      "Polling closes at the scheduled hour, though voters already in queue at that time are typically still permitted to vote.",
    icon: "calendar-clock",
  },
  {
    id: "sealing",
    order: 5,
    title: "Sealing Process",
    description:
      "The Control Unit and VVPAT are sealed in the presence of polling agents, who can also affix their own signatures or seals as witnesses.",
    icon: "stamp",
  },
  {
    id: "transportation",
    order: 6,
    title: "Transportation",
    description:
      "Sealed units are transported under security escort to a designated strong room, with movement typically logged and, in many cases, accompanied by candidate representatives.",
    icon: "truck",
  },
  {
    id: "counting-day",
    order: 7,
    title: "Counting Day",
    description:
      "On a separate, scheduled date, Control Units are opened in a counting hall under observation, vote totals are read out, and VVPAT slips from randomly selected polling stations are matched against them.",
    icon: "package-check",
  },
];
