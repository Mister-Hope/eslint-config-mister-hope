import { plugin, configs as tsConfigs } from "typescript-eslint";

import { config } from "./config.js";

export { configs as tsConfigs } from "typescript-eslint";
export { parser as tsParser } from "typescript-eslint";

export const ts = config(
  ...tsConfigs.strictTypeChecked,
  ...tsConfigs.stylisticTypeChecked,

  {
    files: ["**/*.ts", "**/*.cts", "**/*.mts"],
    plugins: {
      "@typescript-eslint": plugin,
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
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
      "@typescript-eslint/no-dynamic-delete": "off",
      "@typescript-eslint/no-explicit-any": ["warn", { ignoreRestArgs: true }],
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/prefer-string-starts-ends-with": [
        "warn",
        { allowSingleElementEquality: "always" },
      ],
    },
  },

  {
    files: ["**/*.{js,cjs,mjs,jsx}"],
    ...tsConfigs.disableTypeChecked,
  },
);
