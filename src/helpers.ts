import type { Config } from "eslint/config";

export type LanguageOptions = Exclude<Config["languageOptions"], undefined> & {
  parserOptions?: Record<string, unknown>;
};

export type IgnoresOptions = Exclude<Config["ignores"], undefined>;

export interface ImportOptions {
  rules?: Rules;
  settings?: Record<string, unknown>;
}

export type Rules = Exclude<Config["rules"], undefined>;
export type BaseOptions = Rules | boolean;

export { defineConfig, Config } from "eslint/config";
export { default as globals } from "globals";
