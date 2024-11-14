import { ark } from '@ark-ui/solid';
import type { ComponentProps } from 'solid-js';
import { styled, StyledComponent } from '@shadowrz/hanekokoro-ui/styled-system/jsx';
import { textarea, TextareaVariantProps } from '@shadowrz/hanekokoro-ui/styled-system/recipes';

export type TextareaProps = ComponentProps<typeof Textarea>;
export const Textarea = styled(ark.textarea, textarea) as StyledComponent<typeof ark.textarea, TextareaVariantProps>;
