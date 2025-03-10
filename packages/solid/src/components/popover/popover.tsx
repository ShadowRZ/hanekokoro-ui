import { type PopoverVariantProps, popover } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';
import * as Popover from '@kobalte/core/popover';
import type { ComponentProps, JSX } from 'solid-js';
import { createStyleContext } from '../../utils/create-style-context';
import type { WithClass } from '../../utils/types';

const { withRootProvider, withContext } = createStyleContext(popover);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider<Assign<Popover.PopoverRootOptions, PopoverVariantProps>>(
  (props: Popover.PopoverRootProps) => <Popover.Root gutter={8} {...props} />
);

export const Anchor: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Popover.PopoverAnchorProps<T>>>>
) => JSX.Element = withContext(Popover.Anchor, 'anchor');

export const Close: <T extends ElementType = 'button'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Popover.PopoverCloseButtonProps<T>>>>
) => JSX.Element = withContext(Popover.CloseButton, 'close');

export const Content: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Popover.PopoverContentProps<T>>>>
) => JSX.Element = withContext(Popover.Content, 'content');

export const Description: <T extends ElementType = 'p'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Popover.PopoverDescriptionProps<T>>>>
) => JSX.Element = withContext(Popover.Description, 'description');

export const Title: <T extends ElementType = 'h2'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Popover.PopoverTitleProps<T>>>>
) => JSX.Element = withContext(Popover.Title, 'title');

export const Trigger: <T extends ElementType = 'button'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Popover.PopoverTriggerProps<T>>>>
) => JSX.Element = withContext(Popover.Trigger, 'trigger');

export { Portal } from '@kobalte/core/popover';
