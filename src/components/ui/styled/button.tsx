import { ark } from '@ark-ui/solid';
import type { ComponentProps } from 'solid-js';
import { styled, StyledComponent } from '@shadowrz/hanekokoro-ui/styled-system/jsx';
import { button, ButtonVariantProps } from '@shadowrz/hanekokoro-ui/styled-system/recipes';
import { asChild, type ComposableComponent } from './utils/as-child';

export type ButtonProps = ComponentProps<typeof Button>;
export const Button = asChild(styled(ark.button, button)) as ComposableComponent<
  'button',
  StyledComponent<typeof ark.button, ButtonVariantProps>
>;
