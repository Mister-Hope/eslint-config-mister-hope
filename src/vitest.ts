import pluginVitest from "eslint-plugin-vitest";

export const vitest = {
  files: ["**/__tests__/**/*.spec.{j,t}s"],
  ...pluginVitest.configs.recommended,
};
