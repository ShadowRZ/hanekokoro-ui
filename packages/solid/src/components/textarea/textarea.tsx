import { styled, type HTMLStyledProps } from '@hanekokoro-ui/styled-system/jsx';
import { input, type InputVariantProps } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';

export type TextareaProps<T extends ElementType = 'textarea'> = PolymorphicProps<
  T,
  Assign<HTMLStyledProps<T>, InputVariantProps>
>;
const Unwrapped = styled('textarea', input);

// Workaround that directly specify type in the const export above
// makes TypeScript too slow to emit types
export function Textarea<T extends ElementType = 'textarea'>(props: TextareaProps<T>) {
  // @ts-expect-error: Hack.
  return <Unwrapped {...props} />;
}
