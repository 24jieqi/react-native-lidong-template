module.exports = {
  root: true,
  extends: ['@fruits-chain/eslint-config-rn'],
  rules: {
    'no-console': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-explicit-any': 1,
    'react/jsx-boolean-value': 'warn',
    'react/jsx-key': [
      'warn',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
      },
    ],
    // 待追加
    'react/no-unstable-nested-components': 0,
  },
  globals: {
    NodeJS: true,
    defs: true,
    // API: true,
    // window: true,
  },
}
