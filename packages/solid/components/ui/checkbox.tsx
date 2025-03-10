import { Show, children } from 'solid-js';
import { Checkbox as StyledCheckbox } from '@hanekokoro-ui/solid/checkbox';
import CheckBold from '~icons/ph/check-bold';
import MinusBold from '~icons/ph/minus-bold';

export type CheckboxProps = StyledCheckbox.RootProps;

export const Checkbox = (props: CheckboxProps) => {
  const getChildren = children(() => props.children);

  return (
    <StyledCheckbox.RootContext {...props}>
      {({ checked, indeterminate }) => {
        return (
          <>
            <StyledCheckbox.Input class='peer' />
            <StyledCheckbox.Control>
              <StyledCheckbox.Indicator>
                <Show when={indeterminate()} fallback={<CheckBold />}>
                  <Show when={checked()} fallback={<MinusBold />}>
                    <CheckBold />
                  </Show>
                </Show>
              </StyledCheckbox.Indicator>
            </StyledCheckbox.Control>

            <Show when={getChildren()}>
              <StyledCheckbox.Label>{getChildren()}</StyledCheckbox.Label>
            </Show>
          </>
        );
      }}
    </StyledCheckbox.RootContext>
  );
};
