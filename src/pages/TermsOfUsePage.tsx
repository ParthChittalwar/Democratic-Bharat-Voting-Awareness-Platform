import { termsOfUseSections } from "@/data/legal";
import { LegalPageShell } from "@/pages/LegalPageShell";

export function TermsOfUsePage() {
  return (
    <LegalPageShell eyebrow="Legal & Compliance" title="Terms of Use">
      {termsOfUseSections.map((section) => (
        <div key={section.id}>
          <h2 className="font-display text-xl font-medium text-ink">{section.title}</h2>
          <p className="mt-2.5 text-sm leading-relaxed text-slate-700 lg:text-base">{section.body}</p>
        </div>
      ))}
    </LegalPageShell>
  );
}
