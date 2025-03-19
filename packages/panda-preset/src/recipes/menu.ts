import { defineSlotRecipe } from '@pandacss/dev';
import item from './base/menu-item';
import panel from './base/panel';

export const menu = defineSlotRecipe({
  className: 'menu',
  jsx: ['DropdownMenu', 'ContextMenu', 'DropdownMenu.Root', 'ContextMenu.Root'],
  slots: [
    'content',
    'item',
    'separator',
    'icon',
    'group',
    'groupLabel',
    'itemIndicator',
    'itemLabel',
    'trigger',
    'subTrigger',
  ],
  base: {
    groupLabel: {
      fontWeight: 'bold',
      textStyle: 'sm',
      margin: '1',
      marginBottom: '0',
    },
    content: {
      ...panel,
      p: '1',
      _expanded: {
        animation: 'popup-open',
      },
      _closed: {
        animation: 'popup-close',
      },
    },
    group: {
      display: 'flex',
      flexDirection: 'column',
    },
    separator: {
      borderTop: '1px solid token(colors.border.default)',
      height: '1px',
      mx: '2',
      my: '1',
    },
    itemIndicator: {
      ms: 'auto',
    },
    item,
    subTrigger: item,
  },
});
