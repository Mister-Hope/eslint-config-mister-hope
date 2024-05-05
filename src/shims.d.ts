declare module "eslint-plugin-import" {
  export const configs: Record<string, any>;
  export const rules: any;
}

declare module "eslint-plugin-vue" {
  const pluginVue: any;

  export default pluginVue;
}
