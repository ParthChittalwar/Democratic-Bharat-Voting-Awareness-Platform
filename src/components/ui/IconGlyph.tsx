import type { LucideProps } from "lucide-react";
import { getIcon } from "@/utils/icons";
import type { IconName } from "@/types";

interface IconGlyphProps extends LucideProps {
  icon: IconName;
}

/**
 * Renders an icon looked up by name from our fixed icon registry
 * (`getIcon`). The lookup always resolves to a stable, pre-existing
 * component reference from a constant map — it never defines a new
 * component type at render time — so the rule disabled below is a
 * deliberate, narrow exception to the static-components heuristic for
 * this well-understood "icon registry" pattern. Scoped to this one
 * small, single-purpose file only.
 */
/* eslint-disable react-hooks/static-components */
export function IconGlyph({ icon, ...props }: IconGlyphProps) {
  const Icon = getIcon(icon);
  return <Icon {...props} />;
}
/* eslint-enable react-hooks/static-components */
