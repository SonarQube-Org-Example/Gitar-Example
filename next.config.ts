import type { NextConfig } from "next";

// TypeScript type-checking stays on during `next build` (the default) — that is
// what turns a seeded type bug into a red CI run. Next.js 16 decoupled ESLint
// from `next build`, so no ESLint setup is needed here.
const nextConfig: NextConfig = {};

export default nextConfig;
