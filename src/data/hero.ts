import type { HeroContent } from "@/types";

export const heroContent: HeroContent = {
  eyebrow: "An Independent Civic Education Initiative",
  headline: "Understanding India's Electronic Voting Machine",
  subheadline:
    "Explore how votes are cast, recorded, verified, secured, and counted through India's electronic voting system — through interactive diagrams, a guided simulation, and plain-language explainers.",
  primaryCta: { label: "Start Exploring", href: "#what-is-evm" },
  secondaryCta: { label: "How EVM Works", href: "#evm-components" },
  stats: [
    { value: "1982", label: "First EVM trial, Kerala" },
    { value: "2004", label: "First nationwide EVM election" },
    { value: "2019", label: "VVPAT used at every polling station" },
  ],
};
