module.exports = {
    root: true,
    extends: ["@nuxt/eslint-config"],
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/max-attributes-per-line": ["error", {
        "singleline": 4,
        "multiline": 1,
      }],
      'vue/no-v-html': 'off',
    },
  };