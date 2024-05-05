import pluginVue from "eslint-plugin-vue";

import { config } from "./config.js";

export { default as vueParser } from "vue-eslint-parser";

export const vue = config(
  ...pluginVue.configs["flat/recommended"],

  {
    files: ["**/*.{ts,vue}"],
    rules: {
      "vue/custom-event-name-casing": "error",
      "vue/match-component-file-name": "error",
      "vue/match-component-import-name": "error",
      "vue/new-line-between-multi-line-property": "error",
      "vue/next-tick-style": "error",
      "vue/no-boolean-default": "warn",
      "vue/no-duplicate-attr-inheritance": "error",
      "vue/no-empty-component-block": "error",
      "vue/no-multiple-objects-in-class": "error",
      "vue/no-potential-component-option-typo": "error",
      "vue/no-ref-object-destructure": "error",
      "vue/no-required-prop-with-default": "error",
      "vue/no-static-inline-styles": "error",
      "vue/no-template-target-blank": "error",
      "vue/no-this-in-before-route-enter": "error",
      "vue/no-undef-components": "error",
      "vue/no-undef-properties": "warn",
      "vue/no-unsupported-features": "error",
      "vue/no-unused-properties": "error",
      "vue/no-unused-refs": "error",
      "vue/no-useless-mustaches": "error",
      "vue/no-useless-v-bind": "error",
      "vue/padding-line-between-blocks": "error",
      "vue/padding-line-between-tags": "error",
      "vue/prefer-prop-type-boolean-first": "error",
      "vue/prefer-separate-static-class": "error",
      "vue/prefer-true-attribute-shorthand": "error",
      "vue/require-direct-export": "error",
      "vue/require-emit-validator": ["off"],
      "vue/require-expose": "error",
      "vue/require-name-property": "error",
      "vue/require-prop-comment": "error",
      "vue/script-indent": "error",
      "vue/static-class-names-order": "error",
      "vue/v-for-delimiter-style": "error",
    },
  },

  {
    files: ["**/*.vue"],
    rules: {
      "vue/block-lang": [
        "error",
        {
          script: { lang: "ts" },
          style: { lang: "scss" },
        },
      ],
      "vue/block-tag-newline": "error",
      "vue/component-api-style": "error",
      "vue/component-name-in-template-casing": ["error", "PascalCase"],
      "vue/component-options-name-casing": "error",
      "vue/component-tags-order": [
        "error",
        {
          order: ["script", "template", "style"],
        },
      ],
      "vue/define-emits-declaration": "error",
      "vue/define-macros-order": "error",
      "vue/define-props-declaration": "error",
      "vue/html-button-has-type": "error",
      "vue/html-comment-content-newline": "error",
      "vue/html-comment-content-spacing": "error",
      "vue/html-comment-indent": "error",
      "vue/sort-keys": "error",
    },
  }
);
