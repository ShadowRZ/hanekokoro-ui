import { type CheckboxVariantProps, checkbox } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';
import * as Checkbox from '@kobalte/core/checkbox';
import type { JSX } from 'solid-js';
import { createStyleContext } from '../../utils/create-style-context';
import type { WithClass } from '../../utils/types';

const { withProvider, withContext } = createStyleContext(checkbox);

type BaseRootProps<T extends ElementType> = Omit<Checkbox.CheckboxRootProps<T>, 'children'> & {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  children: Exclude<Checkbox.CheckboxRootProps<T>['children'], Function>;
};

export type RootProps<T extends ElementType = 'div'> = PolymorphicProps<
  T,
  WithClass<Assign<Assign<HTMLStyledProps<T>, BaseRootProps<T>>, CheckboxVariantProps>>
>;

export const Root: <T extends ElementType = 'div'>(props: RootProps<T>) => JSX.Element = withProvider(
  Checkbox.Root,
  'root'
);

type BaseRootContextProps<T extends ElementType> = Omit<Checkbox.CheckboxRootProps<T>, 'children'> & {
  children: Exclude<Checkbox.CheckboxRootProps<T>['children'], JSX.Element>;
};

export type RootContextProps<T extends ElementType = 'div'> = PolymorphicProps<
  T,
  WithClass<Assign<Assign<HTMLStyledProps<T>, BaseRootContextProps<T>>, CheckboxVariantProps>>
>;

export const RootContext: <T extends ElementType = 'div'>(props: RootContextProps<T>) => JSX.Element = Root;

export const Control: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Checkbox.CheckboxControlProps<T>>>>
) => JSX.Element = withContext(Checkbox.Control, 'control');

export const Indicator: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Checkbox.CheckboxIndicatorProps<T>>>>
) => JSX.Element = withContext(Checkbox.Indicator, 'indicator');

// TODO: Styled Variant
// export const Label: <T extends ElementType = 'label'>(
//   props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Checkbox.CheckboxLabelProps<T>>>>
// ) => JSX.Element = withContext(Checkbox.Label, 'label');

export { Input, Label } from '@kobalte/core/checkbox';
