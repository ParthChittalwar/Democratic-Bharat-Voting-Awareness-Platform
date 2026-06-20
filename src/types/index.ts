/**
 * Central type definitions for Democratic Bharat.
 *
 * Every educational content block on the site is typed here and lives in
 * `src/data/*.ts`. Components only ever *consume* these shapes — they never
 * hardcode copy. To add or edit content, see CONTRIBUTING.md.
 */

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavSection {
  label: string;
  links: NavLink[];
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: { value: string; label: string }[];
}

export interface StatHighlight {
  value: string;
  label: string;
  caption?: string;
}

export interface VotingImportancePoint {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface DemocracyTopic {
  id: string;
  title: string;
  summary: string;
  details: string[];
  icon: IconName;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  icon?: IconName;
}

export interface EVMComponentInfo {
  id: string;
  name: string;
  shortName: string;
  purpose: string;
  functions: string[];
  workflow: string[];
  icon: IconName;
}

export interface SimulationCandidate {
  id: string;
  label: string;
  party: string;
  symbol: IconName;
}

export interface VoteJourneyStep {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface VVPATPoint {
  id: string;
  title: string;
  description: string;
}

export interface SecurityFeature {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface ElectionDayStep {
  id: string;
  order: number;
  title: string;
  description: string;
  icon: IconName;
}

export interface FutureTopic {
  id: string;
  title: string;
  description: string;
  era?: string;
}

export interface Myth {
  id: string;
  myth: string;
  fact: string;
  explanation: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ReferenceLink {
  id: string;
  title: string;
  publisher: string;
  url: string;
  description: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: IconName;
}

export interface SiteMeta {
  siteName: string;
  title: string;
  description: string;
  url: string;
  locale: string;
  themeColor: string;
  ogImage: string;
  twitterHandle?: string;
  keywords: string[];
}

/**
 * Restricted union of lucide-react icon names actually used across the
 * project. Keeping this as a union (rather than `string`) means a typo in a
 * data file fails at compile time instead of silently rendering nothing.
 */
export type IconName =
  | "vote"
  | "shield-check"
  | "shield-alert"
  | "landmark"
  | "users"
  | "scale"
  | "file-check-2"
  | "lock"
  | "lock-keyhole"
  | "wifi-off"
  | "cpu"
  | "monitor-check"
  | "printer-check"
  | "scan-eye"
  | "package-check"
  | "truck"
  | "calendar-check"
  | "calendar-clock"
  | "clipboard-check"
  | "clipboard-list"
  | "check-circle-2"
  | "circle-x"
  | "info"
  | "history"
  | "sparkles"
  | "map-pin"
  | "school"
  | "hand-heart"
  | "megaphone"
  | "book-open-check"
  | "github"
  | "linkedin"
  | "youtube"
  | "instagram"
  | "globe"
  | "battery-charging"
  | "key-round"
  | "stamp"
  | "ticket-check"
  | "database"
  | "eye"
  | "alert-triangle"
  | "flag";
