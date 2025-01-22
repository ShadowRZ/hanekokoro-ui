import { ark, type Assign, type HTMLArkProps } from '@ark-ui/solid';
import type { ComponentProps } from 'solid-js';
import { styled, type StyledComponent } from '@hanekokoro-ui/styled-system/jsx';
import { button, type ButtonVariantProps } from '@hanekokoro-ui/styled-system/recipes';
import { asChild, type ComposableComponent } from '../../utils/as-child';

export type ButtonProps = ComponentProps<typeof Button>;
export const Button = asChild(styled(ark.button, button)) as ComposableComponent<
  'button',
  StyledComponent<'button', Assign<HTMLArkProps<'button'>, ButtonVariantProps>>
>;
