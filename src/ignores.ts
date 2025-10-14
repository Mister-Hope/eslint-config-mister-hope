import type { Config, IgnoresOptions } from "./helpers.js";

/**
 * Ignores configuration for eslint.
 */
export const ignores = (ignores: IgnoresOptions = []): Config => ({
  name: "hope/ignores",
  ignores: [
    // node_modules & lock files
    "**/node_modules",
    "**/package-lock.json",
    "**/yarn.lock",
    "**/pnpm-lock.yaml",
    "**/bun.lockb",

    // dist & output
    "**/*.min.*",
    "**/.output",
    "**/dist",
    "**/output",

    // temp & cache
    "**/.cache",
    "**/.temp",
    "**/.tmp",
    "**/temp",
    "**/tmp",

    // framework & tools
    "**/.vitepress/cache",

    // test & coverage
    "**/__snapshots__",
    "**/coverage",

    // docs
    "**/CHANGELOG*.md",
    "**/LICENSE*",

    ...ignores,
  ],
});
