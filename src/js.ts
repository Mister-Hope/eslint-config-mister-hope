import jsConfig from "@eslint/js";

import { config } from "./config.js";

export const js = config(jsConfig.configs.recommended, {
  rules: {
    curly: ["error", "multi-line", "consistent"],
    "no-duplicate-imports": "off",
    "no-unmodified-loop-condition": "error",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: ["const", "let"],
        next: ["*"],
      },
      {
        blankLine: "any",
        prev: ["const", "let"],
        next: ["const", "let"],
      },
      {
        blankLine: "always",
        prev: ["*"],
        next: ["return"],
      },
    ],
  },
});
