import { dialog, type DialogVariantProps } from '@hanekokoro-ui/styled-system/recipes';
import type { Assign, ElementType, HTMLStyledProps } from '@hanekokoro-ui/styled-system/types';
import type { PolymorphicProps } from '@kobalte/core';
import * as AlertDialog from '@kobalte/core/alert-dialog';
import { Root as ButtonRoot } from '@kobalte/core/button';
import {
  createContext,
  splitProps,
  useContext,
  type ComponentProps,
  type JSX,
  type Ref,
  type ValidComponent,
} from 'solid-js';
import { createStyleContext } from '../../utils/create-style-context';
import type { WithClass } from '../../utils/types';

const { withRootProvider, withContext } = createStyleContext(dialog);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider<Assign<AlertDialog.AlertDialogRootProps, DialogVariantProps>>(AlertDialog.Root);

export const Overlay: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, AlertDialog.AlertDialogOverlayProps<T>>>>
) => JSX.Element = withContext(AlertDialog.Overlay, 'overlay');

const ContextContext = createContext<{ ref?: Ref<HTMLElement> }>({ ref: undefined });

function WrappedContent<T extends ValidComponent = 'div'>(
  props: PolymorphicProps<T, AlertDialog.AlertDialogContentProps<T>>
) {
  let ref: HTMLElement;

  return (
    <ContextContext.Provider
      value={{
        ref: ($ref) => {
          ref = $ref;
        },
      }}
    >
      <AlertDialog.Content
        {...props}
        onOpenAutoFocus={(ev) => {
          ev.preventDefault();
          ref?.focus({ preventScroll: true });
        }}
        onPointerDownOutside={(ev) => {
          ev.preventDefault();
        }}
        onInteractOutside={(ev) => {
          ev.preventDefault();
        }}
      />
    </ContextContext.Provider>
  );
}

export const Content: <T extends ElementType = 'div'>(
  props: PolymorphicProps<
    T,
    WithClass<
      Assign<
        HTMLStyledProps<T>,
        Omit<AlertDialog.AlertDialogContentProps<T>, 'onPointerDownOutside' | 'onInteractOutside'>
      >
    >
  >
) => JSX.Element = withContext(WrappedContent, 'content');

function CancelButton<T extends ElementType = 'button'>(
  props: PolymorphicProps<T, AlertDialog.AlertDialogCloseButtonProps<T>>
) {
  const { ref } = useContext(ContextContext);
  const [local, rest] = splitProps(props, ['as', 'aria-label']);

  return (
    // @ts-expect-error: Don't care.
    <AlertDialog.CloseButton
      as={(props: AlertDialog.AlertDialogCloseButtonRenderProps) => {
        const [, inner] = splitProps(props, ['aria-label']);

        return (
          // @ts-expect-error: Don't care.
          <ButtonRoot {...inner} aria-label={undefined} {...local} />
        );
      }}
      {...rest}
      ref={ref}
    />
  );
}

function ActionButton<T extends ElementType = 'button'>(
  props: PolymorphicProps<T, AlertDialog.AlertDialogCloseButtonProps<T>>
) {
  const [local, rest] = splitProps(props, ['as', 'aria-label']);

  return (
    // @ts-expect-error: Don't care.
    <AlertDialog.CloseButton
      as={(props: AlertDialog.AlertDialogCloseButtonRenderProps) => {
        const [, inner] = splitProps(props, ['aria-label']);

        return (
          // @ts-expect-error: Don't care.
          <ButtonRoot {...inner} aria-label={undefined} {...local} />
        );
      }}
      {...rest}
    />
  );
}

export const Cancel: <T extends ElementType = 'button'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, AlertDialog.AlertDialogCloseButtonProps<T>>>>
) => JSX.Element = withContext(CancelButton, 'close');

export const Action: <T extends ElementType = 'button'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, AlertDialog.AlertDialogCloseButtonProps<T>>>>
) => JSX.Element = withContext(ActionButton, 'close');

export const Description: <T extends ElementType = 'p'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, AlertDialog.AlertDialogDescriptionProps<T>>>>
) => JSX.Element = withContext(AlertDialog.Description, 'description');

export const Positioner: <T extends ElementType = 'div'>(
  props: PolymorphicProps<T, WithClass<HTMLStyledProps<T>>>
) => JSX.Element = withContext('div', 'positioner');

export const Title: <T extends ElementType = 'h2'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, AlertDialog.AlertDialogTitleProps<T>>>>
) => JSX.Element = withContext(AlertDialog.Title, 'title');

export const Trigger: <T extends ElementType = 'button'>(
  props: PolymorphicProps<T, WithClass<Assign<HTMLStyledProps<T>, AlertDialog.AlertDialogTriggerProps<T>>>>
) => JSX.Element = withContext(AlertDialog.Trigger, 'trigger');

export { Portal } from '@kobalte/core/dialog';
