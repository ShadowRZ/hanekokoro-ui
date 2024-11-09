import { ark } from '@ark-ui/solid';
import { ComponentProps } from 'solid-js';
import { styled } from '@hanekokoro-ui/styled-system/jsx';
import { badge } from '@hanekokoro-ui/styled-system/recipes';
import { asChild } from './utils/as-child';

export type BadgeProps = ComponentProps<typeof Badge>;
export const Badge = asChild(styled(ark.span, badge));
