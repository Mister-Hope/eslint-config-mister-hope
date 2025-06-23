import type { TSESLint } from "@typescript-eslint/utils";

export type LanguageOptions = TSESLint.FlatConfig.Config["languageOptions"];
export type IgnoresOptions = TSESLint.FlatConfig.Config["ignores"];
export interface ImportOptions {
  rules?: Rules;
  settings?: Record<string, unknown>;
}
export type Rules = TSESLint.FlatConfig.Rules;
export type BaseOptions = Rules | boolean;
export type FlatConfig = TSESLint.FlatConfig.Config;

export { default as globals } from "globals";
export { config } from "typescript-eslint";
