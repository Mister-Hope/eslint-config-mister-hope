import defaultConfig, { config } from "./lib/index.js";

export default config(
  ...defaultConfig,
  {
    ignores: ["**/lib/**", "**/node_modules/**"],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        tsconfigDirName: import.meta.dirname,
        project: "./tsconfig.eslint.json",
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "default",
          format: ["camelCase"],
        },
        {
          selector: ["variable"],
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
        },
        {
          selector: ["parameter"],
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: ["property"],
          format: null,
          custom: {
            regex: ".*",
            match: true,
          },
          filter: ".*",
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
    },
  },
);
