import { defineSlotRecipe } from '@pandacss/dev';

export const hoverCard = defineSlotRecipe({
  className: 'hoverCard',
  jsx: ['HoverCard', 'HoverCard.Root'],
  slots: ['trigger', 'content'],
  base: {
    content: {
      background: 'bg.default',
      rounded: 'lg',
      boxShadow: 'sm',
      border: '1px solid token(colors.border.default)',
      maxW: '80',
      p: '2',
      position: 'relative',
      _expanded: {
        animation: 'popup-open',
      },
      _closed: {
        animation: 'popup-close',
      },
    },
  },
});
