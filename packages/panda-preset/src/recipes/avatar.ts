import { defineSlotRecipe } from '@pandacss/dev';

export const avatar = defineSlotRecipe({
  className: 'avatar',
  jsx: ['Avatar'],
  slots: ['root', 'image', 'fallback'],
  base: {
    root: {
      colorPalette: 'accent',
      flexShrink: '0',
      display: 'inline-flex',
      rounded: 'full',
      verticalAlign: 'middle',
      userSelect: 'none',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 'full',
      height: 'full',
      objectFit: 'cover',
      rounded: 'inherit',
    },
    fallback: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'full',
      height: 'full',
      lineHeight: 'none',
      fontWeight: 'medium',
      rounded: 'inherit',
    },
  },
  variants: {
    size: {
      sm: { root: { width: '6', height: '6' }, fallback: { fontSize: 'xs', '& svg': { width: '4', height: '4' } } },
      md: { root: { width: '12', height: '12' }, fallback: { fontSize: 'lg', '& svg': { width: '8', height: '8' } } },
      lg: {
        root: { width: '20', height: '20' },
        fallback: { fontSize: '3xl', '& svg': { width: '14', height: '14' } },
      },
      xl: {
        root: { width: '32', height: '32' },
        fallback: { fontSize: '5xl', '& svg': { width: '24', height: '24' } },
      },
    },
    variant: {
      solid: {
        fallback: {
          color: 'colorPalette.fg',
          bg: 'colorPalette.default',
        },
      },
      soft: {
        fallback: {
          color: 'colorPalette.text',
          bg: 'colorPalette.dimmed',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'soft',
  },
});
