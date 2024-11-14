import { ark } from '@ark-ui/solid';
import { ComponentProps } from 'solid-js';
import { styled, StyledComponent } from '@shadowrz/hanekokoro-ui/styled-system/jsx';
import { badge, BadgeVariantProps } from '@shadowrz/hanekokoro-ui/styled-system/recipes';
import { asChild, ComposableComponent } from './utils/as-child';

export type BadgeProps = ComponentProps<typeof Badge>;
export const Badge = asChild(styled(ark.span, badge)) as ComposableComponent<
  'span',
  StyledComponent<typeof ark.span, BadgeVariantProps>
>;
