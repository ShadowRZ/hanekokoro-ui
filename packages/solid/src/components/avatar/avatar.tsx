import { type AvatarVariantProps, avatar } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';
import * as Avatar from '@kobalte/core/image';
import type { JSX } from 'solid-js';
import { createStyleContext } from '../../utils/create-style-context';
import type { WithClass } from '../../utils/types';

const { withProvider, withContext } = createStyleContext(avatar);

export type RootProps<T extends ElementType = 'span'> = PolymorphicProps<
  T,
  WithClass<Assign<Assign<HTMLStyledProps<T>, Avatar.ImageRootProps<T>>, AvatarVariantProps>>
>;

export const Root: <T extends ElementType = 'span'>(props: RootProps<T>) => JSX.Element = withProvider(
  Avatar.Root,
  'root'
);

export const Fallback: <T extends ElementType = 'span'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Avatar.ImageFallbackProps<T>>>>
) => JSX.Element = withContext(Avatar.Fallback, 'fallback');

export const Image: <T extends ElementType = 'img'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Avatar.ImageImgProps<T>>>>
) => JSX.Element = withContext(Avatar.Img, 'image');
