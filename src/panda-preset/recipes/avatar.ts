import { avatarAnatomy } from '@ark-ui/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

export const avatar = defineSlotRecipe({
  className: 'avatar',
  jsx: ['Avatar', 'MxcAvatar'],
  slots: avatarAnatomy.keys(),
  base: {
    root: {
      colorPalette: 'accent',
      display: 'inline-block',
      rounded: 'full',
      overflow: 'hidden',
    },
    image: {
      userSelect: 'none',
      flexShrink: '0',
      maxW: 'full',
      width: 'full',
      height: 'full',
      display: 'block',
      _hidden: {
        display: 'none',
      },
    },
    fallback: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
      width: 'full',
      height: 'full',
      fontWeight: 'medium',
      _hidden: {
        display: 'none',
      },
    },
  },
  variants: {
    size: {
      large: {
        root: {
          width: '12',
          height: '12',
          '& svg': {
            width: '8',
            height: '8',
          },
        },
      },
      small: {
        root: {
          width: '6',
          height: '6',
          '& svg': {
            width: '4',
            height: '4',
          },
        },
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
    size: 'large',
    variant: 'soft',
  },
});
