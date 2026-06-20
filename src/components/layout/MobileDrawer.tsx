import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navSections, quickLinks } from "@/data/nav";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const reducedMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={reducedMotion ? undefined : { height: 0, opacity: 0 }}
          animate={reducedMotion ? undefined : { height: "auto", opacity: 1 }}
          exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden border-t border-slate-300/70 bg-paper lg:hidden"
        >
          <div className="max-h-[75vh] overflow-y-auto px-5 py-5">
            {navSections.map((section) => (
              <div key={section.label} className="mb-5">
                <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-saffron-600">
                  {section.label}
                </p>
                <ul className="space-y-1">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={isHome ? link.href : `/${link.href}`}
                        onClick={onClose}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-indigo-50"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="mt-2 flex flex-wrap gap-3 border-t border-slate-300/70 pt-4">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="text-xs font-medium text-slate-500 hover:text-indigo-900"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
