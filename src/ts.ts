import { plugin, configs as tsConfigs } from "typescript-eslint";

import type { Config, Rules } from "./helpers.js";
import { defineConfig } from "./helpers.js";

export { configs as tsConfigs } from "typescript-eslint";
export { parser as tsParser } from "typescript-eslint";

export const defaultNamingConventionRules = [
  {
    selector: "default",
    format: ["camelCase"],
  },
  // allow __dirname and __filename
  {
    selector: "variable",
    filter: {
      regex: "^__(?:dirname|filename)$",
      match: true,
    },
    format: null,
  },
  // allow UPPER_CASE variable with _ prefix and suffix
  {
    selector: "variable",
    filter: {
      regex: "^(?:_{0,2})[A-Z][A-z0-9]*(?:_[A-Z][A-z0-9]*)*$",
      match: true,
    },
    format: null,
  },
  {
    selector: ["variable"],
    format: ["camelCase", "PascalCase", "UPPER_CASE"],
    leadingUnderscore: "allow",
  },
  {
    selector: ["parameter"],
    format: ["camelCase", "PascalCase"],
    leadingUnderscore: "allow",
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
  {
    selector: "enumMember",
    format: ["PascalCase"],
  },
];

export const tsRules: Rules = {
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
    ...defaultNamingConventionRules,
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

export const ts = (rules: Rules): Config[] =>
  defineConfig(
    ...tsConfigs.strictTypeChecked,
    ...tsConfigs.stylisticTypeChecked,
    {
      name: "hope/ts/rules",
      files: ["**/*.{ts,cts,mts,tsx}"],
      plugins: {
        "@typescript-eslint": plugin,
      },
      rules: {
        ...tsRules,
        ...rules,
      },
    },

    {
      name: "hope/ts/js-rules",
      files: ["**/*.{js,cjs,mjs,jsx}"],
      ...tsConfigs.disableTypeChecked,
    },
  );
