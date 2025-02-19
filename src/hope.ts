import { comment } from "./comments.js";
import type { IgnoresOptions } from "./ignores.js";
import { ignores } from "./ignores.js";
import { js } from "./js.js";
import { jsImport } from "./jsImport.js";
import { prettier } from "./prettier.js";
import { ts } from "./ts.js";
import { tsImport } from "./tsImport.js";
import type { FlatConfig, Rules } from "./typings.js";
import { vitest } from "./vitest.js";

export interface HopeOptions {
  ignores?: IgnoresOptions;
  js?: Rules | boolean;
  jsImport?: Rules | boolean;
  ts?: Rules | boolean;
  tsImport?: Rules | boolean;
  /**
   * @default true
   */
  vitest?: Rules | boolean;
  /**
   * @default true
   */
  prettier?: boolean;
  comment?: Rules | boolean;
}

const getOptions = (option?: Rules | boolean): Rules =>
  typeof option === "object" ? option : {};

export const hope = (
  options: HopeOptions,
  ...configs: FlatConfig[]
): FlatConfig[] => {
  const flatConfigs: FlatConfig[] = [ignores(options.ignores)];

  if (options.js !== false) flatConfigs.push(...js(getOptions(options.js)));
  if (options.jsImport !== false)
    flatConfigs.push(...jsImport(getOptions(options.jsImport)));
  if (options.ts !== false) flatConfigs.push(...ts(getOptions(options.ts)));
  if (options.tsImport !== false)
    flatConfigs.push(...tsImport(getOptions(options.tsImport)));
  if (options.vitest !== false)
    flatConfigs.push(...vitest(getOptions(options.vitest)));
  if (options.prettier !== false) flatConfigs.push(prettier);
  if (options.comment !== false)
    flatConfigs.push(...comment(getOptions(options.comment)));

  return [...flatConfigs, ...configs];
};
