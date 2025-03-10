import { card, type CardVariantProps } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';
import type { JSX } from 'solid-js';
import { createStyleContext } from '../../utils/create-style-context';
import type { WithClass } from '../../utils/types';

const { withProvider, withContext } = createStyleContext(card);

export type RootProps<T extends ElementType = 'div'> = PolymorphicProps<
  T,
  WithClass<Assign<HTMLStyledProps<T>, CardVariantProps>>
>;
export const Root: <T extends ElementType = 'div'>(props: RootProps<T>) => JSX.Element = withProvider('div', 'root');

export const Body: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<HTMLStyledProps<T>>>
) => JSX.Element = withContext('div', 'body');

export const Description: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<HTMLStyledProps<T>>>
) => JSX.Element = withContext('div', 'description');

export const Footer: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<HTMLStyledProps<T>>>
) => JSX.Element = withContext('div', 'footer');

export const Header: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<HTMLStyledProps<T>>>
) => JSX.Element = withContext('div', 'header');

export const Title: <T extends ElementType = 'h3'>(
  props: PolymorphicProps<T, WithClass<HTMLStyledProps<T>>>
) => JSX.Element = withContext('h3', 'title');
