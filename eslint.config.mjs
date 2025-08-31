import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import reactCompiler from 'eslint-plugin-react-compiler';
import next from '@next/eslint-plugin-next';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules', 'coverage', '.next', '*.d.ts'],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strict,
      eslintPluginPrettier,
    ],
    files: ['**/*.{ts,tsx, test.ts, test.tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-compiler': reactCompiler,
      next,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-compiler/react-compiler': 'error',
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      validateLineBreaks: 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  }
);
