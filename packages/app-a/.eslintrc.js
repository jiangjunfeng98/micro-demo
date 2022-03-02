module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    'vue/multi-word-component-names': 'off',
    'comma-dangle': ['error', 'never'],
    'object-curly-newline': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    // indent: ['error', 2],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 允许使用 @ts-ignore
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    // 允许使用 any
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 最大行长度
    'max-len': ['error', 200],
    // 文件最多行数
    'max-lines': ['error', {
      max: 350,
      skipBlankLines: true,
      skipComments: true
    }],
    // 嵌套块深度
    'max-depth': [0, 3],
    // 圈复杂度
    complexity: ['error', 10],
    // 禁止行内备注
    'no-inline-comments': 'error',
    // 空行最多不能超过2行
    'no-multiple-empty-lines': [1, { max: 2 }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'no-param-reassign': ['error', { props: false }],
    'vue/html-self-closing': ['error', {
      html: {
        normal: 'never', void: 'always'
      }
    }]
  }
};
