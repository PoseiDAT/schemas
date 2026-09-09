const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  { ignores: ['node_modules/**', 'lib/**', 'coverage/**', 'generated/**', 'docs/**'] },
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: { project: false },
    },
  },
  {
    files: ['eslint.config.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
);
