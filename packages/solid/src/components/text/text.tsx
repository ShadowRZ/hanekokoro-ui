import { styled, type HTMLStyledProps } from '@hanekokoro-ui/styled-system/jsx';
import { text, type TextVariantProps } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';

type TextElements = 'span' | 'div' | 'label' | 'p';

export type TextProps<T extends TextElements = 'p'> = PolymorphicProps<T, Assign<HTMLStyledProps<T>, TextVariantProps>>;
const Unwrapped = styled('p', text);

// Workaround that directly specify type in the const export above
// makes TypeScript too slow to emit types
export function Text<T extends TextElements = 'p'>(props: TextProps<T>) {
  // @ts-ignore
  return <Unwrapped {...props} />;
}
