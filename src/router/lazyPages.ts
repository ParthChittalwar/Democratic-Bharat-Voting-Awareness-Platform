import { lazy } from "react";

export const DisclaimerPage = lazy(() =>
  import("@/pages/DisclaimerPage").then((m) => ({ default: m.DisclaimerPage }))
);
export const PrivacyPolicyPage = lazy(() =>
  import("@/pages/PrivacyPolicyPage").then((m) => ({ default: m.PrivacyPolicyPage }))
);
export const TermsOfUsePage = lazy(() =>
  import("@/pages/TermsOfUsePage").then((m) => ({ default: m.TermsOfUsePage }))
);
export const ReferencesPage = lazy(() =>
  import("@/pages/ReferencesPage").then((m) => ({ default: m.ReferencesPage }))
);
export const NotFoundPage = lazy(() =>
  import("@/pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage }))
);
