import type { ComponentProps, ValidComponent } from 'solid-js';
import { styled } from '@shadowrz/hanekokoro-ui/styled-system/jsx';
import { type GroupVariantProps, group } from '@shadowrz/hanekokoro-ui/styled-system/recipes';
import type { StyledComponent } from '@shadowrz/hanekokoro-ui/styled-system/types';

type BaseGroupProps = GroupVariantProps & { as?: ValidComponent };

export type GruopProps = ComponentProps<typeof Group>;
export const Group = styled('div', group) as StyledComponent<'div', BaseGroupProps>;
