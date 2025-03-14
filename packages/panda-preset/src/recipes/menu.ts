import { defineSlotRecipe } from '@pandacss/dev';

const itemStyle = {
  colorPalette: 'neutral',
  userSelect: 'none',
  outline: 'none',
  rounded: 'md',
  padding: '2',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '2',
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
};

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
    'itemText',
    'trigger',
    'subTrigger',
  ],
  base: {
    groupLabel: {
      fontWeight: 'bold',
      textStyle: 'sm',
      margin: '1',
      marginBottom: '0',
      padding: '1',
    },
    content: {
      border: '1px solid token(colors.border.default)',
      rounded: 'lg',
      boxShadow: 'sm',

      bg: 'bg.default',
      color: 'inherit',
      overflow: 'hidden',
      padding: '1',

      outline: 'none',
      transformOrigin: 'var(--transform-origin)',
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
    item: itemStyle,
    subTrigger: itemStyle,
  },
});
