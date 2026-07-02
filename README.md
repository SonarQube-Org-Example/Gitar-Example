# Time-Saved ROI Calculator

A small Next.js app that estimates the engineering hours a team reclaims each
week by automating code review. It powers the "time saved" calculator on the
pricing page — adjust PRs per week and the automation rate to see the weekly and
annual hours saved.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the calculator. Edit
`app/page.tsx` or the calculator in `app/calculator.tsx`; the page hot-reloads as
you save.

The ROI math lives in `lib/roi.ts` and is unit-friendly and pure, so it can be
reused by the calculator UI and other pricing surfaces.

## Building

```bash
npm run build
```

This produces an optimized production build and type-checks the whole project, so
a type error fails the build (the same check CI runs on every pull request).

## Running the demo

A GitHub Actions workflow opens a representative pull request so you can show
Gitar reviewing it, getting CI to pass, and merging it — hands-off.

1. Open the **Actions** tab.
2. Select **Open Demo PR** and click **Run workflow**.
3. Watch the new pull request: Gitar reviews it, CI runs, and Gitar resolves the
   review feedback and merges once the build is green.

Each run opens a fresh, independent pull request, so you can run the demo as many
times as you like.
