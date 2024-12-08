import pluginVitest from "@vitest/eslint-plugin";

import { config } from "./config.js";

export const vitest = config(
  {
    files: ["**/*.spec.{j,t}s"],
    ...pluginVitest.configs.recommended,
  },
  {
    files: ["**/*.spec.{j,t}s"],
    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
);
