import { styled, type HTMLStyledProps } from '@hanekokoro-ui/styled-system/jsx';
import { textarea, type TextareaVariantProps } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';

export type TextareaProps<T extends ElementType = 'textarea'> = PolymorphicProps<
  T,
  Assign<HTMLStyledProps<T>, TextareaVariantProps>
>;
const Unwrapped = styled('textarea', textarea);

// Workaround that directly specify type in the const export above
// makes TypeScript too slow to emit types
export function Textarea<T extends ElementType = 'textarea'>(props: TextareaProps<T>) {
  // @ts-expect-error: Hack.
  return <Unwrapped {...props} />;
}
