import { type MenuVariantProps, menu } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';
import * as DropdownMenu from '@kobalte/core/dropdown-menu';
import type { ComponentProps, JSX } from 'solid-js';
import { createStyleContext } from '../../utils/create-style-context';
import type { WithClass } from '../../utils/types';

const { withRootProvider, withContext } = createStyleContext(menu);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider<Assign<DropdownMenu.DropdownMenuRootProps, MenuVariantProps>>(
  (props: DropdownMenu.DropdownMenuRootProps) => <DropdownMenu.Root gutter={8} {...props} />
);

export const CheckboxItem: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, DropdownMenu.DropdownMenuCheckboxItemProps<T>>>>
) => JSX.Element = withContext(DropdownMenu.CheckboxItem, 'item');

export const Content: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, DropdownMenu.DropdownMenuContentProps<T>>>>
) => JSX.Element = withContext(DropdownMenu.Content, 'content');

export const SubContent: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, DropdownMenu.DropdownMenuSubContentProps<T>>>>
) => JSX.Element = withContext(DropdownMenu.SubContent, 'content');

export const Icon: <T extends ElementType = 'span'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, DropdownMenu.DropdownMenuIconProps<T>>>>
) => JSX.Element = withContext(DropdownMenu.Icon, 'icon');

export const GroupLabel: <T extends ElementType = 'span'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, DropdownMenu.DropdownMenuGroupLabelProps<T>>>>
) => JSX.Element = withContext(DropdownMenu.GroupLabel, 'groupLabel');

export const Group: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, DropdownMenu.DropdownMenuGroupProps<T>>>>
) => JSX.Element = withContext(DropdownMenu.Group, 'group');

export const ItemIndicator: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, DropdownMenu.DropdownMenuItemIndicatorProps<T>>>>
) => JSX.Element = withContext(DropdownMenu.ItemIndicator, 'itemIndicator');

export const Item: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, DropdownMenu.DropdownMenuItemProps<T>>>>
) => JSX.Element = withContext(DropdownMenu.Item, 'item');

export const ItemLabel: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, DropdownMenu.DropdownMenuItemLabelProps<T>>>>
) => JSX.Element = withContext(DropdownMenu.ItemLabel, 'itemLabel');

export const RadioGroup: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, DropdownMenu.DropdownMenuRadioGroupProps<T>>>>
) => JSX.Element = withContext(DropdownMenu.RadioGroup, 'group');

export const RadioItem: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, DropdownMenu.DropdownMenuRadioItemProps<T>>>>
) => JSX.Element = withContext(DropdownMenu.RadioItem, 'item');

export const Separator: <T extends ElementType = 'hr'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, DropdownMenu.DropdownMenuSeparatorProps<T>>>>
) => JSX.Element = withContext(DropdownMenu.Separator, 'separator');

export const SubTrigger: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, DropdownMenu.DropdownMenuSubTriggerProps<T>>>>
) => JSX.Element = withContext(DropdownMenu.SubTrigger, 'subTrigger');

export const Trigger: <T extends ElementType = 'button'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, DropdownMenu.DropdownMenuTriggerProps<T>>>>
) => JSX.Element = withContext(DropdownMenu.Trigger, 'trigger');

export { Portal, Sub } from '@kobalte/core/dropdown-menu';
