import jsConfig from "@eslint/js";

import { config } from "./config.js";
import type { FlatConfig, Rules } from "./typings.js";

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
