module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    // "plugin:@typescript-eslint/recommended",
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint-config-prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // project: path.join(__dirname, "tsconfig.json"),
    // project: "tsconfig.json",
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  // plugins: ['react-refresh', 'react-hooks'],
  plugins: ['react', 'prettier', 'react-refresh', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  // 'import/resolver': {
  //   node: {
  //     paths: ['src'],
  //     extensions: ['.js', '.jsx', '.ts', '.tsx'],
  //   },
  // },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
  },
  // "ignorePatterns": ["node_modules/*"]
};
