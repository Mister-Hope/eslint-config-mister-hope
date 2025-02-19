declare module "@eslint/js" {
  import type { Linter } from "eslint";

  declare const js: {
    readonly configs: {
      readonly recommended: { readonly rules: Readonly<Linter.RulesRecord> };
      readonly all: { readonly rules: Readonly<Linter.RulesRecord> };
    };
  };

  export default js;
}

declare module "@eslint-community/eslint-plugin-eslint-comments/configs" {
  import type { Linter } from "eslint";

  const recommended: Linter.Config;
  export = { recommended };
}

declare module "eslint-plugin-vue" {
  import type { Linter } from "eslint";

  const pluginVue: {
    configs: Record<string, Linter.Config[]>;
  };

  export default pluginVue;
}
