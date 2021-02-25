module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-use-before-define": "off",
    quotes: "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "react/jsx-filename-extension": "off",
    "comma-dangle": "off",
    "object-curly-newline": "off",
    "no-undef": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
  },
};
