# Contributing to Democratic Bharat

Thank you for helping improve civic and voting awareness! This project is
built so that most contributions — fixing a typo, adding an FAQ, correcting
a fact — only require editing a single typed data file, no component code.

> **Content integrity reminder:** every contribution must stay factual,
> politically neutral, and non-partisan. See `src/data/legal.ts` for the
> project's content integrity policy. When in doubt, cite an official
> Election Commission of India source in your pull request description.

## Adding or editing a Myth vs Fact

Open `src/data/myths.ts` and add a new object to the `myths` array:

```ts
{
  id: "unique-kebab-case-id",
  myth: "The myth, stated plainly, as someone might actually believe it.",
  fact: "The one-line factual correction.",
  explanation: "A short paragraph giving the supporting detail or mechanism.",
},
```

Keep the `myth` line short enough to fit on the front of the flip card (under
~90 characters reads best).

## Adding or editing an FAQ

Open `src/data/faqs.ts` and add a new object to the `faqs` array:

```ts
{
  id: "unique-kebab-case-id",
  question: "Phrase it the way a real first-time voter would ask it.",
  answer: "A direct, plain-language answer. Two to four sentences is ideal.",
},
```

## Updating timeline entries (EVM history or Election Day workflow)

- EVM history → `src/data/evmHistory.ts` (array of `TimelineEvent`)
- Election Day workflow → `src/data/electionDay.ts` (array of `ElectionDayStep`,
  which additionally needs an `order` number controlling its position)

Both power the same `MilestoneRail` diagram component, so no UI work is
needed — just add an entry with a `year`/`marker`, `title`, `description`,
and an `icon` (see "Available icons" below).

## Updating references / sources

Open `src/data/references.ts` and add a new object to the `referenceLinks`
array with `title`, `publisher`, `url`, and a one-line `description`. Prefer
primary sources (ECI, legislative.gov.in, India Code) over secondary
commentary where possible.

## Available icons

Icons are referenced by name (a string, not a component) so content files
never import React/JSX. The full list of valid names is the `IconName` union
in `src/types/index.ts`. If the icon you want isn't listed:

1. Confirm it exists in `lucide-react` (check `node_modules/lucide-react/dist/esm/icons`).
2. Add it to the `IconName` union in `src/types/index.ts`.
3. Add it to the import list and `iconMap` in `src/utils/icons.tsx`.

## Adding a brand-new section

1. Add a data file under `src/data/` with a typed array/object for its content.
2. Add the matching interface(s) to `src/types/index.ts`.
3. Create `src/sections/YourSection.tsx` that imports the data and renders it
   using existing UI primitives from `src/components/ui/` where possible.
4. Export it from `src/sections/index.ts`.
5. Add it to `src/pages/HomePage.tsx` in the desired position.
6. If it should appear in the nav, add an entry to `src/data/nav.ts`.

## Code style

- No content strings inside `.tsx` files under `src/sections/` or
  `src/components/` — if you find yourself typing a sentence directly into a
  component, it probably belongs in `src/data/` instead.
- Run `npm run lint` and `npm run build` before opening a pull request — both
  must pass cleanly.
- Keep components small and composed from `src/components/ui/` primitives
  rather than duplicating markup.

## Translations (future)

The architecture is set up so that `src/data/*.ts` files can later be
swapped for locale-specific variants (e.g. `myths.hi.ts`) without touching
any component. If you're adding a translation layer, open an issue first so
the approach can be agreed on project-wide.
