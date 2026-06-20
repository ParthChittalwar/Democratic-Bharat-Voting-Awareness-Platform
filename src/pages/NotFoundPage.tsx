import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";

export function NotFoundPage() {
  return (
    <Section tone="paper" narrow className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm font-semibold uppercase tracking-wide text-saffron-600">Error 404</p>
      <h1 className="mt-3 font-display text-3xl font-medium text-ink lg:text-4xl">This page hasn't been counted</h1>
      <p className="mt-3 max-w-md text-slate-700">
        The page you're looking for doesn't exist. Let's get you back to the educational content.
      </p>
      <Link to="/" className="mt-6">
        <Button>Back to Home</Button>
      </Link>
    </Section>
  );
}
