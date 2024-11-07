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
  importMap: '~styled',
  staticCss: {
    recipes: '*',
  },
  globalCss: {
    extend: {
      html: {
        '--global-font-body': '"Inter Variable", Inter, sans-serif',
        bg: 'bg.default',
        color: 'fg.default',
      },
    },
  },
});
