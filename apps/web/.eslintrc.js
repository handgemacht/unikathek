/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    '@repo/eslint-config/next.js',
    '@repo/eslint-config/react-internal.js'
  ],
  parserOptions: {
    project: true,
  },
};
