import { defineSlotRecipe } from '@pandacss/dev';
import panel from './base/panel';

export const hoverCard = defineSlotRecipe({
  className: 'hoverCard',
  jsx: ['HoverCard', 'HoverCard.Root'],
  slots: ['trigger', 'content'],
  base: {
    content: {
      ...panel,
      _expanded: {
        animation: 'popup-open',
      },
      _closed: {
        animation: 'popup-close',
      },
    },
  },
});
