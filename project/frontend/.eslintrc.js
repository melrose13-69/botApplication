module.exports = {
  extends: [
    '../../.eslintrc.js',
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended'
  ],
  root: true,
  rules: {
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/block-tag-newline': ['error', { maxEmptyLines: 1, multiline: 'always', singleline: 'always' }],
    'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'vue/comma-dangle': 'error',
    'vue/comma-spacing': ['error', { after: true, before: false }],
    'vue/comma-style': ['error', 'last'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/component-options-name-casing': 'error',
    'vue/custom-event-name-casing': 'error',
    'vue/dot-location': ['error', 'property'],
    'vue/dot-notation': 'error',
    'vue/eqeqeq': 'error',
    'vue/html-comment-content-newline': 'error',
    'vue/html-comment-content-spacing': 'error',
    'vue/html-comment-indent': 'error',
    'vue/match-component-file-name': ['error', { extensions: ['vue'], shouldMatchCase: false }],
    'vue/max-attributes-per-line': ['error', { singleline: 2 }],
    'vue/no-child-content': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-potential-component-option-typo': ['error', { custom: [], presets: ['vue'], threshold: 1 }],
    'vue/no-reserved-component-names': 'error',
    'vue/no-static-inline-styles': 'error',
    'vue/no-this-in-before-route-enter': 'error',
    'vue/no-unsupported-features': ['error', { ignores: [], version: '^3.0.0' }],
    'vue/no-unused-properties': 'error',
    'vue/no-unused-refs': 'error',
    'vue/no-use-computed-property-like-method': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/no-v-html': 0,
    'vue/no-v-text-v-html-on-component': 'error',
    'vue/object-curly-spacing': ['warn', 'always', { arraysInObjects: true, objectsInObjects: true }],
    'vue/padding-line-between-blocks': 'error',
    'vue/prefer-import-from-vue': 'error',
    'vue/prefer-separate-static-class': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/require-direct-export': 'error',
    'vue/require-name-property': 'error',
    'vue/sort-keys': 'error',
    'vue/v-on-function-call': 'error'
  }
}
