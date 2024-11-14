import type { ComponentProps } from 'solid-js';
import { styled } from '@shadowrz/hanekokoro-ui/styled-system/jsx';
import { type TextVariantProps, text } from '@shadowrz/hanekokoro-ui/styled-system/recipes';
import type { StyledComponent } from '@shadowrz/hanekokoro-ui/styled-system/types';

type ParagraphProps = TextVariantProps & { as?: JSX.ElementType };

export type TextProps = ComponentProps<typeof Text>;
export const Text = styled('p', text) as StyledComponent<'p', ParagraphProps>;
