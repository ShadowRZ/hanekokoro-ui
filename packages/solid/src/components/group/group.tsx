import { styled } from '@hanekokoro-ui/styled-system/jsx';
import { type GroupVariantProps, group } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';

export type GroupProps<T extends ElementType = 'span'> = PolymorphicProps<
  T,
  Assign<HTMLStyledProps<T>, GroupVariantProps>
>;
const Unwrapped = styled('div', group);

// Workaround that directly specify type in the const export above
// makes TypeScript too slow to emit types
export function Group<T extends ElementType = 'span'>(props: GroupProps<T>) {
  // @ts-expect-error: Hack.
  return <Unwrapped {...props} />;
}
