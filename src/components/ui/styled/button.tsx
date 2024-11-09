import { ark } from '@ark-ui/solid';
import type { ComponentProps } from 'solid-js';
import { styled } from '@shadowrz/hanekokoro-ui/styled-system/jsx';
import { button } from '@shadowrz/hanekokoro-ui/styled-system/recipes';
import { asChild } from './utils/as-child';

export type ButtonProps = ComponentProps<typeof Button>;
export const Button = asChild(styled(ark.button, button));
