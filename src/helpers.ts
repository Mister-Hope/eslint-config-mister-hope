import type { TSESLint } from "@typescript-eslint/utils";
import pluginTs from "typescript-eslint";

export type LanguageOptions = TSESLint.FlatConfig.Config["languageOptions"];
export type IgnoresOptions = TSESLint.FlatConfig.Config["ignores"];
export interface ImportOptions {
  rules?: Rules;
  settings?: Record<string, unknown>;
}
export type Rules = TSESLint.FlatConfig.Rules;
export type BaseOptions = Rules | boolean;
export type FlatConfig = TSESLint.FlatConfig.Config;

export const config = pluginTs.config;
export { default as globals } from "globals";
