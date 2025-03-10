import { type ProgressVariantProps, progress } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import * as Progress from '@kobalte/core/progress';
import { createStyleContext } from '../../utils/create-style-context';
import type { ComponentProps, JSX } from 'solid-js';
import type { WithClass } from '../../utils/types';
import type { PolymorphicProps } from '@kobalte/core';

const { withProvider, withContext } = createStyleContext(progress);

export type RootProps = ComponentProps<typeof Root>;
export const Root: <T extends ElementType = 'div'>(
  props: PolymorphicProps<
    T,
    WithClass<Assign<Assign<HTMLStyledProps<T>, Progress.ProgressRootProps<T>>, ProgressVariantProps>>
  >
) => JSX.Element = withProvider(Progress.Root, 'root');

export const Label: <T extends ElementType = 'span'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Progress.ProgressLabelProps<T>>>>
) => JSX.Element = withContext(Progress.Label, 'label');

export const Track: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Progress.ProgressTrackProps<T>>>>
) => JSX.Element = withContext(Progress.Track, 'track');

export const Fill: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Progress.ProgressFillProps<T>>>>
) => JSX.Element = withContext(Progress.Fill, 'fill');

export const ValueLabel: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Progress.ProgressValueLabelProps<T>>>>
) => JSX.Element = withContext(Progress.ValueLabel, 'valueLabel');
