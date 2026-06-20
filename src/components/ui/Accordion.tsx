import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-slate-300/70 rounded-2xl border border-slate-300/70 bg-white", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-panel-${item.id}`;
        const buttonId = `${baseId}-button-${item.id}`;
        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-indigo-50/60 lg:px-6 lg:py-5"
              >
                <span className="font-medium text-ink lg:text-lg">{item.question}</span>
                <ChevronDown
                  aria-hidden="true"
                  size={20}
                  className={cn(
                    "shrink-0 text-indigo-900 transition-transform duration-300",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <p className="px-5 pb-5 leading-relaxed text-slate-700 lg:px-6 lg:pb-6">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
