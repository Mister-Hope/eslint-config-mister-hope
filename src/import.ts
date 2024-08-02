import { createRequire } from "node:module";

import { FlatCompat } from "@eslint/eslintrc";
import pluginImportX from "eslint-plugin-import-x";

import { config } from "./config.js";

const compat = new FlatCompat();

const require = createRequire(import.meta.url);

export const jsImport = config(
  ...compat.config(pluginImportX.configs.recommended),

  {
    files: ["**/*.{js,cjs,mjs,jsx}"],
    rules: {
      "sort-imports": [
        "error",
        {
          allowSeparatedGroups: false,
          ignoreDeclarationSort: true,
        },
      ],

      "import-x/consistent-type-specifier-style": ["error", "prefer-top-level"],
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
  },

  {
    files: ["**/*.cjs"],
    rules: {
      "import-x/no-commonjs": "off",
    },
  },
);

export const tsImport = config(
  ...compat.config(pluginImportX.configs.typescript),
  {
    files: ["**/*.ts"],

    settings: {
      "import-x/parsers": {
        [require.resolve("@typescript-eslint/parser")]: [".ts"],
      },
      "import-x/resolver": {
        node: true,
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

      "import-x/consistent-type-specifier-style": ["error", "prefer-top-level"],
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
  },

  {
    files: ["**/*.cjs"],
    rules: {
      "@typescript-eslint/no-var-requires": "off",
    },
  },
);
