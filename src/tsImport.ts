import { createRequire } from "node:module";

import eslintPluginImportX from "eslint-plugin-import-x";

import { config } from "./config.js";
import type { FlatConfig, Rules } from "./typings.js";

const require = createRequire(import.meta.url);

export const tsImport = (overrides?: Rules): FlatConfig[] =>
  config(
    eslintPluginImportX.flatConfigs.typescript,
    {
      name: "hope/ts-import/config",

      files: ["**/*.ts"],

      settings: {
        "import-x/extensions": [
          ".cjs",
          ".cts",
          ".js",
          ".jsx",
          ".mjs",
          ".mts",
          ".ts",
          ".tsx",
        ],
        "import-x/parsers": {
          [require.resolve("@typescript-eslint/parser")]: [
            ".cts",
            ".mts",
            ".ts",
            ".tsx",
          ],
        },
        "import-x/resolver": {
          node: {
            extensions: [
              ".cjs",
              ".cts",
              ".js",
              ".json",
              ".jsx",
              ".mjs",
              ".mts",
              ".ts",
              ".tsx",
            ],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },

      rules: {
        "sort-imports": [
          "error",
          {
            allowSeparatedGroups: false,
            ignoreDeclarationSort: true,
          },
        ],

        "import-x/consistent-type-specifier-style": [
          "error",
          "prefer-top-level",
        ],
        "import-x/first": "error",
        "import-x/newline-after-import": "error",
        "import-x/no-commonjs": "error",
        "import-x/no-cycle": "error",
        "import-x/no-duplicates": ["error", { considerQueryString: true }],
        "import-x/no-named-default": "error",
        "import-x/order": [
          "error",
          {
            alphabetize: {
              order: "asc",
              orderImportKind: "asc",
            },
            groups: [
              "builtin",
              "external",
              "internal",
              ["parent", "sibling"],
              "index",
              "object",
            ],
            "newlines-between": "always",
          },
        ],
      },
      ...overrides,
    },

    {
      name: "hope/ts-import/cjs-config",

      files: ["**/*.cjs"],
      rules: {
        "@typescript-eslint/no-require-imports": "off",
      },
    },
  );
