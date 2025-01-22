import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}', './stories/**/*.{js,jsx,ts,tsx}'],
  outdir: '../styled-system/dist',
  jsxFramework: 'solid',
  presets: ['@hanekokoro-ui/panda-preset'],
  strictTokens: true,
  importMap: '@hanekokoro-ui/styled-system',
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
