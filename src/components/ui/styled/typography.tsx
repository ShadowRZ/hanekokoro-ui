import type { ComponentProps, ValidComponent } from 'solid-js';
import { styled } from '@shadowrz/hanekokoro-ui/styled-system/jsx';
import { type TypographyVariantProps, typography } from '@shadowrz/hanekokoro-ui/styled-system/recipes';
import type { StyledComponent } from '@shadowrz/hanekokoro-ui/styled-system/types';

type BaseTypographyProps = TypographyVariantProps & { as?: ValidComponent };

export type TypographyProps = ComponentProps<typeof Typography>;
export const Typography = styled('div', typography) as StyledComponent<'div', BaseTypographyProps>;
