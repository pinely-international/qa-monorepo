import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default [
  {
    files: ['packages/**/*.{ts,tsx,js}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.base.json',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
    },
    ignores: ['dist', 'node_modules']
  }
];
