import { defineRecipe } from '@pandacss/dev';

export const badge = defineRecipe({
  className: 'badge',
  jsx: ['Badge'],
  base: {
    px: '1.5',
    py: '0.5',
    rounded: 'md',
    textStyle: 'xs',
    fontWeight: 'medium',
  },
  variants: {
    variant: {
      solid: {
        backgroundColor: 'colorPalette.default',
        color: 'colorPalette.fg',
      },
      soft: {
        backgroundColor: 'colorPalette.dimmed',
        color: 'colorPalette.text',
      },
      outline: {
        border: '1px solid token(colors.colorPalette.border)',
        backgroundColor: 'colorPalette.dimmed',
        color: 'colorPalette.text',
      },
    },
  },
  defaultVariants: {
    variant: 'soft',
  },
});
