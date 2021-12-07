const NONE = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [],
  rules: {},
};
