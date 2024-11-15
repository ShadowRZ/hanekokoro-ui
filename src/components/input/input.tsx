import { ark, type Assign, type HTMLArkProps } from '@ark-ui/solid';
import type { ComponentProps } from 'solid-js';
import { styled, type StyledComponent } from '@shadowrz/hanekokoro-ui/styled-system/jsx';
import { input, type InputVariantProps } from '@shadowrz/hanekokoro-ui/styled-system/recipes';

export type InputProps = ComponentProps<typeof Input>;
export const Input = styled(ark.input, input) as StyledComponent<
  'input',
  Assign<HTMLArkProps<'button'>, InputVariantProps>
>;
