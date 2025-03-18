import { styled, type HTMLStyledProps } from '@hanekokoro-ui/styled-system/jsx';
import { text, type TextVariantProps } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';

type HeadingElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingProps<T extends HeadingElements = 'h1'> = PolymorphicProps<
  T,
  Assign<HTMLStyledProps<T>, TextVariantProps>
>;
const Unwrapped = styled('h1', text);

// Workaround that directly specify type in the const export above
// makes TypeScript too slow to emit types
export function Heading<T extends HeadingElements = 'h1'>(props: HeadingProps<T>) {
  // @ts-ignore
  return <Unwrapped fontWeight='bold' {...props} />;
}
