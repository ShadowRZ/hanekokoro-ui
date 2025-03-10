import { type HoverCardVariantProps, hoverCard } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';
import * as HoverCard from '@kobalte/core/hover-card';
import type { ComponentProps, JSX } from 'solid-js';
import { createStyleContext } from '../../utils/create-style-context';
import type { WithClass } from '../../utils/types';

const { withRootProvider, withContext } = createStyleContext(hoverCard);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider<Assign<HoverCard.HoverCardRootProps, HoverCardVariantProps>>(
  (props: HoverCard.HoverCardRootProps) => <HoverCard.Root gutter={8} {...props} />
);

export const Content: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, HoverCard.HoverCardContentProps<T>>>>
) => JSX.Element = withContext(HoverCard.Content, 'content');

export const Trigger: <T extends ElementType = 'a'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, HoverCard.HoverCardTriggerProps<T>>>>
) => JSX.Element = withContext(HoverCard.Trigger, 'trigger');

export { Portal } from '@kobalte/core/hover-card';
