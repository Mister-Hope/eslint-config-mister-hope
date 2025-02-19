import type { TSESLint } from "@typescript-eslint/utils";
import pluginTs from "typescript-eslint";

export interface ImportOptions {
  overrides?: Rules;
  settings?: Record<string, unknown>;
}
export type Rules = TSESLint.FlatConfig.Rules;
export type BaseOptions = Rules | boolean;
export type FlatConfig = TSESLint.FlatConfig.Config;

export const config = pluginTs.config;
export { default as globals } from "globals";
