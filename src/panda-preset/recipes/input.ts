import { defineRecipe } from '@pandacss/dev';

export const input = defineRecipe({
  className: 'input',
  jsx: ['Input', 'Field.Input', 'UIField.Input'],
  base: {
    appearance: 'none',
    background: 'none',
    rounded: 'md',
    colorPalette: 'accent',
    color: 'fg.default',
    outline: 'none',
    position: 'relative',
    width: 'full',
    padding: '2',
    _disabled: {
      opacity: '0.5',
      cursor: 'not-allowed',
    },
    borderWidth: '1px',
    borderStyle: 'solid',
  },
  variants: {
    variant: {
      surface: {
        borderColor: 'border.default',
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
        color: 'colorPalette.text',
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
    variant: 'surface',
  },
});
