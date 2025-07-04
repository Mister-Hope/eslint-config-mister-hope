import { comment } from "./comments.js";
import type {
  BaseOptions,
  FlatConfig,
  IgnoresOptions,
  ImportOptions,
  LanguageOptions,
} from "./helpers.js";
import { ignores } from "./ignores.js";
import { js } from "./js.js";
import { jsImport } from "./jsImport.js";
import { prettier } from "./prettier.js";
import { ts, tsParser } from "./ts.js";
import { tsImport } from "./tsImport.js";
import { vitest } from "./vitest.js";
import type { WXAppOptions } from "./wxapp.js";
import { wxapp } from "./wxapp.js";

export interface HopeOptions {
  ignores?: IgnoresOptions;
  languageOptions?: LanguageOptions;

  /**
   * @default true
   */
  comment?: BaseOptions;

  /**
   * @default true
   */
  js?: BaseOptions;

  /**
   * @default true
   */
  jsImport?: ImportOptions | boolean;

  /**
   * @default true
   */
  ts?: BaseOptions;

  /**
   * @default true
   */
  tsImport?: ImportOptions | boolean;

  /**
   * @default true
   */
  prettier?: boolean;

  /**
   * @default true
   */
  vitest?: BaseOptions;

  /**
   * @default false
   */
  wxapp?: WXAppOptions | boolean;
}

const getOptions = <T>(
  option?: T,
): T extends boolean ? Record<never, never> : Exclude<T, boolean> =>
  (typeof option === "object" ? option : {}) as T extends boolean
    ? Record<never, never>
    : Exclude<T, boolean>;

export const hope = (
  { languageOptions = {}, ...options }: HopeOptions = {},
  ...extraConfigs: FlatConfig[]
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
  if (options.comment !== false)
    flatConfigs.push(...comment(getOptions(options.comment)));
  if (options.wxapp)
    flatConfigs.push(
      ...wxapp(typeof options.wxapp === "object" ? options.wxapp : {}),
    );

  flatConfigs.push({
    languageOptions: {
      ...languageOptions,
      parserOptions: {
        ...(options.ts !== false
          ? {
              parser: tsParser,
              tsconfigDirName: import.meta.dirname,
              // enable projectService for typescript-eslint if project is not defined
              ...(languageOptions.parserOptions?.project
                ? {}
                : { projectService: true }),
            }
          : {}),
        ...languageOptions.parserOptions,
      },
    },
  });

  flatConfigs.push(...extraConfigs);

  // prettier config shall come last
  if (options.prettier !== false) flatConfigs.push(prettier);

  return flatConfigs;
};
