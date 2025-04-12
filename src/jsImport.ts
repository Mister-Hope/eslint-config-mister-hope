import { createNodeResolver, flatConfigs } from "eslint-plugin-import-x";

import type { FlatConfig, ImportOptions } from "./helpers.js";
import { config } from "./helpers.js";

export const jsImport = ({
  overrides,
  settings = {},
}: ImportOptions = {}): FlatConfig[] =>
  config(
    flatConfigs.recommended,

    {
      name: "hope/js-import/config",
      files: ["**/*.{js,cjs,mjs,jsx}"],
      settings: {
        "import-x/resolver-next": [createNodeResolver()],
        ...settings,
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
        "import-x/no-cycle": "off",
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
