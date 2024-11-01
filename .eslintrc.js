// https://eslint.org/docs/v8.x/

const config = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    /* https://www.npmjs.com/package/eslint-plugin-react */
    'plugin:react/recommended',
    /* https://www.npmjs.com/package/eslint-plugin-react-hooks */
    'plugin:react-hooks/recommended',
    /*https://www.npmjs.com/package/eslint-plugin-import*/
    'plugin:import/errors',
    'plugin:import/warnings',
    /*https://www.npmjs.com/package/eslint-plugin-cypress*/
    'plugin:cypress/recommended',
  ],
  /* https://github.com/import-js/eslint-plugin-import */
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
      webpack: {
        // if not set, import won't work properly with aliases f.e. import Header from '@components/Header'
        config: './config/webpack.development.config.js',
      },
    },
  },
  plugins: ['simple-import-sort', 'react'],
  ignorePatterns: ['node_modules', 'config'],
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'import/no-named-as-default': 'off',
    'import/namespace': [2, { allowComputed: true }],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/no-children-prop': 'off',
  },
  overrides: [
    {
      files: ['*rc.js', '*.config.js'],
      rules: {},
    },
  ],
  globals: {
    Cypress: true,
  },
};

module.exports = config;
