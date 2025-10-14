import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";

import type { Config, Rules } from "./helpers.js";
import { defineConfig } from "./helpers.js";

const { rules, ...rest } = comments.recommended;

export const comment = (overrides?: Rules): Config[] =>
  defineConfig({
    name: "hope/eslint-comment",
    ...rest,
    rules: {
      ...rules,
      "@eslint-community/eslint-comments/disable-enable-pair": [
        "error",
        { allowWholeFile: true },
      ],
      ...overrides,
    },
  });
