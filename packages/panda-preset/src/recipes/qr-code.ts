import { defineRecipe } from '@pandacss/dev';

export const qrCode = defineRecipe({
  className: 'qr-code',
  jsx: ['QrCode'],
  base: {
    width: 'var(--qr-code-size)',
    height: 'var(--qr-code-size)',
    '--qr-code-size': '120px',
  },
});
