import { defineSlotRecipe } from '@pandacss/dev';

export const tooltip = defineSlotRecipe({
  className: 'tooltip',
  jsx: ['Tooltip', 'Tooltip.Root'],
  slots: ['trigger', 'content'],
  base: {
    content: {
      background: 'gray.a12',
      rounded: 'lg',
      boxShadow: 'sm',
      color: 'bg.default',
      p: '2',
      _expanded: {
        animation: 'popup-open',
      },
      _closed: {
        animation: 'popup-close',
      },
    },
  },
});
