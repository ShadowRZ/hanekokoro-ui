import { styled } from '@hanekokoro-ui/styled-system/jsx';
import { input, type InputVariantProps } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';

export type InputProps<T extends ElementType = 'input'> = PolymorphicProps<
  T,
  Assign<HTMLStyledProps<T>, InputVariantProps>
>;

const Root = styled('input', input);

// Workaround that directly specify type in the const export above
// makes TypeScript too slow to emit types
export function Input<T extends ElementType = 'input'>(props: InputProps<T>) {
  // @ts-expect-error: Hack.
  return <Root {...props} />;
}
