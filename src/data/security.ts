import type { SecurityFeature } from "@/types";

export const securityFeatures: SecurityFeature[] = [
  {
    id: "standalone",
    title: "Standalone architecture",
    description:
      "Each EVM is an independent, single-purpose device. It has no operating system to install software on and cannot run anything beyond its built-in firmware.",
    icon: "cpu",
  },
  {
    id: "no-internet",
    title: "No internet or wireless connectivity",
    description:
      "EVMs have no Wi-Fi, Bluetooth, SIM, or network hardware of any kind. They are not connected to each other, to the internet, or to any central server — at any point, including during counting.",
    icon: "wifi-off",
  },
  {
    id: "battery-powered",
    title: "Battery powered",
    description:
      "EVMs run on a sealed internal battery, which means they can be used in areas without reliable electricity — and removes any possibility of tampering through a powered network connection.",
    icon: "battery-charging",
  },
  {
    id: "physical-seals",
    title: "Tamper-evident physical seals",
    description:
      "EVMs are sealed with numbered paper seals at multiple points after candidate setting. Any attempt to open the machine would visibly break these seals, which are checked at every stage.",
    icon: "stamp",
  },
  {
    id: "flc",
    title: "First Level Checking",
    description:
      "Before every election, engineers from the manufacturers (BEL or ECIL) test each EVM and VVPAT in the presence of political party representatives, who can object to and reject any unit.",
    icon: "clipboard-check",
  },
  {
    id: "randomization",
    title: "Two rounds of randomization",
    description:
      "Which EVM goes to which constituency, and then to which specific polling station, is decided through a randomized computerized process — done twice, with political party representatives present.",
    icon: "key-round",
  },
  {
    id: "mock-poll",
    title: "Mock poll before voting begins",
    description:
      "On election morning, a mock poll is conducted in front of polling agents from contesting candidates, who can verify the machine is recording votes correctly before it is sealed for real voting.",
    icon: "clipboard-list",
  },
  {
    id: "strong-room",
    title: "Strong-room storage with round-the-clock security",
    description:
      "After polling, sealed EVMs are transported under armed escort to strong rooms, which remain under CCTV surveillance and security guard until counting day, with candidates' representatives permitted to keep watch.",
    icon: "lock-keyhole",
  },
  {
    id: "vvpat-cross-check",
    title: "VVPAT cross-verification",
    description:
      "Court-mandated, randomly selected VVPAT slip counts are matched against the electronic tally as an independent check before results are finalized.",
    icon: "scan-eye",
  },
];
