import { createBrowserRouter } from "react-router-dom";
import { Suspense, type ReactNode } from "react";
import { RootLayout } from "@/router/RootLayout";
import { ROUTES } from "@/constants";
import { HomePage } from "@/pages/HomePage";
import {
  DisclaimerPage,
  PrivacyPolicyPage,
  TermsOfUsePage,
  ReferencesPage,
  NotFoundPage,
} from "@/router/lazyPages";

function withSuspense(element: ReactNode) {
  return <Suspense fallback={<div className="min-h-[60vh]" />}>{element}</Suspense>;
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: ROUTES.home, element: <HomePage /> },
      { path: ROUTES.disclaimer, element: withSuspense(<DisclaimerPage />) },
      { path: ROUTES.privacyPolicy, element: withSuspense(<PrivacyPolicyPage />) },
      { path: ROUTES.termsOfUse, element: withSuspense(<TermsOfUsePage />) },
      { path: ROUTES.references, element: withSuspense(<ReferencesPage />) },
      { path: "*", element: withSuspense(<NotFoundPage />) },
    ],
  },
]);

