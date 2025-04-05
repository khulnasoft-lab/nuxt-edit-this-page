module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  plugins: ['jest', 'vue'],
  globals: {
    'jest/globals': true,
    jasmine: true,
  },
  rules: {
    'filenames/match-regex': 'off',
    // 'import/prefer-default-export': 'off',
  },
};
