import { evmHistoryTimeline } from "@/data/evmHistory";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MilestoneRail } from "@/components/diagrams/MilestoneRail";
import { Callout } from "@/components/ui/Callout";

export function WhatIsEVM() {
  return (
    <Section id="what-is-evm" tone="dim">
      <SectionHeader
        eyebrow="What is an EVM?"
        title="A purpose-built device for casting and recording one vote at a time"
        description="An Electronic Voting Machine (EVM) replaces the paper ballot and ballot box with a small, sealed, battery-powered device. Its job is narrow and specific: record exactly one vote per voter, accurately and securely."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Callout title="Why it replaced paper ballots">
          Paper ballots at India's scale were expensive to print and transport, and were vulnerable to specific
          problems such as ballot-box capturing and a high rate of accidentally invalid votes. EVMs were designed
          to directly address both.
        </Callout>
        <Callout title="Benefit: faster, cleaner counting">
          Counting an EVM's stored tally takes a fraction of the time needed to manually sort and count paper
          ballots, reducing errors introduced during manual tallying.
        </Callout>
        <Callout title="Benefit: virtually no invalid votes">
          Because a voter can only press one button per candidate, the EVM removes the ambiguous or incorrectly
          marked ballots that paper voting sometimes produced.
        </Callout>
      </div>

      <div className="mt-14">
        <h3 className="mb-6 font-display text-xl font-medium text-ink lg:text-2xl">A timeline of EVM evolution</h3>
        <MilestoneRail
          items={evmHistoryTimeline.map((event) => ({
            id: event.id,
            marker: event.year,
            title: event.title,
            description: event.description,
            icon: event.icon,
          }))}
        />
      </div>
    </Section>
  );
}
