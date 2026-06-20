import { faqs } from "@/data/faqs";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";

export function FAQSection() {
  return (
    <Section id="faq" tone="dim" narrow>
      <SectionHeader
        eyebrow="Frequently Asked Questions"
        title="Quick answers to common questions"
        align="left"
      />
      <div className="mt-10">
        <Accordion items={faqs} />
      </div>
    </Section>
  );
}
