import { type SwitchRecipeVariantProps, switchRecipe } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';
import * as Switch from '@kobalte/core/switch';
import type { JSX } from 'solid-js';
import { createStyleContext } from '../../utils/create-style-context';
import type { WithClass } from '../../utils/types';

const { withProvider, withContext } = createStyleContext(switchRecipe);

type BaseRootProps<T extends ElementType> = Omit<Switch.SwitchRootProps<T>, 'children'> & {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  children: Exclude<Switch.SwitchRootProps<T>['children'], Function>;
};

export type RootProps<T extends ElementType = 'div'> = PolymorphicProps<
  T,
  WithClass<Assign<Assign<HTMLStyledProps<T>, BaseRootProps<T>>, SwitchRecipeVariantProps>>
>;

export const Root: <T extends ElementType = 'div'>(props: RootProps<T>) => JSX.Element = withProvider(
  Switch.Root,
  'root'
);

type BaseRootContextProps<T extends ElementType> = Omit<Switch.SwitchRootProps<T>, 'children'> & {
  children: Exclude<Switch.SwitchRootProps<T>['children'], JSX.Element>;
};

export type RootContextProps<T extends ElementType = 'div'> = PolymorphicProps<
  T,
  WithClass<Assign<Assign<HTMLStyledProps<T>, BaseRootContextProps<T>>, SwitchRecipeVariantProps>>
>;

export const RootContext: <T extends ElementType = 'div'>(props: RootContextProps<T>) => JSX.Element = Root;

export const Control: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Switch.SwitchControlProps<T>>>>
) => JSX.Element = withContext(Switch.Control, 'control');

export const Label: <T extends ElementType = 'label'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Switch.SwitchControlProps<T>>>>
) => JSX.Element = withContext(Switch.Label, 'label');

export const Thumb: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Switch.SwitchControlProps<T>>>>
) => JSX.Element = withContext(Switch.Thumb, 'thumb');

export { Input } from '@kobalte/core/switch';
