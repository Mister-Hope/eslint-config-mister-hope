import pluginVitest from "@vitest/eslint-plugin";

import type { FlatConfig, Rules } from "./helpers.js";
import { config } from "./helpers.js";

const { rules, ...rest } = pluginVitest.configs.recommended;

export const vitest = (overrides?: Rules): FlatConfig[] =>
  config(
    {
      ...rest,
      name: "hope/vitest/rules",
      files: [
        "**/*.{spec,test}.{js,jsx,ts,tsx}",
        "**/*.{spec,test}-d.{js,jsx,ts,tsx}",
      ],
      settings: {
        vitest: {
          typecheck: true,
        },
      },
      rules: {
        ...rules,
        ...overrides,
      },
    },
    {
      name: "hope/vitest/ts-rules",
      files: ["**/*.{spec,test}.{ts,tsx}", "**/*.{spec,test}-d.{ts,tsx}"],
      rules: {
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-extraneous-class": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "@typescript-eslint/unbound-method": "off",
      },
    },
    {
      name: "hope/vitest/dts-rules",
      files: ["**/*.{spec,test}-d.ts"],
      rules: {
        "@typescript-eslint/no-confusing-void-expression": "off",
      },
    },
  );
