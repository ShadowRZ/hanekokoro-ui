import { styled } from '@hanekokoro-ui/styled-system/jsx';
import { button, type ButtonVariantProps } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';
import { type ButtonRootProps, Root } from '@kobalte/core/button';
import { wrapAs } from '../../utils/wrap-as';

export type IconButtonProps<T extends ElementType = 'button'> = PolymorphicProps<
  T,
  Assign<Assign<HTMLStyledProps<T>, ButtonRootProps<T>>, ButtonVariantProps>
>;

const Unwrapped = wrapAs(
  styled(Root, button, {
    defaultProps: { px: '0', py: '0' } as ButtonVariantProps,
  })
);

// Workaround that directly specify type in the const export above
// makes TypeScript too slow to emit types
export function IconButton<T extends ElementType = 'button'>(props: IconButtonProps<T>) {
  return <Unwrapped {...props} />;
}
