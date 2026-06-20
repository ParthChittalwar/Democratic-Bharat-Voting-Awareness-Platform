import { voteJourneySteps } from "@/data/voteJourney";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FlowRail } from "@/components/diagrams/FlowRail";

export function VoteJourney() {
  return (
    <Section id="vote-journey" tone="paper">
      <SectionHeader
        eyebrow="Vote Journey"
        title="Follow one vote, start to finish"
        description="From the moment a button is pressed to the moment it's counted, every vote follows the same fixed path. Nothing about this path touches the internet."
      />
      <div className="mt-12">
        <FlowRail steps={voteJourneySteps} />
      </div>
    </Section>
  );
}
