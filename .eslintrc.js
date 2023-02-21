module.exports = {
  root: true,
  // extends: ['@react-native-community', ' eslint:recommended'],
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
          },
        ],
        '@typescript-eslint/no-shadow': ['error'],
        'react-native/no-inline-styles': 0,
        'no-shadow': 'off',
        'no-undef': 'off',
        semi: 0,
      },
    },
  ],
};
