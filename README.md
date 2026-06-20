# Democratic Bharat — Voting Awareness Platform

An independent, non-partisan civic education platform that explains India's
democratic process, Electronic Voting Machines (EVMs), VVPAT systems,
election workflows, and civic participation — through interactive
visualizations, a guided simulation, and plain-language explainers.

**This is not a voting application, a political platform, or an election
prediction tool, and it is not affiliated with the Election Commission of
India.** See [`/disclaimer`](#) once the app is running.

---

## ✨ Features

- **Interactive EVM Simulation** — a guided, entirely fictional walkthrough of
  casting a vote, watching it recorded, VVAT-verified, and stored.
- **Vote Journey diagram** — an animated, horizontal (desktop) / vertical
  (mobile) flow from button press to counting day.
- **EVM history timeline**, **Election Day workflow timeline**, **EVM
  component breakdowns**, **Myths vs Facts flip cards**, and a full **FAQ**.
- Desktop-first, richly animated experience (Framer Motion) that gracefully
  simplifies on mobile, with full keyboard navigation, focus states, ARIA
  labelling, and `prefers-reduced-motion` support throughout.
- **100% data-driven content** — every section reads from `src/data/`, so
  non-developers can edit copy without touching component code.

## 🧱 Tech Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · React Router · Framer Motion
· lucide-react

## 🚀 Getting Started

```bash
npm install
npm run dev       # start the local dev server
npm run build     # type-check + production build to /dist
npm run preview   # preview the production build locally
npm run lint       # run ESLint
```

Requires Node.js 18+.

## 📁 Folder Structure

```
src/
├── assets/          # static images/illustrations (if any)
├── components/
│   ├── ui/          # Button, Card, Accordion, FlipCard, SealBadge, ...
│   ├── layout/      # Navbar, Footer, MobileDrawer, Section
│   └── diagrams/    # FlowRail, MilestoneRail (the horizontal "rail" motif)
├── sections/         # One file per homepage section (Hero, FAQSection, ...)
├── pages/            # Route-level pages (Home, Disclaimer, Privacy, ...)
├── data/             # ⭐ ALL editable content lives here — see below
├── hooks/            # useReducedMotion, useInView, useCountUp
├── types/            # Shared TypeScript interfaces for every content shape
├── constants/        # Routes, breakpoints
├── utils/            # cn() class helper, icon registry
├── router/           # React Router configuration
└── styles/           # (reserved for future global style splits)
```

## ✍️ Editing Content (No Code Changes Required)

Every piece of educational copy — section headlines, myths, FAQs, timeline
entries, security features, legal text, social links — lives in a typed file
under `src/data/`. Components only *render* this data; they never hardcode
copy. To change what the site says, edit the relevant file in `src/data/` and
save — no JSX or component logic needs to change.

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for a guided walkthrough of adding
a new myth, FAQ, timeline entry, or reference link.

## 🌐 Deployment

Build with `npm run build` (output goes to `/dist`), then deploy with any of:

| Platform | Config already included |
|---|---|
| **Vercel** | `vercel.json` (SPA rewrites + asset caching) |
| **Netlify** | `netlify.toml` + `public/_redirects` |
| **Cloudflare Pages** | Build command `npm run build`, output dir `dist` |
| **GitHub Pages** | `dist/404.html` is auto-generated post-build as an SPA fallback |

All deployments need SPA fallback routing (any path → `index.html`) because
this is a client-side-routed single-page app — the configs above already
handle this for Vercel/Netlify; GitHub Pages uses the generated `404.html`
trick instead.

### SEO

Meta titles, descriptions, Open Graph/Twitter tags, and structured data live
in `index.html` and `src/data/site.ts`. `public/robots.txt` and
`public/sitemap.xml` are included — update the domain in all three once you
have a production URL.

## ♿ Accessibility

- Full keyboard navigation with a "Skip to main content" link
- Visible focus rings (`:focus-visible`) on every interactive element
- ARIA labelling on icon-only buttons, accordions, and toggles
- `prefers-reduced-motion` is respected globally (see `useReducedMotion`)
- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`)

## ⚖️ Legal & Compliance Pages

`/disclaimer`, `/privacy-policy`, `/terms-of-use`, and `/references` are
built in and pull their text from `src/data/legal.ts` and
`src/data/references.ts`.

## 🙋 Attribution

Concept, design, and development by **Parth Chittalwar** — see the footer
for social and portfolio links. Built as an independent civic education
initiative; content is sourced from publicly available Election Commission
of India materials and simplified for general audiences (see
`/references` for sources).
