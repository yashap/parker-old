module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaFeatures: { jsx: true }, sourceType: 'module' },
  plugins: [
    '@typescript-eslint',
    'import',
    'unused-imports',
    'jest',
    'jest-formatting',
    'prettier',
    'react',
    'react-hooks',
  ],
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': false }],
    '@typescript-eslint/ban-types': 'warn', // TODO Enable it.
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/explicit-member-accessibility': ['error', { overrides: { constructors: 'no-public' } }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: { regex: '^I[A-Z]', match: true },
      },
    ],
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
    '@typescript-eslint/no-extra-semi': 'off', // does not work well with prettier
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unused-vars': 'off', // duplicate with the one by unused-imports
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'off', // duplicate with no-require-imports
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/require-await': 'warn', // does not work well with functions just returning values
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNumber: true,
        allowBoolean: true,
        allowNullish: true,
      },
    ],
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/unbound-method': [
      'error',
      {
        ignoreStatic: true,
      },
    ],
    'arrow-body-style': 'error',
    curly: 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'id-denylist': ['error', 'char', 'err', 'pos', 'str'],
    'id-length': ['error', { exceptionPatterns: ['[x-z_]'] }],
    'import/default': 'off', // does not work well with synthetic imports
    'import/no-cycle': 'error',
    'import/no-default-export': 'error',
    'import/no-self-import': 'error',
    'import/no-unresolved': 'off', // does not work well with type-declaration-only modules
    'import/no-unused-modules': 'error',
    'import/no-useless-path-segments': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: [['builtin', 'external'], 'parent', 'index', 'sibling', 'object'],
        'newlines-between': 'never',
      },
    ],
    'jest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
    'jest/expect-expect': 'off',
    'jest/no-standalone-expect': ['error', { additionalTestBlockFunctions: ['beforeEach', 'afterEach'] }],
    'jest/valid-title': 'off', // does not work well with titles set by variables
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-console': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-lonely-if': 'error',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            importNames: ['flatMap', 'flatten'],
            message: 'Use native Array methods instead.',
          },
        ],
        patterns: [
          {
            group: ['dist'],
            message: 'Avoid importing from dist folders, import @spare/<package> directly instead',
          },
          {
            group: ['@spare/**/src/**'],
            message: 'Avoid importing from @spare/<package>/src folders, import @spare/<package> directly instead',
          },
        ],
      },
    ],
    'no-restricted-properties': ['error', { property: 'forEach' }],
    'no-return-await': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md#how-to-use
    'no-unused-vars': 'off', // duplicate with the one by unused-imports
    'no-useless-return': 'error',
    'object-shorthand': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-fragments': 'error',
    'react/no-this-in-sfc': 'error', // This is not set to error due to https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20544.
    'react/jsx-no-useless-fragment': 'warn',
    'react/prefer-stateless-function': 'warn', // TODO Enable it.
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars-ts': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
      },
    ],
  },
  env: {
    node: true,
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  settings: {
    react: { version: 'detect' },
    jest: { version: 'detect' }, // To prevent issue with react-native imports https://github.com/facebook/react-native/issues/28549
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
}
