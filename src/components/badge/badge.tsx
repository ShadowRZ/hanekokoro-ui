import { ark, type Assign, type HTMLArkProps } from '@ark-ui/solid';
import type { ComponentProps } from 'solid-js';
import { styled, type StyledComponent } from '@shadowrz/hanekokoro-ui/styled-system/jsx';
import { badge, type BadgeVariantProps } from '@shadowrz/hanekokoro-ui/styled-system/recipes';
import { asChild, type ComposableComponent } from '../../utils/as-child';

export type BadgeProps = ComponentProps<typeof Badge>;
export const Badge = asChild(styled(ark.span, badge)) as ComposableComponent<
  'span',
  StyledComponent<'span', Assign<HTMLArkProps<'span'>, BadgeVariantProps>>
>;
