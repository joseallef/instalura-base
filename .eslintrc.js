// eslint-disable-next-line no-undef
module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
      "cypress/globals": true
  },
  "extends": [
      "plugin:cypress/recommended",
      "eslint:recommended",
      "plugin:react/recommended"
  ],
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "cypress"
  ],
  "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      'import/prefer-default-export': 'off'
  },
};
