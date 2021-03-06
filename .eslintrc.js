module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/recommended", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-irregular-whitespace": ["error", { skipComments: true, skipStrings: true }]
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  globals: {
    _: "readonly"
  }
};
