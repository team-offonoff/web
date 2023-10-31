const aliases = require('./tsconfig.paths.json').compilerOptions.paths;

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@tanstack/query'],
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.ts', '.tsx'],
        map: Object.entries(aliases).map(([key, value]) => {
          const newPathKey = key.replace('/*', '');
          const newPathValue = `./${value[0].replace('/*', '')}`;
          return [newPathKey, newPathValue];
        }),
      },
    },
  },
  rules: {
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/stable-query-client': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-empty-pattern': 'warn',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'type',
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          ...Object.keys(aliases).map((key) => {
            return {
              pattern: key,
              group: 'internal',
              position: 'after',
            };
          }),
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
