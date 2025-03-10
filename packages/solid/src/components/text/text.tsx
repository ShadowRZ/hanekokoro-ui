import { styled, type HTMLStyledProps } from '@hanekokoro-ui/styled-system/jsx';
import { text, type TextVariantProps } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';

export type TextProps<T extends ElementType = 'p'> = PolymorphicProps<T, Assign<HTMLStyledProps<T>, TextVariantProps>>;
const Unwrapped = styled('p', text);

// Workaround that directly specify type in the const export above
// makes TypeScript too slow to emit types
export function Text<T extends ElementType = 'p'>(props: TextProps<T>) {
  // @ts-expect-error: Hack.
  return <Unwrapped {...props} />;
}
