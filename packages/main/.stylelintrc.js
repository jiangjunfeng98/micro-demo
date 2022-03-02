module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-scss',
    'stylelint-order'
  ],
  overrides: [
    {
      files: ['src/**/*.{html,vue}'],
      customSyntax: 'postcss-html'
    }, {
      files: ['src/**/*.{css,scss}'],
      customSyntax: 'postcss-scss'
    }
  ],
  rules: {
    // 缩紧
    indentation: 2,
    // 字体系列是否应用于单双引号内
    'font-family-name-quotes': null,
    // 禁止非法伪类
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['deep', 'input-placeholder']
      }
    ],
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['deep'] }],
    'max-nesting-depth': 6,
    // 禁止小于0的数字前添加0
    'number-leading-zero': 'never',
    // 关闭特异性较低的选择器在特异性较高的选择器之后重写
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-type-no-unknown': null,
    'at-rule-no-unknown': null,
    // 禁止使用重复的选择器
    'no-duplicate-selectors': null,
    'no-empty-source': null,
    // 指定一个模式类选择符
    'selector-class-pattern': null,
    // 颜色大小写
    'color-hex-case': 'upper',
    // 颜色是否使用缩写
    'color-hex-length': 'long',
    'max-line-length': 180,
    'declaration-block-no-redundant-longhand-properties': [true, { ignoreShorthands: ['/flex-/'] }],
    // rgb() and hsl()
    'color-function-notation': 'legacy',
  },
  ignoreFiles: ['src/iconfont/*.css']
};
