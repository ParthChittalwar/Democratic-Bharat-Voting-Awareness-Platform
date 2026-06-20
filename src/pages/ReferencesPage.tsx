import { ExternalLink } from "lucide-react";
import { referenceLinks } from "@/data/references";
import { LegalPageShell } from "@/pages/LegalPageShell";
import { Callout } from "@/components/ui/Callout";

export function ReferencesPage() {
  return (
    <LegalPageShell eyebrow="Sources" title="Sources & References">
      <Callout>
        This platform simplifies publicly available information for educational purposes. For authoritative,
        up-to-date detail, always refer to the Election Commission of India directly.
      </Callout>
      <ul className="space-y-4">
        {referenceLinks.map((ref) => (
          <li key={ref.id} className="rounded-xl border border-slate-300/70 bg-white p-5 shadow-card">
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-display text-lg font-medium text-indigo-900 hover:underline"
            >
              {ref.title}
              <ExternalLink size={14} aria-hidden="true" />
            </a>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-slate-500">{ref.publisher}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{ref.description}</p>
          </li>
        ))}
      </ul>
    </LegalPageShell>
  );
}
