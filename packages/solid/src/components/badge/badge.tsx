import { styled, type HTMLStyledProps } from '@hanekokoro-ui/styled-system/jsx';
import { badge, type BadgeVariantProps } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';

export type BadgeProps<T extends ElementType = 'span'> = PolymorphicProps<
  T,
  Assign<HTMLStyledProps<T>, BadgeVariantProps>
>;
const Unwrapped = styled('span', badge);

// Workaround that directly specify type in the const export above
// makes TypeScript too slow to emit types
export function Badge<T extends ElementType = 'span'>(props: BadgeProps<T>) {
  // @ts-ignore
  return <Unwrapped {...props} />;
}
