import { electionDaySteps } from "@/data/electionDay";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MilestoneRail } from "@/components/diagrams/MilestoneRail";

export function ElectionDayWorkflow() {
  return (
    <Section id="election-day" tone="dim">
      <SectionHeader
        eyebrow="Election Day Workflow"
        title="From poll setup to counting day"
        description="An election doesn't end when voting closes. Here's everything that happens to an EVM and its votes, in order."
      />
      <div className="mt-12">
        <MilestoneRail
          items={electionDaySteps.map((step) => ({
            id: step.id,
            marker: `Step ${String(step.order).padStart(2, "0")}`,
            title: step.title,
            description: step.description,
            icon: step.icon,
          }))}
        />
      </div>
    </Section>
  );
}
