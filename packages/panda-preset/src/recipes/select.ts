import { defineSlotRecipe } from '@pandacss/dev';
import panel from './base/panel';
import item from './base/menu-item';

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
      border: '1px solid {colors.border.muted}',
      rounded: 'md',
      color: 'fg.default',
      outline: 'none',
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '2',
      lineHeight: 'tight',
      h: '8',
      cursor: 'pointer',
      _disabled: {
        opacity: '0.5',
        cursor: 'not-allowed',
      },
      '& svg': { width: '5', height: '5' },
    },
    label: {
      pb: '0.5',
    },
    content: {
      ...panel,
      p: '1',
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
    item,
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
        opacity: '0.6',
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
