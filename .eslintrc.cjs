module.exports = {
  'env': {
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'off',
    // 'semi': [
    //   'error',
    //   'never'
    // ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'indent': 'off',
    '@typescript-eslint/indent': [ 'error', 2 ],
    // 'indent': [
    //   'error',
    //   2
    // ],
    'array-bracket-spacing': [
      2,
      'always',
      {
        'singleValue': true,
        'objectsInArrays': true,
        'arraysInArrays': false
      }
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        'allowSingleExtends': true
      }
    ]
  }
}
