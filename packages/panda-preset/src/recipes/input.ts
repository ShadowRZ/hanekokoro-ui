import { defineRecipe } from '@pandacss/dev';

export const input = defineRecipe({
  className: 'input',
  jsx: ['Input'],
  base: {
    appearance: 'none',
    background: 'none',
    rounded: 'md',
    colorPalette: 'accent',
    color: 'fg.default',
    outline: 'none',
    position: 'relative',
    lineHeight: 'tight',
    h: '8',
    padding: '2',
    _disabled: {
      opacity: '0.5',
      cursor: 'not-allowed',
    },
    borderWidth: '1px',
    borderStyle: 'solid',
    '& svg': { width: '5', height: '5' },
  },
  variants: {
    variant: {
      outline: {
        borderColor: 'border.muted',
        _focus: {
          borderColor: 'colorPalette.default',
          boxShadow: '0 0 0 1px token(colors.colorPalette.default)',
        },
        _invalid: {
          borderColor: 'fg.error',
          _focus: {
            borderColor: 'fg.error',
            boxShadow: '0 0 0 1px token(colors.border.error)',
          },
        },
      },
      soft: {
        backgroundColor: 'colorPalette.dimmed',
        color: 'colorPalette.contrast',
        borderColor: 'transparent',
        _focus: {
          borderColor: 'colorPalette.default',
          boxShadow: '0 0 0 1px token(colors.colorPalette.default)',
        },
        _invalid: {
          borderColor: 'fg.error',
          _focus: {
            borderColor: 'fg.error',
            boxShadow: '0 0 0 1px token(colors.border.error)',
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'outline',
  },
});
