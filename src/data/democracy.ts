import type { DemocracyTopic } from "@/types";

export const democracyTopics: DemocracyTopic[] = [
  {
    id: "what-is-democracy",
    title: "What democracy means",
    summary:
      "A system where political power comes from the people, exercised through free and fair elections.",
    details: [
      "India is described in its Constitution as a 'Sovereign Socialist Secular Democratic Republic' — power rests with citizens, who exercise it by electing representatives.",
      "Democracy is renewed at fixed intervals: general elections to the Lok Sabha are held roughly every five years, with State Assembly elections on their own cycles.",
      "Universal adult suffrage — one adult, one vote, one value — has applied since India's first general election in 1951–52, regardless of caste, religion, gender, or property.",
    ],
    icon: "landmark",
  },
  {
    id: "eci",
    title: "The Election Commission of India",
    summary:
      "An independent constitutional body responsible for administering elections across the country.",
    details: [
      "Established under Article 324 of the Constitution, the Election Commission of India (ECI) plans and conducts elections to the Lok Sabha, Rajya Sabha, State Legislatures, and the offices of President and Vice President.",
      "It is independent of the executive government — its role includes preparing electoral rolls, enforcing the Model Code of Conduct, and certifying election results.",
      "The ECI also manages the rollout, testing, and security protocols for EVMs and VVPATs, often in consultation with technical expert committees.",
    ],
    icon: "scale",
  },
  {
    id: "lok-sabha",
    title: "Lok Sabha elections",
    summary:
      "India's House of the People, with 543 directly elected constituencies.",
    details: [
      "The Lok Sabha is the lower house of Parliament. Its members are directly elected by voters from single-member constituencies across the country.",
      "India uses the First-Past-The-Post system for these seats: the candidate who receives the most votes in a constituency wins, regardless of whether they cross 50%.",
      "A government is typically formed by the party or coalition that can command a majority of seats in the Lok Sabha.",
    ],
    icon: "landmark",
  },
  {
    id: "state-assembly",
    title: "State Assembly elections",
    summary:
      "Each state elects its own Legislative Assembly (Vidhan Sabha) to govern state-level matters.",
    details: [
      "State Assemblies handle subjects like state policing, agriculture, and local infrastructure, distinct from national subjects handled by Parliament.",
      "Assembly elections can happen on a different schedule from Lok Sabha elections, and sometimes alongside them.",
      "The same EVM and VVPAT system used in national elections is used for state elections.",
    ],
    icon: "users",
  },
  {
    id: "representation",
    title: "How representation works",
    summary:
      "Every constituency sends one elected representative to speak and vote on its behalf.",
    details: [
      "Constituencies are geographic divisions — each one elects a single MP (for Lok Sabha) or MLA (for an Assembly).",
      "Constituency boundaries are periodically reviewed through a process called delimitation, aimed at keeping representation broadly proportional to population.",
      "Elected representatives are expected to represent every resident of their constituency, not only those who voted for them.",
    ],
    icon: "map-pin",
  },
  {
    id: "rights-responsibilities",
    title: "Citizen rights and responsibilities",
    summary:
      "Voting is a right protected by law — and a responsibility that sustains democratic government.",
    details: [
      "Any Indian citizen aged 18 or above, registered on the electoral roll of their constituency, is entitled to vote.",
      "Voting is voluntary in India — there is no legal penalty for not voting — but participation strengthens the legitimacy of elected government.",
      "Citizens also have the right to verify their own enrollment, raise objections about the electoral roll, and contest elections if they meet eligibility criteria.",
    ],
    icon: "shield-check",
  },
];
