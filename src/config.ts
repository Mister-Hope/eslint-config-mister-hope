import type { Linter } from "eslint";

export const config = (...configs: Linter.Config[]): Linter.Config[] => configs;
