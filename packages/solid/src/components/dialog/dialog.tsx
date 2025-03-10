import { type DialogVariantProps, dialog } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';
import * as Dialog from '@kobalte/core/dialog';
import type { ComponentProps, JSX } from 'solid-js';
import { createStyleContext } from '../../utils/create-style-context';
import type { WithClass } from '../../utils/types';

const { withRootProvider, withContext } = createStyleContext(dialog);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider<Assign<Dialog.DialogRootProps, DialogVariantProps>>(Dialog.Root);

export const Overlay: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Dialog.DialogOverlayProps<T>>>>
) => JSX.Element = withContext(Dialog.Overlay, 'overlay');

export const Close: <T extends ElementType = 'button'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Dialog.DialogCloseButtonProps<T>>>>
) => JSX.Element = withContext(Dialog.CloseButton, 'close');

export const Content: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Dialog.DialogContentProps<T>>>>
) => JSX.Element = withContext(Dialog.Content, 'content');

export const Description: <T extends ElementType = 'p'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Dialog.DialogDescriptionProps<T>>>>
) => JSX.Element = withContext(Dialog.Description, 'description');

export const Positioner: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<HTMLStyledProps<T>>>
) => JSX.Element = withContext('div', 'positioner');

export const Title: <T extends ElementType = 'h2'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Dialog.DialogTitleProps<T>>>>
) => JSX.Element = withContext(Dialog.Title, 'title');

export const Trigger: <T extends ElementType = 'button'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, Dialog.DialogTriggerProps<T>>>>
) => JSX.Element = withContext(Dialog.Trigger, 'trigger');

export { Portal } from '@kobalte/core/dialog';
