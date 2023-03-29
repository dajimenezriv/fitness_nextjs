module.exports = {
  // We can use some environments to define global variables
  env: {
    // These first two come by default
    browser: true,
    es2021: true,
    // Declare cypress global variables so that it does not throw an error when using cypress variables
    'cypress/globals': true,
  },
  // Extends the base configuration
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:cypress/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'react-app',
    'plugin:import/errors',
    'plugin:import/warnings',
    'next/core-web-vitals',
  ],
  // We want to parse the code using typescript
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      // enables jsx
      jsx: true,
    },
    // For ES6 syntax, use { 'parserOptions': { 'ecmaVersion': 6 } }; for new ES6 global variables, use { 'env': { 'es6': true } }.
    // Setting { 'env': { 'es6': true } } enables ES6 syntax automatically,
    // but { 'parserOptions': { 'ecmaVersion': 6 } } does not enable ES6 globals automatically.
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  // Plugins can include:
  // Custom rules to validate if your code meets a certain expectation, and what to do if it does not meet that expectation.
  // Custom configurations.
  // Custom environments.
  // Custom processors to extract JavaScript code from other kinds of files or preprocess code before linting.
  plugins: [
    // https://www.npmjs.com/package/eslint-import-resolver-typescript
    'import',
    'react',
    'jest',
    '@typescript-eslint',
    'cypress',
    // Help sort imports
    'simple-import-sort',
  ],
  // 0 = 'off', 1 = 'warn' and 2 = 'error'
  rules: {
    'max-len': ['error', { code: 140 }],
    'no-param-reassign': ['error', { props: false }],
    // We don't need to import React, since we are using react 18
    'react/react-in-jsx-scope': 'off',
    // We don't need to specify the type of the props
    // TODO: remove this since we will use typescript everywhere
    'react/prop-types': ['off'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'linebreak-style': ['error', 'unix'],
    // We don't need to include the extensions in case of 'ignorePackets' extensions
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // Enforce that autoFocus prop is not used on elements (off)
    'jsx-a11y/no-autofocus': ['off'],
    // We can spread props to other components since it is turned off
    'react/jsx-props-no-spreading': 'off',
    // Which sorting system we are going to use on imports
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^(@|components)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(css)$'],
        ],
      },
    ],
    // Throw error if the impors are not sorted
    'simple-import-sort/exports': 'error',
    // Turn on errors for missing imports
    'import/no-unresolved': 'error',
    // Solves the error 'X should be listed in the project's dependencies, not devDependencies', for example with cypress
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // We don't need to create default props for props that can be undefined: prop?: type
    'react/require-default-props': ['off'],
    // https://stackoverflow.com/questions/63961803/eslint-says-all-enums-in-typescript-app-are-already-declared-in-the-upper-scope
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        // Always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        alwaysTryTypes: true,
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
