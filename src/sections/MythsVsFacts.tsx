import { myths } from "@/data/myths";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FlipCard } from "@/components/ui/FlipCard";

export function MythsVsFacts() {
  return (
    <Section id="myths" tone="indigo">
      <SectionHeader
        eyebrow="Myths vs Facts"
        title="Common misconceptions, addressed directly"
        description="Healthy skepticism about election infrastructure is reasonable — and worth answering with specifics rather than dismissal. Tap any card to flip it."
        tone="light"
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {myths.map((myth) => (
          <FlipCard key={myth.id} myth={myth} />
        ))}
      </div>
    </Section>
  );
}
