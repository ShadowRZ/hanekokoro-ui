import { ark } from '@ark-ui/solid';
import type { ComponentProps } from 'solid-js';
import { styled } from '@shadowrz/hanekokoro-ui/styled-system/jsx';
import { input } from '@shadowrz/hanekokoro-ui/styled-system/recipes';

export type InputProps = ComponentProps<typeof Input>;
export const Input = styled(ark.input, input);
