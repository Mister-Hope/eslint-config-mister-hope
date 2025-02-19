import type { TSESLint } from "@typescript-eslint/utils";

export interface ImportOptions {
  overrides?: Rules;
  settings?: Record<string, unknown>;
}
export type Rules = TSESLint.FlatConfig.Rules;
export type BaseOptions = Rules | boolean;
export type FlatConfig = TSESLint.FlatConfig.Config;
