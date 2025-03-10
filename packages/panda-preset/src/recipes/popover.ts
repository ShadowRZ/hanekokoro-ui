import { defineSlotRecipe } from '@pandacss/dev';

export const popover = defineSlotRecipe({
  className: 'popover',
  jsx: ['Popover', 'Popover.Root'],
  slots: ['content', 'title', 'anchor', 'trigger', 'description', 'close'],
  base: {
    content: {
      background: 'bg.default',
      rounded: 'md',
      boxShadow: 'sm',
      border: '1px solid token(colors.border.default)',
      maxW: '80',
      p: '3',
      position: 'relative',
      outline: 'none',
      _expanded: {
        animation: 'popup-open',
      },
      _closed: {
        animation: 'popup-close',
      },
    },
  },
});
