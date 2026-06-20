/**
 * Lightweight className combiner — joins truthy class strings together.
 * Avoids pulling in a dependency for something this small.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
