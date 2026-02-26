import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

const eslintConfig = defineConfig([
  ...globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'dist/**',
    'next-env.d.ts',
    'node_modules/**',
    '.git/**',
    '.contentlayer/**',
  ]),
  js.configs.recommended,
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'dist/**', '.contentlayer/**'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        React: 'readonly',
      },
    },
    rules: {
      // Best Practices
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': 'off',
      'no-debugger': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'warn',
      'object-shorthand': 'warn',
      'quote-props': ['warn', 'as-needed'],

      // React & Next.js
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@next/next/no-html-link-for-pages': 'off',

      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-var-requires': 'warn',

      // Import Order (basic)
      'sort-imports': [
        'warn',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],

      // Code Quality
      eqeqeq: ['error', 'always'],
      curly: 'error',
      'brace-style': ['error', '1tbs'],
      'keyword-spacing': 'error',
      'arrow-spacing': 'error',

      // Prettier
      'prettier/prettier': 'warn',
    },
  },
]);

export default eslintConfig;
