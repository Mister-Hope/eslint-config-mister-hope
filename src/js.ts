import jsConfig from "@eslint/js";

import type { FlatConfig, Rules } from "./helpers.js";
import { config } from "./helpers.js";

export const js = (overrides?: Rules): FlatConfig[] =>
  config(
    jsConfig.configs.recommended,
    {
      name: "hope/js/rules",
      rules: {
        curly: ["error", "multi-line", "consistent"],
        "no-console": "error",
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
        ...overrides,
      },
    },
    {
      name: "hope/js/script-rules",
      files: ["**/scripts/**"],
      rules: {
        "no-console": "off",
      },
    },
  );
