import pluginVitest from "@vitest/eslint-plugin";

import { config } from "./config.js";

export const vitest = config({
  files: ["**/__tests__/**/*.spec.{j,t}s"],
  ...pluginVitest.configs.recommended,
});
