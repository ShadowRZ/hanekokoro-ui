import { type Assign, Combobox } from '@ark-ui/solid';
import type { ComponentProps } from 'solid-js';
import { type ComboboxVariantProps, combobox } from '@shadowrz/hanekokoro-ui/styled-system/recipes';
import type { HTMLStyledProps } from '@shadowrz/hanekokoro-ui/styled-system/types';
import { createStyleContext } from '../../utils/create-style-context';
import { asChild } from '../../utils/as-child';

const { withProvider, withContext } = createStyleContext(combobox);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Combobox.RootProviderBaseProps<Combobox.CollectionItem>>, ComboboxVariantProps>
>(Combobox.RootProvider, 'root');

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Combobox.RootBaseProps<Combobox.CollectionItem>>, ComboboxVariantProps>
>(Combobox.Root, 'root');

export const ClearTrigger = asChild(
  withContext<Assign<HTMLStyledProps<'button'>, Combobox.ClearTriggerBaseProps>>(Combobox.ClearTrigger, 'clearTrigger')
);

export const Content = withContext<Assign<HTMLStyledProps<'div'>, Combobox.ContentBaseProps>>(
  Combobox.Content,
  'content'
);

export const Control = withContext<Assign<HTMLStyledProps<'div'>, Combobox.ControlBaseProps>>(
  Combobox.Control,
  'control'
);

export const Input = asChild(
  withContext<Assign<HTMLStyledProps<'input'>, Combobox.InputBaseProps>>(Combobox.Input, 'input')
);

export const ItemGroupLabel = withContext<Assign<HTMLStyledProps<'div'>, Combobox.ItemGroupLabelBaseProps>>(
  Combobox.ItemGroupLabel,
  'itemGroupLabel'
);

export const ItemGroup = withContext<Assign<HTMLStyledProps<'div'>, Combobox.ItemGroupBaseProps>>(
  Combobox.ItemGroup,
  'itemGroup'
);

export const ItemIndicator = withContext<Assign<HTMLStyledProps<'div'>, Combobox.ItemIndicatorBaseProps>>(
  Combobox.ItemIndicator,
  'itemIndicator'
);

export const Item = withContext<Assign<HTMLStyledProps<'div'>, Combobox.ItemBaseProps>>(Combobox.Item, 'item');

export const ItemText = withContext<Assign<HTMLStyledProps<'span'>, Combobox.ItemTextBaseProps>>(
  Combobox.ItemText,
  'itemText'
);

export const Label = withContext<Assign<HTMLStyledProps<'label'>, Combobox.LabelBaseProps>>(Combobox.Label, 'label');

export const List = withContext<Assign<HTMLStyledProps<'div'>, Combobox.ListBaseProps>>(Combobox.List, 'list');

export const Positioner = withContext<Assign<HTMLStyledProps<'div'>, Combobox.PositionerBaseProps>>(
  Combobox.Positioner,
  'positioner'
);

export const Trigger = asChild(
  withContext<Assign<HTMLStyledProps<'button'>, Combobox.TriggerBaseProps>>(Combobox.Trigger, 'trigger')
);

export { ComboboxContext as Context } from '@ark-ui/solid';

export type {
  ComboboxHighlightChangeDetails as HighlightChangeDetails,
  ComboboxInputValueChangeDetails as InputValueChangeDetails,
  ComboboxOpenChangeDetails as OpenChangeDetails,
  ComboboxValueChangeDetails as ValueChangeDetails,
} from '@ark-ui/solid';
