module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {argsIgnorePattern: '^_'},
        ],
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {assertionStyle: 'as'},
        ],

        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react-hooks/exhaustive-deps': 'off',
      },
    },
  ],
};
