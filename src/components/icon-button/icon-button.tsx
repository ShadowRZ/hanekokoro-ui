import { ark, type Assign, type HTMLArkProps } from '@ark-ui/solid';
import type { ComponentProps } from 'solid-js';
import { styled, type StyledComponent } from '@shadowrz/hanekokoro-ui/styled-system/jsx';
import { type ButtonVariantProps, button } from '@shadowrz/hanekokoro-ui/styled-system/recipes';
import { asChild, type ComposableComponent } from '../../utils/as-child';

export type IconButtonProps = ComponentProps<typeof IconButton>;
export const IconButton = asChild(
  styled(ark.button, button, {
    defaultProps: { px: '0', py: '0' } as ButtonVariantProps,
  })
) as ComposableComponent<'button', StyledComponent<'button', Assign<HTMLArkProps<'button'>, ButtonVariantProps>>>;
