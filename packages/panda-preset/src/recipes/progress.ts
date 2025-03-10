import { defineSlotRecipe } from '@pandacss/dev';

export const progress = defineSlotRecipe({
  className: 'progress',
  jsx: ['Progress', 'Progress.Root'],
  slots: ['root', 'label', 'valueLabel', 'track', 'fill'],
  base: {
    root: {
      alignItems: 'center',
      colorPalette: 'accent',
      display: 'flex',
      flexDirection: 'row',
      gap: '1.5',
      width: 'full',
    },
    label: {
      color: 'fg.default',
      fontWeight: 'medium',
      textStyle: 'sm',
    },
    track: {
      backgroundColor: 'bg.emphasized',
      borderRadius: 'md',
      overflow: 'hidden',
      width: '100%',
    },
    fill: {
      backgroundColor: 'colorPalette.default',
      height: '100%',
      transition: 'width 0.2s ease-in-out',
      width: 'var(--kb-progress-fill-width)',
    },
    valueLabel: {
      textStyle: 'sm',
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: {
        track: {
          height: '1.5',
        },
      },
      md: {
        track: {
          height: '2',
        },
      },
      lg: {
        track: {
          height: '2.5',
        },
      },
    },
  },
});
