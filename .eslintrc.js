module.exports = {
    env: {
        es2021: true,
        node: true,
        es6: true,
        mocha: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    plugins: ['promise'],
    parserOptions: {
        ecmaVersion: 13,
    },
    rules: {
        'no-unused-vars': 'off',
        'promise/catch-or-return': ['error'],
        'promise/param-names': ['error'],
        'promise/no-nesting': ['warn'],
    },
}
