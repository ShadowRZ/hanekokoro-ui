import { defineRecipe } from '@pandacss/dev';

export const group = defineRecipe({
  className: 'group',
  jsx: ['Group'],
  base: {
    display: 'inline-flex',
    gap: '2',
    isolation: 'isolate',
    position: 'relative',
  },
  variants: {
    orientation: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
    attached: {
      true: {
        gap: '0!',
      },
    },
    grow: {
      true: {
        display: 'flex',
        '& > *': {
          flex: 1,
        },
      },
    },
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      attached: true,
      css: {
        '& > *:first-child': {
          borderEndRadius: '0!',
          marginEnd: '-1px',
        },
        '& > *:not(:first-child):not(:last-child)': {
          borderRadius: '0!',
          marginEnd: '-1px',
        },
        '& > *:last-child': {
          borderStartRadius: '0!',
        },
      },
    },
    {
      orientation: 'vertical',
      attached: true,
      css: {
        '& > *:first-child': {
          borderBottomRadius: '0!',
          marginBottom: '-1px',
        },
        '& > *:not(:first-child):not(:last-child)': {
          borderRadius: '0!',
          marginBottom: '-1px',
        },
        '& > *:last-child': {
          borderTopRadius: '0!',
        },
      },
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
  },
});
