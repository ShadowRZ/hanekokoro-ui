import { type RadioGroupVariantProps, radioGroup } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';
import * as RadioGroup from '@kobalte/core/radio-group';
import type { ComponentProps, JSX } from 'solid-js';
import { createStyleContext } from '../../utils/create-style-context';
import type { WithClass } from '../../utils/types';

const { withProvider, withContext } = createStyleContext(radioGroup);

export type RootProps = ComponentProps<typeof Root>;
export const Root: <T extends ElementType = 'div'>(
  props: PolymorphicProps<
    T,
    WithClass<Assign<Assign<HTMLStyledProps<T>, RadioGroup.RadioGroupRootProps<T>>, RadioGroupVariantProps>>
  >
) => JSX.Element = withProvider(RadioGroup.Root, 'root');

export const ItemIndicator: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, RadioGroup.RadioGroupItemIndicatorProps<T>>>>
) => JSX.Element = withContext(RadioGroup.ItemIndicator, 'itemIndicator');

export const ItemControl: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, RadioGroup.RadioGroupItemControlProps<T>>>>
) => JSX.Element = withContext(RadioGroup.ItemControl, 'itemControl');

export const Item: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, RadioGroup.RadioGroupItemProps<T>>>>
) => JSX.Element = withContext(RadioGroup.Item, 'item');

export const ItemLabel: <T extends ElementType = 'label'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, RadioGroup.RadioGroupItemLabelProps<T>>>>
) => JSX.Element = withContext(RadioGroup.ItemLabel, 'itemLabel');

export const Label: <T extends ElementType = 'span'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, RadioGroup.RadioGroupItemLabelProps<T>>>>
) => JSX.Element = withContext(RadioGroup.Label, 'label');

export { ItemInput } from '@kobalte/core/radio-group';
