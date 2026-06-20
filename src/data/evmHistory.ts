import type { TimelineEvent } from "@/types";

export const evmHistoryTimeline: TimelineEvent[] = [
  {
    id: "1977-proposal",
    year: "1977",
    title: "The idea is proposed",
    description:
      "The Election Commission of India first discussed the idea of an electronic alternative to paper ballots, and asked Bharat Electronics Limited (BEL) and the Electronics Corporation of India Limited (ECIL) to develop a prototype.",
    icon: "sparkles",
  },
  {
    id: "1982-trial",
    year: "1982",
    title: "First experimental use, Kerala",
    description:
      "EVMs were trialled for the first time in 50 polling stations of the Parur (North Paravur) assembly constituency in Kerala during a by-election.",
    icon: "history",
  },
  {
    id: "1984-court",
    year: "1984",
    title: "Supreme Court pauses EVM use",
    description:
      "The Supreme Court set aside the Parur result, ruling that EVMs could not be used without a specific legal provision permitting them.",
    icon: "scale",
  },
  {
    id: "1989-law",
    year: "1989",
    title: "Law amended to permit EVMs",
    description:
      "Parliament amended the Representation of the People Act, 1951, inserting Section 61A to formally empower the Election Commission to use voting machines.",
    icon: "file-check-2",
  },
  {
    id: "2000s-adoption",
    year: "1998–2003",
    title: "Gradual state-level adoption",
    description:
      "EVMs were progressively used in more state assembly elections and by-elections through the late 1990s and early 2000s, alongside continued use of paper ballots elsewhere.",
    icon: "history",
  },
  {
    id: "2004-national",
    year: "2004",
    title: "First nationwide EVM general election",
    description:
      "The 2004 Lok Sabha general election was the first to use EVMs in all 543 parliamentary constituencies, marking the end of paper ballots in national elections.",
    icon: "monitor-check",
  },
  {
    id: "2013-vvpat-trial",
    year: "2013",
    title: "VVPAT piloted",
    description:
      "The Voter Verifiable Paper Audit Trail (VVPAT) was piloted in a by-election at Noksen, Nagaland, adding a printed, voter-visible paper record to the electronic process.",
    icon: "printer-check",
  },
  {
    id: "2014-vvpat-expansion",
    year: "2014",
    title: "VVPAT expands",
    description:
      "Following a Supreme Court directive, VVPAT units were deployed in eight Lok Sabha constituencies during the 2014 general election as part of a phased rollout.",
    icon: "printer-check",
  },
  {
    id: "2019-vvpat-full",
    year: "2019",
    title: "VVPAT at every polling station",
    description:
      "By the 2019 general election, VVPAT units were deployed alongside EVMs at every polling station nationwide. The Supreme Court also raised mandatory VVPAT slip verification from one to five randomly selected polling stations per assembly constituency.",
    icon: "shield-check",
  },
  {
    id: "today",
    year: "Today",
    title: "Continued use and oversight",
    description:
      "EVMs and VVPATs remain in use for all Lok Sabha and State Assembly elections, with ongoing technical checks, legal scrutiny, and public debate as part of India's democratic process.",
    icon: "vote",
  },
];
