#!/usr/bin/env node
// Seeds a fresh, intentionally-flawed ROI helper for the Gitar demo flow.
//
// Each invocation writes lib/generated/roi-<id>.ts containing one real TYPE bug
// (a string is returned where the signature declares `number`, so `next build`
// goes red) plus the review smells described in
// .gitar/review/utility-standards.md: magic numbers, no @example, and no input
// validation. Gitar reviews the PR, fixes the findings, turns CI green, and
// auto-merges per .gitar/config/approve.md.
//
// The filename is made unique with nanoid, which gives the flow TWO properties:
//   1. No round-robin limit — you can run the demo as many times as you like.
//   2. Conflict-free forks — every run only ADDS a new file under
//      lib/generated/ and never edits anything the upstream template owns, so a
//      fork can `git pull` upstream again at any time without merge conflicts.

import { customAlphabet } from "nanoid";
import { mkdirSync, writeFileSync, existsSync, appendFileSync } from "node:fs";
import { join } from "node:path";

// Lowercase alphanumeric keeps filenames tidy and shell-safe.
const nanoid = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", 8);

const GENERATED_DIR = join("lib", "generated");
const slug = `roi-${nanoid()}`;
const file = join(GENERATED_DIR, `${slug}.ts`);

// The seeded helper. Deliberately flawed — do not "fix" it here.
const contents = `// Helpers for the demo app's pricing / "time saved" ROI calculator.

export const estimateHoursSaved = (
  prsPerWeek: number,
  automationRate: number,
): number => {
  const minutesSaved = prsPerWeek * 25 * automationRate;

  return (minutesSaved / 60).toFixed(1);
};
`;

mkdirSync(GENERATED_DIR, { recursive: true });

if (existsSync(file)) {
  // Astronomically unlikely with nanoid, but never clobber an existing file.
  console.error(`Refusing to overwrite existing ${file}`);
  process.exit(1);
}

writeFileSync(file, contents);

// Human-readable output.
console.log(`Seeded ${file}`);

// Machine-readable output for the GitHub Actions workflow.
if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `name=${slug}\nfile=${file}\n`);
}
