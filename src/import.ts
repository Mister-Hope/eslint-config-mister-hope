import { createRequire } from "node:module";

import { configs as importConfigs, rules } from "eslint-plugin-import";
import { config } from "./config.js";

export { configs as importConfigs } from "eslint-plugin-import";

const require = createRequire(import.meta.url);

const commonRules = {
  "sort-imports": [
    "error",
    {
      allowSeparatedGroups: false,
      ignoreDeclarationSort: true,
    },
  ],

  ...importConfigs.recommended.rules,
  "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
  "import/first": "error",
  "import/newline-after-import": "error",
  "import/no-commonjs": "error",
  "import/no-cycle": "error",
  "import/no-duplicates": ["error", { considerQueryString: true }],
  "import/no-named-default": "error",
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

  // FIXME: eslint-plugin-import is not fully compatible with flat config
  "import/default": "off",
  "import/namespace": "off",
  "import/no-named-as-default": "off",
  "import/no-named-as-default-member": "off",
  "import/no-unresolved": "off",
};

export const jsImport = config(
  {
    files: ["**/*.{js,cjs,mjs,jsx}"],

    plugins: {
      import: { rules },
    },

    rules: commonRules,
  },

  {
    files: ["**/*.cjs"],
    rules: {
      "import/no-commonjs": "off",
    },
  }
);

export const tsImport = config(
  {
    files: ["**/*.ts"],

    plugins: {
      import: { rules },
    },

    settings: {
      ...importConfigs.typescript.settings,
      "import/parsers": {
        [require.resolve("@typescript-eslint/parser")]: [".ts"],
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },

    rules: {
      ...commonRules,
      ...importConfigs.typescript.rules,
    },
  },

  {
    files: ["**/*.cjs"],
    rules: {
      "@typescript-eslint/no-var-requires": "off",
    },
  }
);
