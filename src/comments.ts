import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";

import { config } from "./config.js";
import type { FlatConfig, Rules } from "./typings.js";

const { rules, ...rest } = comments.recommended;

export const comment = (overrides?: Rules): FlatConfig[] =>
  config({
    name: "hope/eslint-comment",
    ...rest,
    rules: {
      ...rules,
      ...overrides,
    },
  });
