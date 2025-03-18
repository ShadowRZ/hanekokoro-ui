import { defineRecipe } from '@pandacss/dev';

export const menuItem = defineRecipe({
  className: 'item',
  base: {
    colorPalette: 'neutral',
    userSelect: 'none',
    outline: 'none',
    rounded: 'md',
    px: '1.5',
    lineHeight: '1.25',
    h: '8',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '2',
    _hover: {
      cursor: 'pointer',
      backgroundColor: 'colorPalette.dimmed',
    },
    _disabled: {
      opacity: '0.5',
      _hover: {
        cursor: 'not-allowed',
        background: 'transparent',
      },
    },
    color: 'colorPalette.text',
    _highlighted: {
      backgroundColor: 'colorPalette.dimmed',
    },
  },
});
