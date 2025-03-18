import { defineSlotRecipe } from '@pandacss/dev';
import { panel } from './panel';

export const select = defineSlotRecipe({
  className: 'select',
  jsx: ['Select', 'Select.Root'],
  slots: [
    'input',
    'label',
    'root',
    'content',
    'item',
    'control',
    'section',
    'itemIndicator',
    'trigger',
    'icon',
    'listbox',
    'value',
  ],
  base: {
    root: {
      colorPalette: 'accent',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5',
      width: 'full',
    },
    control: {
      position: 'relative',
    },
    trigger: {
      appearance: 'none',
      background: 'none',
      border: '1px solid {colors.border.default}',
      rounded: 'lg',
      color: 'fg.default',
      outline: 'none',
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 'full',
      padding: '2',
      cursor: 'pointer',
      _disabled: {
        opacity: '0.5',
        cursor: 'not-allowed',
      },
    },
    label: {
      pb: '0.5',
    },
    content: {
      ...panel.base,
      transformOrigin: 'var(--kb-select-content-transform-origin);',
      _expanded: {
        animation: 'popup-open',
      },
      _closed: {
        animation: 'popup-close',
      },
      _focusVisible: {
        outlineOffset: '0.5',
        outline: '2px solid token(colors.border.outline)',
      },
    },
    item: {
      colorPalette: 'neutral',
      userSelect: 'none',
      outline: 'none',
      rounded: 'md',
      padding: '2',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '2 ',
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
    section: {
      fontWeight: 'bold',
      textStyle: 'sm',
      px: '2',
      py: '1',
    },
    itemIndicator: {
      ms: 'auto',
    },
    value: {
      _placeholderShown: {
        color: 'fg.subtle',
      },
    },
    listbox: {
      outline: 'none',
    },
  },
  variants: {
    variant: {
      outline: {
        trigger: {
          _focus: {
            borderColor: 'colorPalette.default',
            boxShadow: '0 0 0 1px token(colors.colorPalette.default)',
          },
        },
      },
      soft: {
        trigger: {
          backgroundColor: 'colorPalette.dimmed',
          color: 'colorPalette.contrast',
          borderColor: 'transparent',
          _focus: {
            borderColor: 'colorPalette.default',
            boxShadow: '0 0 0 1px token(colors.colorPalette.default)',
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'outline',
  },
});
