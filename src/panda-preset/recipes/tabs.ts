import { tabsAnatomy } from '@ark-ui/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

export const tabs = defineSlotRecipe({
  className: 'tabs',
  slots: tabsAnatomy.keys(),
  base: {
    root: {
      colorPalette: 'accent',
      display: 'flex',
      width: 'full',
      _horizontal: {
        flexDirection: 'column',
      },
      _vertical: {
        flexDirection: 'row',
      },
    },
    list: {
      display: 'flex',
      flexShrink: '0',
      _horizontal: {
        flexDirection: 'row',
        boxShadow: '0 -1px 0 0 inset token(colors.transparent)',
      },
      _vertical: {
        flexDirection: 'column',
        boxShadow: '1px 0 0 0 inset token(colors.transparent)',
      },
      overflow: 'auto',
      position: 'relative',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    trigger: {
      alignItems: 'center',
      color: 'fg.muted',
      cursor: 'pointer',
      display: 'inline-flex',
      flexShrink: '0',
      fontWeight: 'semibold',
      gap: '2',
      justifyContent: 'center',
      transitionDuration: 'normal',
      transitionProperty: 'color, background, border-color',
      transitionTimingFunction: 'default',
      whiteSpace: 'nowrap',
      zIndex: '1',
      _disabled: {
        color: 'fg.disabled',
        cursor: 'not-allowed',
        _hover: {
          color: 'fg.disabled',
        },
      },
      _hover: {
        color: 'fg.muted',
      },
      _selected: {
        color: 'fg.default',
        _hover: {
          color: 'fg.default',
        },
      },
      _vertical: {
        justifyContent: 'flex-start',
      },
    },
    indicator: {
      background: 'colorPalette.default',
      _horizontal: {
        bottom: '0',
        height: '2px',
        width: 'var(--width)',
      },
      _vertical: {
        height: 'var(--height)',
        left: '0',
        width: '2px',
      },
    },
  },
});
