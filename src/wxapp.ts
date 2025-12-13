import type { Config, Rules } from "./helpers.js";
import { defineConfig } from "./helpers.js";
import { tsConfigs } from "./ts.js";

export interface WXAppOptions {
  /**
   * @default 'app'
   */
  folder?: string;
  ts?: Rules;
  wxs?: Rules;
}

export const wxapp = ({
  folder = "app",
  ts,
  wxs,
}: WXAppOptions = {}): Config[] =>
  defineConfig(
    {
      name: "wxapp/ts-rules",
      files: [`${folder ? `${folder}/` : ""}**/*.ts`],
      languageOptions: {
        globals: {
          wx: "readonly",
          getApp: "readonly",
          getCurrentPages: "readonly",
          App: "readonly",
          Page: "readonly",
          Component: "readonly",
          getRegExp: "readonly",
        },
      },
      rules: {
        "no-console": "off",

        // some apis are returning promise, and we don't want to enforce await
        "@typescript-eslint/no-floating-promises": "off",
        // some apis are returning types with undefined
        "@typescript-eslint/no-non-null-assertion": "off",
        // ?? is not supported in wx mini program
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        // apis exist in types may not be available in lower version of wx lib
        "@typescript-eslint/no-unnecessary-condition": "off",

        ...ts,
      },
    },

    {
      files: ["app/**/*.wxs"],
      ...tsConfigs.disableTypeChecked,
    },

    {
      files: ["app/**/*.wxs"],
      languageOptions: {
        ecmaVersion: 5,
        globals: {
          getDate: "readonly",
          getRegExp: "readonly",
          console: "readonly",
          module: "readonly",
        },
      },
      rules: {
        curly: ["error", "all"],
        "func-names": ["error", "never"],
        "func-style": ["error", "declaration"],
        "no-console": "off",
        "no-var": "off",
        "object-shorthand": ["error", "never"],
        "prefer-destructuring": "off",
        "prefer-template": "off",

        "@typescript-eslint/no-var-requires": "off",

        "import/no-commonjs": "off",
        "import/no-default-export": "off",
        "import/no-named-export": "off",

        ...wxs,
      },
    },
  );
