import js from "@eslint/js";
import { rules } from "eslint-plugin-import";
import prettierRecommended from "eslint-plugin-prettier/recommended";

const jsCommonConfig = {
  plugins: {
    import: { rules },
  },
  rules: {
    curly: ["error", "multi", "consistent"],
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
    "sort-imports": [
      "error",
      {
        allowSeparatedGroups: false,
        ignoreDeclarationSort: true,
      },
    ],

    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    "import/default": "error",
    "import/export": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/no-commonjs": "error",
    "import/no-cycle": "error",
    "import/no-duplicates": ["error", { considerQueryString: true }],
    "import/no-named-default": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-unresolved": "error",
    "import/order": [
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
};

export const jsRecommended = [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  js.configs.recommended,
  jsCommonConfig,
  prettierRecommended,
];

export const jsAll = [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  js.configs.all,
  jsCommonConfig,
  prettierRecommended,
];
