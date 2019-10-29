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
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript',
    "eslint:recommended",
    'plugin:prettier/recommended'
  ],
  plugins: [
    'prettier',
    'vue'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    "semi": [2, "always"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "prettier/prettier": ["error", { "semi": true }],
    "vue/multiline-html-element-content-newline": "off",
    "vue/html-indent": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/singleline-html-element-content-newline": "off"
  }
}
