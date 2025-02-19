import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";

import type { FlatConfig, Rules } from "./helpers.js";
import { config } from "./helpers.js";

const { rules, ...rest } = comments.recommended;

export const comment = (overrides?: Rules): FlatConfig[] =>
  config({
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
