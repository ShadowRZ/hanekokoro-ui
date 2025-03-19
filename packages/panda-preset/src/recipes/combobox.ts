import { defineSlotRecipe } from '@pandacss/dev';
import panel from './base/panel';
import item from './base/menu-item';

export const combobox = defineSlotRecipe({
  className: 'combobox',
  jsx: ['Combobox', 'Combobox.root'],
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
  ],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5',
    },
    control: {
      position: 'relative',
    },
    trigger: {
      bottom: '0',
      color: 'fg.muted',
      position: 'absolute',
      right: '2',
      top: '0',
    },
    label: {
      pb: '0.5',
    },
    content: {
      ...panel,
      p: '1',
      transformOrigin: 'var(--kb-combobox-content-transform-origin)',
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
    listbox: {
      outline: 'none',
    },
  },
});
