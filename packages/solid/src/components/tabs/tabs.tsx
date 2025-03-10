import { type TabsVariantProps, tabs } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';
import * as Tabs from '@kobalte/core/tabs';
import type { ComponentProps, JSX } from 'solid-js';
import { createStyleContext } from '../../utils/create-style-context';
import type { WithClass } from '../../utils/types';

const { withProvider, withContext } = createStyleContext(tabs);

export type RootProps = ComponentProps<typeof Root>;
export const Root: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<Assign<HTMLStyledProps<T>, Tabs.TabsRootProps<T>>, TabsVariantProps>>>
) => JSX.Element = withProvider(Tabs.Root, 'root');

export const Content: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Tabs.TabsContentProps<T>>>>
) => JSX.Element = withContext(Tabs.Content, 'content');

export const Indicator: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Tabs.TabsIndicatorProps<T>>>>
) => JSX.Element = withContext(Tabs.Indicator, 'indicator');

export const List: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Tabs.TabsListProps<T>>>>
) => JSX.Element = withContext(Tabs.List, 'list');

export const Trigger: <T extends ElementType = 'button'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Tabs.TabsTriggerProps<T>>>>
) => JSX.Element = withContext(Tabs.Trigger, 'trigger');
