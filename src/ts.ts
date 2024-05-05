import { createRequire } from "node:module";

import { configs as importConfigs } from "eslint-plugin-import";
import { configs as tsConfigs } from "typescript-eslint";

import { config } from "./config.js";

const require = createRequire(import.meta.url);

export { parser as tsParser } from "typescript-eslint";

export const ts = config(
  ...tsConfigs.recommendedTypeChecked,
  ...tsConfigs.stylisticTypeChecked,

  {
    files: ["**/*.ts"],
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
      ...importConfigs.typescript.rules,

      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        {
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
          allowTypedFunctionExpressions: true,
        },
      ],
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "default",
          format: ["camelCase"],
          leadingUnderscore: "allowSingleOrDouble",
          trailingUnderscore: "allow",
        },
        {
          selector: ["variable"],
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
          leadingUnderscore: "allowSingleOrDouble",
          trailingUnderscore: "allowSingleOrDouble",
        },
        {
          selector: ["parameter"],
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },
        {
          selector: ["property"],
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },
        {
          selector: "import",
          format: ["PascalCase", "camelCase"],
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
      ],
      "@typescript-eslint/no-explicit-any": ["warn", { ignoreRestArgs: true }],
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/prefer-string-starts-ends-with": [
        "error",
        { allowSingleElementEquality: "always" },
      ],
    },
  },

  {
    files: ["**/*.{cjs,js,mjs,jsx}"],
    ...tsConfigs.disableTypeChecked,
  }
);
