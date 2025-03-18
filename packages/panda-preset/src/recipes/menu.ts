import { defineSlotRecipe } from '@pandacss/dev';
import { menuItem } from './menu-item';
import { panel } from './panel';

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
      ...panel.base,
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
    item: menuItem.base,
    subTrigger: menuItem.base,
  },
});
