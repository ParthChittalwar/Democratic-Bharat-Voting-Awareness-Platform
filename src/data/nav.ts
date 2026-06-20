import type { NavSection } from "@/types";

export const navSections: NavSection[] = [
  {
    label: "Learn",
    links: [
      { label: "Why Voting Matters", href: "#importance", description: "Civic responsibility and participation" },
      { label: "Indian Democracy", href: "#democracy", description: "How representation works" },
      { label: "What is an EVM?", href: "#what-is-evm", description: "History and evolution" },
      { label: "EVM Components", href: "#evm-components", description: "Ballot Unit, Control Unit, VVPAT" },
    ],
  },
  {
    label: "Explore",
    links: [
      { label: "Try the EVM Simulation", href: "#simulation", description: "A guided, fictional walk-through" },
      { label: "Vote Journey", href: "#vote-journey", description: "From button press to counting" },
      { label: "VVPAT Explained", href: "#vvpat", description: "How a vote is verified" },
      { label: "Security Features", href: "#security", description: "Seals, checks, and safeguards" },
    ],
  },
  {
    label: "Reference",
    links: [
      { label: "Election Day Workflow", href: "#election-day", description: "From setup to counting day" },
      { label: "Myths vs Facts", href: "#myths", description: "Common misconceptions, addressed" },
      { label: "FAQ", href: "#faq", description: "Quick answers" },
      { label: "Sources & References", href: "/references", description: "Where this content comes from" },
    ],
  },
];

export const quickLinks = [
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Sources & References", href: "/references" },
];
