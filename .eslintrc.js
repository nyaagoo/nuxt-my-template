module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaFeatures: {
      'legacyDecorators': true
    },
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'prettier/vue',
    "eslint:recommended",
    '@nuxtjs',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [
    'prettier',
    'vue'
  ],
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    "semi": ["error", "always"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "prettier/prettier": ["error", { "semi": true }],
    "vue/multiline-html-element-content-newline": "off",
    "vue/html-indent": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/singleline-html-element-content-newline": "off"
  }
}
