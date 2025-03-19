import { defineSlotRecipe } from '@pandacss/dev';
import panel from './base/panel';

export const popover = defineSlotRecipe({
  className: 'popover',
  jsx: ['Popover', 'Popover.Root'],
  slots: ['content', 'title', 'anchor', 'trigger', 'description', 'close'],
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
