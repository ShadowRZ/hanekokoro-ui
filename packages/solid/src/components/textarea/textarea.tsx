import { ark, type Assign, type HTMLArkProps } from '@ark-ui/solid';
import type { ComponentProps } from 'solid-js';
import { styled, type StyledComponent } from '@hanekokoro-ui/styled-system/jsx';
import { textarea, type TextareaVariantProps } from '@hanekokoro-ui/styled-system/recipes';

export type TextareaProps = ComponentProps<typeof Textarea>;
export const Textarea = styled(ark.textarea, textarea) as StyledComponent<
  'textarea',
  Assign<HTMLArkProps<'textarea'>, TextareaVariantProps>
>;
