import { qrCodeAnatomy } from '@ark-ui/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

export const qrCode = defineSlotRecipe({
  slots: qrCodeAnatomy.keys(),
  className: 'qr-code',
  base: {
    root: {
      position: 'relative',
      width: 'fit-content',
      '--qr-code-overlay-size': 'calc(var(--qr-code-size) / 3)',
    },
    frame: {
      width: 'var(--qr-code-size)',
      height: 'var(--qr-code-size)',
      '--qr-code-size': '120px',
      fill: 'var(--qr-code-frame-fill, currentColor)',
    },
    overlay: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'var(--qr-code-overlay-size)',
      height: 'var(--qr-code-overlay-size)',
      padding: '1',
      bg: 'bg',
      rounded: 'sm',
    },
  },
});
