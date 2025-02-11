import * as Avatar from '@kobalte/core/image';
import type { ComponentProps } from 'solid-js';
import { type AvatarVariantProps, avatar } from '@hanekokoro-ui/styled-system/recipes';
import type { HTMLStyledProps, Assign } from '@hanekokoro-ui/styled-system/types';
import { createStyleContext } from '../../utils/create-style-context';
import type { PolymorphicProps } from '@kobalte/core/polymorphic';

const { withProvider, withContext } = createStyleContext(avatar);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'span'>, PolymorphicProps<'span', Avatar.ImageRootOptions>>, AvatarVariantProps>
>(Avatar.Root, 'root');

export const Fallback = withContext<
  Assign<HTMLStyledProps<'span'>, PolymorphicProps<'span', Avatar.ImageFallbackOptions>>
>(Avatar.Fallback, 'fallback');

export const Image = withContext<Assign<HTMLStyledProps<'img'>, PolymorphicProps<'img', Avatar.ImageImgOptions>>>(
  Avatar.Img,
  'image'
);
