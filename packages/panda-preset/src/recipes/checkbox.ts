import { defineSlotRecipe } from '@pandacss/dev';

export const checkbox = defineSlotRecipe({
  className: 'checkbox',
  jsx: ['Checkbox', 'Checkbox.Root'],
  slots: ['root', 'indicator', 'control'],
  base: {
    root: {
      alignItems: 'center',
      colorPalette: 'accent',
      display: 'flex',
      gap: '2',
    },
    control: {
      width: '5',
      height: '5',
      rounded: 'md',
      border: '1px solid {colors.border.subtle}',
      color: 'colorPalette.fg',
      cursor: 'pointer',
      display: 'flex',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      _hover: {
        cursor: 'pointer',
        background: 'bg.subtle',
      },
      _checked: {
        background: 'colorPalette.default',
        borderColor: 'colorPalette.default',
        _hover: {
          background: 'colorPalette.default',
        },
      },
      _indeterminate: {
        background: 'colorPalette.default',
        borderColor: 'colorPalette.default',
        _hover: {
          background: 'colorPalette.default',
        },
      },
      _peerFocusVisible: {
        outlineOffset: '0.5',
        outline: '2px solid',
        outlineColor: 'border.outline',
        _checked: {
          outlineColor: 'colorPalette.default',
        },
      },
      _disabled: {
        opacity: '0.5',
        _hover: {
          cursor: 'not-allowed',
        },
      },
    },
    indicator: {
      width: '4',
      height: '4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});
