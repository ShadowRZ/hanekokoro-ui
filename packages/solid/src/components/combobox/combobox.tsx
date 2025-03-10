import { type ComboboxVariantProps, combobox } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';
import * as Combobox from '@kobalte/core/combobox';
import type { JSX } from 'solid-js';
import { createStyleContext } from '../../utils/create-style-context';
import type { WithClass } from '../../utils/types';

const { withProvider, withContext } = createStyleContext(combobox);

export type RootProps<Option, OptGroup = never, T extends ElementType = 'div'> = WithClass<
  Assign<Assign<HTMLStyledProps<T>, Combobox.ComboboxRootProps<Option, OptGroup, T>>, ComboboxVariantProps>
> & { as?: T | keyof JSX.IntrinsicElements };

export const Root: <Option, OptGroup = never, T extends ElementType = 'div'>(
  props: RootProps<Option, OptGroup, T>
) => JSX.Element = withProvider(Combobox.Root, 'root');

export const Label: <T extends ElementType = 'label'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Combobox.ComboboxLabelProps<T>>>>
) => JSX.Element = withContext(Combobox.Label, 'label');

export const Control: <Option, T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Combobox.ComboboxControlProps<Option, T>>>>
) => JSX.Element = withContext(Combobox.Control, 'control');

export const Input: <T extends ElementType = 'input'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Combobox.ComboboxInputProps<T>>>>
) => JSX.Element = withContext(Combobox.Input, 'input');

export const Trigger: <T extends ElementType = 'button'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Combobox.ComboboxTriggerProps<T>>>>
) => JSX.Element = withContext(Combobox.Trigger, 'trigger');

export const Content: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Combobox.ComboboxContentProps<T>>>>
) => JSX.Element = withContext(Combobox.Content, 'content');

export const Icon: <T extends ElementType = 'span'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Combobox.ComboboxIconProps<T>>>>
) => JSX.Element = withContext(Combobox.Icon, 'icon');

export const Item: <T extends ElementType = 'li'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Combobox.ComboboxItemProps<T>>>>
) => JSX.Element = withContext(Combobox.Item, 'item');

export const ItemIndicator: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Combobox.ComboboxItemIndicatorProps<T>>>>
) => JSX.Element = withContext(Combobox.ItemIndicator, 'itemIndicator');

export const Listbox: <Option, OptGroup = never, T extends ElementType = 'ul'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Combobox.ComboboxListboxProps<Option, OptGroup, T>>>>
) => JSX.Element = withContext(Combobox.Listbox, 'listbox');

export { Portal, ItemLabel } from '@kobalte/core/combobox';
