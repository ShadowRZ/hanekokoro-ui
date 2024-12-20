import { defineConfig } from '@pandacss/dev';
import { createPreset } from './src/panda-preset';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}', './stories/**/*.{js,jsx,ts,tsx}'],
  outdir: 'styled-system',
  jsxFramework: 'solid',
  presets: [
    createPreset({
      semanticColors: {
        success: 'grass',
        warning: 'amber',
        error: 'red',
      },
    }),
  ],
  strictTokens: true,
  importMap: '@shadowrz/hanekokoro-ui/styled-system',
  staticCss: {
    recipes: '*',
  },
  globalCss: {
    extend: {
      html: {
        bg: 'bg.default',
        color: 'fg.default',
      },
    },
  },
});
