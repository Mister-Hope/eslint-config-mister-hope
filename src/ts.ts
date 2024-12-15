import type { TSESLint } from "@typescript-eslint/utils";
import { plugin, configs as tsConfigs } from "typescript-eslint";

import { config } from "./config.js";

export { configs as tsConfigs } from "typescript-eslint";
export { parser as tsParser } from "typescript-eslint";

export const tsRules: TSESLint.FlatConfig.Rules = {
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
  "@typescript-eslint/no-confusing-void-expression": [
    "error",
    {
      ignoreArrowShorthand: true,
      ignoreVoidOperator: true,
      ignoreVoidReturningFunctions: true,
    },
  ],
  "@typescript-eslint/no-dynamic-delete": "off",
  "@typescript-eslint/no-explicit-any": ["warn", { ignoreRestArgs: true }],
  // FIXME: https://github.com/typescript-eslint/typescript-eslint/issues/8113
  "@typescript-eslint/no-invalid-void-type": "off",
  "@typescript-eslint/no-non-null-assertion": "warn",
  "@typescript-eslint/no-unsafe-member-access": "warn",
  "@typescript-eslint/no-unnecessary-condition": [
    "error",
    { allowConstantLoopConditions: true },
  ],

  "@typescript-eslint/prefer-nullish-coalescing": [
    "warn",
    {
      ignoreBooleanCoercion: true,
      ignoreConditionalTests: true,
      ignoreMixedLogicalExpressions: true,
    },
  ],
  "@typescript-eslint/prefer-string-starts-ends-with": [
    "warn",
    { allowSingleElementEquality: "always" },
  ],
  "@typescript-eslint/restrict-template-expressions": [
    "error",
    { allowBoolean: true, allowNumber: true },
  ],
};

export const ts = config(
  ...tsConfigs.strictTypeChecked,
  ...tsConfigs.stylisticTypeChecked,

  {
    files: ["**/*.ts", "**/*.cts", "**/*.mts"],
    plugins: {
      "@typescript-eslint": plugin,
    },
    rules: tsRules,
  },

  {
    files: ["**/*.{js,cjs,mjs,jsx}"],
    ...tsConfigs.disableTypeChecked,
  },
);
