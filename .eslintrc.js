module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    // Add your custom rules here
  },
  env: {
    node: true, // This tells ESLint that your code is running in a Node.js environment
    // ...other environments...
  },
};
