export default {
  '**/*.{js,jsx,ts,tsx,json,css,scss,md,mdx,html}': ['prettier --write'],
  '**/*.md': ['markdownlint'],
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix'],
}
// This configuration uses the following tools:
// - Prettier for formatting code
// - Markdownlint for linting markdown files
// - ESLint for linting JavaScript and TypeScript files
// The configuration specifies that:
// - All files with the specified extensions will be formatted with Prettier
// - All markdown files will be linted with Markdownlint
// - All JavaScript and TypeScript files will be linted with ESLint
// The `--fix` option for ESLint will automatically fix any fixable issues
// The `--write` option for Prettier will format the files in place
// The configuration is set up to run these tools on staged files before committing
// The `lint-staged` package is used to run these commands on the staged files.
