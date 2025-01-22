import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  outdir: './dist',
  jsxFramework: 'solid',
  presets: ['@hanekokoro-ui/panda-preset'],
  strictTokens: true,
  importMap: '@hanekokoro-ui/styled-system',
});
