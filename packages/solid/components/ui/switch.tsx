import { Show, children } from 'solid-js';
import { Switch as StyledSwitch } from '@hanekokoro-ui/solid';

export type SwitchProps = StyledSwitch.RootProps;

export const Switch = (props: SwitchProps) => {
  const getChildren = children(() => props.children);

  return (
    <StyledSwitch.Root {...props}>
      <StyledSwitch.HiddenInput class='peer' />
      <StyledSwitch.Control>
        <StyledSwitch.Thumb />
      </StyledSwitch.Control>
      <Show when={getChildren()}>
        <StyledSwitch.Label>{getChildren()}</StyledSwitch.Label>
      </Show>
    </StyledSwitch.Root>
  );
};
