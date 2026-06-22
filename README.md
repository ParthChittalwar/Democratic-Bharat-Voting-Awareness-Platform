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

## 🚀 Installtion And Setup

```bash
npm install
npm run dev       # start the local dev server
npm run build     # type-check + production build to /dist
npm run preview   # preview the production build locally
npm run lint       # run ESLint
```

Requires Node.js 18+.


## 🙋 Attribution

Concept, design, and development by **Parth Chittalwar** . Built as an independent civic education
initiative; content is sourced from publicly available Election Commission
of India materials and simplified for general audiences (see
`/references` for sources).
