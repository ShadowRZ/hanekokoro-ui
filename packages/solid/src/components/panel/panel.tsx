import { styled } from '@hanekokoro-ui/styled-system/jsx';
import { panel, type PanelVariantProps } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';

export type PanelProps<T extends ElementType = 'div'> = PolymorphicProps<
  T,
  Assign<HTMLStyledProps<T>, PanelVariantProps>
>;

const Root = styled('div', panel);

// Workaround that directly specify type in the const export above
// makes TypeScript too slow to emit types
export function Panel<T extends ElementType = 'div'>(props: PanelProps<T>) {
  // @ts-ignore
  return <Root {...props} />;
}
