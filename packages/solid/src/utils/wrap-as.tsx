/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Show, splitProps, type Component } from 'solid-js';

type StyledCompType = Component<{ as?: any }>;

type WrapAsProps = { as?: any };

export const wrapAs = (StyledComp: StyledCompType) => {
  return (props: WrapAsProps) => {
    const [asProps, restProps] = splitProps(props, ['as']);

    return (
      <Show when={asProps.as} fallback={<StyledComp {...props} />}>
        {/* @ts-expect-error: __base__ in internal to Styled impl */}
        <StyledComp as={(innerProps) => <StyledComp.__base__ as={asProps.as} {...innerProps} />} {...restProps} />
      </Show>
    );
  };
};
