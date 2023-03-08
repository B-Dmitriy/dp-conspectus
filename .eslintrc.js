module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        // 'plugin:@typescript-eslint/eslint-recommended',
        // 'plugin:@typescript-eslint/recommended',
        'eslint-config-airbnb',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'no-undef': 'off',
        'no-shadow': 'off',
        indent: ['error', 4],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
        }],
        'no-param-reassign': 'off',
        'no-underscore-dangle': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react-in-jsx-scope': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    },
    globals: {
        __IS_DEV__: true,
    },
};
