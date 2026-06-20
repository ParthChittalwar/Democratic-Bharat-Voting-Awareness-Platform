import { privacyPolicySections } from "@/data/legal";
import { LegalPageShell } from "@/pages/LegalPageShell";
import { Callout } from "@/components/ui/Callout";

export function PrivacyPolicyPage() {
  return (
    <LegalPageShell eyebrow="Legal & Compliance" title="Privacy Policy">
      <Callout title="In short">
        No voting data, political preferences, or election choices are ever collected, stored, or transmitted by
        this platform — including within the fictional EVM Simulation.
      </Callout>
      {privacyPolicySections.map((section) => (
        <div key={section.id}>
          <h2 className="font-display text-xl font-medium text-ink">{section.title}</h2>
          <p className="mt-2.5 text-sm leading-relaxed text-slate-700 lg:text-base">{section.body}</p>
        </div>
      ))}
    </LegalPageShell>
  );
}
