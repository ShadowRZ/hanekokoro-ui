import { type ParentComponent, Show, children, splitProps } from 'solid-js';
import { Progress as StyledProgress } from '@hanekokoro-ui/solid';

export type ProgressProps = StyledProgress.RootProps;

export const Progress: ParentComponent<ProgressProps> = (props) => {
  const [localProps, rootProps] = splitProps(props, ['children', 'type']);
  const getChildren = children(() => localProps.children);

  return (
    <StyledProgress.Root {...rootProps}>
      <Show when={getChildren()}>
        <StyledProgress.Label>{getChildren()}</StyledProgress.Label>
      </Show>
      <StyledProgress.Track>
        <StyledProgress.Fill />
      </StyledProgress.Track>
      <StyledProgress.ValueLabel />
    </StyledProgress.Root>
  );
};
