module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-refresh'],
  rules: {
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 3],
    'no-console': 'error',

    // Spaces
    'object-curly-spacing': ['error', 'always'],

    // Variables
    'no-unused-vars': 'off',
    'prefer-const': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', {
      'vars': 'all'
    }],

    // React
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
  },
}
