import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Landmark } from "lucide-react";
import { navSections } from "@/data/nav";
import { siteMeta } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { cn } from "@/utils/cn";

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrollProgress, setScrollProgress] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setScrollProgress(scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0);
      setElevated(doc.scrollTop > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-shadow duration-300",
        elevated ? "bg-paper/95 shadow-card backdrop-blur-md" : "bg-paper/80 backdrop-blur-sm"
      )}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-3.5 lg:px-10">
        <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-semibold text-indigo-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-900 text-paper">
            <Landmark size={18} aria-hidden="true" />
          </span>
          {siteMeta.siteName}
        </Link>

        {/* Desktop nav: mega menu */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navSections.map((section) => (
            <li
              key={section.label}
              className="relative"
              onMouseEnter={() => setActiveMenu(section.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-indigo-50 hover:text-indigo-900"
                aria-expanded={activeMenu === section.label}
                onFocus={() => setActiveMenu(section.label)}
              >
                {section.label}
              </button>
              <div
                className={cn(
                  "absolute left-1/2 top-full w-72 -translate-x-1/2 pt-2 transition-all duration-200",
                  activeMenu === section.label
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0"
                )}
              >
                <div className="rounded-xl border border-slate-300/70 bg-white p-2 shadow-card-hover">
                  {section.links.map((link) => (
                    <a
                      key={link.label}
                      href={isHome ? link.href : `/${link.href}`}
                      className="block rounded-lg px-3.5 py-2.5 transition-colors hover:bg-indigo-50"
                      onClick={() => setActiveMenu(null)}
                    >
                      <span className="block text-sm font-medium text-ink">{link.label}</span>
                      {link.description && (
                        <span className="mt-0.5 block text-xs text-slate-500">{link.description}</span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button size="md" onClick={() => (window.location.href = "#simulation")}>
            Try the Simulation
          </Button>
        </div>

        <button
          className="rounded-full p-2 text-indigo-900 hover:bg-indigo-50 lg:hidden"
          aria-label={drawerOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen((open) => !open)}
        >
          {drawerOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Scroll progress — wayfinding strip, civic-kiosk feel */}
      <div className="h-[3px] w-full bg-slate-300/40">
        <div
          className="h-full bg-saffron-500 transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </div>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
