import { type MenuVariantProps, menu } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';
import * as ContextMenu from '@kobalte/core/context-menu';
import type { ComponentProps, JSX } from 'solid-js';
import { createStyleContext } from '../../utils/create-style-context';
import type { WithClass } from '../../utils/types';

const { withRootProvider, withContext } = createStyleContext(menu);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider<Assign<ContextMenu.ContextMenuRootProps, MenuVariantProps>>(
  (props: ContextMenu.ContextMenuRootProps) => <ContextMenu.Root gutter={8} {...props} />
);

export const CheckboxItem: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, ContextMenu.ContextMenuCheckboxItemProps<T>>>>
) => JSX.Element = withContext(ContextMenu.CheckboxItem, 'item');

export const Content: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, ContextMenu.ContextMenuContentProps<T>>>>
) => JSX.Element = withContext(ContextMenu.Content, 'content');

export const SubContent: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, ContextMenu.ContextMenuSubContentProps<T>>>>
) => JSX.Element = withContext(ContextMenu.SubContent, 'content');

export const Icon: <T extends ElementType = 'span'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, ContextMenu.ContextMenuIconProps<T>>>>
) => JSX.Element = withContext(ContextMenu.Icon, 'icon');

export const GroupLabel: <T extends ElementType = 'span'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, ContextMenu.ContextMenuGroupLabelProps<T>>>>
) => JSX.Element = withContext(ContextMenu.GroupLabel, 'groupLabel');

export const Group: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, ContextMenu.ContextMenuGroupProps<T>>>>
) => JSX.Element = withContext(ContextMenu.Group, 'group');

export const ItemIndicator: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, ContextMenu.ContextMenuItemIndicatorProps<T>>>>
) => JSX.Element = withContext(ContextMenu.ItemIndicator, 'itemIndicator');

export const Item: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, ContextMenu.ContextMenuItemProps<T>>>>
) => JSX.Element = withContext(ContextMenu.Item, 'item');

export const ItemLabel: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, ContextMenu.ContextMenuItemLabelProps<T>>>>
) => JSX.Element = withContext(ContextMenu.ItemLabel, 'itemText');

export const RadioGroup: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, ContextMenu.ContextMenuRadioGroupProps<T>>>>
) => JSX.Element = withContext(ContextMenu.RadioGroup, 'group');

export const RadioItem: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, ContextMenu.ContextMenuRadioItemProps<T>>>>
) => JSX.Element = withContext(ContextMenu.RadioItem, 'item');

export const Separator: <T extends ElementType = 'hr'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, ContextMenu.ContextMenuSeparatorProps<T>>>>
) => JSX.Element = withContext(ContextMenu.Separator, 'separator');

export const SubTrigger: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, ContextMenu.ContextMenuSubTriggerProps<T>>>>
) => JSX.Element = withContext(ContextMenu.SubTrigger, 'subTrigger');

export const Trigger: <T extends ElementType = 'button'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, ContextMenu.ContextMenuTriggerProps<T>>>>
) => JSX.Element = withContext(ContextMenu.Trigger, 'trigger');

export { Portal, Sub } from '@kobalte/core/dropdown-menu';
