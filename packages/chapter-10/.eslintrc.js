module.exports = {
  ignorePatterns: ["*.config.js", "dist/", ".eslintrc.js"],
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "prettier",
    "react",
    "jest",
    "testing-library",
    "jest-dom",
  ],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
    "no-param-reassign": "off",
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
