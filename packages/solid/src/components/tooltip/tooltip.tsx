import { type TooltipVariantProps, tooltip } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';
import * as Tooltip from '@kobalte/core/tooltip';
import type { ComponentProps, JSX } from 'solid-js';
import { createStyleContext } from '../../utils/create-style-context';
import type { WithClass } from '../../utils/types';

const { withRootProvider, withContext } = createStyleContext(tooltip);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider<Assign<Tooltip.TooltipRootProps, TooltipVariantProps>>(
  (props: Tooltip.TooltipRootProps) => <Tooltip.Root gutter={8} {...props} />
);

export const Content: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Tooltip.TooltipContentProps<T>>>>
) => JSX.Element = withContext(Tooltip.Content, 'content');

export const Trigger: <T extends ElementType = 'button'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Tooltip.TooltipTriggerProps<T>>>>
) => JSX.Element = withContext(Tooltip.Trigger, 'trigger');

export { Portal } from '@kobalte/core/tooltip';
