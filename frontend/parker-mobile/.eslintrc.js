const path = require('path')

module.exports = {
  extends: ['../../config/eslintrc.js'],
  parserOptions: {
    project: path.resolve(__dirname, 'tsconfig.json'),
  },
  rules: {
    'import/no-cycle': 'error',
    '@typescript-eslint/no-misused-promises': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    'id-length': 'warn',
    'no-restricted-imports': [
      'error',
      {
        paths: ['mobx-react', 'moment'],
        patterns: [
          {
            group: ['dist'],
            message: 'Avoid importing from dist folders, import @spare/<package> directly instead',
          },
          {
            group: ['@spare/**/src/**'],
            message: 'Avoid importing from @spare/<package>/src folders, import @spare/<package> directly instead',
          },
          {
            group: ['*.native'],
            message: 'Avoid importing .native files directly',
          },
          {
            group: ['*.web'],
            message: 'Avoid importing .web files directly',
          },
        ],
      },
    ],
  },
}
