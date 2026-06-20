import {
  educationalDisclaimer,
  politicalNeutralityStatement,
  nonAffiliationNotice,
  accuracyNotice,
  contentIntegrityPolicy,
} from "@/data/legal";
import { LegalPageShell } from "@/pages/LegalPageShell";

function TextBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="font-display text-xl font-medium text-ink">{title}</h2>
      <div className="mt-2.5 space-y-3 text-sm leading-relaxed text-slate-700 lg:text-base">
        {body.split("\n\n").map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export function DisclaimerPage() {
  return (
    <LegalPageShell eyebrow="Legal & Compliance" title="Disclaimer">
      <TextBlock title="Educational Purpose" body={educationalDisclaimer} />
      <TextBlock title="Political Neutrality" body={politicalNeutralityStatement} />
      <TextBlock title="Non-Affiliation Notice" body={nonAffiliationNotice} />
      <TextBlock title="Accuracy Notice" body={accuracyNotice} />
      <TextBlock title="Content Integrity Policy" body={contentIntegrityPolicy} />
    </LegalPageShell>
  );
}
