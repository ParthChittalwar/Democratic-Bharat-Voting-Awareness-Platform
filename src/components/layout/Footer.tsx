import { Link } from "react-router-dom";
import { Landmark } from "lucide-react";
import { socialLinks, creatorProfile } from "@/data/socials";
import { siteMeta } from "@/data/site";
import { footerNote, globalFooterDisclaimer } from "@/data/legal";
import { quickLinks } from "@/data/nav";
import { getIcon } from "@/utils/icons";

export function Footer() {
  return (
    <footer className="border-t border-slate-300/70 bg-indigo-950 text-indigo-100">
      <div className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + mission */}
          <div>
            <div className="flex items-center gap-2.5 font-display text-lg font-semibold text-paper">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-saffron-500 text-indigo-950">
                <Landmark size={18} aria-hidden="true" />
              </span>
              {siteMeta.siteName}
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-indigo-200">{footerNote}</p>
          </div>

          {/* Legal links */}
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-wide text-saffron-500">
              Legal &amp; Compliance
            </p>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-indigo-200 transition-colors hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer attribution */}
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-wide text-saffron-500">
              Developed &amp; Designed by
            </p>
            <p className="text-sm font-semibold text-paper">{creatorProfile.name}</p>
            <p className="text-sm text-indigo-200">
              {creatorProfile.role} · {creatorProfile.tagline}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const Icon = getIcon(social.icon);
                return (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-indigo-700 text-indigo-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-saffron-500 hover:text-saffron-500"
                    >
                      <Icon size={16} aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-indigo-800 pt-6">
          <p className="text-center font-mono text-[0.7rem] uppercase tracking-[0.12em] text-indigo-300">
            {globalFooterDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
