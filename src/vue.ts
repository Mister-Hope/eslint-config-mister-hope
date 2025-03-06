import pluginVue from "eslint-plugin-vue";

import type { FlatConfig, Rules } from "./helpers.js";
import { config } from "./helpers.js";
import { tsRules } from "./ts.js";

export { default as vueParser } from "vue-eslint-parser";

export interface VueOptions {
  all?: Rules;
  sfc?: Rules;
}

export const vue = ({ all, sfc }: VueOptions = {}): FlatConfig[] =>
  config(
    ...pluginVue.configs["flat/recommended"],

    {
      name: "hope/vue/rules",
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
        "vue/no-ref-object-reactivity-loss": "error",
        "vue/no-required-prop-with-default": "error",
        "vue/no-setup-props-reactivity-loss": "error",
        "vue/no-static-inline-styles": "error",
        "vue/no-template-target-blank": "warn",
        "vue/no-this-in-before-route-enter": "error",
        "vue/no-undef-components": "error",
        "vue/no-undef-properties": "warn",
        "vue/no-unsupported-features": "error",
        "vue/no-unused-emit-declarations": "error",
        "vue/no-unused-properties": "error",
        "vue/no-unused-refs": "error",
        "vue/prefer-prop-type-boolean-first": "warn",
        "vue/prefer-separate-static-class": "error",
        "vue/prefer-true-attribute-shorthand": "error",
        "vue/require-direct-export": "error",
        "vue/require-explicit-slots": "error",
        "vue/require-expose": "error",
        "vue/require-name-property": "warn",
        "vue/require-prop-comment": "warn",
        "vue/require-typed-object-prop": "error",
        "vue/require-typed-ref": "error",
        "vue/slot-name-casing": "error",
        "vue/static-class-names-order": "warn",
        "vue/v-for-delimiter-style": "error",

        "vue/require-default-prop": "off",
        "vue/require-emit-validator": "off",
        "vue/singleline-html-element-content-newline": "off",
        ...all,
      },
    },

    {
      name: "hope/vue/sfc-rules",
      files: ["**/*.vue"],
      rules: {
        ...tsRules,
        "vue/block-lang": [
          "error",
          {
            script: { lang: "ts" },
            style: { lang: "scss" },
          },
        ],
        "vue/block-order": "error",
        "vue/block-tag-newline": "error",
        "vue/component-api-style": "error",
        "vue/component-name-in-template-casing": ["error", "PascalCase"],
        "vue/component-options-name-casing": "error",
        "vue/define-emits-declaration": "error",
        "vue/define-macros-order": [
          "error",
          {
            order: [
              "defineOptions",
              "defineModel",
              "defineProps",
              "defineEmits",
              "defineSlots",
            ],
            defineExposeLast: true,
          },
        ],
        "vue/define-props-declaration": "error",
        "vue/html-button-has-type": "warn",
        "vue/html-comment-content-newline": "error",
        "vue/html-comment-content-spacing": "error",
        "vue/html-comment-indent": "error",
        "vue/no-import-compiler-macros": "error",
        "vue/no-use-v-else-with-v-for": "error",
        "vue/no-useless-mustaches": "error",
        "vue/no-useless-v-bind": "error",
        "vue/padding-line-between-blocks": "error",
        "vue/padding-line-between-tags": "error",
        "vue/prefer-define-options": "error",
        "vue/prefer-use-template-ref": "error",
        "vue/require-expose": "error",
        "vue/require-macro-variable-name": [
          "error",
          {
            defineProps: "props",
            defineEmits: "emit",
            defineSlots: "slots",
            useSlots: "slots",
            useAttrs: "attrs",
          },
        ],
        "vue/script-indent": "error",
        ...sfc,
      },
    },
  );
