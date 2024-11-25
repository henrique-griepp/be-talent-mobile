// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "@typescript-eslint/no-empty-object-type": "error",

    "prettier/prettier": ["error", { "endOfLine": "auto" }],
  },
  ignorePatterns: ["/dist/*"],
};
