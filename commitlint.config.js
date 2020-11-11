module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["git", "module1", "module2", "release"]],
    "subject-case": [0],
    "body-max-line-length": [0],
  },
};
