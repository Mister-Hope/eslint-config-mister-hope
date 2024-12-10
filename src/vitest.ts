import pluginVitest from "@vitest/eslint-plugin";

import { config } from "./config.js";

export const vitest = config(
  {
    files: ["**/*.spec.{j,t}s"],
    ...pluginVitest.configs.recommended,
  },
  {
    files: ["**/*.spec.ts"],
    rules: {
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/unbound-method": "off",
    },
  },
  {
    files: ["**/*.spec-d.ts"],
    rules: {
      "@typescript-eslint/no-confusing-void-expression": "off",
    },
  },
);
