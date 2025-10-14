import { Linter } from "eslint";

export type Config = Linter.Config
export type IgnoresOptions = string[];
export type LanguageOptions = Linter.LanguageOptions;
export interface ImportOptions {
  rules?: Rules;
  settings?: Record<string, unknown>;
}
export type Rules = Linter.RulesRecord;
export type BaseOptions = Rules | boolean;

export { defineConfig } from "eslint/config";
export { default as globals } from "globals";
