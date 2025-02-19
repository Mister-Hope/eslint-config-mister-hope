import eslintPluginImportX from "eslint-plugin-import-x";

import { config } from "./config.js";
import type { FlatConfig, ImportOptions, Rules } from "./typings.js";

export const jsImport = ({
  overrides,
  settings = {},
}: ImportOptions = {}): FlatConfig[] =>
  config(
    eslintPluginImportX.flatConfigs.recommended,

    {
      name: "hope/js-import/config",
      files: ["**/*.{js,cjs,mjs,jsx}"],
      settings,
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
        ...overrides,
      },
    },

    {
      files: ["**/*.cjs"],
      rules: {
        "import-x/no-commonjs": "off",
      },
    },
  );
