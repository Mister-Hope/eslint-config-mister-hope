import { createRequire } from "node:module";

import eslintPluginImportX from "eslint-plugin-import-x";

import type { FlatConfig, ImportOptions } from "./helpers.js";
import { config } from "./helpers.js";

const require = createRequire(import.meta.url);

export const tsExtensions = [".ts", ".tsx", ".cts", ".mts"];

export const resolvableExtensions = [
  ...tsExtensions,
  ".js",
  ".jsx",
  ".cjs",
  ".mjs",
];

export const tsImport = ({
  overrides,
  settings,
}: ImportOptions = {}): FlatConfig[] =>
  config(
    eslintPluginImportX.flatConfigs.typescript,
    {
      name: "hope/ts-import/config",

      files: ["**/*.ts"],

      settings: {
        "import-x/extensions": resolvableExtensions,
        "import-x/parsers": {
          [require.resolve("@typescript-eslint/parser")]: tsExtensions,
        },
        "import-x/resolver": {
          node: {
            extensions: resolvableExtensions,
          },
          typescript: {
            alwaysTryTypes: true,
          },
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
