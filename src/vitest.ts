import pluginVitest from "@vitest/eslint-plugin";

export const vitest = {
  files: ["**/__tests__/**/*.spec.{j,t}s"],
  ...pluginVitest.configs.recommended,
};
