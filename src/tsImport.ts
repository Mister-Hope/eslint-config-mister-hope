import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import { createNodeResolver, flatConfigs } from "eslint-plugin-import-x";

import type { FlatConfig, ImportOptions } from "./helpers.js";
import { config } from "./helpers.js";

export const tsExtensions = [".ts", ".tsx", ".cts", ".mts"];

export const resolvableExtensions = [
  ...tsExtensions,
  ".js",
  ".jsx",
  ".cjs",
  ".mjs",
];

export const tsImport = ({
  rules,
  settings,
}: ImportOptions = {}): FlatConfig[] =>
  config(
    flatConfigs.typescript,
    {
      name: "hope/ts-import/config",

      files: ["**/*.ts"],
      settings: {
        "import-x/resolver-next": [
          createNodeResolver(),
          createTypeScriptImportResolver(),
        ],
        "import-x/parsers": {
          [import.meta.resolve("@typescript-eslint/parser")]: tsExtensions,
        },
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
        ...rules,
      },
    },

    {
      name: "hope/ts-import/cjs-config",

      files: ["**/*.cjs"],
      rules: {
        "@typescript-eslint/no-require-imports": "off",
      },
    },
  );
