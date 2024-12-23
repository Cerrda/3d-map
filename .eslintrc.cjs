module.exports = {
  // 预定义那些环境需要用到的全局变量
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    // eslint-plugin-import 插件， @see https://www.npmjs.com/package/eslint-plugin-import
    'plugin:import/recommended',
    'airbnb-base',
    'prettier',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json',
    '@unocss',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  plugins: ['vue', 'prettier', 'import'],
  parserOptions: {
    // 用来指定使用哪一个ECMAScript版本的语法
    ecmaVersion: 'latest',
    // 如果你的代码是ECMAScript 模块写的，该字段配置为module，否则为script(默认值)
    sourceType: 'module',
  },
  settings: {
    // 设置项目内的别名使import/resolver可以正常解析
    'import/resolver': {
      alias: {
        map: [['@', './src']],
      },
    },
    // 允许省略的扩展名
    'import/extensions': ['.js', '.mjs'],
  },
  // eslint (http://eslint.cn/docs/rules)
  rules: {
    'prettier/prettier': 'error',

    '@unocss/order-attributify': 'error',
    '@unocss/order': 'error',

    'import/extensions': 'off',
    'import/no-unresolved': ['error', { ignore: ['^virtual:'] }],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',

    'vue/multi-word-component-names': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    'no-unused-vars': 'off',
    'no-plusplus': 'off',
    'no-console': 'off',
    'func-names': 'off',
  },
}
