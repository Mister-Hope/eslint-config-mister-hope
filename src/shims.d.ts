declare module "@eslint/eslintrc" {
  import type { Linter } from "eslint";

  /**
   * A compatibility class for working with configs.
   */
  export class FlatCompat {
    constructor({
      baseDirectory,
      resolvePluginsRelativeTo,
      recommendedConfig,
      allConfig,
    }?: {
      /**
       * default: process.cwd()
       */
      baseDirectory?: string;
      resolvePluginsRelativeTo?: string;
      recommendedConfig?: Linter.LegacyConfig;
      allConfig?: Linter.LegacyConfig;
    });

    /**
     * Translates an ESLintRC-style config into a flag-config-style config.
     * @param eslintrcConfig The ESLintRC-style config object.
     * @returns A flag-config-style config object.
     */
    config(eslintrcConfig: Linter.LegacyConfig): Linter.Config[];

    /**
     * Translates the `env` section of an ESLintRC-style config.
     * @param envConfig The `env` section of an ESLintRC config.
     * @returns An array of flag-config objects representing the environments.
     */
    env(envConfig: Record<string, boolean>): Linter.Config[];

    /**
     * Translates the `extends` section of an ESLintRC-style config.
     * @param configsToExtend The names of the configs to load.
     * @returns An array of flag-config objects representing the config.
     */
    extends(...configsToExtend: string[]): Linter.Config[];

    /**
     * Translates the `plugins` section of an ESLintRC-style config.
     * @param plugins The names of the plugins to load.
     * @returns An array of flag-config objects representing the plugins.
     */
    plugins(...plugins: string[]): Linter.Config[];
  }
}

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

declare module "eslint-plugin-vue" {
  import type { Linter } from "eslint";

  const pluginVue: {
    configs: Record<string, Linter.Config[]>;
  };

  export default pluginVue;
}
