module.exports = {
  extends: ['react-app', 'eslint:recommended', 'plugin:prettier/recommended'],
  plugins: [
    'babel', // https://www.npmjs.com/package/eslint-plugin-babel
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
      },
    },
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { args: 'all', argsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],
    // Per the docs, the root no-unused-vars should be disabled:
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    'no-undef': 'off',

    'sort-imports': 0,
    'import/order': [2, { alphabetize: { order: 'asc' } }],

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'all',
      },
    ],
  },
}
