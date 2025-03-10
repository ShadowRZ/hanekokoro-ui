import { type SelectVariantProps, select } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';
import * as Select from '@kobalte/core/select';
import type { JSX } from 'solid-js';
import { createStyleContext } from '../../utils/create-style-context';
import type { WithClass } from '../../utils/types';

const { withProvider, withContext } = createStyleContext(select);

export type RootProps<Option, OptGroup = never, T extends ElementType = 'div'> = WithClass<
  Assign<Assign<HTMLStyledProps<T>, Select.SelectRootProps<Option, OptGroup, T>>, SelectVariantProps>
> & { as?: T | keyof JSX.IntrinsicElements };

export const Root: <Option, OptGroup = never, T extends ElementType = 'div'>(
  props: RootProps<Option, OptGroup, T>
) => JSX.Element = withProvider(Select.Root, 'root');

export const Label: <T extends ElementType = 'label'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Select.SelectLabelProps<T>>>>
) => JSX.Element = withContext(Select.Label, 'label');

export const Trigger: <T extends ElementType = 'button'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Select.SelectTriggerProps<T>>>>
) => JSX.Element = withContext(Select.Trigger, 'trigger');

export const Content: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Select.SelectContentProps<T>>>>
) => JSX.Element = withContext(Select.Content, 'content');

export const Icon: <T extends ElementType = 'span'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Select.SelectIconProps<T>>>>
) => JSX.Element = withContext(Select.Icon, 'icon');

export const Item: <T extends ElementType = 'li'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Select.SelectItemProps<T>>>>
) => JSX.Element = withContext(Select.Item, 'item');

export const Value: <Option, T extends ElementType = 'span'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Select.SelectValueProps<Option, T>>>>
) => JSX.Element = withContext(Select.Value, 'value');

export const Section: <T extends ElementType = 'li'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Select.SelectSectionProps<T>>>>
) => JSX.Element = withContext(Select.Section, 'section');

export const ItemIndicator: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Select.SelectItemIndicatorProps<T>>>>
) => JSX.Element = withContext(Select.ItemIndicator, 'itemIndicator');

export const Listbox: <Option, OptGroup = never, T extends ElementType = 'ul'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Select.SelectListboxProps<Option, OptGroup, T>>>>
) => JSX.Element = withContext(Select.Listbox, 'listbox');

export { Portal, ItemLabel } from '@kobalte/core/select';
