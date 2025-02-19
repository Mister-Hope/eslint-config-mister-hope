import { hope } from "./src/index.js";

export default hope({
  languageOptions: {
    parserOptions: {
      projectService: {
        allowDefaultProject: ["eslint.config.ts"],
      },
    },
  },
  ts: {
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
});
