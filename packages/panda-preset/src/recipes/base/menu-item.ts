import { defineStyles } from '@pandacss/dev';

export default defineStyles({
  userSelect: 'none',
  outline: 'none',
  rounded: 'md',
  px: '1.5',
  lineHeight: 'tight',
  h: '8',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '2',
  _hover: {
    cursor: 'pointer',
    backgroundColor: 'token(colors.colorPalette.dimmed, colors.bg.muted)',
  },
  _disabled: {
    opacity: '0.5',
    _hover: {
      cursor: 'not-allowed',
      background: 'transparent',
    },
  },
  color: 'token(colors.colorPalette.text, colors.fg.default)',
  _highlighted: {
    backgroundColor: 'colorPalette.dimmed',
  },
});
