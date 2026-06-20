import { motion } from "framer-motion";
import { heroContent } from "@/data/hero";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-paper">
      <div
        className="perforated-edge absolute inset-x-0 bottom-0 h-3 opacity-60"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:px-10 lg:py-24 xl:py-28">
        {/* Copy */}
        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, y: 24 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-900/15 bg-indigo-50 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wide text-indigo-900">
            {heroContent.eyebrow}
          </p>
          <h1 className="max-w-xl font-display text-4xl font-medium leading-[1.08] text-ink lg:text-5xl xl:text-[3.4rem]">
            {heroContent.headline}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-700 lg:text-lg">
            {heroContent.subheadline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              icon={<ArrowRight size={18} />}
              onClick={() => document.querySelector(heroContent.primaryCta.href)?.scrollIntoView({ behavior: "smooth" })}
            >
              {heroContent.primaryCta.label}
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => document.querySelector(heroContent.secondaryCta.href)?.scrollIntoView({ behavior: "smooth" })}
            >
              {heroContent.secondaryCta.label}
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-300/70 pt-8">
            {heroContent.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-medium text-indigo-900 lg:text-3xl">{stat.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-slate-500 lg:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Interactive EVM illustration */}
        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <HeroEvmIllustration />
        </motion.div>
      </div>
    </section>
  );
}

function HeroEvmIllustration() {
  return (
    <svg
      viewBox="0 0 560 480"
      className="h-auto w-full"
      role="img"
      aria-label="Stylized illustration of an EVM Ballot Unit and Control Unit connected by a cable"
    >
      <defs>
        <linearGradient id="cuGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#14365f" />
          <stop offset="100%" stopColor="#0e2a4d" />
        </linearGradient>
      </defs>

      {/* backdrop seal ring */}
      <circle cx="280" cy="240" r="220" fill="#f1f5f9" />
      <circle cx="280" cy="240" r="220" fill="none" stroke="#cbd2d9" strokeWidth="1.5" strokeDasharray="4 6" />

      {/* Control Unit */}
      <g>
        <rect x="60" y="150" width="150" height="190" rx="14" fill="url(#cuGrad)" />
        <rect x="80" y="172" width="110" height="46" rx="6" fill="#0b1220" />
        <text x="135" y="200" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="13" fill="#1b8a5a">
          READY
        </text>
        {[0, 1, 2].map((row) => (
          <g key={row}>
            {[0, 1, 2].map((col) => (
              <circle key={col} cx={92 + col * 28} cy={246 + row * 28} r="8" fill="#fef0dd" stroke="#d97a1f" strokeWidth="1.5" />
            ))}
          </g>
        ))}
        <text x="135" y="365" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#faf9f6">
          Control Unit
        </text>
      </g>

      {/* Cable */}
      <path d="M210 230 C 250 230, 250 190, 300 190" stroke="#6b7280" strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* Ballot Unit */}
      <g>
        <rect x="300" y="120" width="200" height="260" rx="14" fill="#faf9f6" stroke="#cbd2d9" strokeWidth="1.5" />
        <rect x="316" y="138" width="168" height="20" rx="4" fill="#0e2a4d" />
        {["Candidate A", "Candidate B", "Candidate C"].map((label, index) => (
          <g key={label}>
            <rect x="316" y={172 + index * 56} width="168" height="44" rx="8" fill="#ffffff" stroke="#cbd2d9" />
            <circle cx="334" cy={194 + index * 56} r="9" fill="#0e2a4d" />
            <text x="334" y={198 + index * 56} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#faf9f6">
              {index + 1}
            </text>
            <text x="354" y={198 + index * 56} fontFamily="Inter, sans-serif" fontSize="12" fill="#0b1220">
              {label}
            </text>
            <circle cx="468" cy={194 + index * 56} r="9" fill="#1c4878" />
          </g>
        ))}
        <text x="400" y="358" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#0e2a4d">
          Ballot Unit
        </text>
      </g>

      {/* floating seal badge */}
      <g transform="translate(420, 70)">
        <circle cx="0" cy="0" r="34" fill="#ff9933" />
        <circle cx="0" cy="0" r="34" fill="none" stroke="#faf9f6" strokeWidth="3" strokeDasharray="3 4" />
        <text x="0" y="5" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" fontWeight="700" fill="#0b1220">
          SEALED
        </text>
      </g>
    </svg>
  );
}
