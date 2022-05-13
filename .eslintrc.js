const path = require('path');

module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react-hooks', '@typescript-eslint/eslint-plugin'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.tsx',
          '**/webpack.*.js',
          '**/script/*.js',
          '**/.storybook/*.@(js|ts)?(x)',
        ],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    'react/function-component-definition': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '[@]common/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      { controlComponents: ['input', 'select'] },
    ],
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { variables: false },
        ],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-floating-promises': 'off',
      },
      parserOptions: {
        project: [
          './tsconfig.json',
          './packages/**/tsconfig.json',
          './apps/**/tsconfig.json',
        ],
      },
    },
    {
      files: ['packages/ui/**/*.ts?(x)', 'packages/ui/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/ui/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['apps/nextjs/**/*.ts?(x)', 'apps/nextjs/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/apps/nextjs/tsconfig.json`),
          },
        },
      },
    },
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts', '.js', '.jsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
  },
};
