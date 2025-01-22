import { defineConfig } from '@pandacss/dev';
import preset from './src/index';

export default defineConfig({
  preflight: true,
  outdir: '../styled-system/dist',
  jsxFramework: 'solid',
  presets: [preset],
  strictTokens: true,
  importMap: '@hanekokoro-ui/styled-system',
});
