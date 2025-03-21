import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import solid from 'eslint-plugin-solid/configs/typescript';
import unicorn from 'eslint-plugin-unicorn';
import importX from 'eslint-plugin-import-x';

export default tseslint.config(
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
  },
  {
    ignores: ['packages/**/styled-system/', 'packages/**/dist/', '.nx/'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  eslint.configs.recommended,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  unicorn.configs['flat/recommended'],
  // eslint-disable-next-line import-x/no-named-as-default-member
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ['**/*.{ts,tsx}'],
    ...solid,
  },
  // Project Rules
  {
    rules: {
      'import-x/no-unresolved': 'off',
      'import-x/extensions': ['error', 'never', { svg: 'always', css: 'always', json: 'always' }],
      'import-x/no-named-as-default': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/empty-brace-spaces': 'off',
      'unicorn/consistent-function-scoping': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
  {
    files: ['**/.storybook/*.ts'],
    // eslint-disable-next-line import-x/no-named-as-default-member
    extends: [tseslint.configs.disableTypeChecked],
  }
);
