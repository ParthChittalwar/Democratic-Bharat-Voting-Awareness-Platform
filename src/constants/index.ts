export const ROUTES = {
  home: "/",
  disclaimer: "/disclaimer",
  privacyPolicy: "/privacy-policy",
  termsOfUse: "/terms-of-use",
  references: "/references",
} as const;

/** Mirrors the CSS breakpoints defined in src/index.css (@theme). */
export const BREAKPOINTS = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1440,
  xxl: 1680,
} as const;
