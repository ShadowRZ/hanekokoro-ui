import { styled } from '@hanekokoro-ui/styled-system/jsx';
import { menuItem, type MenuItemVariantProps } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';

export type MenuItemProps<T extends ElementType = 'button'> = PolymorphicProps<
  T,
  Assign<HTMLStyledProps<T>, MenuItemVariantProps>
>;

const Root = styled('button', menuItem);

// Workaround that directly specify type in the const export above
// makes TypeScript too slow to emit types
export function MenuItem<T extends ElementType = 'button'>(props: MenuItemProps<T>) {
  // @ts-ignore
  return <Root {...props} />;
}
