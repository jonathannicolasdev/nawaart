module.exports = {
  env: {
    node: true,
    browser: true,
    es2020: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "jest"],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};
