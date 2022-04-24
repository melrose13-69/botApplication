module.exports = {
  root: true,
  extends: [
    '../../.eslintrc.js'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: false
  },
  rules: {}
}
