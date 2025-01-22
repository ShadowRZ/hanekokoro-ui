import { defineConfig } from '@pandacss/dev';
import preset from './src/index';

export default defineConfig({
  preflight: true,
  outdir: '../solid/styled-system',
  jsxFramework: 'solid',
  presets: [preset],
  strictTokens: true,
  importMap: '@hanekokoro-ui/styled-system',
});
