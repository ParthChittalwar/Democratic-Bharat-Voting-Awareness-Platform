import type { EVMComponentInfo } from "@/types";

export const evmComponents: EVMComponentInfo[] = [
  {
    id: "ballot-unit",
    name: "Ballot Unit",
    shortName: "BU",
    purpose:
      "The part of the EVM that the voter actually touches — it displays every candidate's name, party symbol, and a blue button.",
    functions: [
      "Lists each candidate with their name, party symbol, and serial number",
      "Lets the voter cast a vote by pressing the blue button beside their chosen candidate",
      "One Ballot Unit can list up to 16 candidates; units can be linked together for constituencies with more candidates",
    ],
    workflow: [
      "Voter is verified and directed to the Ballot Unit by polling staff",
      "Voter presses the blue button beside their chosen candidate's symbol",
      "A short beep confirms the press; the button cannot be pressed again for that voter",
    ],
    icon: "ticket-check",
  },
  {
    id: "control-unit",
    name: "Control Unit",
    shortName: "CU",
    purpose:
      "The component operated by the presiding officer — it stores vote data and stays out of the voter's reach.",
    functions: [
      "Activated by the polling officer before each voter is permitted to vote",
      "Securely records and stores every vote cast, in the order it was cast",
      "Displays the total number of votes polled so far, but never candidate-wise tallies until counting day",
    ],
    workflow: [
      "Polling officer presses the 'Ballot' button to activate one vote",
      "Control Unit enables the Ballot Unit for exactly one vote",
      "Vote data is written to secure internal memory, and the unit locks again",
    ],
    icon: "cpu",
  },
  {
    id: "vvpat",
    name: "VVPAT",
    shortName: "Voter Verifiable Paper Audit Trail",
    purpose:
      "A printer unit attached to the Ballot Unit that gives the voter a visible, independent paper record of their vote.",
    functions: [
      "Prints a slip showing the candidate's serial number, name, and party symbol immediately after a vote is cast",
      "Displays the slip behind a glass window for about seven seconds so the voter can verify it",
      "Drops the slip into a sealed box for safekeeping — voters cannot take the slip with them",
    ],
    workflow: [
      "Vote is cast on the Ballot Unit",
      "VVPAT prints a slip and lights it for visual confirmation",
      "Slip automatically falls into a sealed drop box after the viewing window closes",
    ],
    icon: "printer-check",
  },
];
