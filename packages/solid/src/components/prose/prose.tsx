import { styled, type HTMLStyledProps } from '@hanekokoro-ui/styled-system/jsx';
import { prose, type ProseVariantProps } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';

export type ProseProps<T extends ElementType = 'div'> = PolymorphicProps<
  T,
  Assign<HTMLStyledProps<T>, ProseVariantProps>
>;
const Unwrapped = styled('div', prose);

// Workaround that directly specify type in the const export above
// makes TypeScript too slow to emit types
export function Prose<T extends ElementType = 'div'>(props: ProseProps<T>) {
  // @ts-expect-error: Hack.
  return <Unwrapped {...props} />;
}
