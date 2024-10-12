import defaultConfig, { config } from "./src/index.js";

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
        projectService: {
          allowDefaultProject: ["eslint.config.ts"],
        },
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
