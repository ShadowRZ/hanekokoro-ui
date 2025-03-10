import { defineSlotRecipe } from '@pandacss/dev';

export const tabs = defineSlotRecipe({
  className: 'tabs',
  slots: ['root', 'list', 'trigger', 'content', 'indicator'],
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
      position: 'absolute',
      transition: 'all',
      background: 'colorPalette.default',
      _horizontal: {
        bottom: '-1px',
        height: '0.5',
      },
      _vertical: {
        left: '-1px',
        width: '0.5',
      },
    },
  },
});
